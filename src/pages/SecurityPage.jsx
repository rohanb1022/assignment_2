import React from 'react';
import { Lock, ShieldCheck, Key, FileText } from 'lucide-react';

const SecurityPage = () => (
  <div className="p-6 md:p-10 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl font-black text-slate-900 mb-4">Security Infrastructure</h1>
          <p className="text-slate-500 leading-relaxed">How we protect your assets and data through enterprise-grade protocols.</p>
        </div>
        
        <div className="space-y-6">
          {[
            { icon: <Lock className="text-rose-500" />, title: 'End-to-End Encryption', desc: 'All transaction data and personal documents are AES-256 encrypted at rest and in transit.' },
            { icon: <ShieldCheck className="text-emerald-500" />, title: 'Multi-Factor Verification', desc: 'Biometric and TOTP requirements for all escrow-related actions and high-value listing edits.' },
            { icon: <Key className="text-brand-500" />, title: 'Immutable Audit Logs', desc: 'Every administrative action is logged on an immutable private ledger for accountability.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="p-3 bg-slate-50 rounded-2xl">{item.icon}</div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-brand-400" />
            <h3 className="text-xl font-bold">Legal Compliance</h3>
          </div>
          
          <div className="space-y-8">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="font-bold mb-4 flex justify-between items-center">
                Terms of Service <span className="text-[10px] text-brand-400">v2.1</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-4">
                By accessing EstateFlow, you agree to our standard operating procedures regarding escrow management, 
                builder verification, and lead handling. Our platform serves as a "Middle-Ware" transparency layer 
                and does not directly engage in real estate brokerage unless specifically indicated...
              </p>
              <button className="text-[10px] font-black text-brand-400 uppercase mt-4 hover:underline">Read Policy</button>
            </div>
            
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="font-bold mb-4 flex justify-between items-center">
                Privacy Policy <span className="text-[10px] text-emerald-400">GDPR Compliant</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-4">
                We strictly adhere to Data Minimization principles. Your sensitive data (Bank accounts, Identity docs) 
                is never shared with third-party marketers. As emphasized by regulatory standards, customer data 
                is NOT a revenue stream for our business...
              </p>
              <button className="text-[10px] font-black text-emerald-400 uppercase mt-4 hover:underline">View Rights</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SecurityPage;
