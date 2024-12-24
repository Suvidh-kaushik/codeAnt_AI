import React from 'react'
import dot from "../assets/Ellipse 1.png"
import database from "../assets/database.png"


const RepositoryTemplate = ({name,mode,language,numOfdb,updated}) => {


  return (
     <div className='flex flex-col items-start jusitfy-center w-full border-t-[1px] gap-2 hover:bg-onFocusColor border-searchButtonBorder p-[15px]'>
              <div className='flex flex-row justify-start items-center gap-2'>
                <div className='text-repoColor font-inter font-medium text-base'>
                {name}
                </div>
                <div className='bg-publicPvtButtonColor border-x-publicPvtButtonBorder border-1 px-2 py-1 font-inter font-normal rounded-xl text-publicPvtButtonText text-xs'>{mode}</div>
              </div>
              <div className='flex flex-row justify-start items-start gap-10'>
                <div className='text-repoColor font-inter font-normal text-[15px] flex justify-center items-center gap-2'><div>{language}</div> <img src={dot} className='w-[8px] h-[8px]'/></div>
                <div className='flex justify-center items-center gap-2 font-inter text-sm font-normal text-repoColor'><img src={database}/> {numOfdb} KB </div>
                <div className=' font-inter text-sm font-normal text-repoColor'>Updated {updated} days ago</div>
              </div>
    </div>
  )
}

export default RepositoryTemplate
