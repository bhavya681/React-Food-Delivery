import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cart';


const Cart = ({ items, setItems }) => {

  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 space-x-4 mx-20 ml-20 m-5'>
        {
          items.map((item) => (
            <>
              <div key={item.id} className='mx-15 border rounded-lg m-5 p-5 bg-gray-100'>
                <div className='flex justify-center transition-all ease-linear cursor-grab hover:animate-bounce '>
                  <img width={200} height={200} className='ml-200 p-3 ' src={item.img} alt={item.name} />
                </div>
                <h1 className='text-center text-xl font-bold m-3'>{item.name}</h1>
                <h2 className='text-center text-lg font-semibold m-2'>{item.desc.slice(0, 80)}...</h2>
                <h2 className='text-center items-center m-5 text-xl font-bold text-green-600'>${item.price}</h2>
                <div className='flex justify-center bg-gray-100 '>
                <p className='text-center font-bold items-center w-100 bg-green-600 hover:bg-green-700 text-white  rounded-lg p-2 cursor-pointer'>
                {item.rating} ★
                  </p>
</div>
                <div className='flex justify-center my-5'>
                  <button onClick={() => { addToCart(item) }} className='bg-black text-center items-center hover:bg-gray-800 text-white rounded-xl p-3 w-100'> Add To 🛒</button>
                </div>
              </div>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default Cart