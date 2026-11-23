import React from 'react';

const StatCard = ({ title, amount, change, isPositive, subtitle }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:shadow-md transition">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{title}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
          isPositive 
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
            : 'bg-rose-50 text-rose-700 border border-rose-200'
        }`}>
          {change}
        </span>
      </div>
      <div className="text-2xl font-bold text-slate-900 tracking-tight">{amount}</div>
      <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
    </div>
  );
};

export default StatCard;
