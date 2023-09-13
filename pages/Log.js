import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react'; // Import useState from React
import { useRouter } from 'next/router';


const Log = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (event) => {
      event.preventDefault();
        // Implement your login logic here.
        // You can validate the email and password and perform authentication.
        // For demonstration purposes, check if the email and password match.
        if (email === 'anithakathir80@gmail.com' && password === 'welcome123')
         {
          router.push('/CardPage');
          //window.location.reload();
          // Redirect to the dashboard page upon successful login.
        } else {
          alert('Invalid email or password');
        }
      };
    

  return (
    <>
   <section className='bg-gray-700 min-h-screen  flex items-center justify-center'>
     {/* <!--------login--------> */}
    <div className='bg-gray-100 flex  rounded-2xl shadow-lg max-w-3xl p-5'>

     <div className='sm:w-1/2 px-16'>
       <h1 className='font-bold text-3xl text-center'>Welcome</h1>
       <hr  className='border-gray-700 mt-5'></hr>
       <form className='flex flex-col gap-2'>
       
            <input type="email" id="email" name="email"  className='mt-5 rounded-2xl p-2 w-full' placeholder='  Email'
                              onChange={(e) => setEmail(e.target.value)}value={email} required
                              />
            <div className='relative'>
            <input type='password' id='password' name='password'  className='mt-5 rounded-2xl w-full p-2' placeholder='  password' 
               value={password}   onChange={(e) => setPassword(e.target.value)} required  />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye-fill absolute top-1/2 right-3 translate-y-1" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
            </div>
            <button type="submit"
                onClick={handleLogin} className='bg-[#1a6aea] rounded-xl p-2 mt-5 text-white'>Login</button>
        </form>

        <div className='mt-10 grid grid-flow-col items-center text-gray'>
            <hr className='border-gray-900'></hr>
            <p className='text-center'>
                OR
            </p>
            <hr className='border-gray-900'></hr>
        </div>
          <div className='relative'>
        <button className='mt-5 bg-white border py-2 w-full rounded-xl text-center'>
            Login With Google
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-google absolute top-1/2 left-4 translate-y-1 " viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg>
        </div>

       
     </div>
    
     <div className='w-1/2 mt-10 p-5 sm:block hidden '>
      <Image className=' rounded-2xl sm:block hidden' src="/images/study1.jpg" alt="study" height={600} width={600} />

     </div>

     </div>

   </section>
    </>
  )
}

export default Log