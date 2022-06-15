import React from 'react'
import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import dummyData from '../utils/dummyData'
import { shortAddress } from '../utils/shortenAddress'

const TransationCard=({addressTo,addressFrom,timestamp,amount,url,message,keyword})=>(
  <div className='bg-[#181918] m-4 flex flex-1 
  2xl:min-w-[450px] 
  2xl:max-w-[500px]
  sm:min-w-[270px]
  sm:max-w-[300px] flex-col p-3 rounnded-md hover:shadow-2xl
  '>
    <div className='flex flex-col items-center w-full mt-3'>
      <div className=' w-full mb-6 p-2'>
        <a href={`https://goerli.etherscan.io/tx/${addressFrom}`} target='_blank' rel='noopener noreferrer'>  
        <p className=' text-white text-base'>From: {shortAddress(addressFrom)}</p>
        </a>
        <a href={`https://goerli.etherscan.io/tx/${addressTo}`} target='_blank' rel='noopener noreferrer'>
        <p className=' text-white text-base'>To: {shortAddress(addressTo)}</p>
        </a>
        <p className=' text-white text-base'>Amount:{amount}</p>
     {message && <p className='mt-2 text-white text-base'>message: {message} </p>}
      </div>
  <img src={url} alt='gif icon' className=' w-full h-64 rounded-md shadow-lg object-cover'/>
      <div className='bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl'>
        <p className='text-[#37c7da] font-bold'>{timestamp}</p>
      </div>
    </div>
  </div>
)

const Transactions = () => {
  const { currentAccount,transactions } = useContext(TransactionContext)
  return (
    <div className=' flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
      <div className='flex flex-col md:p-12 py-12 px-4'>

        {currentAccount ? <h3 className=' text-white text-3xl text-center my2'>
          Latest transactions
        </h3> : <h3 className=' text-white text-3xl text-center my2'>
          Connect your account to see the Latest transactions
        </h3>}
        <div className='flex flex-wrap justify-center items-center'>
          {transactions.reverse().map((transaction,index)=>(<TransationCard key={index} {...transaction}/>))}
          {/* {dummyData.reverse().map((transaction,index)=>(<TransationCard key={index} {...transaction}/>))} */}
        </div>
      </div>

    </div>
  )
}

export default Transactions