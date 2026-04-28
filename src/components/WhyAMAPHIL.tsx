import { motion } from 'motion/react';
import { 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Users, 
  Building2, 
  Handshake,
  Star,
  CheckCircle2,
  Lock
} from 'lucide-react';

export default function WhyAMAPHIL() {
  const corporateBenefits = [
    {
      title: 'Convenience',
      desc: "Members are notified of the benefits and limitations of their medical plan through AMAPHIL's mobile application which generates an electronic approved or rejected response.",
      icon: Clock
    },
    {
      title: 'Service Reliability',
      desc: 'Access to 2,000+ hospitals and 53,000+ accredited doctors nationwide with 24/7 customer care assistance.',
      icon: Zap
    },
    {
      title: 'Branding & Perks',
      desc: "Customizable app branding with your company logo and exclusive discounts from partner lifestyle establishments.",
      icon: Star
    }
  ];

  const providerBenefits = [
    { text: 'Prompt issuance of LOA via mobile application.', icon: Zap },
    { text: 'Safeguard against fraud built into member app.', icon: Lock },
    { text: 'Adherent to payment terms via faster system.', icon: ShieldCheck },
    { text: 'Access to 24/7 customer service line.', icon: Clock },
    { text: 'Lesser administrative tasks for staff.', icon: ClipboardList },
    { text: 'Access to Online Payment Details.', icon: Globe }
  ];

  return (
    <div className="pt-24 bg-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 bg-soft border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-6">The AMAPHIL Advantage</h2>
            <h1 className="text-5xl md:text-7xl font-black text-primary font-display tracking-tight leading-none mb-8">
              Why <span className="text-accent underline decoration-4 underline-offset-8">AMAPHIL</span>?
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Transforming the healthcare experience through technology-driven administration and reliable partner networks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Impact */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
            <div className="lg:w-1/2">
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-4">Core Value</h2>
              <h3 className="text-4xl md:text-5xl font-black text-primary font-display tracking-tight mb-8">
                Our Impact to Corporate Clients
              </h3>
              <div className="grid gap-8">
                {corporateBenefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-6 p-6 rounded-3xl hover:bg-soft transition-colors border border-transparent hover:border-slate-50">
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm">
                      <benefit.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-primary mb-2 uppercase tracking-wide">{benefit.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-10 bg-accent/5 rounded-full blur-3xl opacity-50" />
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                alt="Business collaboration" 
                className="relative rounded-[3rem] shadow-2xl z-10"
              />
            </div>
          </div>

          {/* Better Technology (Mobile App) */}
          <div className="bg-primary rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200" alt="background" className="object-cover w-full h-full" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="w-8 h-8 text-accent" />
                  <h3 className="text-3xl font-black font-display tracking-tight uppercase">Better Technology</h3>
                </div>
                <h4 className="text-5xl font-black mb-10 tracking-tight text-accent">AMAPHIL Mobile <br /> Application</h4>
                <ul className="space-y-4">
                  {[
                    'Wireless access to our provider network',
                    'Request Letter of Authorization (LOA)',
                    'File reimbursement claims digitally',
                    'Avail discounts from perk partners'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-4 text-lg font-medium text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-12 border border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <Globe className="w-8 h-8 text-accent" />
                  <h4 className="text-2xl font-black font-display tracking-tight uppercase">AMAPHIL Web-Portal</h4>
                </div>
                <div className="space-y-8">
                  <div className="border-l-2 border-accent/30 pl-6">
                    <h5 className="font-black text-accent uppercase tracking-widest text-xs mb-2">Inquiry Module</h5>
                    <p className="text-slate-300 font-medium">Allows real-time access to member availments and history.</p>
                  </div>
                  <div className="border-l-2 border-accent/30 pl-6">
                    <h5 className="font-black text-accent uppercase tracking-widest text-xs mb-2">Report Module</h5>
                    <p className="text-slate-300 font-medium">Generates comprehensive real-time reports for HR and management.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Impact */}
      <section className="py-32 bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" 
                alt="Healthcare professional" 
                className="rounded-[3rem] shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-4">Partner Success</h2>
              <h3 className="text-4xl md:text-5xl font-black text-primary font-display tracking-tight mb-8">
                Our Impact to our Partner Providers
              </h3>
              <div className="grid gap-4">
                {providerBenefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-50"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-soft rounded-xl flex items-center justify-center text-accent">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[15px] font-bold text-slate-700 tracking-tight">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-soft rounded-3xl flex items-center justify-center text-accent mx-auto mb-10">
            <Handshake className="w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary font-display tracking-tight mb-8">
            Make your Healthcare services within reach with AMAPHIL
          </h2>
          <button className="px-12 py-6 bg-accent text-white rounded-full font-black uppercase tracking-widest text-[13px] hover:bg-primary transition-all hover:shadow-2xl hover:shadow-accent/40 active:scale-95 duration-500">
            Partner With Us Today
          </button>
        </div>
      </section>
    </div>
  );
}

// Dummy icon for list
function ClipboardList(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}
