import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ArrowRight, Heart, Star, Navigation } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { properties } from '../data/mockData';

const BuyerHero = () => (
  <section className="relative h-[600px] flex items-center justify-center overflow-hidden rounded-[4rem] mb-20 mx-6 shadow-2xl">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover brightness-[0.4] scale-105" 
        alt="Hero Luxury"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20"></div>
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-5xl">
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-8 backdrop-blur-md">
          <Navigation size={14} className="text-blue-400" />
          <span className="text-[10px] font-black text-blue-300 uppercase tracking-[0.2em]">Global Curated Inventory</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mt-4 mb-8 leading-[1.05] tracking-tight">
          Find your next <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300 italic">architectural masterpiece.</span>
        </h1>
        
        <div className="glass p-3 rounded-[2.5rem] flex flex-col md:flex-row gap-3 max-w-4xl mx-auto border-white/10 shadow-3xl">
          <div className="flex-1 flex items-center bg-white/5 rounded-[1.5rem] px-6 py-4 border border-white/5 group focus-within:border-blue-500/50 transition-all">
            <Search className="text-blue-400 mr-3 group-focus-within:scale-110 transition-transform" size={20} />
            <input 
              type="text" 
              placeholder="Search by city, neighborhood, or building name..." 
              className="bg-transparent text-white outline-none w-full placeholder:text-slate-500 font-medium" 
            />
          </div>
          <button className="bg-blue-600 hover:bg-white hover:text-blue-600 text-white font-black px-12 py-4 rounded-[1.5rem] transition-all shadow-xl shadow-blue-600/20 active:scale-95 text-lg">
            Explore Collections
          </button>
        </div>
        
        <div className="mt-12 flex justify-center gap-10 text-white/60">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-widest">240 New Listings Today</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            <span className="text-xs font-bold uppercase tracking-widest">Verified by EstateFlow</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const PropertyGrid = () => (
  <section className="px-10 mb-32 max-w-7xl mx-auto">
    <div className="flex items-end justify-between mb-16 px-2">
      <div>
        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight italic-headings">The Heritage Collection</h2>
        <p className="text-slate-500 text-lg">Hand-picked premium assets for discerning global investors.</p>
      </div>
      <button className="group flex items-center gap-3 text-blue-600 font-black text-sm uppercase tracking-widest hover:text-slate-900 transition-colors">
        View All Portfolio <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
      </button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {properties.map((prop) => (
        <motion.div 
          key={prop.id} 
          whileHover={{ y: -12 }} 
          className="group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="h-full flex flex-col rounded-[2.5rem] overflow-hidden border-slate-100 hover:border-blue-200 transition-all duration-500">
            <div className="relative h-80 overflow-hidden">
              <img 
                src={prop.img} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={prop.title} 
              />
              <div className="absolute top-6 left-6 flex gap-2">
                <Badge variant="blue" className="backdrop-blur-md bg-blue-600/80 text-white border-none px-4">Verified</Badge>
                {prop.id % 2 === 0 && <Badge variant="warning" className="backdrop-blur-md bg-amber-500/80 text-white border-none px-4">New</Badge>}
              </div>
              <button className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white hover:bg-white hover:text-rose-500 transition-all border border-white/20">
                <Heart size={20} />
              </button>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="glass px-4 py-2 rounded-2xl text-slate-900 font-black text-lg shadow-2xl border-white/40">
                  {prop.price}
                </div>
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">{prop.bhk}</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{prop.sqft} SQFT</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-slate-900">4.9</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-tight">{prop.title}</h3>
              
              <div className="flex items-center text-slate-500 text-sm mb-8">
                <MapPin size={16} className="mr-1.5 text-blue-500" /> {prop.location}
              </div>
              
              <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                <button className="flex-1 bg-slate-900 text-white py-4 rounded-[1.25rem] font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-slate-950/20">
                  Inquire Now
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
);

const CustomerDashboard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pt-10"
    >
      <BuyerHero />
      <PropertyGrid />
    </motion.div>
  );
};

export default CustomerDashboard;

