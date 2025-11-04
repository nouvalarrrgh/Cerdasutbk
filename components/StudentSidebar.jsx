import Link from 'next/link';
import { useRouter } from 'next/router';

export default function StudentSidebar(){ 
  const router = useRouter();
  const menus = [
    {name:'Beranda', path:'/'},
    {name:'Tryout', path:'/tryout'},
    {name:'Materi', path:'/materi'},
    {name:'Video', path:'/video'},
  ];
  return (
    <aside className="w-64 p-6 bg-white/80 dark:bg-gray-900/80 rounded-r-2xl min-h-screen">
      <h2 className="text-xl font-bold mb-6 text-emerald-700">CerdasUTBK</h2>
      <nav className="space-y-3">
        {menus.map(m=>(
          <Link key={m.path} href={m.path}>
            <a className={`block p-3 rounded-lg ${router.pathname===m.path ? 'bg-emerald-100 text-emerald-800' : 'hover:bg-emerald-50'}`}>{m.name}</a>
          </Link>
        ))}
      </nav>
      <div className="mt-auto text-sm text-gray-500 dark:text-gray-300">© 2025</div>
    </aside>
  );
}
