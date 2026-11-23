import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                AI
              </div>
              <span className="font-bold text-base text-slate-900">FinanceTracker</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Intelligent personal finance tracking powered by AI. Manage budgets, track income, monitor savings, and achieve financial clarity.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-slate-900 text-xs font-semibold uppercase tracking-wider mb-3">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#dashboard" className="hover:text-emerald-600 transition">Dashboard</a></li>
              <li><a href="#transactions" className="hover:text-emerald-600 transition">Transactions</a></li>
              <li><a href="#budgets" className="hover:text-emerald-600 transition">Budget Planner</a></li>
              <li><a href="#analytics" className="hover:text-emerald-600 transition">Spending Analytics</a></li>
            </ul>
          </div>

          {/* AI Features */}
          <div>
            <h4 className="text-slate-900 text-xs font-semibold uppercase tracking-wider mb-3">AI Intelligence</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#ai-assistant" className="hover:text-emerald-600 transition">Smart Insights</a></li>
              <li><a href="#ai-assistant" className="hover:text-emerald-600 transition">Expense Prediction</a></li>
              <li><a href="#ai-assistant" className="hover:text-emerald-600 transition">Budget Suggestions</a></li>
              <li><a href="#ai-assistant" className="hover:text-emerald-600 transition">Monthly Reports</a></li>
            </ul>
          </div>

          {/* Privacy & Security */}
          <div>
            <h4 className="text-slate-900 text-xs font-semibold uppercase tracking-wider mb-3">Security</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-2">
              Your financial data is encrypted and completely isolated to your personal account.
            </p>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              End-to-End Private
            </span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 AI Personal Finance Tracker. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-600">Terms of Service</a>
            <a href="#security" className="hover:text-slate-600">Security Overview</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
