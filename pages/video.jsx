import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
export default function Video(){ return (<ProtectedRoute><Layout><div className="card"><h1 className="text-2xl font-bold text-emerald-700">Video</h1><p className="mt-2 text-gray-600">Video pembelajaran dummy.</p></div></Layout></ProtectedRoute>); }
