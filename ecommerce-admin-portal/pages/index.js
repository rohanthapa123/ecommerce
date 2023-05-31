import Layout from "@/components/Layout";
import { signIn, signOut, useSession } from "next-auth/react"

export default function Component() {
  const {data:session} = useSession()
  console.log(session);

  
  return (
    <Layout session={session}>
      
        
      
    </Layout>
  )
}

