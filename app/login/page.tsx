"use client";

import { useEffect, useState } from 'react';
import {useRouter} from 'next/navigation';
import { getRedirectResult, signInWithRedirect, signInWithPopup, } from 'firebase/auth';
import { auth, googleprovider } from '../../lib/firebase';
import Link from 'next/link';
import Image from 'next/image';

const useRedirectFlow = process.env.NODE_ENV === "production";

const login = () => {
  const [agreed, setAgreed] = useState(false);
    const [loading, isLoading] = useState(false);
    const [error, setError] = useState <string | null>(null);
    const router = useRouter();
    
  
    useEffect(() => {
      if (!useRedirectFlow) return;
      let mounted = true;
      
      async function handleRedirectResults() {
        try {
          const result = await getRedirectResult(auth);
          if(!mounted) return;
          if (result?.user) {
            router.replace("/dashboard");
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
  
     try{
      if(useRedirectFlow) {
        await signInWithRedirect(auth, googleprovider);
      } else{
        const result = await signInWithPopup(auth, googleprovider);
        if (result?.user) {
          router.push("/dashboard");
        }
        isLoading(false)
      }
     } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "unable to connect with google";
      setError(message);
      isLoading(false);
     }
    }
  return (
    <div className='bg-[#FFF8DB]'>
      <div>
        <Image src="/login-img.svg" alt="Logo" width={300} height={300} className='mx-auto pt-10'/>
      </div>

      <div className='px-10 pt-15'>
        <h2 className="text-2xl font-bold text-black pb-2">Welcome back !</h2>
        <p className='text-gray-600 text-md'>Pls enter your details</p>
      </div>


      <button  onClick={handleGoogleSignIn} className=' gap-2 flex items-center justify-center mt-8 border border-gray-400 rounded-xl py-5 px-2 mx-8' >
        <Image src="/google-icon.png" alt="Google Icon" width={18} height={18} />
        <span className="text-gray-500 text-[16px] font-semibold">
          {loading ? "Connecting to Google..." : "Login with Google"}
        </span>
      </button>

      <div className='flex items-center gap-13 px-8 mt-8'>
        <div className='h-px bg-black flex-1'></div>
        <span className='text-black font-bold text-2xl'>Or</span>
        <div className='h-px bg-black flex-1'></div>
      </div>

      <div className='space-y-8 px-8 mt-10'>
        <div className='relative'>
            <label className='absolute -top-3.5 left-6 px-3 text-xl text-black bg-[#FFF8DB]'>Email</label>
            <input name='email' className='w-full rounded-xl border-black border px-3 pt-8  '/>
        </div>

          <div className='relative'>
            <label className='absolute -top-3.5 left-6 px-3 text-xl text-black bg-[#FFF8DB]'>Password</label>
            <input name='password' placeholder='6+ characters' className='w-full rounded-xl border-black border  pt-8 placeholder:text-gray-300 text-sm px-8  '/>
          </div>
      </div>

      <p className='text-sm mt-8 px-17'>
        <Link href="/forgot-password" className='text-gray-500'>Forgot password?</Link>
      </p>

      <button className='bg-[#EE7421] text-white text-xl w-82 py-3 rounded-xl mt-6 mx-8 '>Log in</button>

      <p className='px-10 text-gray-600 text-sm mt-8 mb-20'>
        Don't have an account? <Link href="/signup" className='text-[#EE7421] font-semibold'>Sign up</Link>
      </p>
    
    </div>
  )
}

export default login