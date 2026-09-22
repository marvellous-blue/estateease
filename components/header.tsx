import React from 'react'
import Link from "next/link";
import Image from "next/image";

const header = () => {
  return (
    <div className='bg-white border border-gray-800 shadow-sm'>
      <div className='flex justify-between items-center px-6 py-5'>
        <h1 className='text-black text-xl'>Dashboard</h1>

        <div className='flex gap-4 mt-2 '>
          <Image src="/vector.svg" alt="Logo" width={20} height={25} />
          <Image src="/vector (1).svg" alt="Logo" width={20} height={25} />
          <Image src="/profile.svg" alt="Logo" width={20} height={25} />
        </div>
      </div>
    </div>
  )
}

export default header