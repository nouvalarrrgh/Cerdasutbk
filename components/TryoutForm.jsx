import { useState, useEffect } from "react";
export default function TryoutForm({ onSave, editData, onCancel }) {
  const [form, setForm] = useState({ name: "", peserta: "", nilai: "", status: "Aktif" });
  useEffect(() => { if (editData) setForm(editData); }, [editData]);
  const handleChange = (e) => { const { name, value } = e.target; setForm((p)=>({...p,[name]:value})); };
  const handleSubmit = (e) => { e.preventDefault(); if(!form.name) return alert('nama wajib'); onSave(form); setForm({name:'',peserta:'',nilai:'',status:'Aktif'}); };
  return (
    <form onSubmit={handleSubmit} className="card">
      <h3 className="text-lg font-semibold mb-3">{editData ? 'Edit Tryout' : 'Tambah Tryout'}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nama Tryout" className="p-2 border rounded"/>
        <input name="peserta" value={form.peserta} onChange={handleChange} placeholder="Peserta" className="p-2 border rounded"/>
        <input name="nilai" value={form.nilai} onChange={handleChange} placeholder="Nilai" className="p-2 border rounded"/>
        <select name="status" value={form.status} onChange={handleChange} className="p-2 border rounded">
          <option>Aktif</option><option>Selesai</option>
        </select>
      </div>
      <div className="mt-3 flex gap-2 justify-end">
        {editData && <button type="button" onClick={onCancel} className="px-3 py-2 bg-gray-300 rounded">Batal</button>}
        <button className="px-4 py-2 bg-emerald-600 text-white rounded">Simpan</button>
      </div>
    </form>
  );
}
