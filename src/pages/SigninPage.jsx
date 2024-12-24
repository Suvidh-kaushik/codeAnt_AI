import React, { useState } from 'react'
import Image1 from "../assets/Group 37111.png"
import SideLogoImg from"../assets/Subtract.png"
import LogoSmall from "../assets/logo.png"
import gitlabLogo from "../assets/gitlabLogo.png"
import github from "../assets/githubLogo.png"
import azure from "../assets/azureDevopsLogo.png"
import bitbucket from "../assets/bitbucketLogo.png"
import key from "../assets/key.png"

import Oauth_Button from '../components/Oauth_Button'
import { useNavigate } from 'react-router-dom'



const SigninPage = () => {

   const[selected,setselected]=useState(true); //taking SAAS as selected true
   const[dark,setdark]=useState(false);// intially no dark mode

    
   const nav=useNavigate();

   const handleClick=()=>{
    setselected(!selected);
   }

   const toggledark=()=>{
    setdark(!dark);
    if (!dark) {
      document.documentElement.classList.add('dark'); // Enable dark mode
    } else {
      document.documentElement.classList.remove('dark'); // Disable dark mode
    }
   }

   const handleNavigation=()=>{
    nav("/home");
   }

  return (
    <div className='grid lg:grid-cols-2 w-full h-screen bg-whiteRight dark:bg-slate-800 relatvie'>
      <div className='absolute top-2 right-5 flex justify-center items-center gap-4'>
      <div>
        <button onClick={handleNavigation}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 dark:text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
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
      <div className='hidden lg:flex items-center justify-center relative bg-whiteLeft dark:bg-slate-950 border border-borderBetween dark:border-slate-950'>
       <img src={Image1} alt="first"  style={{ width: '450px', height: '320px' }}/>
       <img src={SideLogoImg} alt="second" style={{ width: '200px', height: '219px' }} className='absolute left-0 bottom-0 mt-2 opacity-50'/>
      </div>
      <div className='flex flex-col items-center justify-center bg-whiteRight dark:bg-slate-800 mt-6'>
        <div className='flex flex-col justify-center items-center bg-whiteLeft dark:bg-slate-800 w-[440px] lg:w-[550px] p-4  lg:pt-[20px] lg:px-[10px] border rounded-lg border-borderHorizontalBetween dark:border-gray-400'>
         <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-row items-center justify-center gap-[10px] w-[244px]'>
                <div><img src={dark?SideLogoImg:LogoSmall} alt="logo" style={{ width: '20px', height: '25px' }} className='text-white'/></div>
                <span className='font-satoshi leading-[33px] text-xl font-normal dark:text-whiteRight'>CodeAnt AI</span>
            </div>
            <div className='flex items-center pb-8 justify-center w-[360px] h-[100px] font-inter  text-xl font-semibold text-textSigninColor dark:text-whiteRight'>Welcome to CodeAnt AI</div>
         </div>
         <div className="flex flex-row justify-center w-full pb-6 bg-whiteLeft dark:bg-slate-800">
              {selected?<button className="p-4 flex items-center justify-center w-1/2 bg-button1 hover:border-2 hover:border-slate-400  rounded-lg font-inter font-semibold text-whiteLeft" onClick={handleClick}>SAAS</button>:<button className="p-4 flex items-center justify-center w-1/2 rounded-lg border border-borderBetween hover:border-button1 hover:border-2 font-inter font-semibold text-textColorSignin bg-whiteRight" onClick={handleClick}>SAAS</button>}
              {selected?<button className="p-4 flex items-center justify-center w-1/2 rounded-lg border border-borderBetween hover:border-button1 hover:border-2 font-inter font-semibold text-textColorSignin  bg-whiteRight" onClick={handleClick}>Self Hosted</button>:<button className="p-4 flex items-center justify-center w-1/2 bg-button1 hover:border-2 hover:border-slate-400  rounded-lg font-inter font-semibold text-whiteLeft" onClick={handleClick} >Self Hosted</button>}
        </div>
        </div>
        {selected?
        <div class="flex flex-col jusity-center items-center w-[440px] lg:w-[550px] gap-[10px] lg:gap-[16px] border border-borderBetween dark:border-gray-400 bg-whiteLeft dark:bg-slate-800 rounded-lg p-5">
         <Oauth_Button text={"Sign in with Github"} imgUrl={github}/>
         <Oauth_Button text={"Sign in with Bitbucket"} imgUrl={bitbucket}/>
         <Oauth_Button text={"Sign in with Azure Devops"} imgUrl={azure}/>
         <Oauth_Button text={"Sign in with GitLab"} imgUrl={gitlabLogo}/>
        </div>:
        <div class="flex flex-col jusity-center items-center w-[440px] lg:w-[550px] mb-5 gap-[10px] lg:gap-[16px] border border-borderBetween dark:border-gray-400 bg-whiteLeft dark:bg-slate-800 p-5 rounded-lg">
        <Oauth_Button text={"Self Hosted GitLab"} imgUrl={gitlabLogo}/>
        <Oauth_Button text={"Sign in with SSO"} imgUrl={key}/>
       </div>
        }
        <div className='mt-3 font-inter font-normal text-sm dark:text-whiteRight'>
        By signing up you agree to the <span className='font-bold'>Privacy Policy</span>.
        </div>
      </div>
    </div>
  )
}

export default SigninPage
