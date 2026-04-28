import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'motion/react';
import { Users, Building2, Hospital, Microscope, UserCheck, PhoneCall, HeartPulse, ShieldCheck, Activity } from 'lucide-react';

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  
  useEffect(() => {
    const animation = animate(count, value, { duration, ease: "easeOut" });
    return animation.stop;
  }, [value, duration, count]);

  return <motion.span>{rounded}</motion.span>;
}

export default function StatsSection() {
  const [isInView, setIsInView] = useState(false);

  return (
    <section className="py-32 bg-primary text-white overflow-hidden relative border-y border-white/5 font-sans">
      {/* Refined Technical Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" 
          style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-transparent to-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setIsInView(true)}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/20 mb-8 font-black text-[10px] tracking-[0.3em] uppercase text-accent-light">
            <Activity className="w-3 h-3" />
            Platform Metrics
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-[-0.03em] font-display">
            Medical Access <br /> 
            <span className="font-serif italic font-normal text-white/40">Within Reach</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed uppercase tracking-widest font-bold opacity-60">
            Optimized layers of medical request processing for instantaneous consultation approvals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Medical Providers Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-primary p-16 flex flex-col items-center justify-center text-center hover:bg-slate-900/40 transition-colors duration-700"
          >
            <div className="mb-10">
              <h3 className="text-7xl md:text-8xl font-black text-accent mb-6 font-display tracking-tighter">
                {isInView && <Counter value={2000} />}+
              </h3>
              <div className="text-white text-xs font-black uppercase tracking-[0.3em] leading-relaxed mb-12">
                Accredited <br /> 
                <span className="text-slate-400">Medical Providers</span>
              </div>
              
              <ul className="space-y-4 text-[14px] text-slate-400 font-bold uppercase tracking-widest">
                <li className="flex items-center justify-center gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                  Hospitals
                </li>
                <li className="flex items-center justify-center gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                  Clinics
                </li>
                <li className="flex items-center justify-center gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                  Laboratories
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Medical Physicians Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-primary p-16 flex flex-col items-center justify-center text-center hover:bg-slate-900/40 transition-colors duration-700"
          >
            <div className="mb-10">
              <h3 className="text-7xl md:text-8xl font-black text-accent mb-6 font-display tracking-tighter">
                {isInView && <Counter value={53000} />}+
              </h3>
              <div className="text-white text-xs font-black uppercase tracking-[0.3em] leading-relaxed mb-12">
                Accredited <br /> 
                <span className="text-slate-400">Medical Physicians</span>
              </div>

              <ul className="space-y-4 text-[14px] text-slate-400 font-bold uppercase tracking-widest">
                <li className="flex items-center justify-center gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                  Medical Doctors
                </li>
                <li className="flex items-center justify-center gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                  Teledoctors
                </li>
                <li className="flex items-center justify-center gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                  Medical Coordinators
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
