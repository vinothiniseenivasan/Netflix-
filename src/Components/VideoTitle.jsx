import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-36  bg-white text-black p-20'>
     
          {/* {title and overview} */}
         <h1 className='text-7xl font-bold text-red-600 leading-[2] tracking-wide'>
            {title}
         </h1>
         <p className='w-1/4 text-xl ml-2'>
            {overview}
         </p>

         {/* button play and moreInfo */}

         {/* play button */}
         <div className='flex justify-start items-center mt-6'>
         <button className='cursor-pointer border border-black rounded-md bg-white text-black px-3 py-2 flex items-center justify-center'>

             <span>
                <img 
                src="https://cdn-icons-png.flaticon.com/128/626/626053.png"
                 alt="play-img" 
                 className='w-5 h-5'/>
            </span>
            <span className='text-xl font-bold ml-4 opacity-80 tracking-wide'>
            Play
            </span>
           
           
         </button>
        {/* moreinfo */}
        <button className=' ml-5 cursor-pointer border border-black rounded-md bg-gray-500 text-white px-3 py-2 flex items-center justify-center'>

             <span>
                <img 
                src="https://cdn-icons-png.flaticon.com/128/5393/5393011.png"
                 alt="moreinfo-img" 
                 className='w-5 h-5 bg-white rounded-lg'/>
            </span>
            <span className='text-xl font-bold ml-4 opacity-80 tracking-wide'>
              More Info
            </span>
           
           
         </button>

         </div>

  </div>
       
  )
}

export default VideoTitle