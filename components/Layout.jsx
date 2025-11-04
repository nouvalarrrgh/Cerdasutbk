import StudentSidebar from './StudentSidebar';
import AdminSidebar from './AdminSidebar';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Layout({children, admin=false}) {
  const [dark, setDark] = useState(false);
  useEffect(()=>{ setDark(localStorage.getItem('darkMode')==='true'); document.documentElement.classList.toggle('dark', dark); },[dark]);
  return (
    <div className='flex min-h-screen'>
      {admin ? <AdminSidebar/> : <StudentSidebar/>}
      <main className='flex-1 p-8'>
        <div className='container'>
          <AnimatePresence mode="wait">
            <motion.div key={typeof window!=="undefined"?window.location.pathname:"root"} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.25}}>
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
