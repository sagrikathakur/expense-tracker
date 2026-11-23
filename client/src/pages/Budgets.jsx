import React from 'react';

const Budgets = () => {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Budget Planner</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Set category limits, monitor spending thresholds, and avoid overspending.
          </p>
        </div>
        <button 
          type="button" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg text-xs shadow-sm transition cursor-pointer"
        >
          + Create New Budget
        </button>
      </div>

      {/* Budget Summary Alert */}
      <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xs">
        <div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Monthly Budget</span>
          <div className="text-2xl font-bold text-slate-900 mt-1">$3,500.00</div>
          <p className="text-xs text-slate-600 mt-0.5">
            Total Spent: <span className="text-emerald-600 font-bold">$2,460.00</span> | Remaining: <span className="text-slate-900 font-bold">$1,040.00</span>
          </p>
        </div>

        {/* Overall progress bar */}
        <div className="w-full md:w-80">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-500 font-medium">70.2% utilized</span>
            <span className="text-emerald-700 font-bold">On Track</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5">
            <div className="bg-emerald-600 h-2.5 rounded-full w-[70%]"></div>
          </div>
        </div>
      </div>

      {/* Category Budgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* Housing */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">Housing & Rent</h3>
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Safe
            </span>
          </div>
          <div className="text-xl font-bold text-slate-900">
            $950 <span className="text-xs font-normal text-slate-500">/ $1,200 limit</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div className="bg-emerald-600 h-2 rounded-full w-[79%]"></div>
          </div>
          <div className="flex justify-between text-xs text-slate-500 font-medium">
            <span>79% spent</span>
            <span>$250 remaining</span>
          </div>
        </div>

        {/* Groceries */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">Groceries & Essentials</h3>
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Safe
            </span>
          </div>
          <div className="text-xl font-bold text-slate-900">
            $450 <span className="text-xs font-normal text-slate-500">/ $600 limit</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div className="bg-emerald-600 h-2 rounded-full w-[75%]"></div>
          </div>
          <div className="flex justify-between text-xs text-slate-500 font-medium">
            <span>75% spent</span>
            <span>$150 remaining</span>
          </div>
        </div>

        {/* Utilities */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">Utilities (Electric, Water)</h3>
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
              Near Limit
            </span>
          </div>
          <div className="text-xl font-bold text-slate-900">
            $180 <span className="text-xs font-normal text-slate-500">/ $200 limit</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div className="bg-amber-500 h-2 rounded-full w-[90%]"></div>
          </div>
          <div className="flex justify-between text-xs text-slate-500 font-medium">
            <span>90% spent</span>
            <span>$20 remaining</span>
          </div>
        </div>

        {/* Transportation */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">Transportation & Gas</h3>
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Safe
            </span>
          </div>
          <div className="text-xl font-bold text-slate-900">
            $140 <span className="text-xs font-normal text-slate-500">/ $250 limit</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div className="bg-teal-500 h-2 rounded-full w-[56%]"></div>
          </div>
          <div className="flex justify-between text-xs text-slate-500 font-medium">
            <span>56% spent</span>
            <span>$110 remaining</span>
          </div>
        </div>

        {/* Dining Out */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">Dining Out & Cafes</h3>
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
              Over Budget
            </span>
          </div>
          <div className="text-xl font-bold text-rose-600">
            $340 <span className="text-xs font-normal text-slate-500">/ $300 limit</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div className="bg-rose-500 h-2 rounded-full w-full"></div>
          </div>
          <div className="flex justify-between text-xs text-rose-600 font-semibold">
            <span>113% spent</span>
            <span>-$40 over limit</span>
          </div>
        </div>

        {/* Entertainment */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">Entertainment & Subs</h3>
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Safe
            </span>
          </div>
          <div className="text-xl font-bold text-slate-900">
            $80 <span className="text-xs font-normal text-slate-500">/ $150 limit</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div className="bg-cyan-500 h-2 rounded-full w-[53%]"></div>
          </div>
          <div className="flex justify-between text-xs text-slate-500 font-medium">
            <span>53% spent</span>
            <span>$70 remaining</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Budgets;
