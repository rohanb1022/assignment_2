import React from 'react';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden ${className}`}>
    {children}
  </div>
);

export default Card;
