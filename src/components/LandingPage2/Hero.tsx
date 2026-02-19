import React from 'react'

const Hero = () => {
  return (
    <div className='my-40 flex flex-col justify-center items-center'>
        <h1
        
        className='text-7xl  font-bold tracking-tight max-w-2xl text-center leading-tight bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-500'>Unleash the power of intuitive finance</h1>
        <p className='mx-auto mt-10 max-w-3xl text-center text-md text-white'>
            Say goodbye to the outdated financial tools. Every small buisness owner, regardless of the background, can now manager their business like a pro. Simple. Intuitive. And never boring.
        </p>
        <div className="flex justify-center mt-8 max-w-lg w-full">
            <input type="text" className='mr-4 flex-1 rounded-xl border border-neutral-600 placeholder:text-neutral-500 text-white px-4 focus:outline-none focus:ring-2 focus:ring-sky-500' placeholder='Enter your email'/>
            <button className='px-4 py-2 rounded-xl border border-neutral-700 text-white cursor-pointer relative'>
                <div className="absolute -bottom-px inset-x-0 w-full h-px bg-linear-to-r from-transparent via-sky-600 to-transparent"></div>
                Join Waitlist
            </button>
        </div>
    </div>
  )
}

export default Hero