export default function StatsCard({title,value,icon,color}){ return (
  <div className={`p-4 rounded-2xl text-white ${color} flex justify-between items-center`}>
    <div><h4 className="text-sm opacity-90">{title}</h4><div className="text-2xl font-bold">{value}</div></div>
    <div className="text-3xl opacity-80">{icon}</div>
  </div>
); }
