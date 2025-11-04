import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function ProtectedRoute({children, admin=false}){
  const router = useRouter();
  useEffect(()=>{
    if(admin){
      if(!localStorage.getItem('isAdminLoggedIn')) router.replace('/admin-login');
    } else {
      if(!localStorage.getItem('loggedIn')) router.replace('/login');
    }
  },[router]);
  return children;
}
