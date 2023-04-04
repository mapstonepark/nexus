import React from 'react'
import { useSession, signIn, signOut} from 'next-auth/react'


export default function login() {
  
  const { data: session} = useSession();

    if(session){
      return (
        <>
        <div><p>Welcome, {session.user.email}</p></div>
        <button onClick={()=> signOut()}>Sign Out</button>
        </>
      )
      }else {
        return (
          <>
          <div><p>You are not signed in.</p></div>
          <button onClick={()=> signIn()}>Sign in</button>
          
          </>
        )
        
      }
    }
    
  



