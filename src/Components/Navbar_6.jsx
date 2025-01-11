import React from 'react'
import styles from "./style.module.css"

const Navbar_6 = ({data}) => {
  return (
    <div className='w-full px-20 py-3 flex justify-between items-center'>
        <h3 className={styles.a} >Orange</h3>
        <div className="flex px-4 py-2 bg-orange-600 rounded-md text-sm gap-3 text-white">
            <h3>favourites</h3>
            <h4>{(data.filter(item => item.added)).length}</h4>
        </div>
    </div>
  )
}

export default Navbar_6

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