import Layout from "@/components/Layout";
import { signIn, signOut, useSession } from "next-auth/react"

export default function Component() {
  const {data:session} = useSession()
  console.log(session);

  if(session){
    return (
      <Layout>
        <div className=" text-blue-900 flex justify-between p-4 text-lg font-medium w-full">
        <p>Hello, {session.user.name} </p>
        <div className="bg-gray-100 rounded-xl gap-1">
          <img src={session.user.image}/>
          <span className="px-2">{session.user.email}</span>
        </div>
      </div>
        
        <button onClick={()=> signOut()}>Sign Out</button>
      </Layout>
    )
  }
  return (
    <>
      <div className=" text-blue-900 flex justify-center text-lg font-medium w-full">
        <p>Sign IN</p><br/>
      </div> 
      <button onClick={()=> signIn('google')}>Sign In</button>
    </>
  )
}

