import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AdminSidebar(){
  const router = useRouter();
  const menus = [
    {name:'Admin Dashboard', path:'/admin'},
    {name:'Manajemen Tryout', path:'/admin-tryout'},
  ];
  const logout = ()=>{ localStorage.removeItem('isAdminLoggedIn'); router.push('/admin-login'); }
  return (
    <aside className="w-64 p-6 bg-white/90 dark:bg-gray-900/90 min-h-screen border-r">
      <h2 className="text-2xl font-bold text-emerald-700 mb-6">CerdasUTBK Admin</h2>
      <nav className="space-y-3">
        {menus.map(m=>(
          <Link key={m.path} href={m.path}>
            <a className={`block p-3 rounded-lg ${router.pathname===m.path ? 'bg-emerald-100 text-emerald-800' : 'hover:bg-emerald-50'}`}>{m.name}</a>
          </Link>
        ))}
      </nav>
      <button onClick={logout} className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg">Logout</button>
    </aside>
  );
}
