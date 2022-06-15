import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full flex justify-center items-center flex-col p-4 gradient-bg-footer'>
      <div className=' w-full flex flex-col sm:flex-row justify-between items-center my-4'>
      <div className='flex flex-[0.5] justify-center items-center'>
        <img src='' alt='' className='w-32'/>
      </div>
      <div className='flex flex-col flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
        <p className=' text-white text-center text-base mx-2 cursor-pointer'>Market places</p>
        <p className=' text-white text-center text-base mx-2 cursor-pointer'>Exchange</p>
        <p className=' text-white text-center text-base mx-2 cursor-pointer'>Tutorials</p>
        <p className=' text-white text-center text-base mx-2 cursor-pointer'>Wallet</p>
      </div>
      </div>
      <div className='flex justify-center items-center flex-col mt-5'>
        <p className=' text-white text-sm text-center'>Come join us !!!</p>
        <p className=' text-white text-sm text-center'>writeshittu@gmail.com</p>
      </div>
      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'/>
      <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
      <p className=' text-white text-sm text-center'>@Writeshittu {new Date().getFullYear()}</p>
      <p className=' text-white text-sm text-center'>All right reserved</p>
      </div>
    </div>
  )
}

export default Footer