import React from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const SupplierDashboard = () => (
  <div className="p-6 md:p-10 max-w-7xl mx-auto">
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900">Partner Hub (Builders)</h1>
        <p className="text-slate-500">SCM: Property Pipeline & Inventory Management.</p>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card className="lg:col-span-1 p-8 bg-slate-900 text-white">
        <h3 className="font-bold mb-6">Inventory Health</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-400 font-bold uppercase">Listing Credits</span>
              <span className="font-black">12/50 Remaining</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-brand-500 w-[24%]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-400 font-bold uppercase">Approval Rate</span>
              <span className="font-black">98%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[98%]"></div>
            </div>
          </div>
        </div>
        <button className="w-full mt-8 bg-brand-600 py-3 rounded-xl font-bold text-sm shadow-xl shadow-brand-600/20">Upgrade Pipeline</button>
      </Card>

      <Card className="lg:col-span-2 p-8">
        <h3 className="font-bold mb-6">Listing Pipeline (SCM)</h3>
        <div className="space-y-4">
          {[
            { name: 'Skyway Heights v2', status: 'Verification', progress: 45 },
            { name: 'Green Valley Phase 4', status: 'Live', progress: 100 },
            { name: 'Marine Bay Lofts', status: 'Paused', progress: 75 },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
               <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-slate-800">{item.name}</span>
                  <Badge variant={item.status === 'Live' ? 'success' : 'warning'}>{item.status}</Badge>
               </div>
               <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className={`h-full ${item.status === 'Live' ? 'bg-emerald-500' : 'bg-brand-500'}`} style={{ width: `${item.progress}%` }}></div>
               </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>
);

export default SupplierDashboard;
