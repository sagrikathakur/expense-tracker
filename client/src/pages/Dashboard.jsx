import React from 'react';
import StatCard from '../Components/StatCard.jsx';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Financial Dashboard
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Welcome back! Here is your personal financial overview for this month.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            type="button" 
            className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-semibold shadow-xs transition cursor-pointer"
          >
            Download Report
          </button>
          <button 
            type="button" 
            className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition cursor-pointer"
          >
            + Add Income / Expense
          </button>
        </div>
      </div>

      {/* Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Balance" 
          amount="$24,580.00" 
          change="+8.4%" 
          isPositive={true} 
          subtitle="Updated 10 mins ago" 
        />
        <StatCard 
          title="Monthly Income" 
          amount="$6,250.00" 
          change="+12.0%" 
          isPositive={true} 
          subtitle="Salary & Freelance" 
        />
        <StatCard 
          title="Total Expenses" 
          amount="$2,840.50" 
          change="-3.5%" 
          isPositive={false} 
          subtitle="52 transactions this month" 
        />
        <StatCard 
          title="Monthly Savings" 
          amount="$3,409.50" 
          change="+18.2%" 
          isPositive={true} 
          subtitle="Goal target: 70% reached" 
        />
      </div>

      {/* AI Smart Insight Banner */}
      <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
            AI
          </div>
          <div>
            <p className="text-xs font-bold text-emerald-900">Smart Financial Recommendation</p>
            <p className="text-xs text-slate-700 mt-0.5">
              You spent 18% less on Dining Out this week. If you maintain this pace, you will save an additional <span className="text-slate-900 font-bold">$280</span> by the end of the month.
            </p>
          </div>
        </div>
        <a 
          href="#ai-assistant" 
          className="text-xs font-bold text-emerald-700 hover:text-emerald-800 whitespace-nowrap"
        >
          View Full AI Analysis →
        </a>
      </div>

      {/* Main Grid: Recent Transactions & Category Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Recent Transactions (2 cols on lg) */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-slate-900">Recent Transactions</h2>
            <a href="#transactions" className="text-xs text-emerald-600 hover:text-emerald-700 font-semibold">
              View All
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-500 border-b border-slate-200">
                  <th className="pb-3 font-semibold">Transaction</th>
                  <th className="pb-3 font-semibold">Category</th>
                  <th className="pb-3 font-semibold">Date</th>
                  <th className="pb-3 font-semibold text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3 font-medium text-slate-900">Client Payment - Web Design</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Income
                    </span>
                  </td>
                  <td className="py-3 text-slate-500">Nov 20, 2026</td>
                  <td className="py-3 text-right font-bold text-emerald-600">+$1,450.00</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3 font-medium text-slate-900">Whole Foods Supermarket</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                      Groceries
                    </span>
                  </td>
                  <td className="py-3 text-slate-500">Nov 19, 2026</td>
                  <td className="py-3 text-right font-bold text-rose-600">-$134.20</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3 font-medium text-slate-900">Monthly Apartment Rent</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                      Housing
                    </span>
                  </td>
                  <td className="py-3 text-slate-500">Nov 18, 2026</td>
                  <td className="py-3 text-right font-bold text-rose-600">-$950.00</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3 font-medium text-slate-900">Netflix & Spotify Subscription</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                      Entertainment
                    </span>
                  </td>
                  <td className="py-3 text-slate-500">Nov 15, 2026</td>
                  <td className="py-3 text-right font-bold text-rose-600">-$28.99</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3 font-medium text-slate-900">Electric & Water Utilities</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                      Utilities
                    </span>
                  </td>
                  <td className="py-3 text-slate-500">Nov 12, 2026</td>
                  <td className="py-3 text-right font-bold text-rose-600">-$84.50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Monthly Budget Progress */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Budget Utilization</h2>
            <span className="text-xs text-slate-500 font-medium">Nov 2026</span>
          </div>

          <p className="text-xs text-slate-600">
            Total Budget: <span className="text-slate-900 font-bold">$3,500.00</span> | Spent: <span className="text-emerald-600 font-bold">$2,840.50</span>
          </p>

          <div className="space-y-4 pt-2">
            {/* Category 1 */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-700 font-medium">Housing & Rent</span>
                <span className="text-slate-500">$950 / $1,000 (95%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full w-[95%]"></div>
              </div>
            </div>

            {/* Category 2 */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-700 font-medium">Groceries & Food</span>
                <span className="text-slate-500">$640 / $800 (80%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full w-[80%]"></div>
              </div>
            </div>

            {/* Category 3 */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-700 font-medium">Transportation</span>
                <span className="text-slate-500">$180 / $300 (60%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full w-[60%]"></div>
              </div>
            </div>

            {/* Category 4 */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-700 font-medium">Entertainment</span>
                <span className="text-rose-600 font-bold">$220 / $200 (110% Over)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-rose-500 h-2 rounded-full w-full"></div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a 
              href="#budgets" 
              className="text-xs text-center block w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200 transition"
            >
              Adjust Category Budgets
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
