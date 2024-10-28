import React, { useRef } from 'react';
import lang from '../Utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import OpenAI from 'openai';
import { OPEN_AI_KEY } from '../Utils/constant';
import { options } from '../Utils/constant';
import { addGptMovieResults, addGptMovieSuggestions } from '../Utils/gptSlice';
// import GptMovieRecommendation from './GptMovieRecommendation';



const GptSearchBar = () => {
    // form    1.input     2.search btn

    const inputValue = useRef(null);

    const dispatch = useDispatch();





   // search movie tmdb
   async function makeTmdbApiCall(movieName)
    {
     const cleanedStr = cleanedMovieName(movieName);
      // console.log(oneMovie)
     
     const oneMovie = cleanedStr.replace(/[0-9.\s]/g, '').trim();
      // console.log("oneMovie" ,oneMovie)
      // its a promise value
    const data = await  fetch(`https://api.themoviedb.org/3/search/movie?query=${oneMovie}&include_adult=false&language=en-US&page=1`, options);
      
    //  console.log("fetch api" ,`https://api.themoviedb.org/3/search/movie?query=${oneMovie}&include_adult=false&language=en-US&page=1`);

    const json = await data.json();

    return json.results;

   
    }


   
    function cleanedMovieName(movieName)
    {
      let repMovieName = movieName.replace(/[0-9]/g, '').trim();
      let cleanedStr = repMovieName.replace(/[.\s]/g, ''); // Removes dots and spaces
       return cleanedStr;
    }
    
    
    // api call function to gpt
    async function handleSearchButton(){
        const client = new OpenAI({
        apiKey:OPEN_AI_KEY, // This is the default and can be omitted
        dangerouslyAllowBrowser : true
      });

      //which type of movies you want describe here
         const query = `I want 6 ${inputValue.current.value} movies :` + inputValue.current.value + "which is seprated bt comma like : chandramuki , dimandi colony , dhoom , mahadera , araanmanai 4"
     
        const gptResults = await client.chat.completions.create({
          messages: [{ role: 'user', content: query }],
          model: 'gpt-3.5-turbo',
        });

        if(!gptResults)
        {
          // make an error page
          
        }

        // console.log("gptResults" , gptResults?.choices[0]?.message?.content);
           //  arrayOfMovies => (Raaz, Bhool Bhulaiyaa, Pari, Stree, 1920")
         const arrayOfMovies = gptResults?.choices[0]?.message?.content.split("\n");

         const moviesWithoutString = arrayOfMovies.map(eachMovie => eachMovie.split('. ', 2)[1]);


          //  add in reducer  arrayOfMovies => (Raaz, Bhool Bhulaiyaa, Pari, Stree, 1920")
          dispatch(addGptMovieSuggestions(moviesWithoutString));
         console.log("moviesWithoutString" ,gptResults?.choices[0]?.message?.content);


 
        const promiseArray = arrayOfMovies.map((eachMovie)=> makeTmdbApiCall(eachMovie));

       
      

      
      //  results has promise array how to get data from promise arr =>[promise ,promise,promise]
      // HOW TO GET DATA FROM PROMISE ARRAY => promise.all

       const getTmdbResults = await Promise.all(promiseArray);


    
         console.log("results from tmdb" ,getTmdbResults);

      // add to reducer array of array movies
      dispatch(addGptMovieResults(getTmdbResults));

    }

    const selectedLang = useSelector((Store) =>Store.lang.default);

    // console.log("selectedLang" ,lang[selectedLang])
  return (
    <div className='flex flex-col w-auto  md:w-full  pt-[30%] md:pt-0 '>
         <div className='flex justify-center relative z-18  '>
                <form  className=" w-full md:w-1/2 pt-[10%]" onSubmit={(e) =>{e.preventDefault()}}>

                      <div className='bg-black grid grid-cols-12 mt-36 w-full'>
                                {/* input */}
                      
                                {/* depends upon languages we selected  we can get input  */}
                                <input
                                      ref={inputValue}
                                      type="text"
                                      placeholder={lang[selectedLang].gptSearchBarPlaceHolder}
                                      className="p-4 m-4  col-span-7 md:col-span-9 "/>
                      
                                  {/* search btn */}
                                  <button
                                  onClick ={()=> handleSearchButton()}
                                      className='px-4 py-2 w-[1/3] rounded-lg text-white bg-red-800 col-span-5 md:col-span-3 m-4 hover:bg-green-600'>
                                       {lang[selectedLang].search} 
                                  </button>
                      </div>

                </form>
        
      
         </div>
          {/* <GptMovieRecommendation className="bg-black "/> */}
    </div>
   
  )
}

export default GptSearchBar;