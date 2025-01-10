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