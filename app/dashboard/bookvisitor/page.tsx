"use client"
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-[#FFFBD8] min-h-screen pb-24'>
      

      <div className='px-5 pt-4'>
        <p className='text-gray-700 font-semibold text-sm mb-3'>All bookings</p>

        <div className='relative mb-4'>
          <Image src="/search.png" alt="search" width={16} height={16} className='absolute left-3 top-3.5' />
          <input
            type="text"
            placeholder="Search"
            className='w-full bg-white rounded-lg pl-9 pr-4 py-3 text-sm outline-none'
          />
        </div>

        <p className='text-gray-500 text-xs mb-2'>21 December, 2023</p>
        <div className='  p-3 flex items-center justify-between mb-2'>
          <div className='flex items-center gap-3'>
            <div className='bg-[#EE7421] p-2 rounded-lg'>
              <Image src="/visitor-icon.svg" alt="visitor" width={20} height={20} />
            </div>
            <div>
              <p className='text-gray-800 font-semibold text-sm'>Alex Jumbo</p>
              <p className='text-gray-500 text-xs'>Visited</p>
            </div>
          </div>
          <p className='text-gray-600 text-xs'>Official</p>
        </div>

        {/* <div className='bg-white rounded-lg p-3 flex items-center justify-between mb-2'>
          <div className='flex items-center gap-3'>
            <div className='bg-[#EE7421] p-2 rounded-lg'>
              <Image src="/visitor-icon.svg" alt="visitor" width={20} height={20} />
            </div>
            <div>
              <p className='text-gray-800 font-semibold text-sm'>Sarah Lee</p>
              <p className='text-gray-500 text-xs'>Pending</p>
            </div>
          </div>
          <p className='text-gray-600 text-xs'>Personal</p>
        </div>

        <p className='text-gray-500 text-xs mb-2 mt-4'>20 December, 2023</p>
        <div className='bg-white rounded-lg p-3 flex items-center justify-between mb-2'>
          <div className='flex items-center gap-3'>
            <div className='bg-[#EE7421] p-2 rounded-lg'>
              <Image src="/visitor-icon.png" alt="visitor" width={20} height={20} />
            </div>
            <div>
              <p className='text-gray-800 font-semibold text-sm'>John Doe</p>
              <p className='text-gray-500 text-xs'>Visited</p>
            </div>
          </div>
          <p className='text-gray-600 text-xs'>Delivery</p>
        </div> */}
      </div>

      
      
    </div>
  )
}

export default page



// "use client"
// import React from 'react'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'

// const page = () => {
//   const router = useRouter()

//   return (
//     <div className='bg-[#FFF8E6] min-h-screen'>
       
//         {/* <button onClick={() => router.back()} className='absolute left-4'>
//           <Image src="/arrow 1.png" alt="back" width={20} height={20} />
//         </button> */}
       
      

//       <div className='px-4 pt-4'>
//         <p className='text-gray-500 text-xs'>Thursday, 10 December, 9:30am</p>
//         <p className='text-gray-400 text-xs mt-3 mb-2'>Details</p>

//         <div className='bg-white rounded-lg p-3 flex items-center gap-3 mb-3 shadow-sm'>
//           <Image src="/avatar1.png" alt="avatar" width={48} height={48} className='rounded-md' />
//           <div>
//             <p className='text-gray-400 text-xs'>Full Name</p>
//             <p className='text-gray-800 font-semibold text-sm'>Alex Jumbo</p>
//           </div>
//         </div>

//         <div className='bg-white rounded-lg p-4 shadow-sm'>
//           <div className='flex justify-between mb-3'>
//             <p className='text-gray-400 text-xs'>Phone number</p>
//             <p className='text-gray-800 text-xs font-medium'>+263775437194</p>
//           </div>
//           <div className='flex justify-between mb-3'>
//             <p className='text-gray-400 text-xs'>Email</p>
//             <p className='text-gray-800 text-xs font-medium'>alexjumbo56@yahoo.com</p>
//           </div>
//           <div className='flex justify-between mb-3'>
//             <p className='text-gray-400 text-xs'>Date in</p>
//             <p className='text-gray-800 text-xs font-medium'>10 December, 2023</p>
//           </div>
//           <div className='flex justify-between mb-3'>
//             <p className='text-gray-400 text-xs'>Date out</p>
//             <p className='text-gray-800 text-xs font-medium'>10 December, 2023</p>
//           </div>
//           <div className='flex justify-between mb-3'>
//             <p className='text-gray-400 text-xs'>Time in</p>
//             <p className='text-gray-800 text-xs font-medium'>9:30am</p>
//           </div>
//           <div className='flex justify-between mb-3'>
//             <p className='text-gray-400 text-xs'>Time out</p>
//             <p className='text-gray-800 text-xs font-medium'>12:45pm</p>
//           </div>
//           <div className='flex justify-between mb-3'>
//             <p className='text-gray-400 text-xs'>Time spent</p>
//             <p className='text-gray-800 text-xs font-medium'>Two hours fifteen minutes</p>
//           </div>
//           <div className='flex justify-between mb-3'>
//             <p className='text-gray-400 text-xs'>Purpose of visit</p>
//             <p className='text-gray-800 text-xs font-medium'>Official</p>
//           </div>
//           <div className='flex justify-between'>
//             <p className='text-gray-400 text-xs'>Address</p>
//             <p className='text-gray-800 text-xs font-medium'>Sarafina Str, Mandela Avenue</p>
//           </div>
//         </div>
//       </div>

//       <button className='fixed  bottom-18 right-6 bg-[#F97316] w-12 h-12 rounded-lg flex items-center justify-center shadow-md'>
//         <Image src="/plus.svg" alt="plus" width={20} height={20} className='absolute' />
//       </button>
//     </div>
//   )
// }

// export default page