import React from 'react';
import lang from '../Utils/languageConstant';
import { useSelector } from 'react-redux';


const GptSearchBar = () => {
    // form    1.input     2.search btn

    const selectedLang = useSelector((Store) =>Store.lang.default);

    // console.log("selectedLang" ,lang[selectedLang])
  return (
    <div className='flex justify-center relative z-18 '>
        <form  className="w-1/2  pt-[10%] ">



      <div className='bg-black grid grid-cols-12 mt-36'>
          {/* input */}
          <input
               type="text"
                placeholder={lang[selectedLang].gptSearchBarPlaceHolder}
              //  placeholder = "how"
               className='p-4 m-4 col-span-9'/>

            {/* search btn */}
            <button
                className='px-4 py-2 rounded-lg text-white bg-red-600 col-span-3 m-4'>
                 {lang[selectedLang].search} 
            </button>

      </div>
            



        </form>
      
    </div>
  )
}

export default GptSearchBar;