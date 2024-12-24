import React, { useState } from 'react'
import LogoSmall from "../assets/logo.png"
import home from "../assets/home.png"
import book from "../assets/book.png"
import gear from "../assets/gear.png"
import cloud from "../assets/cloud.png"
import code from "../assets/code.png"
import phone from "../assets/phone.png"
import signout from "../assets/sign-out.png"
import search from "../assets/Frame 10.png"
import refresh from "../assets/refresh.png"
import plus from "../assets/plus.png"
import SideLogoImg from"../assets/Subtract.png"
import KeyDownButton from '../components/KeyDownButton'
import RepositoryTemplate from '../components/RepositoryTemplate'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {

  const[dark,setdark]=useState(false);// intially no dark mode

    
  const nav=useNavigate();

  const toggledark=()=>{
   setdark(!dark);
   if (!dark) {
     document.documentElement.classList.add('dark'); // Enable dark mode
   } else {
     document.documentElement.classList.remove('dark'); // Disable dark mode
   }
  }

  const handleNavigation=()=>{
   nav("/");
  }

  return (
    <div className='grid grid-cols-[17%_83%] h-screen w-full bg-whiteRight focus:dark:bg-neutral-800'>
       <div className='absolute top-2 right-5 flex justify-center items-center gap-4'>
      <div>
        <button onClick={handleNavigation}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 dark:text-white">
         <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
        </svg>
        </button>
      </div>
      {!dark?<button onClick={toggledark}> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
      </svg>
      </button>:
      <button onClick={toggledark}> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
       </svg>
      </button>
      }
      </div>
      <div className='bg-whiteLeft dark:bg-slate-800 flex flex-col justify-between items-center border border-borderBetween h-screen'>
        <div className='flex flex-col justify-center items-center mt-6 gap-2 w-full'>
          <div className='flex flex-col justify-center items-center w-full gap-2'>
            <div className='flex justify-center items-center gap-3'>
              <img src={dark?SideLogoImg:LogoSmall} className='w-[28px] h-[32px] mb-3' alt="Logo image"/>
              <span className='text-textSigninColor dark:text-whiteLeft font-satoshi font-normal text-2xl'>CodeAnt AI</span>
            </div>
            {/* <div></div>    DROP DOWN */}
            <div>
             <button type="button" class="w-[180px] inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
             SuvidhKaushi..
              <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </button>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center mt-2'>
            <div>
              <KeyDownButton data={[{label:'Repositories',imgUrl:home},{label:'AI Code Review',imgUrl:code},{label:'Cloud Security',imgUrl:cloud},{label:'How to Use',imgUrl:book},{label:'Settings',imgUrl:gear}]}/>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center mb-4 gap-2'>
            <div>
            <button className='bg-whiteLeft focus:bg-button1 focus:border-2 w-[180px] focus:border-whiteLeft rounded-lg px-[10px] py-[5px] text-md font-semibold text-textColorSignin focus:text-whiteLeft flex justify-start items-center gap-3'>
             <img src={phone}></img>
              Support
             </button>
            </div>
            <div>
            <button className='bg-whiteLeft focus:bg-button1 focus:border-2 w-[180px] focus:border-whiteLeft rounded-lg px-[10px] py-[5px] text-md font-semibold text-textColorSignin focus:text-whiteLeft flex justify-start items-center gap-3'>
             <img src={signout}></img>
              Logout
             </button>
            </div>
         </div>
      </div>
      <div className='bg-whiteRight dark:bg-slate-900 flex justify-center items-center w-full h-full'>
      <div className='bg-whiteLeft dark:bg-slate-900 border border-borderHorizontalBetween flex flex-col items-center justify-center  w-full m-6 rounded-lg mt-10'>
       <div className='flex flex-row items-center justify-between w-full my-4'>

        <div className='flex flex-col justify-center items-start ml-5 gap-2'>
          <div className='flex flex-col justify-center items-start'>
            <div className='font-inter font-semibold text-repoColor dark:text-whiteLeft text-[20px]'>Repositories</div>
            <div className='font-inter text-repoTailerColor dark:text-whiteLeft font-normal text-xs leading-5'>33 total repositories</div>
          </div>
          <div>
            <button className='flex flex-row justify-start items-center border-2 rounded-lg border-searchButtonBorder py-1 px-6 gap-2'>
               <img src={search} className='h-[18px] w-[18px] top-[3px]'></img>
               <div className='text-repoTailerColor dark:text-whiteLeft font-inter font-normal text-sm leading-5'>Search Repositories</div>
            </button>
          </div>
        </div>

        <div className='flex flex-row justify-center items-center mr-5 mb-8 gap-2'>
          <button className='bg-whiteLeft border-[1.5px] border-searchButtonBorder px-[10px] py-[5px] rounded-md flex flex-row justify-start items-center gap-2'>
            <img src={refresh} className='h-[15px] w-[15px] top-[3px]'></img>
            <div className='font-inter text-sm font-normal text-repoTailerColor'>Refresh All</div>
          </button>
          <button className='bg-button1 border-[1.5px] border-searchButtonBorder px-[10px] py-[5px] rounded-md flex flex-row justify-start items-center gap-2'>
            <img src={plus} className='h-[15px] w-[15px] top-[3px]'></img>
            <div className='font-inter text-sm font-normal text-whiteLeft'>Add Repository</div>
          </button>
        </div>
       </div>
      <div className='w-full'>
       <RepositoryTemplate name={"design-system"} mode={"Public"} language={"React"} numOfdb={"7320"} updated={"1"}/>
       <RepositoryTemplate name={"code-ant-ci-app"} mode={"Private"} language={"JavaScript"} numOfdb={"5871"} updated={"3"}/>
       <RepositoryTemplate name={"analytics-dashboard"} mode={"Private"} language={"Python"} numOfdb={"4851"} updated={"5"}/>
       <RepositoryTemplate name={"mobile-app"} mode={"Public"} language={"Swift"} numOfdb={"4096"} updated={"3"}/>
       <RepositoryTemplate name={"ecomerce-platform"} mode={"Public"} language={"React"} numOfdb={"7320"} updated={"1"}/>
       <RepositoryTemplate name={"blog-website"} mode={"Private"} language={"HTML/CSS"} numOfdb={"1876"} updated={"4"}/>
       <RepositoryTemplate name={"social-network"} mode={"Private"} language={"PHP"} numOfdb={"5432"} updated={"7"}/>
       <RepositoryTemplate name={"design-system"} mode={"Public"} language={"React"} numOfdb={"7320"} updated={"1"}/>
       <RepositoryTemplate name={"design-system"} mode={"Public"} language={"React"} numOfdb={"7320"} updated={"1"}/>
       </div>
      </div>
      </div>
    </div>
  )
}

export default MainPage
