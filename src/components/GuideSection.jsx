import React from 'react'

const GuideSection = () => {
    return(
        <div className="container mx-auto flex items-center pl-10 bg-[url('https://cdn.shopify.com/s/files/1/0059/0630/1017/files/Keyboards-guide-1_2400x.jpg?v=1665643142')] p-20 mt-20 object-cover object-center bg-no-repeat ">
            <div className='bg-white p-10 flex flex-col w-96 gap-5'>
                <h3 className='text-4xl'>Keyboards Buying Guide</h3>
                <p className='text-xl'>Which Keychron keyboard is best for you?</p>
                <button className="rounded bg-black text-white px-4 py-3 w-40 font-bold">Go To Check</button>
            </div>
        </div>
    )
}

export default GuideSection