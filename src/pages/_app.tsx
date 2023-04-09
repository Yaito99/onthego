import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'

import UserContext , { User } from '../components/userContext';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null);
  return (
  <UserContext.Provider value={{user,setUser}}>
    <Navbar />
    <Component {...pageProps} />
  
  </UserContext.Provider>
  
  )
}
