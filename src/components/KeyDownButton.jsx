import { useEffect, useRef } from 'react';

export default function KeyDownButton({data}) {
  const buttonsRef = useRef([]);

  useEffect(() => {
    if (buttonsRef.current.length > 0) {
      buttonsRef.current[0].focus();
    }
  }, []);


  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowDown' && buttonsRef.current[index + 1]) {
      buttonsRef.current[index + 1].focus();
    } else if (e.key === 'ArrowUp' && buttonsRef.current[index - 1]) {
      buttonsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {data.map((item, index) => (
        <button key={index}
        ref={(el) => (buttonsRef.current[index] = el)}
        onKeyDown={(e) => handleKeyDown(e, index)} className='bg-whiteLeft focus:bg-button1 focus:border-2 w-[180px] focus:border-whiteLeft rounded-lg px-[10px] py-[5px] text-md font-semibold text-textColorSignin focus:text-whiteLeft flex justify-start items-center gap-3'>
          <img src={item.imgUrl}></img>
            {item.label}
          </button>
      ))}
    </div>
  );
}
