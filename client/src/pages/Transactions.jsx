import React from 'react';

const Transactions = () => {
  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Income & Expenses</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Track, filter, and manage all your historical and recent financial records.
          </p>
        </div>
        <button 
          type="button" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg text-xs shadow-sm transition cursor-pointer"
        >
          + Add New Transaction
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
        
        {/* Search input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full bg-slate-50 text-xs text-slate-800 placeholder-slate-400 pl-8 pr-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600 focus:bg-white"
          />
          <svg className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <select className="bg-slate-50 text-xs text-slate-700 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-600 focus:bg-white">
            <option>All Types</option>
            <option>Income Only</option>
            <option>Expense Only</option>
          </select>

          <select className="bg-slate-50 text-xs text-slate-700 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-600 focus:bg-white">
            <option>All Categories</option>
            <option>Housing</option>
            <option>Groceries</option>
            <option>Transportation</option>
            <option>Salary</option>
            <option>Freelance</option>
            <option>Entertainment</option>
          </select>

          <select className="bg-slate-50 text-xs text-slate-700 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-600 focus:bg-white">
            <option>This Month (Nov 2026)</option>
            <option>Last Month (Oct 2026)</option>
            <option>Last 3 Months</option>
            <option>Year 2026</option>
          </select>
        </div>

      </div>

      {/* Add Transaction Form Template (Ready for React State) */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <h2 className="text-sm font-bold text-slate-900 mb-3">Record a Transaction</h2>
        
        {/* Form fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Description</label>
            <input 
              type="text" 
              placeholder="e.g. Grocery shopping" 
              className="w-full bg-slate-50 text-xs text-slate-800 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-600 focus:bg-white" 
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Amount ($)</label>
            <input 
              type="number" 
              placeholder="0.00" 
              className="w-full bg-slate-50 text-xs text-slate-800 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-600 focus:bg-white" 
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Type</label>
            <select className="w-full bg-slate-50 text-xs text-slate-800 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-600 focus:bg-white">
              <option>Expense</option>
              <option>Income</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Category</label>
            <select className="w-full bg-slate-50 text-xs text-slate-800 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-600 focus:bg-white">
              <option>Groceries</option>
              <option>Housing</option>
              <option>Utilities</option>
              <option>Transportation</option>
              <option>Entertainment</option>
              <option>Salary</option>
              <option>Freelance</option>
            </select>
          </div>

          <div className="flex items-end">
            <button 
              type="button" 
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2 rounded-lg transition cursor-pointer shadow-xs"
            >
              Save Record
            </button>
          </div>
        </div>
      </div>

      {/* Transactions Data Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
          <h2 className="text-sm font-bold text-slate-900">Transaction History</h2>
          <span className="text-xs text-slate-500 font-medium">Showing 5 records</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 font-semibold">
              <tr>
                <th className="py-3 px-4">Description</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-right">Amount</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-medium text-slate-900">Monthly Salary - Tech Corp</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Income
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600">Salary</td>
                <td className="py-3 px-4 text-slate-500">Nov 20, 2026</td>
                <td className="py-3 px-4 text-right font-bold text-emerald-600">+$4,800.00</td>
                <td className="py-3 px-4 text-center">
                  <button type="button" className="text-slate-500 hover:text-slate-800 mr-2 font-medium">Edit</button>
                  <button type="button" className="text-rose-600 hover:text-rose-700 font-medium">Delete</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-medium text-slate-900">Costco Wholesale Groceries</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                    Expense
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600">Groceries</td>
                <td className="py-3 px-4 text-slate-500">Nov 18, 2026</td>
                <td className="py-3 px-4 text-right font-bold text-rose-600">-$215.40</td>
                <td className="py-3 px-4 text-center">
                  <button type="button" className="text-slate-500 hover:text-slate-800 mr-2 font-medium">Edit</button>
                  <button type="button" className="text-rose-600 hover:text-rose-700 font-medium">Delete</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-medium text-slate-900">Electric & Gas Bill</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                    Expense
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600">Utilities</td>
                <td className="py-3 px-4 text-slate-500">Nov 16, 2026</td>
                <td className="py-3 px-4 text-right font-bold text-rose-600">-$92.10</td>
                <td className="py-3 px-4 text-center">
                  <button type="button" className="text-slate-500 hover:text-slate-800 mr-2 font-medium">Edit</button>
                  <button type="button" className="text-rose-600 hover:text-rose-700 font-medium">Delete</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-medium text-slate-900">Mobile UI Design Freelance</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Income
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600">Freelance</td>
                <td className="py-3 px-4 text-slate-500">Nov 14, 2026</td>
                <td className="py-3 px-4 text-right font-bold text-emerald-600">+$650.00</td>
                <td className="py-3 px-4 text-center">
                  <button type="button" className="text-slate-500 hover:text-slate-800 mr-2 font-medium">Edit</button>
                  <button type="button" className="text-rose-600 hover:text-rose-700 font-medium">Delete</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-medium text-slate-900">Gym & Fitness Center Membership</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                    Expense
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600">Healthcare</td>
                <td className="py-3 px-4 text-slate-500">Nov 10, 2026</td>
                <td className="py-3 px-4 text-right font-bold text-rose-600">-$45.00</td>
                <td className="py-3 px-4 text-center">
                  <button type="button" className="text-slate-500 hover:text-slate-800 mr-2 font-medium">Edit</button>
                  <button type="button" className="text-rose-600 hover:text-rose-700 font-medium">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Transactions;
