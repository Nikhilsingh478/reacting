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

// // code
// import React, { useState } from 'react'
// import Music_6 from './Components/Music_6'
// import Navbar_6 from './Components/Navbar_6'
// const App = () => {
//   const data = [
//     {image:"https://i.pinimg.com/736x/bf/48/f7/bf48f79a4232301d0a40c5bd7e8ffe11.jpg", name:"deva deva", artist:"Nikhil Singh", added: false},
//     {image:"https://i.pinimg.com/736x/c9/f6/11/c9f6113464205fa8043c85ba6d79c325.jpg", name:"galliyan", artist:"Shraddha kapoor", added: false},
//     {image:"https://i.pinimg.com/736x/1b/e0/08/1be008c3abf1282d28255c11de1de21b.jpg", name:"starboy", artist:"harsh", added: false},
//     {image:"https://i.pinimg.com/736x/21/9d/81/219d8130248a5df26f30bc86c5df2d09.jpg", name:"weekend", artist:"vedant", added: false}
//   ]

//   const [copiedData, changeCopiedData] = useState(data);

//   const handleClick = (CardIndex)=>{
//     changeCopiedData((previous)=>{
//       return previous.map((item, index)=>{
//         if(index === CardIndex){return {...item, added: !item.added}}
//         return item;
//       })
//     })
//   }

//   return (
//     <>
//     <div className='w-full h-screen bg-slate-200'>
//       <Navbar_6 data={copiedData}/>
//       <div className='px-20 flex gap-10 mt-10 flex-wrap'>
//       {copiedData.map((item, index)=>{
//         return <Music_6 handleClick={handleClick} key={index} index={index} data={item}/>
//       })}
//       </div>
//     </div>
//     </>
//   )
// }

// export default App