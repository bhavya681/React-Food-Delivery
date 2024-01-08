import React, { useContext, useState } from 'react'
import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import CartItem from "../components/CartItem";
import { CartContext } from '../context/cart';

const Header = () => {

    const [showModal, setShowModal] = useState(false);

    const toggle = () => {
        setShowModal(!showModal);
    }

    const { cartItems } = useContext(CartContext);

    return (
        <>
            <div className='flex flex-between'>
                <img className='transition-all ease-linear cursor-grab hover:animate-bounce  w-25' src={logo} alt="logo" />
                {!showModal ?
                    (
                        <>

                            <h1 style={{ cursor: "pointer" }} className='absolute right-10 mt-12 text-2xl flex'><FaCartShopping size={43} onClick={toggle} className='mt-800' />
                                <span className='mb-450'>{cartItems.length > 0 ?
                                    (<>
                                        ({cartItems.length})
                                    </>)
                                    :
                                    (
                                        <>
                                           {""}
                                        </>
                                    )}

                                </span>
                            </h1>
                        </>
                    ) :
                    (<>
                        <div style={{ maxHeight: "100vh" }}>
                            <CartItem toggle={toggle} showModal={showModal} />
                        </div>

                    </>)
                }


            </div>
        </>
    )
}

export default Header