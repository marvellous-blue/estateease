"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getRedirectResult, signInWithRedirect, signInWithPopup, } from 'firebase/auth';
import { auth, googleprovider } from '../../lib/firebase';
import Link from 'next/link';
import Image from 'next/image';

const useRedirectFlow = process.env.NODE_ENV === "production";
const signUp = () => {


   const [agreed, setAgreed] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();


  useEffect(() => {
    if (!useRedirectFlow) return;
    let mounted = true;

    async function handleRedirectResults() {
      try {
        const result = await getRedirectResult(auth);
        if (!mounted) return;
        if (result?.user) {
          router.push("/dashboard");
        }

      } catch (err: unknown) {
        if (!mounted) return;

        const message = err instanceof Error ? err.message : "google signin failed "
        setError(message);
        isLoading(false);
      }

    }

    handleRedirectResults();

    return () => {
      mounted = false;
    };

  }, [router]);

  async function handleGoogleSignIn() {
    setError(null);
    isLoading(true);

    try {
      
        const result = await signInWithPopup(auth, googleprovider);
        if (result.user) {
          console.log(result.user.email)

          await auth.currentUser?.getIdToken

          router.replace("/dashboard");
        }
        
    }
    catch (err: unknown) {
      const message = err instanceof Error ? err.message : "unable to connect with google";
      setError(message);
      isLoading(false);
    }
  }

    return (
      <div>

        <div className="py-10 px-8 bg-[#EE7421] text-white">
          <h1 className='text=white text-2xl pb-5'>EstateEaze</h1>
          <p className='text-black text-lg font-semibold'>Already have an account?  <Link href="/login" className='pl-4 text-white hover:underline'>Log in</Link></p>
        </div>

        <div>
          <h3 className='text-xl px-8 pt-10 font-bold text-gray-800'>Create your account</h3>

          <button onClick={handleGoogleSignIn} className=' gap-2 flex items-center justify-center mt-8 border border-gray-400 rounded-xl py-5 px-2 mx-8' >
            <Image src="/google-icon.png" alt="Google Icon" width={18} height={18} />
            <span className="text-gray-500 text-[16px] font-semibold">
              {loading ? "Connecting to Google..." : "Login with Google"}
            </span>
          </button>



          <div className='flex items-center gap-13 px-8 mt-8'>
            <div className='h-px bg-gray-900 flex-1'></div>
            <span className='text-gray-900 font-bold text-2xl'>Or</span>
            <div className='h-px bg-gray-900 flex-1'></div>
          </div>

          <div className='space-y-8 px-8 mt-10'>
            <div className='relative'>
              <label className='absolute -top-3.5 left-6 px-3 text-xl text-gray-400 bg-white'>Full Name</label>
              <input name='full name' className='w-full rounded-xl border-gray-600 border px-3 pt-8 pb-2 ' />
            </div>

            <div className='relative'>
              <label className='absolute -top-3.5 left-6 px-3 text-xl text-gray-400 bg-white'>Email</label>
              <input name='email' className='w-full rounded-xl border-gray-600 border px-3 pt-8 pb-2 ' />
            </div>

            <div className='relative'>
              <label className='absolute -top-3.5 left-6 px-3 text-xl text-gray-400 bg-white'>Password</label>
              <input name='password' placeholder='6+ characters' className='w-full rounded-xl border-gray-600 border  pt-8 pb-2 placeholder:text-gray-300 text-sm px-8 ' />
            </div>

            <div className='relative'>
              <label className='absolute -top-3.5 left-6 px-3 text-xl text-gray-400 bg-white '>Password Confirmation</label>
              <input name='password confirmation' placeholder='6+ characters' className='w-full rounded-xl border-gray-600 border  pt-8 pb-2 placeholder:text-gray-300 text-sm px-8' />
            </div>

            <div className='flex gap-4'>
              <input type="checkbox" className='w-5 h-6' />
              <p className='text-gray-600 font-semi-bold text-lg'>I agree to all Terms, Privacy policy, Fees.</p>
            </div>

            <button className='bg-[#EE7421] text-white text-xl w-95 py-3 rounded-xl mt-6 mx-1 mb-26'>Sign up</button>

          </div>

        </div>
      </div>
    )
  

}
   

export default signUp