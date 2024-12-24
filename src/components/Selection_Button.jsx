import React from 'react'

const Selection_Button = ({text,setselected,selected}) => {

   const handleClick=()=>{
    setselected(!selected)
   }

  return (
    <div>
  {selected?<button className="p-4 flex items-center justify-center w-1/2 bg-button1 rounded-lg font-inter font-semibold text-whiteLeft" onClick={handleClick}>{text}</button>
    :  
    <button className="p-4 flex items-center justify-center w-1/2 rounded-lg border border-borderBetween font-inter font-semibold text-textColorSignin  bg-whiteRight" onClick={handleClick}>{text}</button>
    }
    </div>
  )
}

export default Selection_Button
