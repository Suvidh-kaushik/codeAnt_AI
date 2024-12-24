import React from 'react'

const Oauth_Button = ({imgUrl,text}) => {
  
    return (
    <div class="border border-buttonBorder hover:border-button1 hover:border-2 w-[380px] p-3 rounded-lg text-buttonTextColor dark:bg-slate-300 font-inter font-medium flex flex-row justify-center items-center space-x-2"><img src={imgUrl}></img><button class="">{text}</button></div>
  )
}

export default Oauth_Button
