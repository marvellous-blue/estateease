"use client"
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-[#FFFBD8] min-h-screen'>

      <div className='flex flex-col items-center justify-center px-6 pt-16'>
        <p className='text-gray-500 text-sm mb-8'>No visitors yet.</p>

        <Image 
          src="/add-visitor.svg" 
          alt="add visitor" 
          width={260} 
          height={260} 
          className='mb-10'
        />

        <button 
          className='bg-[#EE7421] text-white font-semibold w-full max-w-sm py-4 rounded-xl'
        >
          Add Visitor
        </button>
      </div>
    </div>
  )
}

export default page

// "use client"
// import React, { useState } from 'react'

// const AddVisitorForm = () => {
//   const [showSuccess, setShowSuccess] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setShowSuccess(true)
//     setTimeout(() => setShowSuccess(false), 2000)
//   }

//   return (
//     <div className='bg-[#FFFBD8] min-h-screen px-5 py-4'>
//       <p className='text-gray-700 text-sm'>
//         Hello <span className='font-semibold'>Clayton,</span>
//       </p>
//       <p className='text-gray-500 text-xs mb-6'>
//         Expecting a visitor? Kindly fill in the necessary information about your visitor.
//       </p>

//       <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        
        
//         <div className='relative'>
//           <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>
//             Full name
//           </label>
//           <input type="text" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none text-gray-400' />
//         </div>

        
//         <div className='relative'>
//           <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>
//             Email
//           </label>
//           <input type="email" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none text-gray-400' />
//         </div>

        
//         <div className='relative'>
//           <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>
//             Phone number
//           </label>
//           <input type="tel" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none text-gray-400' />
//         </div>

        
//         <div className='grid grid-cols-2 gap-4'>
//           <div className='relative'>
//             <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>
//               Date in
//             </label>
//             <input type="date" placeholder="dd/mm/yy" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none text-gray-400' />
//           </div>
//           <div className='relative'>
//             <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>
//               Time in
//             </label>
//             <input type="time" placeholder="00:00" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none text-gray-400' />
//           </div>
//         </div>

        
//         <div className='grid grid-cols-2 gap-4'>
//           <div className='relative'>
//             <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>
//               Date out
//             </label>
//             <input type="date" placeholder="dd/mm/yy" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none border text-gray-400' />
//           </div>
//           <div className='relative'>
//             <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>
//               Time out
//             </label>
//             <input type="time" placeholder="00:00" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none border text-gray-400' />
//           </div>
//         </div>

        
//         <div className='relative'>
//           <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>
//             Visitor's Address
//           </label>
//           <input type="text" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none border text-gray-700' />
//         </div>

//         <div className='relative'>
//           <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>
//             Purpose of visit
//           </label>
//           <input type="text" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none border text-gray-700' />
//         </div>

//         <p className='text-gray-500 text-[13px]'>
//           A one time code will be sent to your visitor's mobile number for clearance at the entrance.
//         </p>

//         <button type="submit" className='bg-[#EE7421] text-white font-semibold w-full py-4 rounded-xl mb-20'>
//           Add Visitor
//         </button>
//       </form>

      
//       {showSuccess && (
//         <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
//           <div className='flex flex-col items-center'>
//             <div className='bg-white rounded-full p-5 mb-3'>
//              <Image src="vector.svg" alt="success" width={48} height={48} />
//             </div>
//             <p className='text-white font-semibold text-lg'>Successful</p>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default AddVisitorForm



// "use client"
// import React, { useState } from 'react'
// import Image from 'next/image'

// const page = () => {
//   const [view, setView] = useState<'empty' | 'form'>('empty')
//   const [showSuccess, setShowSuccess] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setShowSuccess(true)
//     setTimeout(() => {
//       setShowSuccess(false)
//       setView('empty')
//     }, 2000)
//   }

//   return (
//     <div className='bg-[#FFFBD8] min-h-screen'>


      
//       {view === 'empty' && (
//         <div className='flex flex-col items-center justify-center px-6 pt-16'>
//           <p className='text-gray-500 text-sm mb-8'>No visitors yet.</p>
//           <Image src="/add-visitor.svg" alt="add visitor" width={260} height={260} className='mb-10' />
//           <button 
//             onClick={() => setView('form')}
//             className='bg-[#EE7421] text-white font-semibold w-full max-w-sm py-4 rounded-xl'
//           >
//             Add Visitor
//           </button>
//         </div>
//       )}

//       {view === 'form' && (
//         <div className='px-5 py-4'>
//           <p className='text-gray-700 text-sm'>Hello <span className='font-semibold'>Clayton,</span></p>
//           <p className='text-gray-500 text-xs mb-6'>Expecting a visitor? Kindly fill in the necessary information about your visitor.</p>
          
//           <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
           
//             <div className='relative'>
//               <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>Full name</label>
//               <input type="text" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none text-gray-700' />
//             </div>
         
//             <div className='relative'>
//               <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>Email</label>
//               <input type="email" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none text-gray-700' />
//             </div>
          
//             <div className='relative'>
//               <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>Phone number</label>
//               <input type="tel" className='w-full border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none text-gray-700' />
//             </div>
         
//             <div className='grid grid-cols-2 gap-4'>
//               <div className='relative'>
//                 <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>Date in</label>
//                 <input type="date" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none text-gray-700' />
//               </div>
//               <div className='relative'>
//                 <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>Time in</label>
//                 <input type="time" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none text-gray-700' />
//               </div>
//             </div>
//             <div className='grid grid-cols-2 gap-4'>
//               <div className='relative'>
//                 <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>Date out</label>
//                 <input type="date" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none text-gray-700' />
//               </div>
//               <div className='relative'>
//                 <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>Time out</label>
//                 <input type="time" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none text-gray-700' />
//               </div>
//             </div>
         
//             <div className='relative'>
//               <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>Visitor's Address</label>
//               <input type="text" className='w-full border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none text-gray-700' />
//             </div>
           
//             <div className='relative'>
//               <label className='text-gray-600 text-sm font-semibold bg-[#FFFBD8] px-1.5 absolute -top-2 left-3'>Purpose of visit</label>
//               <input type="text" className='w-full border border-gray-300 rounded-lg p-3.5 pt-4 bg-transparent outline-none text-gray-700' />
//             </div>

//             <button type="submit" className='bg-[#EE7421] text-white font-semibold w-full py-4 rounded-xl'>Add Visitor</button>
//           </form>
//         </div>
//       )}

//       {showSuccess && (
//         <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
//           <div className='flex flex-col items-center'>
//             <div className='bg-white rounded-full p-5 mb-3'><svg className='w-12 h-12 text-[#EE7421]' fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>
//             <p className='text-white font-semibold text-lg'>Successful</p>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default page