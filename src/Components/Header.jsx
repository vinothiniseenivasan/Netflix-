import React, { useState } from 'react';

import { Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Header.css";
import {  signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { IND_FLAG_IMG, Netflix_DROPDOWN, NETFLIX_LOGOURL, SPAN_FLAG_IMG, US_FLAG_IMG } from '../Utils/constant';
import { toggleGptSearchView } from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/langSlice';
import { removeGptMovieResults } from '../Utils/gptSlice';
import { toggleMovieTrailer } from '../Utils/movieTrailerSlice';




const Header = () =>{


    const [lang , setLang] = useState("English");
    const [img , setImg] = useState(US_FLAG_IMG);

    const showTrailer = useSelector((store) => store.movieTrailer.showMovieTrailer);

    // to activate home page
    // const [home ,setHome] = useState(true);


    const showLangSelection = useSelector((store) => store.gpt.showGptSearch);


   
    // console.log("showLangSelection" ,showLangSelection)



   
    // console.log("showLangSelection" ,showLangSelection)
    
    function handleLang(nation)
    {
        // dispatch(changeLanguage(lang));
        setLang(nation);
      
        if(nation === "Hindi")
        {
            setImg(IND_FLAG_IMG);
        }
        if(nation === "Spanish")
            {
                // console.log("spanish")
                setImg(SPAN_FLAG_IMG);
            }
            if(nation === "English")
                {
                    // console.log("spanish")
                    setImg(US_FLAG_IMG);
                }
                dispatch(changeLanguage(nation));
    }

    // dispatch an action on onAuthChanged
    const dispatch = useDispatch();

    // Get the information from redux store by using useSelector
    const userInformation = useSelector((store)=> store.user);
    // console.log("userInformation" ,userInformation)

  const navigate = useNavigate();

  
   function handleGptSearchComponent()
   { 
    // when click to search gpt function toggle gptSearchComponent



    // add in reducer
      dispatch(toggleGptSearchView());

      if(showTrailer)
      {
        dispatch(toggleMovieTrailer());
      }

      

     
    //  setHome(showTrailer);


   }
   

   function checkGptMovies()
   {
   if( showLangSelection === true)
   {
    // homepage

    dispatch(removeGptMovieResults())
   }
   }
  
    function handleSignOut()
    {

       signOut(auth).then(() => {
        // Sign-out successful.
        // navigate to login page
        // navigate("/");
      }).catch((error) => {

        navigate("/error")
        // An error happened.
    });
    }



    // onAuthChanged in header page for to store in redux store and navigate to browse page and navigate to login page
    useEffect(()=>{

        // whenever signed in or signed out user we store information in redux store in root of our project hear app.js or body.js by use onAuthStateChanged prperty
      

        const unsubscribe =    onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties and sign up
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid , displayName , email, photoURL} = user;
             //  addUser dispatch an action
              dispatch(addUser(
                 {
                     uid : uid ,
                     displayName : displayName,
                     email :email ,
                     photoURL :photoURL

                 }
             ))
             //  sign in success so navigate to browse page
             navigate("/browse");
            } 
            else {
              // User is signed out 
             //  removeUSer

              dispatch(removeUser());
             //  signout navigate to login page
             navigate("/");
           
            }
           });

         //   for component unMount  its unsubscribe from browser
         return () =>  unsubscribe();

       
       

    // eslint-disable-next-line react-hooks/exhaustive-deps
     
       } , [showTrailer])
    
    


    return(
       <div className="z-[17] md:absolute relative  w-screen    flex justify-between items-center p-3 mr-7  bg-gradient-to-b from-blue-50     flex-col md:flex-row  mx-auto md:mx-0" >   
          {/* netflix logo img */}
          {/* flex-col md:flex-row"  small device : flex-col  md: device flex row */}

          {/* bg-gradient-to-b from-blue-50 */}
        <img 
        className="w-[15rem]"
        src={NETFLIX_LOGOURL} alt="Headerimg" />

      
          {
            // if user is present show logo
          (userInformation && (
        
        <div className="flex items-center mr-12 ">
            {/* user account image $&&  signout btn */}
            {/* when we click this component show GptSearchComponenet */}


            {/* dropdown box for language selection */}
             {/* Dropdown */}

             {
                (showLangSelection) &&
                <Dropdown className='mr-6'>
                {/* <Dropdown.Toggle variant="secondary" id="dropdown-basic" className=" flex items-center w-full"> */}
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="dropdown-toggle flex items-center " bsPrefix="custom-dropdown-toggle">
                
                <div className='flex items-center'>
                       <img
                      //  url of  dropdown head img => its contain languages 
                       src={img}
                       className="w-7 h-7 cursor-pointer"
                       alt="user-account" />
                        <span className='ml-2'
                        onClick={()=>{
                           handleLang(lang)
                          
                        }}>{lang}</span>
                       <span className="ml-2">▼</span>
                 </div>

             
              
                </Dropdown.Toggle>

                <Dropdown.Menu className='p-3 m-2 bg-black  rounded'>
                    <span className='flex items-center'>
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/446/446163.png"
                            alt="kid-img"
                            className="w-5 h-5 mr-2  rounded-lg bg-slate-50 hover:bg-red-500"
                            onClick={()=>{handleLang("Hindi")
                                
                            }}
                        />
                        <Dropdown.Item
                            href="#"
                            className='dropdown-item'
                            >
                            Hindi
                        </Dropdown.Item>
                    </span>

                    <span className='flex items-center mt-1'>
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/446/446163.png"
                            className='  bg-slate-50 hover:bg-red-500 w-5 h-5 rounded-lg mr-2'
                            alt='man-img'
                            onClick={()=>{ handleLang("English")
                              

                            }  }
                            
                        />
                        <Dropdown.Item
                            href="#"
                            className='dropdown-item'>
                            English
                        </Dropdown.Item>
                    </span>

                    <span className='flex items-center mt-1'>
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/446/446163.png"
                            className='rounded-lg  bg-slate-50 hover:bg-red-500 w-5 h-5 mr-2'
                            alt='man-img'
                            onClick={()=>{
                                handleLang("Spanish")
                               
                            }}
                        />
                        <Dropdown.Item
                            href="#"
                            className='text-white hover:bg-red-600'>
                            Spanish
                        </Dropdown.Item>
                    </span>
                 

                    

                </Dropdown.Menu>
            </Dropdown>
       
             }
            
            

                 
                  
                    

            {/* Search Gpt button */}
              <button 
              className='bg-lime-700 text-white rounded-md px-4 py-2 mr-5 hover:bg-orange-600'
              onClick = {()=>{
                handleGptSearchComponent();  
                 checkGptMovies();
              }}>

         
                  {  (  showLangSelection) ? "HomePage" : "Gpt Search"}
         
               

                
                </button>  



               
                {/* Dropdown */}
                <Dropdown >
                    {/* <Dropdown.Toggle variant="secondary" id="dropdown-basic" className=" flex items-center w-full"> */}
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="dropdown-toggle flex items-center " bsPrefix="custom-dropdown-toggle">
                    
                    <div className='flex items-center'>
                           <img
                          //  url of  dropdown head img => its contain manage user and tranfer account and  sign out from netflix
      
                           src={Netflix_DROPDOWN}
                           className="w-7 h-7 cursor-pointer"
                           alt="user-account" />
      
                           <span className="ml-2">▼</span>
                     </div>

                 
                  
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='p-3 m-2 bg-black'>
                        <span className='flex items-center'>
                            <img
                                src="https://occ-0-8003-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABebkcO417lVuILWpoX8Pu7U4OsmXF-KtFL-xTG8OS5OSwMWnOhHaRDsFyDvWgUv45-O-fRUMd1Ay-FH99lt2XfeGUx9MSQ0.png?r=f55"
                                alt="kid-img"
                                className="w-5 h-5 mr-2  bg-white"
                            />
                            <Dropdown.Item
                                href="#"
                                className='dropdown-item'>
                                Kids
                            </Dropdown.Item>
                        </span>

                        <span className='flex items-center mt-1'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3917/3917058.png"
                                className=' bg-white w-5 h-5 rounded mr-2'
                                alt='man-img'
                            />
                            <Dropdown.Item
                                href="#"
                                className='dropdown-item'>
                                Manage Profile
                            </Dropdown.Item>
                        </span>

                        <span className='flex items-center mt-1'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3917/3917058.png"
                                className=' bg-white w-5 h-5 rounded mr-2'
                                alt='man-img'
                            />
                            <Dropdown.Item
                                href="#"
                                className='text-white hover:bg-red-600'>
                                Manage Profile
                            </Dropdown.Item>
                        </span>
                        <span className='flex items-center'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/5069/5069162.png"
                                alt="img"
                                className=' bg-white w-5 h-5 rounded mr-2'
                            />
                            <Dropdown.Item
                                href="#"
                                className='text-white hover:bg-red-600'>
                                Transfer Profile
                            </Dropdown.Item>
                        </span>

                        <span className='flex items-center'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/3917/3917711.png"
                                alt="img"
                                className=' bg-white w-5 h-5 rounded mr-2'
                            />
                            <Dropdown.Item
                                href="#"
                                className='text-white hover:bg-red-600'>
                                Account
                            </Dropdown.Item>
                        </span>

                        <span className='flex items-center'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/5068/5068703.png"
                                alt="img"
                                className=' bg-white w-5 h-5 rounded mr-2'
                            />
                            <Dropdown.Item
                                href="#"
                                className='text-white hover:bg-red-600'>
                                Help Center
                            </Dropdown.Item>
                        </span>

                        <Dropdown.Divider className='bg-white w-full' />
                        {/* when user sign out its should go to login page in order to sign up or sign in */}

                        <Dropdown.Item className="text-white"
                        onClick={handleSignOut}
                        >Sign Out Of Netflix</Dropdown.Item>

                        

                    </Dropdown.Menu>
                </Dropdown>


                


        </div>
        ))}
        
       
        


       </div>)
  
   
    
}


export default  Header;


 //    className="   w-[15rem] px-8 py-2 bg-gradient-to-b from-black m-6 bg-white  "