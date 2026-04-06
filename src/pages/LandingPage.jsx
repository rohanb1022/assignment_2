import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Building2, Shield, Zap, Users, Globe, 
  ChevronRight, Sparkles, BarChart3, ShieldCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';

const LandingPage = () => {
  const features = [
    {
      icon: <Building2 className="text-blue-500" />,
      title: "Premium Listings",
      description: "Direct access to the most exclusive properties with verified virtual tours and 3D walkthroughs."
    },
    {
      icon: <ShieldCheck className="text-emerald-500" />,
      title: "Smart Escrow",
      description: "Secure transaction management with automated legal compliance and instant contract generation."
    },
    {
      icon: <Sparkles className="text-amber-500" />,
      title: "AI Analysis",
      description: "Intelligent market sentiment analysis and predictive pricing models for informed decisions."
    }
  ];

  const roles = [
    { 
      name: "Customer", 
      path: "/customer", 
      desc: "Find your dream home with ease", 
      icon: <Users size={24} />,
      color: "blue"
    },
    { 
      name: "Agent", 
      path: "/agent", 
      desc: "Manage leads and skyrocket growth", 
      icon: <Zap size={24} />,
      color: "purple"
    },
    { 
      name: "Admin", 
      path: "/admin", 
      desc: "Enterprise-grade metrics & control", 
      icon: <BarChart3 size={24} />,
      color: "slate"
    }
  ];

  return (
    <div className="bg-white selection:bg-blue-100 italic-headings">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-50 rounded-full blur-[120px] opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Next-Gen Real Estate Protocol</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Invest in your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">future legacy.</span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              EstateFlow bridges the gap between premium inventory and elite investors with an automated, 
              secure, and transparent ecosystem designed for the modern world.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/customer"
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-blue-600 transition-all shadow-2xl shadow-slate-900/20 active:scale-95"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <Link
                to="/security"
                className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
              >
                Security Whitepaper
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
                  {React.cloneElement(feature.icon, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Selection - The "Gateway" */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Choose Your Portal</h2>
            <p className="text-slate-500 text-lg">Customized experiences tailored to your specific needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, i) => (
              <Link
                key={i}
                to={role.path}
                className="group relative p-10 rounded-[3rem] border border-slate-200 overflow-hidden transition-all duration-500 hover:border-transparent"
              >
                <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-4 bg-slate-100 rounded-2xl group-hover:bg-white/10 group-hover:text-white transition-colors">
                      {role.icon}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-white/20 group-hover:text-white transition-all">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors mb-2">{role.name}</h4>
                  <p className="text-slate-500 group-hover:text-slate-400 transition-colors leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight">Ready to transcend <br /> the ordinary?</h2>
            <div className="flex flex-col md:flex-row justify-center gap-12 mb-16">
              <div>
                <div className="text-4xl font-black mb-2">$4.2B+</div>
                <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">Volume Managed</div>
              </div>
              <div className="w-px bg-white/10 hidden md:block"></div>
              <div>
                <div className="text-4xl font-black mb-2">12k+</div>
                <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">Premium Assets</div>
              </div>
              <div className="w-px bg-white/10 hidden md:block"></div>
              <div>
                <div className="text-4xl font-black mb-2">99.9%</div>
                <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">Uptime Integrity</div>
              </div>
            </div>
            
            <button className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-blue-500 hover:scale-105 transition-all shadow-2xl shadow-blue-600/40">
              Apply for Access
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

