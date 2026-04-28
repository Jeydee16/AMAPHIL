import { motion } from 'motion/react';
import { Smartphone, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function MobilePromotion() {
  const features = [
    {
      title: "Maximize Seamless Access",
      desc: "Easily request your Letter of Authorization to access our wide provider network—anytime, anywhere.",
      icon: Zap
    },
    {
      title: "Faster Approvals",
      desc: "Get quicker LOA processing so you can proceed with consultations or procedures without delays.",
      icon: CheckCircle2
    },
    {
      title: "Effortless Experience",
      desc: "Designed for members—simple steps, guided process, and zero hassle.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-32 bg-soft font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="mb-16">
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-4">AMAPHIL Mobile</h2>
              <h3 className="text-5xl md:text-6xl font-black text-primary font-display tracking-tight leading-none mb-8">Access Fast.</h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm opacity-60">Letter of Authorization at your fingertips.</p>
            </div>

            <div className="space-y-12">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-10 items-start group/feature"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-[1.5rem] bg-white shadow-sm border border-slate-100 flex items-center justify-center text-accent group-hover/feature:bg-primary group-hover/feature:text-white transition-all duration-500">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-primary mb-3 font-display tracking-tight">{feature.title}</h4>
                    <p className="text-slate-500 text-[15px] font-medium max-w-sm leading-relaxed opacity-80">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative mx-auto drop-shadow-2xl">
              <Smartphone className="w-full h-auto text-slate-100 opacity-20" />
              {/* Using a placeholder for a mobile screen */}
              <div className="absolute inset-x-[15%] top-[10%] bottom-[10%] rounded-[2rem] overflow-hidden bg-slate-900 border-4 border-slate-800 shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
                   alt="App interface" 
                   className="w-full h-full object-cover opacity-80"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
                    <div className="w-12 h-1 bg-white/30 rounded-full mb-4 mx-auto" />
                    <h4 className="text-white font-bold text-lg mb-2">LOA Request</h4>
                    <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                       <div className="h-full w-2/3 bg-accent" />
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-accent/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
