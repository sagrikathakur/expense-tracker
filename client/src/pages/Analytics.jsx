import React from 'react';

const Analytics = () => {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Spending & Financial Analytics</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Visual breakdown of your earnings, expenditures, and monthly savings trends.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-slate-200 p-1 rounded-lg text-xs shadow-xs">
          <button type="button" className="px-3 py-1 bg-emerald-600 text-white font-bold rounded">Month</button>
          <button type="button" className="px-3 py-1 text-slate-600 hover:text-slate-900">Quarter</button>
          <button type="button" className="px-3 py-1 text-slate-600 hover:text-slate-900">Year</button>
        </div>
      </div>

      {/* Analytics Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <span className="text-xs text-slate-500 uppercase font-semibold">Average Daily Spend</span>
          <div className="text-2xl font-bold text-slate-900 mt-1">$94.50</div>
          <p className="text-xs text-emerald-600 font-semibold mt-1">↓ 14% less than last month</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <span className="text-xs text-slate-500 uppercase font-semibold">Savings Rate</span>
          <div className="text-2xl font-bold text-emerald-600 mt-1">42.5%</div>
          <p className="text-xs text-slate-500 mt-1">Goal: 40% (Surpassed)</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <span className="text-xs text-slate-500 uppercase font-semibold">Largest Expense Category</span>
          <div className="text-2xl font-bold text-slate-900 mt-1">Housing</div>
          <p className="text-xs text-slate-500 mt-1">Accounts for 38% of outflow</p>
        </div>
      </div>

      {/* Visual Analytics Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Category Breakdown */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-xs">
          <h2 className="text-sm font-bold text-slate-900">Expense Distribution by Category</h2>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-700 font-medium">Housing & Rent</span>
                <span className="text-slate-500 font-semibold">$950.00 (38%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-emerald-600 h-2 rounded-full w-[38%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-700 font-medium">Groceries & Food</span>
                <span className="text-slate-500 font-semibold">$640.00 (25%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full w-[25%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-700 font-medium">Dining Out & Drinks</span>
                <span className="text-slate-500 font-semibold">$340.00 (14%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full w-[14%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-700 font-medium">Utilities</span>
                <span className="text-slate-500 font-semibold">$180.00 (7%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-cyan-500 h-2 rounded-full w-[7%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-700 font-medium">Transportation</span>
                <span className="text-slate-500 font-semibold">$140.00 (6%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full w-[6%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Cash Flow Comparison (Pure Tailwind Bar Visualization) */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-xs">
          <h2 className="text-sm font-bold text-slate-900">Monthly Cash Flow Comparison</h2>
          <p className="text-xs text-slate-500">Income vs. Expense over the past 4 months</p>

          <div className="grid grid-cols-4 gap-4 h-48 items-end pt-6 border-b border-slate-200 text-center">
            
            {/* Aug */}
            <div className="flex flex-col items-center gap-1.5 h-full justify-end">
              <div className="w-full flex items-end justify-center gap-1.5 h-32">
                <div className="w-3.5 bg-emerald-500 rounded-t h-[75%]"></div>
                <div className="w-3.5 bg-rose-500 rounded-t h-[45%]"></div>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">Aug</span>
            </div>

            {/* Sep */}
            <div className="flex flex-col items-center gap-1.5 h-full justify-end">
              <div className="w-full flex items-end justify-center gap-1.5 h-32">
                <div className="w-3.5 bg-emerald-500 rounded-t h-[80%]"></div>
                <div className="w-3.5 bg-rose-500 rounded-t h-[50%]"></div>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">Sep</span>
            </div>

            {/* Oct */}
            <div className="flex flex-col items-center gap-1.5 h-full justify-end">
              <div className="w-full flex items-end justify-center gap-1.5 h-32">
                <div className="w-3.5 bg-emerald-500 rounded-t h-[85%]"></div>
                <div className="w-3.5 bg-rose-500 rounded-t h-[55%]"></div>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">Oct</span>
            </div>

            {/* Nov */}
            <div className="flex flex-col items-center gap-1.5 h-full justify-end">
              <div className="w-full flex items-end justify-center gap-1.5 h-32">
                <div className="w-3.5 bg-emerald-500 rounded-t h-[95%]"></div>
                <div className="w-3.5 bg-rose-500 rounded-t h-[40%]"></div>
              </div>
              <span className="text-[11px] text-emerald-600 font-bold">Nov</span>
            </div>

          </div>

          <div className="flex justify-center gap-6 text-xs pt-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-xs"></div>
              <span className="text-slate-700 font-medium">Income</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-rose-500 rounded-xs"></div>
              <span className="text-slate-700 font-medium">Expenses</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Analytics;
