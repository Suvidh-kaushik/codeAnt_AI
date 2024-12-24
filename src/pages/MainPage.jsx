import React from 'react'
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
import KeyDownButton from '../components/KeyDownButton'
import RepositoryTemplate from '../components/RepositoryTemplate'

const MainPage = () => {
  return (
    <div className='grid grid-cols-[17%_83%] h-screen w-full bg-whiteRight'>
      <div className='bg-whiteLeft flex flex-col justify-between items-center border border-borderBetween h-screen'>
        <div className='flex flex-col justify-center items-center mt-6 gap-2 w-full'>
          <div className='flex flex-col justify-center items-center w-full gap-2'>
            <div className='flex justify-center items-center gap-3'>
              <img src={LogoSmall} className='w-[28px] h-[32px] mb-3' alt="Logo image"/>
              <span className='text-textSigninColor font-satoshi font-normal text-2xl'>CodeAnt AI</span>
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
      <div className='bg-whiteRight flex justify-center items-center w-full h-full'>
      <div className='bg-whiteLeft border border-borderHorizontalBetween flex flex-col items-center justify-center  w-full m-6 rounded-lg mt-10'>
       <div className='flex flex-row items-center justify-between w-full my-4'>

        <div className='flex flex-col justify-center items-start ml-5 gap-2'>
          <div className='flex flex-col justify-center items-start'>
            <div className='font-inter font-semibold text-repoColor text-[20px]'>Repositories</div>
            <div className='font-inter text-repoTailerColor font-normal text-xs leading-5'>33 total repositories</div>
          </div>
          <div>
            <button className='flex flex-row justify-start items-center border-2 rounded-lg border-searchButtonBorder py-1 px-6 gap-2'>
               <img src={search} className='h-[18px] w-[18px] top-[3px]'></img>
               <div className='text-repoTailerColor font-inter font-normal text-sm leading-5'>Search Repositories</div>
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
