import React from 'react'
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import { MdOutlineCreditCard } from "react-icons/md";

const tab = () => {
  return (
    <div className="flex justify-around items-center bg-[#FADB7E] h-16 fixed bottom-0 w-full border-t border-gray-300">
      <Link href="/dashboard/" className="text-black flex flex-col items-center">
        <AiOutlineHome className="text-2xl" />
        <span className="text-[13px]">Home</span>  
      </Link>

      <Link href="/dashboard/balance" className="text-black flex flex-col items-center">
        <IoWalletOutline className="text-2xl" />
        <span className="text-[13px]">Balance due</span>
      </Link>

      <Link href="/dashboard/bookvisitor" className="text-black flex flex-col items-center">
        <FaPeopleCarry className="text-2xl" />
        <span className="text-[13px]">My visitor</span>
      </Link>

      <Link href="/dashboard/payment" className="text-black flex flex-col items-center">
        <MdOutlineCreditCard className="text-2xl" />
        <span className="text-[13px]">Payment</span>
      </Link>
    </div>
  )
}

export default tab