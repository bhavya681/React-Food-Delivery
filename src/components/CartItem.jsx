import React, { useContext } from 'react'
import { CartContext } from '../context/cart';
import { useNavigate } from "react-router-dom";


const CartItem = ({ toggle, showModal }) => {

    const { cartItems, addToCart, removeFromCart, getCartTotal, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const paymentStuff = () => {
        navigate("/payment");
    }

    return (
        <div className='fixed right-0 top-0 bg-gray-100  border ' style={{ width: "30rem", maxHeight: "100vh", overflowY: "auto" }}>
            {showModal && (
                <>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold cursor-pointer'>   Cart   </h1>
                        <b className='text-2xl font-bold cursor-pointer hover:text-red-600' onClick={() => { toggle() }}>X</b>
                    </div>
                    {
                        cartItems.length > 0
                        &&
                        cartItems.map((cartItem) => (
                            <>
                                <div key={cartItem.id} className='flex m-10'>
                                    <img width={200} className='border rounded-2xl' src={cartItem.img} alt={cartItem.name} />
                                    <div>
                                        <h1 className='text-xl font-bold m-2'>{cartItem.name}</h1>

                                        <h2 className='text-xl font-bold m-3 text-green-600'>${cartItem.price}</h2>
                                        <div className='m-5 space-x-5 text-center items-center'>
                                            <button className='bg-black text-white text-center border w-30 rounded-xl px-3  h-10 ' 
                                            onClick={() => addToCart(cartItem)}>+</button>

                                            <span>{cartItem.quantity}</span>

                                            <button className='bg-black text-white text-center border w-30 rounded-xl px-3 h-10 ' 
                                            onClick={() => removeFromCart(cartItem)}>-</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    {
                        cartItems.length > 0
                            ?
                            (
                                <>
                                    <h1 className='text-2xl text-center font-semibold m-5 text-black '>Total Price:${getCartTotal()}</h1>
                                    <div className='flex  flex-center flex-col '>
                                        <button className='bg-black text-white p-2 rounded-xl items-center' onClick={clearCart}>Clear Cart</button>
                                        <br />
                                        <br />
                                        <button className='bg-green-600 items-center mb-5 text-white p-2 rounded-xl' onClick={paymentStuff}>Payment</button>
                                    </div>
                                </>
                            )
                            :
                            (
                                <>
                                    <h1>Cart Is Empty</h1>
                                </>
                            )
                    }
                </>
            )}
        </div>
    )
}

export default CartItem