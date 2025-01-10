import React, { useState } from 'react'

const Props_5 = ({values, index, handleClick}) => {

  const {name, profession, img, friends} = values;

  return (
    <div className='w-72 rounded-md flex flex-col justify-start items-start gap-4 bg-zinc-50'>
      <div className='h-40 w-full rounded-md overflow-hidden'>
        <img className='object-cover' src={img} alt="" />
      </div>
      <div className='flex flex-col justify-start items-start p-3 -mt-4'>
        <h1 className='font-semibold text-lg'>{name}</h1>
        <h1 className='font-light text-sm'>{profession}</h1>
        <button onClick={()=>{handleClick(index)}} className={`px-5 py-1 ${friends === true ? 'bg-green-400' : 'bg-blue-400'} text-white rounded-md mt-2`}>{friends === true ? 'friend added' : 'add friend'}</button>  
      </div>
    </div>
  )
}

export default Props_5



// import React, { useState } from 'react'
// import AnimatedCard from './Components/AnimatedCard'
// import Props_5 from './Components/Props_5'

// const App = () => {

//   const data = [
//     {name: 'nikhil' , profession:"cricketer" , img:"https://i.pinimg.com/736x/e5/d1/74/e5d1747055e8c1a945191e3f439182ed.jpg", friends:false },
//     {name: 'harsh' , profession:"saas" , img:"https://i.pinimg.com/736x/1b/bb/c3/1bbbc3785bd80359cd7949b7c720df19.jpg", friends:false },
//     {name: 'vedant' , profession:"trading" , img:"https://i.pinimg.com/736x/d4/aa/30/d4aa30301476fddc5d07d45e1a2002e2.jpg", friends:false },
//     {name: 'sumit' , profession:"dev" , img:"https://i.pinimg.com/736x/64/65/a1/6465a181955935611871fc0ee30fc56a.jpg", friends:false },
//   ]

//   const [copiedData, setCopiedData] = useState(data);

//   const handleClick = (CardIndex)=>{
//     setCopiedData((previousState)=>{
//       return previousState.map((item, index)=>{
//         if(index === CardIndex){
//           return {...item, friends: !item.friends}
//         }
//         return item;
//       })
//     })
//   }
//   return (
//     <>
//     <div className='w-full h-screen flex gap-10 justify-center items-center bg-slate-400'>
//     {copiedData.map((item, index)=>(<Props_5 handleClick={handleClick}  values={item} index={index} key={index}></Props_5>))}
//     </div>
//     </>
//   )
// }

// export default App