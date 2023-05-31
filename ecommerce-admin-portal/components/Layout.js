import React from 'react'
import Nav from './Nav'
import { signIn, useSession } from 'next-auth/react'
import Loader from './Loader'
const Layout = ({ children}) => {
    
  const {data:session,status} = useSession()
    if(status === 'loading'){
      return <Loader/>
    }
    if(!session){
        return (
            <>

            <div className=" text-blue-900 flex justify-center text-lg font-medium w-full flex-col items-center h-screen bg-blue-200">
              <p className='font-bold text-2xl'>Sign IN</p><br/>
              <button className='border border-solid border-black p-2 rounded-2xl bg-pink-200 px-4 w-[25%]' onClick={(e) => signIn('google')}>Sign In With Google</button>
            </div> 
            
          </>
        )
      }
  return (
    <div className='grid grid-cols-6   '>
      <div className='col-span-2 lg:col-span-1 fixed '>
        <Nav />
      </div>
        <div className='w-full  col-start-3 lg:col-start-2 col-span-4 lg:col-span-5 '>
        <nav className='flex gap-4 items-center justify-between px-2 border-x-0 border-t-0 border-b-2 border-black'>
          <div>
            <h1 className='font-bold pt-2 '>ADMIN</h1>
          </div>
          <div className='flex gap-4 items-center'>
          <img src={session?.user?.image} className="rounded-[50%] h-10"/>
          <h1 className='font-bold pt-2 '>|&nbsp;{session?.user?.name.toUpperCase()}</h1>
          </div>

        </nav>
        <div className='p-2'>
        {children}
        </div>
        </div>
    </div>
  )
}

export default Layout