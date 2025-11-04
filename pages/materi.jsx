import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
export default function Materi(){ return (<ProtectedRoute><Layout><div className="card"><h1 className="text-2xl font-bold text-emerald-700">Materi</h1><p className="mt-2 text-gray-600">Materi dummy untuk UTBK.</p></div></Layout></ProtectedRoute>); }
