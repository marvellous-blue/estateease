import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { IoWalletOutline } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import { MdOutlineCreditCard } from "react-icons/md";

const page = () => {
  return (
    <div>
      <div className='bg-[#FFF8DB] h-[100vh] px-4 pt-6 pb-24 '>
        
        <div className='bg-white rounded-xl p-4 mb-8 px-6 py-7 '>
          <div className='flex items-center gap-4 mb-2 '>
            <IoWalletOutline className="text-2xl text-[#EE7421]" />
            <h2 className='text-gray-700 font-bold'>View Balance Due</h2>
          </div>
          <p className='text-gray-500 text-sm mb-3'>This is a monthly payment for app usage.
            Your subscriction gives you optimum benefits and flexibility.</p>
          <Link href="/dashboard/balance" className='text-[#EE7421] font-semibold text-sm'>Click here</Link>
        </div>

        <div className='bg-white rounded-xl p-4 mb-8 px-6 py-7'>
          <div className='flex items-center gap-4 mb-2'>
            <FaPeopleCarry className='text-2xl text-[#EE7421]' />
            <h2 className='font-bold text-gray-700'>My Visitors</h2>
          </div>
          <p className='text-gray-500 text-sm mb-3'>
            Have the ability to invite your friends, loved ones and family without any delay or worries.
          </p>
          <Link href="/dashboard/bookvisitor" className='text-[#EE7421] font-semibold text-sm'>
            Click here
          </Link>
      </div>

     
      <div className='bg-white rounded-xl p-4 mb-6 px-6 py-7'>
        <div className='flex items-center gap-4 mb-2'>
          <MdOutlineCreditCard className='text-2xl text-[#EE7421]' />
          <h2 className='font-bold text-gray-700'>Payments</h2>
        </div>
        <p className='text-gray-500 text-sm mb-3'>
          All payments made and history are view and made from here. There are different methods to pay or subscribe.
        </p>
        <Link href="/dashboard/payment" className='text-[#EE7421] font-semibold text-sm'>
          Click here
        </Link>
      </div>

      </div>
    </div>
  )
}

export default page