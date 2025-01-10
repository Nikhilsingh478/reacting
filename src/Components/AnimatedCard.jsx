import React, { useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const AnimatedCard = () => {
    const [val, setVal] = useState(false);
  return (
    <>
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
        <div className=' relative w-96 h-56 bg-zinc-500 rounded-md overflow-hidden flex'>
            <img className={`flex-shrink-0 h-full w-full object-cover ${val === false ? '-translate-x-0' : '-translate-x-[100%]'} transition-transform duration-[800ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] `} src="https://i.pinimg.com/736x/d8/05/99/d80599f92debefb66b486b6542ba3969.jpg" alt="" />
            <img className={`flex-shrink-0 h-full w-full object-cover ${val === false ? '-translate-x-0' : '-translate-x-[100%]'} transition-transform duration-[800ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] `} src="https://i.pinimg.com/736x/5d/ee/d4/5deed4733b53eb468208d5d4589fc0d0.jpg" alt="" />
            <span onClick={()=>setVal(()=>!val)} className='bg-white rounded-full p-2 bg-opacity-30 absolute top-1/2 left-1/2 -translate-x-0.5 -translate-y-0.5'>
            <FaLongArrowAltRight size={'0.9em'}/>
            </span>
        </div>
    </div>
    </>
  )
}

export default AnimatedCard