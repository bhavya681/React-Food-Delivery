import React from 'react'

const Emotions = ({ emotionItem, filterEmotions }) => {

    return (
        <>
            <h1 className='text-center font-bold text-4xl transition-all ease-linear hover:animate-ping cursor-pointer'>What is your current mood?</h1>
            <div className='flex justify-between space-x-2 m-10'>
                {
                    emotionItem.map((item) =>
                        <button key={item} onClick={() => filterEmotions(item)} className='text-4xl  transition-all ease-linear hover:animate-bounce '>{item}</button>
                    )
                }
            </div>

        </>
    )

}

export default Emotions