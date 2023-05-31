import Layout from '@/components/Layout'
import { useSession } from 'next-auth/react'
import React from 'react'

const setting = () => {
  
  const {data:session} = useSession()

  return (
    <Layout>
      <div className='flex  w-full h-screen ]'>
        <div className=' w-[70%]'>
          <form>
          <div class="relative z-0 px-2 my-5 w-full mb-6 group">
              <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none  peer" placeholder=" " required value={session?.user?.email} />
              <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
          <div class="relative z-0 px-2 my-5 w-full mb-6 group">
              <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none  peer" placeholder=" " required value={session?.user?.name.toUpperCase()} />
              <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
          </div>
          </form>
        </div>
        <div className=' w-[30%] border border-solid border-l-2 border-r-0 border-y-0  border-black'>
          <img src={session?.user?.image} alt='dp' className='rounded-[50%] m-auto mt-16'/>


        </div>
      </div>
    </Layout>
  )
}

export default setting