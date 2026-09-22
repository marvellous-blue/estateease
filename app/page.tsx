import React from 'react'
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className='bg-[#FFF8DB] pt-20 px-4'>

      <div className="flex justify-between items-center h-16 ">
        <p className="text-2xl text-[#EE7421] font-bold">EstateEaze</p>
        <Link href="/create-account" className="text-white px-4 py-2 rounded-md bg-[#EE7421]">Create Account</Link>       
      </div>

      <div>
        <p className="text-black border-b w-68 pb-5 mt-7">Everything at your fingertips.</p>
        <h1 className="text-4xl font-bold text-[#EE7421] mt-7 w-75">Living with ease at the touch of a button...</h1>
      </div>

      <div>
        <Image src="/building and girl.svg" alt="Hero Image" width={600} height={400} className="mt-10"  />
        <p className="text-black mt-7 text-lg">EstateEaze gives you a feel of heaven.</p>
      </div>

      <div className="flex mt-10 justify-center mb-20">
        <Link href="/login" className="text-[#EE7421] px-15 py-3 rounded-md bg-white mt-7 border border-[#EE7421]">Login</Link>
        <Link href="/create-account" className="text-white px-4 py-3 rounded-md bg-[#EE7421] mt-7 ml-4">Create Account</Link>
      </div>
    </div>
  )
}

export default page