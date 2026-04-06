import React from 'react';
import Navbar from './Navbar';
import { Building2, Globe, Share2, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-20">
      <Navbar />
      
      <main className="flex-1">
        {children}
      </main>

      <footer className="px-10 py-12 border-t border-slate-200 bg-white mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Building2 className="text-brand-600" size={32} />
            <div className="text-xl font-black italic tracking-tighter text-slate-900">EstateFlow</div>
          </div>
          <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-brand-600">Privacy Policy</Link>
            <a href="#" className="hover:text-brand-600">Terms of Use</a>
            <a href="#" className="hover:text-brand-600">Compliance</a>
            <a href="#" className="hover:text-brand-600">Partnership</a>
          </div>
          <div className="flex gap-4">
            <div className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-brand-600 cursor-pointer transition-colors"><Globe size={18} /></div>
            <div className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-brand-600 cursor-pointer transition-colors"><Share2 size={18} /></div>
            <div className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-brand-600 cursor-pointer transition-colors"><Activity size={18} /></div>
          </div>
        </div>
        <p className="text-center text-[10px] text-slate-400 mt-12 font-bold uppercase tracking-tighter">
          © 2026 EstateFlow Heritage. Enterprise Property Management Consortium.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
