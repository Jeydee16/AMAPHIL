import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { User, Lock, LogIn, ShieldCheck, HelpCircle, ChevronRight, Activity } from 'lucide-react';

export default function MemberLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Login functionality is currently in development mode.');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full">
        {/* Logo/Brand Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl shadow-xl shadow-primary/20 mb-6"
          >
            <ShieldCheck className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-3xl font-black text-primary uppercase tracking-tight mb-2">
            Member <span className="text-accent">Login</span>
          </h1>
          <p className="text-slate-500 font-medium text-sm">
            Access your AMAPHIL membership portal
          </p>
        </div>

        {/* Login Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-black/5 border border-slate-100 border-b-4 border-b-accent"
        >
          <h2 className="text-xl font-black text-primary uppercase tracking-tight mb-8">
            Login your membership account
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                <User className="w-3 h-3" />
                Username
              </label>
              <input 
                required
                type="text" 
                placeholder="Enter username"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-accent transition-all font-medium"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Lock className="w-3 h-3" />
                  Password
                </label>
                <button type="button" className="text-[10px] font-black uppercase tracking-widest text-accent hover:text-primary transition-colors">
                  Forgot?
                </button>
              </div>
              <input 
                required
                type="password" 
                placeholder="•••••••••"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-accent transition-all font-medium"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-5 rounded-2xl text-xs font-black uppercase tracking-[0.3em] hover:bg-accent hover:shadow-2xl hover:shadow-accent/30 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  FOR MEMBER LOGIN
                </>
              )}
            </button>
          </form>

          {/* Account Details Hint */}
          <div className="mt-8 pt-8 border-t border-slate-50 text-center">
            <p className="text-slate-400 text-[11px] font-bold leading-relaxed">
              To view the last login member account details, please ensure you are using a secure connection.
            </p>
          </div>
        </motion.div>

        {/* Bottom Support Info */}
        <div className="mt-10 grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-soft rounded-xl flex items-center justify-center text-accent">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-primary">Need Help?</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Support Center</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-primary">Status</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">System Online</p>
            </div>
          </div>
        </div>

        {/* Register CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">New to AMAPHIL?</p>
          <button className="inline-flex items-center gap-2 text-primary hover:text-accent font-black uppercase text-xs tracking-widest group transition-colors">
            Contact HR for Portal Access
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
