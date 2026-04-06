import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X, Globe, User, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Invest', path: '/customer' },
    { name: 'Agent', path: '/agent' },
    { name: 'Admin', path: '/admin' },
    { name: 'Security', path: '/security' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-slate-100/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2.5 bg-blue-600 rounded-2xl shadow-xl shadow-blue-600/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <Building2 className="text-white" size={24} />
          </div>
          <span className="text-2xl font-black italic tracking-tighter text-slate-900">EstateFlow</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold tracking-tight transition-all relative py-2 ${
                  isActive(link.path) ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>
          
          <div className="h-6 w-px bg-slate-200 mx-2"></div>
          
          <div className="flex items-center gap-4">
            <button className="p-2.5 bg-slate-50 rounded-xl text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-all">
              <Globe size={18} />
            </button>
            <Link to="/login" className="bg-slate-900 text-white px-7 py-3 rounded-2xl text-sm font-bold hover:bg-blue-600 hover:scale-105 transition-all shadow-xl shadow-slate-900/10 flex items-center gap-2">
              <User size={16} className="text-slate-400" /> Member Login
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-900 bg-slate-50 rounded-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-x-0 top-20 bg-white border-b border-slate-100 shadow-2xl z-40"
          >
            <div className="px-6 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-black ${
                    isActive(link.path) ? 'text-blue-600' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-2"></div>
              <button className="bg-slate-900 text-white px-6 py-5 rounded-[2rem] font-bold flex items-center justify-center gap-3 text-lg">
                <User size={20} /> Member Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

