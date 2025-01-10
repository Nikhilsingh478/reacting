import React from 'react'

const Music_6 = ({data, index, handleClick}) => {
    const {image, name, artist, added} = data;

  return (
    <div className='relative w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 mt-5'>
        <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div>
            <h3 className='text-xl leading-none font-semibold mb-2'>{name}</h3>
            <h6 className='text-sm'>{artist}</h6>
        </div>
        <button onClick={()=>handleClick(index)} className={`px-4 py-3 ${added === false ? "bg-orange-600" : "bg-teal-500"} absolute whitespace-nowrap bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full`}>{added === false ? "add to favourites" : "added"}</button>
    </div>
  )
}

export default Music_6