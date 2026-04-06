import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, Mail, Lock, ArrowRight, Globe, 
  UserCircle, ShieldCheck, Briefcase, ChevronRight 
} from 'lucide-react';
import Card from '../components/ui/Card';

const LoginPage = () => {
  const [role, setRole] = useState('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate navigation based on role
    if (role === 'admin') navigate('/admin');
    else if (role === 'agent') navigate('/agent');
    else navigate('/customer');
  };

  const roles = [
    { id: 'customer', label: 'Customer', icon: UserCircle, desc: 'Investing in properties' },
    { id: 'agent', label: 'Agent', icon: Briefcase, desc: 'Managing listings' },
    { id: 'admin', label: 'Admin', icon: ShieldCheck, desc: 'System governance' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/5 rounded-full blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100"
      >
        {/* Left Side: Brand & Visual */}
        <div className="hidden lg:flex flex-col justify-between p-16 bg-slate-900 text-white relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2.5 bg-blue-600 rounded-2xl shadow-xl shadow-blue-600/20">
                <Building2 className="text-white" size={28} />
              </div>
              <span className="text-3xl font-black italic tracking-tighter">EstateFlow</span>
            </div>
            
            <h2 className="text-5xl font-black leading-tight mb-6">
              Welcome to the <span className="text-blue-500">Future</span> of Real Estate.
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">
              Access your personalized dashboard and manage premium property investments with AI-driven insights.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-800 overflow-hidden">
                   <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-slate-400">Joined by 10k+ professionals</p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center lg:text-left">
            <h3 className="text-3xl font-black text-slate-900 mb-2">Member Login</h3>
            <p className="text-slate-500 font-medium">Please select your role and enter credentials.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            {/* Role Selection */}
            <div className="grid grid-cols-3 gap-4">
              {roles.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRole(r.id)}
                  className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 group ${
                    role === r.id 
                    ? 'border-blue-600 bg-blue-50/50 shadow-lg shadow-blue-600/5' 
                    : 'border-slate-100 hover:border-slate-200 bg-slate-50/50'
                  }`}
                >
                  <r.icon size={20} className={role === r.id ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'} />
                  <span className={`text-[10px] font-black uppercase tracking-widest ${role === r.id ? 'text-blue-600' : 'text-slate-500'}`}>
                    {r.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-50 py-4 pl-14 pr-6 rounded-2xl outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all font-bold text-slate-900"
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                   className="w-full bg-slate-50 border-2 border-slate-50 py-4 pl-14 pr-6 rounded-2xl outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all font-bold text-slate-900"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded-md border-2 border-slate-200 checked:bg-blue-600 transition-all cursor-pointer" />
                <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-700">Forgot Password?</a>
            </div>

            <button 
              type="submit"
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-600 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-slate-900/10"
            >
              Access Workspace <ArrowRight size={20} />
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase font-black tracking-widest bg-white px-4 text-slate-400">
                Or continue with
              </div>
            </div>

            <button 
              type="button"
              className="w-full bg-white border-2 border-slate-100 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
            >
              <Globe size={20} className="text-slate-900" />
              Sign in with Google
            </button>
          </form>

          <p className="mt-10 text-center text-sm font-bold text-slate-500">
            Don't have an account? <a href="#" className="text-blue-600 hover:underline">Apply for membership</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
