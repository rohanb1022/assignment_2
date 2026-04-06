import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Search, MapPin, Home, DollarSign, 
  CheckCircle2, ShieldCheck, Key, Link as LinkIcon,
  TrendingUp, Users, PieChart, Smartphone, Globe,
  Shield, ToggleRight, ToggleLeft, Activity, Map, ArrowRight,
  Menu, X, Mail, Lock, Calendar, Phone, Heart, 
  Maximize, Info, User, Briefcase, BarChart3, TrendingUp as Trend,
  PieChart as Pie, Layers, LayoutDashboard, Settings
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, BarChart, Bar, Cell, PieChart as RePieChart, Pie as RePie, Sector 
} from 'recharts';
import './App.css';

// --- DATA MOCKS ---
const properties = [
  { 
    id: 1, 
    title: 'Skyline Penthouse', 
    location: 'Downtown Business District', 
    price: '$2.5M', 
    bhk: '4 BHK', 
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800', 
    verified: true,
    sqft: '4,500',
    year: '2023',
    amenities: ['Private Pool', 'Gym', 'Concierge', 'Smart Home System']
  },
  { 
    id: 2, 
    title: 'Emerald Villas', 
    location: 'Suburban Hills', 
    price: '$850k', 
    bhk: '3 BHK', 
    img: 'https://images.unsplash.com/photo-1600607687931-ce8e004a8c8a?auto=format&fit=crop&q=80&w=800', 
    verified: true,
    sqft: '2,800',
    year: '2021',
    amenities: ['Garden', 'Parking', 'Security', 'Play Area']
  },
  { 
    id: 3, 
    title: 'Marina Residences', 
    location: 'Waterfront Bay', 
    price: '$1.2M', 
    bhk: '2 BHK', 
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', 
    verified: true,
    sqft: '1,500',
    year: '2022',
    amenities: ['Sea View', 'Balcony', 'Clubhouse', 'Yoga Room']
  },
];

const leads = [
  { id: '1', name: 'Alice Johnson', status: 'New', time: '2 hours ago' },
  { id: '2', name: 'Michael Chen', status: 'Contacted', time: '5 hours ago' },
  { id: '3', name: 'Sarah Patel', status: 'Site-Visit', time: '1 day ago' },
  { id: '4', name: 'David Smith', status: 'Closed', time: '2 days ago' },
];

const profitData = [
  { month: 'Jan', revenue: 45000, profit: 32000, expenses: 13000 },
  { month: 'Feb', revenue: 52000, profit: 38000, expenses: 14000 },
  { month: 'Mar', revenue: 48000, profit: 34000, expenses: 14000 },
  { month: 'Apr', revenue: 61000, profit: 45000, expenses: 16000 },
  { month: 'May', revenue: 55000, profit: 40000, expenses: 15000 },
  { month: 'Jun', revenue: 67000, profit: 50000, expenses: 17000 },
];

const commissionData = [
  { name: 'John Doe', amount: 12500, properties: 4 },
  { name: 'Sarah M.', amount: 18200, properties: 6 },
  { name: 'Alex K.', amount: 9400, properties: 3 },
  { name: 'Emma W.', amount: 21000, properties: 7 },
  { name: 'Mark R.', amount: 14800, properties: 5 },
];

const portfolioData = [
  { name: 'Luxury Villas', value: 45, color: '#0ea5e9' },
  { name: 'Apartments', value: 30, color: '#6366f1' },
  { name: 'Commercial', value: 15, color: '#f59e0b' },
  { name: 'Raw Land', value: 10, color: '#10b981' },
];

// --- COMPONENTS ---

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
          <X size={20} />
        </button>
        {children}
      </motion.div>
    </div>
  );
};

const LoginModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <div className="p-8 md:p-10">
      <div className="text-center mb-8">
        <div className="inline-flex p-3 bg-brand-500 rounded-2xl text-white mb-4">
          <Building2 size={28} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
        <p className="text-slate-500 text-sm">Enter your credentials to access EstateFlow</p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1.5 ml-1">
            <label className="text-sm font-semibold text-slate-700">Password</label>
            <a href="#" className="text-sm font-semibold text-brand-600 hover:text-brand-700">Forgot?</a>
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all"
            />
          </div>
        </div>
        <button className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-brand-500/20 transition-all mt-2">
          Sign In
        </button>
      </form>

      <div className="relative my-8 text-center">
        <span className="relative z-10 px-4 bg-white text-xs font-bold text-slate-400 uppercase tracking-widest">Or continue with</span>
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-slate-700 text-sm focus:ring-2 focus:ring-brand-500/10 outline-none">
          <Globe size={18} className="text-brand-500" /> Google
        </button>
        <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-slate-700 text-sm focus:ring-2 focus:ring-brand-500/10 outline-none">
          <User size={18} className="text-slate-900" /> GitHub
        </button>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account? <a href="#" className="font-bold text-brand-600 hover:text-brand-700">Create one</a>
      </p>
    </div>
  </Modal>
);

