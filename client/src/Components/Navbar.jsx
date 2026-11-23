import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-200 text-slate-700 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black shadow-md shadow-emerald-600/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">
              Finance<span className="text-emerald-600">AI</span>
            </span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#dashboard" className="text-emerald-600 font-semibold hover:text-emerald-700 transition">
              Dashboard
            </a>
            <a href="#transactions" className="text-slate-600 hover:text-slate-900 transition">
              Transactions
            </a>
            <a href="#budgets" className="text-slate-600 hover:text-slate-900 transition">
              Budgets
            </a>
            <a href="#analytics" className="text-slate-600 hover:text-slate-900 transition">
              Analytics
            </a>
            <a href="#ai-assistant" className="text-slate-600 hover:text-slate-900 transition">
              AI Insights
            </a>
          </div>

          {/* Search Bar & Search Button */}
          <form className="hidden sm:flex items-center flex-1 max-w-xs relative">
            <input
              type="text"
              placeholder="Search expenses, tags..."
              className="w-full bg-slate-100 text-sm text-slate-800 placeholder-slate-400 pl-9 pr-20 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-600 focus:bg-white transition"
            />
            {/* Search Icon */}
            <svg className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {/* Search Submit Button */}
            <button
              type="button"
              className="absolute right-1 px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs rounded-md transition cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Action Button & User Profile Badge */}
          <div className="flex items-center gap-3">
            <button 
              type="button" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-3.5 py-1.5 rounded-lg text-sm shadow-sm transition cursor-pointer"
            >
              + Add Transaction
            </button>

            {/* Profile Avatar Initials (No Image) */}
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-xs font-bold text-slate-700">
              JS
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
