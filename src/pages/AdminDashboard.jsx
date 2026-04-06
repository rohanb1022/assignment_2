import React from 'react';
import { 
  DollarSign, TrendingUp, Users, Layers, FileText, Globe, 
  PieChart as PieChartIcon, Activity, ArrowUpRight, ArrowDownRight,
  LayoutDashboard, Search, Bell
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, BarChart, Bar, Cell, PieChart as RePieChart, Pie as RePie,
  Legend
} from 'recharts';
import Card from '../components/ui/Card';
import { marketingData, revenueStreams } from '../data/mockData';

const AdminDashboard = () => (
  <div className="p-6 md:p-12 max-w-[1600px] mx-auto space-y-12 bg-slate-50/30 min-h-screen">
    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LayoutDashboard size={18} className="text-blue-600" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Enterprise Control</span>
        </div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Executive Overview</h1>
        <p className="text-slate-500 font-medium mt-1">Real-time global metrics for EstateFlow Heritage.</p>
      </div>
      
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="flex-1 md:w-64 bg-white border border-slate-200 rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-sm focus-within:ring-2 ring-blue-500/20 transition-all">
          <Search size={18} className="text-slate-400" />
          <input type="text" placeholder="Search metrics..." className="bg-transparent outline-none text-sm w-full font-medium" />
        </div>
        <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm relative">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
        </button>
        <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl shadow-slate-900/10 hover:bg-blue-600 hover:-translate-y-0.5 transition-all flex items-center gap-2">
          <FileText size={18} /> Export <span className="hidden sm:inline">Data</span>
        </button>
      </div>
    </div>

    {/* Top Stats */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { label: 'Gross Revenue', value: '$2.48M', trend: '+12.5%', isUp: true, icon: <DollarSign className="text-blue-600" />, color: 'blue' },
        { label: 'Active Investors', value: '1,240', trend: '+8.2%', isUp: true, icon: <Users className="text-indigo-600" />, color: 'indigo' },
        { label: 'Listing Inventory', value: '8,420', trend: '-2.4%', isUp: false, icon: <Layers className="text-purple-600" />, color: 'purple' },
        { label: 'System Health', value: '99.9%', trend: 'Stable', isUp: true, icon: <Activity className="text-emerald-600" />, color: 'emerald' },
      ].map((s, i) => (
        <Card key={i} className="p-8 group hover:-translate-y-1 transition-all duration-300 border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5">
          <div className="flex justify-between items-start mb-6">
            <div className={`p-4 bg-${s.color}-50 rounded-2xl group-hover:bg-${s.color}-600 group-hover:text-white transition-all duration-300`}>
              {React.cloneElement(s.icon, { size: 24, className: 'transition-colors' })}
            </div>
            <div className={`flex items-center gap-1 text-xs font-black px-2.5 py-1 rounded-full ${s.isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
              {s.isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
              {s.trend}
            </div>
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.15em] mb-1">{s.label}</p>
          <p className="text-3xl font-black text-slate-900 tracking-tight">{s.value}</p>
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Marketing Strategies Dashboard */}
      <Card className="lg:col-span-2 p-10 border-slate-100 shadow-sm">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Globe className="text-blue-600" size={24} /> 
              Global Marketing reach
            </h3>
            <p className="text-slate-400 text-sm mt-1">Cross-platform engagement analysis.</p>
          </div>
          <select className="bg-slate-50 border-none rounded-xl text-xs font-black px-4 py-2 outline-none">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={marketingData} barGap={12}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fontWeight: 800, fill: '#64748b' }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fontWeight: 800, fill: '#64748b' }} 
              />
              <Tooltip 
                cursor={{ fill: '#f8fafc' }} 
                contentStyle={{ 
                  borderRadius: '24px', 
                  border: 'none', 
                  boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                  padding: '20px'
                }} 
              />
              <Bar dataKey="engagement" radius={[12, 12, 0, 0]} barSize={40}>
                {marketingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 2 ? '#2563eb' : '#e2e8f0'} className="hover:fill-blue-500 transition-all duration-300" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Revenue Model Breakdown */}
      <Card className="p-10 border-slate-100 shadow-sm flex flex-col">
        <div className="mb-10">
          <h3 className="text-xl font-bold flex items-center gap-3">
            <PieChartIcon className="text-indigo-600" size={24} /> 
            Revenue Streams
          </h3>
          <p className="text-slate-400 text-sm mt-1">Diversified income allocation.</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RePieChart>
                <RePie
                  data={revenueStreams}
                  innerRadius={85}
                  outerRadius={115}
                  paddingAngle={10}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {revenueStreams.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </RePie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full space-y-4 mt-8">
            {revenueStreams.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{item.name}</span>
                </div>
                <span className="text-sm font-black text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  </div>
);

export default AdminDashboard;

