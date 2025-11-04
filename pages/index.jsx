import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
export default function Home(){ return (
  <ProtectedRoute>
    <Layout>
      <div className="card">
        <h1 className="text-2xl font-bold text-emerald-700">Selamat datang di CerdasUTBK</h1>
        <p className="mt-2 text-gray-600">Platform demo untuk tryout dan materi UTBK.</p>
      </div>
    </Layout>
  </ProtectedRoute>
); }