const PropertyDetailModal = ({ property, isOpen, onClose }) => {
  if (!property) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="overflow-y-auto max-h-[90vh]">
        <div className="relative h-64 md:h-72">
          <img src={property.img} alt={property.title} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
              <CheckCircle2 size={14} className="mr-1" /> Verified
            </span>
            <span className="bg-white/90 backdrop-blur-sm text-brand-600 px-3 py-1 rounded-full text-xs font-extrabold shadow-md">
              {property.price}
            </span>
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{property.title}</h3>
              <div className="flex items-center text-slate-500">
                <MapPin size={16} className="mr-1.5" /> {property.location}
              </div>
            </div>
            <button className="p-2.5 rounded-xl border border-slate-200 text-slate-400 hover:text-rose-500 hover:bg-rose-50 hover:border-rose-100 transition-all">
              <Heart size={20} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-100">
              <div className="text-xs text-slate-400 font-bold uppercase mb-1">Area</div>
              <div className="text-slate-900 font-bold flex items-center justify-center gap-1">
                <Maximize size={14} className="text-brand-500" /> {property.sqft} <span className="text-[10px]">ft²</span>
              </div>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-100">
              <div className="text-xs text-slate-400 font-bold uppercase mb-1">Built</div>
              <div className="text-slate-900 font-bold flex items-center justify-center gap-1">
                <Calendar size={14} className="text-brand-500" /> {property.year}
              </div>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-100">
              <div className="text-xs text-slate-400 font-bold uppercase mb-1">Layout</div>
              <div className="text-slate-900 font-bold flex items-center justify-center gap-1">
                <Home size={14} className="text-brand-500" /> {property.bhk}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Info size={16} className="text-brand-500" /> Key Amenities
            </h4>
            <div className="flex flex-wrap gap-2">
              {property.amenities?.map((amenity, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 font-medium">
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-brand-500/20">
              <Calendar size={18} /> Schedule Visit
            </button>
            <button className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl transition-all">
              <Phone size={18} /> Contact Agent
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const Sidebar = ({ activeSection, setActiveSection, isMobileMenuOpen, setMobileMenuOpen, onLoginClick, role, setRole }) => {
  const userLinks = [
    { id: 'hero', label: 'Home & Search', icon: <Home size={18} /> },
    { id: 'properties', label: 'Featured Properties', icon: <Layers size={18} /> },
    { id: 'security', label: 'Security Center', icon: <Shield size={18} /> },
  ];

  const adminLinks = [
    { id: 'admin-overview', label: 'Admin Dashboard', icon: <LayoutDashboard size={18} /> },
    { id: 'profit-analytics', label: 'Profit Analysis', icon: <Trend size={18} /> },
    { id: 'commissions', label: 'Commissions', icon: <DollarSign size={18} /> },
    { id: 'crm', label: 'CRM Tracker', icon: <Activity size={18} /> },
  ];

  const links = role === 'admin' ? adminLinks : userLinks;

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-slate-900 text-white p-4 z-[60] flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Building2 className="text-brand-500" />
          <span>EstateFlow</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Container */}
      <div className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 fixed md:sticky top-0 left-0 h-screen w-72 bg-slate-900 text-slate-300 p-6 flex flex-col z-50`}>
        <div className="hidden md:flex items-center gap-3 font-bold text-2xl text-white mb-8 pb-6 border-b border-white/5">
          <div className="p-2 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl shadow-lg shadow-brand-500/20"><Building2 size={24} /></div>
          <span>EstateFlow</span>
        </div>
        
        <div className="flex-1 mt-16 md:mt-0 space-y-8 overflow-y-auto">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4 font-bold">Portal Navigation</h3>
            <nav className="flex flex-col gap-1.5">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === link.id 
                      ? 'bg-brand-600 text-white shadow-xl shadow-brand-500/20 translate-x-2' 
                      : 'hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className={`${activeSection === link.id ? 'text-white' : 'text-slate-500'}`}>{link.icon}</span>
                  <span className="font-semibold text-sm">{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Role Switcher */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4 font-bold text-center">Access Role</h3>
            <div className="flex bg-slate-950/50 p-1 rounded-xl gap-1">
              <button 
                onClick={() => setRole('user')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${role === 'user' ? 'bg-brand-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
              >
                USER
              </button>
              <button 
                onClick={() => setRole('admin')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${role === 'admin' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
              >
                ADMIN
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4 pt-6 border-t border-white/5">
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 ring-1 ring-white/5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-500 to-indigo-500 flex items-center justify-center text-white font-extrabold shadow-inner">
              {role === 'admin' ? 'A' : 'P'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-white truncate capitalize">{role} Account</div>
              <div className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">Verified Pro</div>
            </div>
            <Settings size={16} className="text-slate-600 hover:text-brand-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </>
  );
};

const HeroSection = () => (
  <section id="hero" className="min-h-[70vh] flex flex-col justify-center relative overflow-hidden rounded-3xl p-8 md:p-12 mb-20 bg-slate-900 border border-slate-800 mt-8">
    <div className="absolute inset-0 opacity-40">
      <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600" alt="Luxury Real Estate" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
    </div>
    
    <div className="relative z-10 max-w-2xl text-white">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="px-4 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-sm font-semibold border border-brand-500/30 backdrop-blur-md mb-6 inline-block uppercase tracking-wider">
          Next-Gen Real Estate Platform
        </span>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Find your perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400">living space</span> organically.
        </h1>
        <p className="text-lg text-slate-300 mb-10">Discover premium properties with verified listings, direct builder connections, and transparent pricing models.</p>
        
        {/* Search Bar */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-2xl flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center bg-white/5 rounded-xl px-4 py-3">
            <MapPin className="text-brand-400 mr-3" size={20} />
            <input type="text" placeholder="Location..." className="bg-transparent border-none outline-none text-white w-full placeholder:text-slate-400" />
          </div>
          <div className="flex-[0.8] flex items-center bg-white/5 rounded-xl px-4 py-3">
            <Home className="text-brand-400 mr-3" size={20} />
            <select className="bg-transparent border-none outline-none text-slate-300 w-full appearance-none">
              <option value="" className="text-slate-900">Type</option>
              <option value="apartment" className="text-slate-900">Apartment</option>
              <option value="villa" className="text-slate-900">Villa</option>
            </select>
          </div>
          <button className="bg-brand-600 hover:bg-brand-500 transition-colors text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center">
            <Search size={20} className="mr-2" /> Search
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeaturedProperties = ({ onPropertyClick }) => (
  <section id="properties" className="mb-24 scroll-mt-20">
    <div className="flex items-end justify-between mb-10">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Properties</h2>
        <p className="text-slate-500">Curated verified listings from top developers.</p>
      </div>
      <button className="text-brand-600 font-bold flex items-center hover:text-brand-700 transition-colors hidden md:flex">
        View All <ArrowRight size={18} className="ml-2" />
      </button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((prop, idx) => (
        <motion.div 
          key={prop.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          onClick={() => onPropertyClick(prop)}
          className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group cursor-pointer"
        >
          <div className="relative h-64 overflow-hidden">
            <img src={prop.img} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
              <CheckCircle2 size={14} className="mr-1" /> Verified
            </div>
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-2xl font-extrabold border border-white shadow-lg">
              {prop.price}
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-1">
              <div className="text-xs text-brand-600 font-extrabold uppercase tracking-widest">{prop.bhk}</div>
              <div className="text-xs text-slate-400 font-bold">{prop.sqft} sq ft</div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{prop.title}</h3>
            <div className="flex items-center text-slate-500 text-sm">
              <MapPin size={16} className="mr-2 text-slate-400" /> {prop.location}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const RevenueModel = () => (
  <section id="revenue" className="mb-24 scroll-mt-20">
    <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 italic tracking-tight">For Partners</h2>
        <p className="text-slate-400 text-lg">Sustainable revenue streams connecting transparency with growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {[
          { icon: <Building2 size={32} />, title: 'Subscription', desc: 'Premium listing slots for verified builders and exclusive visibility packages with real-time analytics.' },
          { icon: <Users size={32} />, title: 'Lead Gen', desc: 'Micro-transaction fee for highly qualified, verified buyer connections to agents with deep interest tracking.' },
          { icon: <PieChart size={32} />, title: 'Value-Add', desc: 'Commissions on integrated financial services like legal assistance and mortgage processing.' },
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.08)' }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center transition-all"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-600/20 mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const MarketingStrategy = () => (
  <section id="marketing" className="mb-24 scroll-mt-20">
    <h2 className="text-3xl font-bold text-slate-900 mb-2">Growth Engine</h2>
    <p className="text-slate-500 mb-10 italic">Strategic user acquisition and hyper-local brand positioning.</p>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="flex flex-col justify-center gap-6">
        {[
          { icon: <Globe className="text-blue-500" />, bg: 'bg-blue-50', title: 'SEO & Content Engine', desc: 'Data-driven real estate market trend blogs that dominate local organic search intent.' },
          { icon: <Smartphone className="text-pink-500" />, bg: 'bg-pink-50', title: 'Social Proof & Influencers', desc: 'High-production virtual walkthroughs with lifestyle influencers to build aspirational trust.' },
          { icon: <Map className="text-orange-500" />, bg: 'bg-orange-50', title: 'Hyper-local Ads', desc: 'Hyper-precision geo-targeted Google/Meta campaigns focusing on high-growth corridors.' }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="flex p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
              {item.icon}
            </div>
            <div className="ml-6">
              <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="bg-slate-100 rounded-[3rem] p-8 border border-slate-200 flex items-center justify-center relative overflow-hidden min-h-[400px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(14,165,233,0.1),transparent)]"></div>
        <div className="relative z-10 w-full max-w-sm text-center">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-72 h-72 border-2 border-dashed border-brand-300 rounded-full mx-auto flex items-center justify-center"
          >
            <div className="w-56 h-56 bg-brand-500/5 rounded-full flex items-center justify-center">
               <div className="w-36 h-36 bg-brand-600 text-white rounded-full flex flex-col items-center justify-center shadow-2xl shadow-brand-600/40 transform hover:scale-105 transition-transform">
                  <TrendingUp size={40} className="mb-2" />
                  <span className="font-extrabold text-xs uppercase tracking-tight">Rapid Growth</span>
               </div>
            </div>
          </motion.div>
          
          {/* Floating UI stats */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 font-bold text-slate-800 text-xs">
            CTR <span className="text-emerald-500">+12%</span>
          </motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 -left-6 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 font-bold text-slate-800 text-xs">
            CPA <span className="text-brand-500">-18%</span>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const CRMStrategy = () => {
  const [autoFollowUp, setAutoFollowUp] = useState(true);

  return (
    <section id="crm" className="mb-24 scroll-mt-20">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Agent Dashboard</h2>
      <p className="text-slate-500 mb-10">Proprietary CRM tools for lead optimization and conversion tracking.</p>
      
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-100 p-6 md:p-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand-500 text-white rounded-2xl shadow-lg shadow-brand-500/20"><Activity size={24} /></div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Lead Tracker</h3>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Live Pipeline Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-brand-500/50">
            <span className="text-sm font-bold text-slate-600">Automated Follow-up</span>
            <button onClick={() => setAutoFollowUp(!autoFollowUp)} className={`text-3xl transition-colors ${autoFollowUp ? 'text-brand-500' : 'text-slate-200'}`}>
              {autoFollowUp ? <ToggleRight /> : <ToggleLeft />}
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          <div className="col-span-2 p-6 md:p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="text-xs uppercase text-slate-400 border-b border-slate-100">
                    <th className="pb-4 font-bold tracking-widest pl-2">Client</th>
                    <th className="pb-4 font-bold tracking-widest">Status</th>
                    <th className="pb-4 font-bold tracking-widest text-right pr-2">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="py-5 pl-2">
                        <div className="font-bold text-slate-800">{lead.name}</div>
                        <div className="text-xs text-slate-400">{lead.time}</div>
                      </td>
                      <td className="py-5">
                        <span className={`px-4 py-1.5 rounded-xl text-xs font-extrabold ${
                          lead.status === 'New' ? 'bg-blue-100 text-blue-600' :
                          lead.status === 'Contacted' ? 'bg-amber-100 text-amber-600' :
                          lead.status === 'Site-Visit' ? 'bg-purple-100 text-purple-600' :
                          'bg-emerald-100 text-emerald-600'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-5 text-right pr-2">
                        <button className="bg-slate-100 group-hover:bg-brand-600 group-hover:text-white px-4 py-2 rounded-xl text-xs font-bold text-slate-600 transition-all">
                          Action
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="p-8 bg-slate-50/30">
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Map size={16} className="text-brand-500" /> Interest Hotspots
            </h4>
            <div className="relative h-56 bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-inner p-4 flex items-center justify-center">
              {/* Abstract Map UI */}
              <div className="w-full h-full relative bg-slate-50 rounded-2xl overflow-hidden shadow-sm">
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500/80 rounded-full animate-ping"></div>
                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                
                <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-brand-500/80 rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-brand-500 rounded-full shadow-lg"></div>
                
                <div className="absolute top-1/2 right-1/2 w-4 h-4 bg-emerald-500/80 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-lg"></div>
                
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>
                <div className="absolute inset-0 border-[1.5rem] border-slate-50/50 pointer-events-none"></div>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-6 leading-relaxed text-center font-medium">Heatmap shows localized buyer intent based on real-time activity metrics.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AdminDashboard = () => (
  <div className="space-y-12">
    {/* Admin Top Metrics */}
    <div id="admin-overview" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-mt-24">
      {[
        { label: 'Total Revenue', value: '$248.5k', trend: '+12.5%', icon: <DollarSign className="text-emerald-500" />, color: 'emerald' },
        { label: 'Net Profit', value: '$84.2k', trend: '+8.2%', icon: <Briefcase className="text-brand-500" />, color: 'brand' },
        { label: 'Avg. Commission', value: '5.2%', trend: '-1.4%', icon: <BarChart3 className="text-violet-500" />, color: 'violet' },
        { label: 'Active Leads', value: '1,240', trend: '+24%', icon: <Users className="text-amber-500" />, color: 'amber' },
      ].map((card, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group"
        >
          <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-${card.color}-500/5 rounded-full blur-2xl group-hover:bg-${card.color}-500/10 transition-all duration-500`}></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="p-3 bg-slate-50 rounded-2xl">{card.icon}</div>
            <span className={`text-xs font-bold ${card.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'} bg-emerald-50 px-2 py-1 rounded-lg`}>
              {card.trend}
            </span>
          </div>
          <div className="relative z-10">
            <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{card.label}</h4>
            <div className="text-2xl font-black text-slate-900">{card.value}</div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Profit Section - Advanced Area Chart */}
    <section id="profit-analytics" className="scroll-mt-24">
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black text-white mb-2">Profit Momentum</h2>
            <p className="text-slate-400">Deep dive into revenue vs. overhead costs over the fiscal half.</p>
          </div>
          <div className="flex gap-3">
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-500"></div>
                <span className="text-xs font-bold text-slate-300">Revenue</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                <span className="text-xs font-bold text-slate-300">Profit</span>
             </div>
          </div>
        </div>

        <div className="h-[400px] w-full relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={profitData}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v/1000}k`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#0ea5e9" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
              <Area type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorProf)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>

    {/* Commission & Distribution */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <section id="commissions" className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl scroll-mt-24">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
           <DollarSign className="text-brand-600 bg-brand-50 p-2 rounded-xl" size={32} />
           Agent Commissions
        </h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={commissionData}>
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis hide />
              <Tooltip cursor={{fill: 'rgba(14, 165, 233, 0.05)'}} contentStyle={{ borderRadius: '12px' }} />
              <Bar dataKey="amount" radius={[8, 8, 0, 0]} barSize={40}>
                {commissionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#0ea5e9' : '#6366f1'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8 space-y-4">
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Top Performers</h4>
          {commissionData.slice(0, 3).map((agent, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-slate-700 border border-slate-200">
                  {agent.name.charAt(0)}
                </div>
                <span className="text-sm font-bold text-slate-800">{agent.name}</span>
              </div>
              <span className="text-sm font-black text-brand-600">${agent.amount.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 shadow-xl overflow-hidden relative">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
           <Pie className="text-emerald-400 bg-emerald-500/10 p-2 rounded-xl" size={32} />
           Asset Allocation
        </h3>
        <div className="h-[250px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <RePieChart>
              <RePie
                data={portfolioData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={8}
                dataKey="value"
              >
                {portfolioData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </RePie>
              <Tooltip />
            </RePieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4">
          {portfolioData.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-3xl border border-white/5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.name}</div>
                <div className="text-white font-bold">{item.value}%</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

const SecurityCenter = () => (
  <section id="security" className="mb-24 scroll-mt-24">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Security Center</h2>
        <p className="text-slate-500 mb-8 italic">Protocols designed for institutional-grade reliability.</p>
        
        <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -right-8 -top-8 opacity-5">
            <Shield size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl"><ShieldCheck size={24} /></div>
              <h4 className="font-bold text-lg">System Integrity</h4>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Encryption', val: 'AES-256' },
                { label: 'Cloud Security', val: 'VPC-Isolated' },
                { label: 'Title Audit', val: 'Blockchain' }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center group">
                  <span className="text-slate-400 text-sm">{stat.label}</span>
                  <span className="font-mono text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-lg text-xs">{stat.val}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-slate-800 flex items-center justify-center">
              <div className="animate-pulse w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { icon: <Key size={26} className="text-brand-500" />, title: 'Multi-Factor Auth', desc: 'Mandatory 2FA protocols for every financial interaction, ensuring your data stays yours.' },
          { icon: <Shield size={26} className="text-violet-500" />, title: 'Data Encryption', desc: 'Military-grade end-to-end encryption for all sensitive user documents and communications.' },
          { icon: <LinkIcon size={26} className="text-emerald-500" />, title: 'Blockchain Ledger', desc: 'Trustless verification of property titles prevents fractional ownership fraud and title spoofing.' },
          { icon: <CheckCircle2 size={26} className="text-blue-500" />, title: 'Verified Identity', desc: 'Deep-vetting process for every builder on the platform with background financial audits.' }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all"
          >
            <div className="mb-6">{item.icon}</div>
            <h4 className="font-extrabold text-slate-900 mb-2">{item.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [role, setRole] = useState('user'); // 'user' or 'admin'

  return (
    <div className="flex min-h-screen bg-[#fdfdfd] font-sans selection:bg-brand-500 selection:text-white pb-20 md:pb-0">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        isMobileMenuOpen={isMobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onLoginClick={() => setLoginModalOpen(true)}
        role={role}
        setRole={setRole}
      />
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16 pt-24 md:pt-16 overflow-x-hidden">
        {role === 'user' ? (
          <>
            <HeroSection />
            <FeaturedProperties onPropertyClick={(prop) => setSelectedProperty(prop)} />
            <RevenueModel />
            <MarketingStrategy />
            <SecurityCenter />
          </>
        ) : (
          <AdminDashboard />
        )}
        
        <div id="crm" className={role === 'admin' ? 'mt-24 scroll-mt-24' : 'hidden'}>
          <CRMStrategy />
        </div>
        
        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-slate-100 text-center">
          <div className="flex items-center justify-center gap-2 font-bold text-slate-800 mb-4">
            <Building2 className="text-brand-500" size={24} /> <span>EstateFlow</span>
          </div>
          <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Academic Assignment Presentation • {new Date().getFullYear()}</p>
        </footer>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <LoginModal 
            isOpen={isLoginModalOpen} 
            onClose={() => setLoginModalOpen(false)} 
          />
        )}
        {selectedProperty && (
          <PropertyDetailModal 
            property={selectedProperty} 
            isOpen={!!selectedProperty} 
            onClose={() => setSelectedProperty(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
