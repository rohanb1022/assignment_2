import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, CheckCircle } from 'lucide-react';
import Card from '../components/ui/Card';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Data Collection",
      icon: Eye,
      content: "We collect personal information such as your name, email address, and property preferences when you register on our platform. This helps us personalize your experience and provide relevant property recommendations."
    },
    {
      title: "How We Use Your Information",
      icon: FileText,
      content: "Your information is used to facilitate property transactions, manage your user account, and improve our services. We may also send periodic emails regarding platform updates or new property listings."
    },
    {
      title: "Data Security",
      icon: Lock,
      content: "We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure. This includes encrypted connections and secure data storage protocols."
    },
    {
      title: "Third-Party Disclosure",
      icon: Shield,
      content: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as required by law to provide our services."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 md:p-12 max-w-5xl mx-auto space-y-12 bg-white min-h-screen pt-32 pb-20"
    >
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Shield size={32} />
        </div>
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Privacy Policy</h1>
        <p className="text-slate-500 font-medium text-lg leading-relaxed">
          Your trust is our most valuable asset. Learn how we protect your data at EstateFlow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
          >
            <Card className="p-10 h-full border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6">
                <section.icon size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{section.content}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="p-12 bg-slate-50 border-none rounded-[3rem]">
        <h2 className="text-3xl font-black text-slate-900 mb-8 border-b border-slate-200 pb-6 uppercase tracking-tighter italic">Key Highlights</h2>
        <div className="space-y-6">
          {[
            "GDPR and local data regulation compliance.",
            "End-to-end encryption for all sensitive documents.",
            "Regular security audits conducted by third-party experts.",
            "User-controlled data management and deletion options."
          ].map((point, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                <CheckCircle size={14} className="text-white" />
              </div>
              <p className="text-slate-700 font-bold text-lg">{point}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="text-center pt-10 border-t border-slate-100 italic">
        <p className="text-slate-400 text-sm font-medium">Last Updated: April 2026. EstateFlow Enterprise Heritage.</p>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
