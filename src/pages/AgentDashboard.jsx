import React, { useState } from 'react';
import { 
  Zap, MessageSquare, Award, Target, TrendingUp, 
  Search, Filter, MoreHorizontal, CheckCircle2, AlertCircle,
  Building, Users, Clock, DollarSign, Plus, ArrowUpRight,
  Calendar, MapPin, Star, X, Home, BadgeDollarSign, Map,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { properties, agentLeads, agentPerformance } from '../data/mockData';

const AgentDashboard = () => {
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const Modal = ({ isOpen, onClose, title, children }) => (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase italic">{title}</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-200 rounded-xl transition-colors text-slate-400 hover:text-slate-900"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8 max-h-[70vh] overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-6 md:p-12 max-w-7xl mx-auto space-y-10 bg-slate-50/50 min-h-screen pt-24"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Executive Workspace</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            Agent Dashboard <Badge className="bg-blue-100 text-blue-700 border-none px-3 py-1 text-[10px]">Verified Pro</Badge>
          </h1>
          <p className="text-slate-500 font-medium mt-1 text-sm">Manage your listings, track leads, and monitor performance in real-time.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowScheduleModal(true)}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-slate-600 font-bold text-sm hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm"
          >
            <Calendar size={18} /> Schedule
          </button>
          <button 
            onClick={() => setShowPropertyModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10"
          >
            <Plus size={18} /> List Property
          </button>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Listings', value: '12', icon: Building, color: 'blue', change: '+2 match' },
          { label: 'New Leads', value: '24', icon: Users, color: 'emerald', change: '+5 today' },
          { label: 'Est. Commission', value: '$42.5k', icon: DollarSign, color: 'amber', change: '85% of target' },
          { label: 'Avg. Response', value: '12m', icon: Clock, color: 'purple', change: '-4m faster' },
        ].map((stat, i) => (
          <motion.div variants={itemVariants} key={i}>
            <Card className="p-6 border-none shadow-sm bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 group-hover:scale-110 transition-transform`}>
                  <stat.icon size={24} />
                </div>
                <span className={`text-[10px] font-black px-2 py-1 rounded-lg bg-${stat.color}-50 text-${stat.color}-700 uppercase`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">{stat.value}</h3>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Chart */}
        <Card className="lg:col-span-2 p-10 border-none shadow-sm bg-white overflow-hidden relative">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Performance Analytics</h3>
              <p className="text-slate-400 text-xs font-medium">Monthly viewings vs successfully closed leads.</p>
            </div>
            <select className="bg-slate-50 border-none text-xs font-bold px-4 py-2 rounded-xl outline-none ring-1 ring-slate-100">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={agentPerformance}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} 
                />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px'}}
                />
                <Area type="monotone" dataKey="leads" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
                <Area type="monotone" dataKey="viewings" stroke="#10b981" strokeWidth={3} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Lead Inbox */}
        <Card className="p-8 border-none shadow-sm bg-white overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
               <MessageSquare className="text-blue-600" size={20} /> Leads Inbox
            </h3>
            <button className="text-[10px] font-black text-blue-600 uppercase hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            {agentLeads.map((lead) => (
              <div key={lead.id} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group border border-transparent hover:border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-black text-sm shrink-0">
                  {lead.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors truncate">{lead.name}</h4>
                    <span className="text-[10px] text-slate-400 font-bold ml-2 whitespace-nowrap">{lead.date}</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate mb-2">{lead.property}</p>
                  <div className="flex gap-2">
                    <Badge className="bg-slate-100 text-slate-600 border-none text-[8px] px-2 py-0.5">{lead.status}</Badge>
                    <Badge className="bg-blue-50 text-blue-700 border-none text-[8px] px-2 py-0.5">{lead.type}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Featured Properties / Current Management */}
      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-black text-slate-900">Your Managed Properties</h3>
            <p className="text-slate-500 font-medium text-sm">Portfolio overview and listing health scores.</p>
          </div>
          <div className="flex gap-3">
             <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-blue-600 transition-all"><Search size={18} /></button>
             <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-blue-600 transition-all"><Filter size={18} /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {properties.map((prop) => (
            <motion.div variants={itemVariants} key={prop.id}>
              <Card className="group border-none shadow-sm bg-white overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img src={prop.img} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-white/90 backdrop-blur-md text-slate-900 border-none shadow-sm">{prop.status}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-amber-500"><Star size={14} fill="currentColor" /></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-extrabold text-lg text-slate-800 leading-tight group-hover:text-blue-600 transition-colors uppercase tracking-tighter">{prop.title}</h4>
                    <span className="text-blue-600 font-black text-lg">{prop.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-xs font-bold mb-6">
                    <MapPin size={12} /> {prop.location}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pb-6 border-b border-slate-50 mb-6 font-bold text-xs">
                     <div className="text-slate-500 uppercase tracking-widest text-[9px]">Type: <span className="text-slate-800">{prop.type}</span></div>
                     <div className="text-slate-500 uppercase tracking-widest text-[9px]">Sqft: <span className="text-slate-800">{prop.sqft}</span></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                       {[...Array(3)].map((_, i) => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] font-black uppercase">U{i}</div>
                       ))}
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[8px] font-black text-white">+8</div>
                    </div>
                    <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400"><MoreHorizontal size={20} /></button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={showPropertyModal} 
        onClose={() => setShowPropertyModal(false)} 
        title="List New Property"
      >
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Property Title</label>
              <div className="relative">
                <Home className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input className="w-full bg-slate-50 border-none py-4 px-12 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-bold" placeholder="e.g. Sunset Heights" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Price (USD)</label>
              <div className="relative">
                <BadgeDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input className="w-full bg-slate-50 border-none py-4 px-12 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-bold" placeholder="e.g. 250,000" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Location</label>
              <div className="relative">
                <Map className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input className="w-full bg-slate-50 border-none py-4 px-12 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-bold" placeholder="e.g. Beverly Hills, CA" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Type</label>
              <select className="w-full bg-slate-50 border-none py-4 px-6 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-bold appearance-none">
                <option>Apartment</option>
                <option>Villa</option>
                <option>Commercial</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Description</label>
            <textarea className="w-full bg-slate-50 border-none py-4 px-6 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none font-bold h-32" placeholder="Describe the property details..." />
          </div>
          <button 
            type="button"
            onClick={() => setShowPropertyModal(false)}
            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10"
          >
            Submit Listing
          </button>
        </form>
      </Modal>

      <Modal 
        isOpen={showScheduleModal} 
        onClose={() => setShowScheduleModal(false)} 
        title="Event Calendar"
      >
        <div className="space-y-8">
          <div className="flex justify-between items-center bg-slate-900 text-white p-6 rounded-[2rem]">
            <button className="p-2 hover:bg-white/10 rounded-xl transition-colors"><ChevronLeft size={20} /></button>
            <div className="text-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Viewing Schedule</p>
              <h4 className="text-xl font-bold italic">April 2026</h4>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-xl transition-colors"><ChevronRight size={20} /></button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {['S','M','T','W','T','F','S'].map(d => (
              <div key={d} className="text-center text-[10px] font-black text-slate-400 py-2">{d}</div>
            ))}
            {[...Array(30)].map((_, i) => (
              <div 
                key={i} 
                className={`aspect-square flex items-center justify-center rounded-2xl text-xs font-bold transition-all cursor-pointer border-2 border-transparent
                  ${i === 14 ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-slate-50 text-slate-600 hover:border-slate-200'}
                `}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Today's Agenda</h5>
            <div className="p-5 bg-blue-50 border-l-4 border-blue-600 rounded-2xl flex justify-between items-center">
              <div>
                <p className="text-sm font-bold text-slate-900">Penthouse Viewing</p>
                <p className="text-[10px] text-blue-600 font-black uppercase">2:30 PM • David Wilson</p>
              </div>
              <Clock size={20} className="text-blue-600" />
            </div>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
};

export default AgentDashboard;

