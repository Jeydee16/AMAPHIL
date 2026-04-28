import { motion } from 'motion/react';
import { ArrowRight, Activity, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3 h-3 fill-current" />
            Medical Access Optimized
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-primary leading-[0.95] tracking-[-0.03em] mb-8 font-display">
            Transforming <br />
            Healthcare, <br />
            <span className="font-serif italic font-normal text-accent/80 tracking-normal">One Tap at a Time</span>
          </h1>
          <p className="text-xl text-slate-500 mb-10 max-w-lg leading-[1.6] font-medium opacity-80 uppercase text-[13px] tracking-widest">
            The Philippines' most advanced medical access platform, optimized for the modern member.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-primary text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-accent transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 group">
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent text-primary border border-primary/20 px-10 py-5 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-soft transition-all flex items-center justify-center gap-3">
              Our Vision
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-slate-500 tracking-tight text-nowrap">Secure & Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-slate-500 tracking-tight text-nowrap">Real-time Processing</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
              alt="Medical professional using tablet" 
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-8 text-white">
              <div className="glass-panel p-4 rounded-2xl">
                <p className="text-sm font-medium opacity-90 mb-1 italic">"Get your OPD consultation request approved in less than 1 minute."</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest">Active Approval System</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10 mix-blend-multiply" />
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/20 rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
