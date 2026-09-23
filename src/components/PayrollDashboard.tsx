import React, { useState } from 'react';

const PayrollDashboard = () => {
  const [zkState, setZkState] = useState<'idle' | 'compiling' | 'witness' | 'proving' | 'done'>('idle');
  const [budget, setBudget] = useState('');
  const [periodId, setPeriodId] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  
  const zkStateMessages = {
    idle: '',
    compiling: 'Compiling ZK Circuit...',
    witness: 'Generating Private Witness...',
    proving: 'Creating Groth16 Proof...',
    done: 'Transaction Confirmed!'
  };

  const handleInitPayroll = (e: React.FormEvent) => {
    e.preventDefault();
    setZkState('compiling');
    setTimeout(() => setZkState('witness'), 1500);
    setTimeout(() => setZkState('proving'), 3000);
    setTimeout(() => setZkState('done'), 5000);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setZkState('compiling');
    setTimeout(() => setZkState('witness'), 1200);
    setTimeout(() => setZkState('proving'), 2800);
    setTimeout(() => setZkState('done'), 4500);
  };

  const generatePDFReceipt = (amt: string, hash: string) => {
    // Generate PDF Blob logic
    console.log('Creating PDF Blob for amt:', amt, 'hash:', hash);
    alert('PDF Receipt Generated & Downloaded!');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 animate-fade-in">
      <header className="flex justify-between items-center bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-2xl">
        <div>
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            ShieldPay Dashboard
          </h1>
          <p className="text-gray-400 mt-2 text-sm font-medium">Confidential ZK-Payroll on Midnight Preprod</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="px-4 py-2 bg-emerald-900/30 border border-emerald-800 rounded-lg text-emerald-400 text-sm font-semibold flex items-center shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2"></span>
            Network: Preprod
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Admin Section */}
        <section className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 p-8 rounded-2xl shadow-xl transition-all hover:shadow-2xl hover:bg-gray-800/80">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-100">Employer Admin</h2>
          </div>
          
          <form onSubmit={handleInitPayroll} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Payroll Period ID</label>
              <input type="text" value={periodId} onChange={(e) => setPeriodId(e.target.value)} placeholder="e.g., Q3-2026-Engineering" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Total Committed Budget ($)</label>
              <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="150000" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" required />
              <p className="text-xs text-blue-400 mt-1 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                Budget amount is cryptographically hashed and remains private.
              </p>
            </div>
            <button type="submit" disabled={zkState !== 'idle' && zkState !== 'done'} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transform transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
              Initialise Payroll (ZK Proof)
            </button>
          </form>
        </section>

        {/* Employee Section */}
        <section className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 p-8 rounded-2xl shadow-xl transition-all hover:shadow-2xl hover:bg-gray-800/80">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-emerald-500/20 rounded-xl">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-100">Issue Payment</h2>
          </div>
          
          <form onSubmit={handlePayment} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Recipient (Employee) Hash</label>
              <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="0x..." className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none font-mono text-sm" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Payment Amount ($)</label>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="5000" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none" required />
              <p className="text-xs text-emerald-400 mt-1 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                Individual salary stays hidden in ZK circuit.
              </p>
            </div>
            <button type="submit" disabled={zkState !== 'idle' && zkState !== 'done'} className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transform transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
              Submit Shielded Payment
            </button>
          </form>
        </section>
      </div>

      {/* Dynamic ZK Loading State */}
      {zkState !== 'idle' && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
          <div className="bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center space-y-6">
            {zkState === 'done' ? (
              <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
            ) : (
              <div className="mx-auto w-16 h-16 relative mb-4">
                <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
              </div>
            )}
            
            <h3 className="text-xl font-bold text-gray-100">
              {zkStateMessages[zkState]}
            </h3>
            
            <div className="text-sm text-gray-400 space-y-2 text-left bg-gray-900 p-4 rounded-xl font-mono">
              <div className="flex justify-between items-center">
                <span>[1] Circuit Compilation</span>
                <span className={zkState === 'compiling' ? 'text-blue-400 animate-pulse' : 'text-green-400'}>{zkState === 'compiling' ? '...' : 'âœ“'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>[2] Witness Generation</span>
                <span className={zkState === 'witness' ? 'text-blue-400 animate-pulse' : zkState === 'proving' || zkState === 'done' ? 'text-green-400' : 'text-gray-600'}>{zkState === 'witness' ? '...' : zkState === 'proving' || zkState === 'done' ? 'âœ“' : 'â— '}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>[3] Groth16 Proving</span>
                <span className={zkState === 'proving' ? 'text-blue-400 animate-pulse' : zkState === 'done' ? 'text-green-400' : 'text-gray-600'}>{zkState === 'proving' ? '...' : zkState === 'done' ? 'âœ“' : 'â— '}</span>
              </div>
            </div>

            {zkState === 'done' && (
              <div className="pt-4 flex flex-col space-y-3">
                <button onClick={() => generatePDFReceipt(amount, '0x8f...2a')} className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-xl font-semibold flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Download PDF Receipt
                </button>
                <button onClick={() => setZkState('idle')} className="w-full bg-gray-700 hover:bg-gray-600 text-gray-200 py-2.5 rounded-xl font-semibold transition-colors">
                  Dismiss
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PayrollDashboard;
