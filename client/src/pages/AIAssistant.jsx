import React from 'react';

const AIAssistant = () => {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-2">
            AI Financial Engine Active
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">AI Financial Assistant</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Ask questions about your transactions, request monthly spending summaries, and get smart saving advice.
          </p>
        </div>
      </div>

      {/* Quick Prompt Chips */}
      <div>
        <p className="text-xs font-semibold text-slate-500 mb-2">Suggested questions:</p>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 hover:border-emerald-600 hover:text-emerald-700 shadow-xs transition cursor-pointer">
            💡 Where am I spending the most money this month?
          </button>
          <button type="button" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 hover:border-emerald-600 hover:text-emerald-700 shadow-xs transition cursor-pointer">
            💰 How can I save an extra $400 next month?
          </button>
          <button type="button" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 hover:border-emerald-600 hover:text-emerald-700 shadow-xs transition cursor-pointer">
            📊 Generate my November 2026 financial report
          </button>
          <button type="button" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 hover:border-emerald-600 hover:text-emerald-700 shadow-xs transition cursor-pointer">
            🔍 Check for duplicate or unnecessary subscriptions
          </button>
        </div>
      </div>

      {/* AI Chat Window Container */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col h-[520px] shadow-xs">
        
        {/* Messages List Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
          
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-emerald-600 text-white font-medium text-xs sm:text-sm px-4 py-2.5 rounded-2xl rounded-tr-none max-w-md shadow-xs">
              Can you analyze my expenses for this month and tell me where I can cut down spending?
            </div>
          </div>

          {/* AI Response Card */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
              AI
            </div>
            <div className="bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm p-4 rounded-2xl rounded-tl-none max-w-xl space-y-3 shadow-xs">
              <p className="font-bold text-slate-900">
                Here is the analysis of your November 2026 expenses:
              </p>
              
              <div className="space-y-1.5 text-xs text-slate-600">
                <p>• <strong className="text-slate-800">Dining Out & Delivery:</strong> You spent <span className="text-rose-600 font-bold">$340</span>, exceeding your $300 budget limit by 13%.</p>
                <p>• <strong className="text-slate-800">Subscriptions:</strong> You currently have 4 active digital subscriptions totaling <span className="text-slate-900 font-semibold">$58/mo</span>.</p>
                <p>• <strong className="text-slate-800">Groceries:</strong> Well controlled! Spending is at 75% of limit with 10 days remaining.</p>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs space-y-1">
                <span className="font-bold text-emerald-800">🎯 AI Savings Recommendation:</span>
                <p className="text-slate-700">
                  Reducing weekend food delivery by 2 orders can easily save you <span className="text-slate-900 font-bold">$70-$90</span> before the month ends.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200">
          <form className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask AI anything about your personal finances..."
              className="flex-1 bg-slate-50 text-xs sm:text-sm text-slate-800 placeholder-slate-400 px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600 focus:bg-white"
            />
            <button
              type="button"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-lg text-xs transition cursor-pointer shadow-xs"
            >
              Ask AI
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};

export default AIAssistant;
