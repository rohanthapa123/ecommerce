import React from 'react'
import Nav from './Nav'
import { signIn, useSession } from 'next-auth/react'

const Layout = ({children}) => {
    
  const {data:session} = useSession()
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
    <div className='flex h-screen'>
        <Nav/>
        {children}
    </div>
  )
}

export default Layout