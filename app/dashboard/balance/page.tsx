import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-[#FFFBD8] min-h-screen pb-24'>
      
      
      <div className='bg-white px-6 py-6'>
        <p className='text-gray-500 text-sm mb-1'>Amount</p>
        <h2 className='text-[#EE7421] text-3xl font-bold'>$10.00</h2>
      </div>

      <div className='px-6 pt-10 flex-col items-center text-center'>
        
        <p className='text-gray-600 text-sm mb-8'>Subscribe to your monthly usage.</p>

        
        <div className='mb-10'>
          <Image 
            src="/credit-card.svg" 
            alt="payment" 
            width={260} 
            height={180} 
            className='mx-auto object-contain'
          />
        </div>

        
        <button className='bg-[#EE7421] text-white font-semibold w-67 py-4 rounded-xl'>
          Make Payment
        </button>

      </div>

    </div>
  )
}

export default page


