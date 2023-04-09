import Head from "next/head";
import Image from "next/image";


import axios from 'axios';


import { FormEvent, useState } from 'react'

import { BsShieldLock,BsPerson } from 'react-icons/bs'
import Link from "next/link";

export default function Register() {
  const [ email , setEmail] = useState<string>('')
  const [ password , setPassword] = useState<string>('')
  const [ cpassword , setCPassword] = useState<string>('')

  const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(cpassword === password){
      try {
        const response = await axios.post('/api/register', {email:email,password:password});
        console.log(response.data);
        alert('User registred , please login')        
      } catch (error:any) {
        if(error.response.status === 401){
          alert('Email is already used')   
        }else{
          alert('Something went wrong')   
        }
      }
    }else alert('Passwords and Confirm Password are not the same')
  };
  
  return(
    <>
      <Head>
        <title>Regsiter </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>    
      <section className="h-[calc(100vh-4rem)] bg-white flex justify-center items-center ">
        <div className="max-w-screen-lg flex w-full ">
          <div className="g-6 bg-primary flex h-[40rem] w-full flex-wrap items-center justify-center lg:justify-between rounded-xl p-10">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 relative h-full">
              <Image fill alt="undraw" src={"/undraw.svg"} />
            </div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form onSubmit={handleSubmit}>
                <div className="text-3xl text-white font-bold mb-4 ">Register</div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-extraB">What is your email?</span>
                  </label> 
                  <div className='flex group'>
                    <span className=' border-primary-content group-focus-within:bg-primary in-colors input input-bordered rounded-r-none flex justify-center items-center border-r-0'><BsPerson className=' text-primary transition-colors  duration-500 h-6 w-6 group-focus-within:text-accent' height={20} width={20} /></span>
                    <input required onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Email" className=" border-primary-content input input-bordered in-colors text-black focus:outline-0 w-full rounded-l-none pl-1 border-l-0"/>
                  </div>
                </div> 
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-extraB">What is your password?</span>
                  </label> 
                  <div className='flex group'>
                    <span className='group-focus-within:bg-primary in-colors input input-bordered  border-primary-content rounded-r-none flex justify-center items-center border-r-0'><BsShieldLock className=' text-primary transition-colors  duration-500 h-6 w-6 group-focus-within:text-accent' height={20} width={20} /></span>
                    <input required onChange={(e)=>setPassword(e.target.value)} value={password}  type="password" placeholder="Password" className="input  border-primary-content input-bordered in-colors text-black focus:outline-0 w-full rounded-l-none pl-1 border-l-0"/>
                  </div>
                </div> 
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-extraB">What is your password again?</span>
                  </label> 
                  <div className='flex group'>
                    <span className='group-focus-within:bg-primary in-colors input input-bordered  border-primary-content rounded-r-none flex justify-center items-center border-r-0'><BsShieldLock className=' text-primary transition-colors  duration-500 h-6 w-6 group-focus-within:text-accent' height={20} width={20} /></span>
                    <input required onChange={(e)=>setCPassword(e.target.value)} value={cpassword}  type="password" placeholder="Confirm Password" className="input  border-primary-content input-bordered in-colors text-black focus:outline-0 w-full rounded-l-none pl-1 border-l-0"/>
                  </div>
                </div>            
                <div className="my-4 flex items-center justify-between">
                  <a href="#!">Forgot password?</a>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    className="btn btn-secondary">
                    Register
                  </button>

                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    have an account?
                    <Link
                      href={'/sign'}
                      className="text-danger hover:underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                      > Login</Link>
                  </p>
                </div>
              </form>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}
