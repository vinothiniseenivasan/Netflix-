import React from 'react';
import lang from '../Utils/languageConstant';

const GptSearchBar = () => {
    // form    1.input     2.search btn
  return (
    <div className='flex justify-center relative z-14 '>
        <form  className="w-1/2  pt-[10%] ">



      <div className='bg-blue-500 grid grid-cols-12'>
          {/* input */}
          <input
               type="text"
               placeholder={lang.hindi.gptSearchBarPlaceHolder} 
               className='p-4 m-4 col-span-10'/>

            {/* search btn */}
            <button
                className='px-4 py-2 rounded-lg text-white bg-red-700 col-span-2 m-4'>
                {lang.hindi.search}
            </button>

      </div>
            



        </form>
      
    </div>
  )
}

export default GptSearchBar;