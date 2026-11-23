import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Transactions from './pages/Transactions.jsx';
import Budgets from './pages/Budgets.jsx';
import Analytics from './pages/Analytics.jsx';
import AIAssistant from './pages/AIAssistant.jsx';

const App = () => {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Section 1: Personalized Financial Dashboard */}
        <section id="dashboard" className="scroll-mt-20">
          <Dashboard />
        </section>

        {/* Section 2: Income & Expense Transaction Management */}
        <section id="transactions" className="scroll-mt-20 pt-8 border-t border-slate-200">
          <Transactions />
        </section>

        {/* Section 3: Budget Management & Spending Limits */}
        <section id="budgets" className="scroll-mt-20 pt-8 border-t border-slate-200">
          <Budgets />
        </section>

        {/* Section 4: Spending Trends & Analytics */}
        <section id="analytics" className="scroll-mt-20 pt-8 border-t border-slate-200">
          <Analytics />
        </section>

        {/* Section 5: AI-Powered Financial Assistant & Insights */}
        <section id="ai-assistant" className="scroll-mt-20 pt-8 border-t border-slate-200">
          <AIAssistant />
        </section>

      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default App;
