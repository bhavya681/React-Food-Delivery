import React from 'react'

const Buttons = ({ filterItems, menuItems, Allitems }) => {
  return (
    <div className='flex justify-evenly space-x-2 scroll-smooth'>
      <button className='rounded-xl border bg-gray-300 p-2' onClick={() => { Allitems() }}>All</button>
      {
        menuItems.map((item) => (
          <>
            <button key={item} className='rounded-xl border bg-gray-300 p-2' onClick={() => { filterItems(item) }}>{item}</button>
          </>
        ))
      }

    </div>
  )
}

export default Buttons