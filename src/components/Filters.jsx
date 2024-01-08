import React from 'react'

const Filters = ({ hightToLowprice, lowToHighprice, filterVFood, filterNVFood, filterPFFood, filterLowtoHighRatedFood, filterHightoLowRatedFood }) => {

    return (

        <>

            <div className='flex justify-evenly space-x-5 m-10'>

                <button className='bg-gray-400 hover:bg-green-300 text-white  font-black font-mono text-2xl transition-all ease-in-out hover:animate-pulse p-2  rounded-lg ' onClick={() => { filterHightoLowRatedFood() }} >High To Low Ratings <span className='text-yellow-400 text-2xl'> ★</span></button >

                <button className='bg-green-600 hover:bg-green-700  text-white p-2 rounded-md font-bold text-xl' onClick={() => { filterVFood() }}>VEG</button >

                <button className='bg-gray-400 hover:bg-green-300 text-white  font-black font-mono text-2xl transition-all ease-in-out hover:animate-pulse p-2  rounded-lg ' onClick={hightToLowprice} >High To Low Price <span className='text-green-400 text-2xl'> $</span></button >

                <button className='bg-red-600 hover:bg-red-700 text-white p-2 rounded-md' onClick={() => { filterNVFood() }}>NON VEG</button >

                <button className='bg-gray-400 hover:bg-green-300 text-white  font-black font-mono text-2xl transition-all ease-in-out hover:animate-pulse p-2  rounded-lg ' onClick={lowToHighprice} >Low To High Price <span className='text-green-400 text-2xl'>$</span></button >

                <button className='bg-green-500 hover:bg-green-800 text-white font-extrabold font-mono text-2xl transition-all ease-in-out hover:animate-pulse p-2  rounded-lg ' onClick={() => { filterPFFood() }} >4<span className='text-yellow-400 text-2xl'> ★</span>+</button >

                <button className=' hover:bg-red-400 text-white  bg-gray-400 font-black font-mono text-2xl transition-all ease-in-out hover:animate-pulse p-2  rounded-lg ' onClick={() => { filterLowtoHighRatedFood() }} >Low To High Ratings <span className='text-yello-400 text-2xl'> ★</span></button >

            </div>

        </>

    )

}

export default Filters