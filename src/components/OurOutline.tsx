import { motion } from 'motion/react';
import { Target, Eye, Shield, Scale, Lightbulb, Heart, HandHelping, Share2, Users, ClipboardList, Stethoscope, Laptop } from 'lucide-react';

export default function OurOutline() {
  const coreValues = [
    { name: 'INTEGRITY', icon: Scale, desc: 'Upholding honesty and strong moral principles.' },
    { name: 'CREATIVE', icon: Lightbulb, desc: 'Fostering innovation and imaginative solutions.' },
    { name: 'HUMILITY & GRATITUDE', icon: HandHelping, desc: 'Approaching every task with respect and thankfulness.' },
    { name: 'ALTRUISM', icon: Heart, desc: 'Selfless concern for the well-being of others.' },
    { name: 'TRANSPARENCY', icon: Share2, desc: 'Operating with openness and accountability.' }
  ];

  return (
    <section id="our-outline" className="py-32 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Outline Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-4">Identity</h2>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-primary font-display tracking-tight leading-none mb-10">
              The AMAPHIL <br />
              <span className="font-serif italic font-normal text-slate-400">Outline</span>
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
              <p className="border-l-4 border-accent pl-6 py-2 bg-soft rounded-r-2xl">
                <span className="font-black text-primary">Definitely not a broker.</span> Advanced Medical Access Philippines (AMAPHIL) Inc. is the first and only Third Party Administrator (TPA) in the country that is powered by technology and practiced ISO 9001:2015.
              </p>
              <p>
                We aspire to transform the healthcare industry by enabling our members to connect with hospitals and clinics wirelessly and efficiently.
              </p>
              <p>
                We strongly believe in providing excellent customer support and extra mile assistance to our corporate clients, reinforced by our experienced business groups who manage the company.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/5 rounded-[3rem] -rotate-2" />
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
              alt="AMAPHIL Team Collaborating" 
              className="relative rounded-[2.5rem] shadow-2xl z-10 w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>

        {/* What We Do */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-4">Operations</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-primary font-display tracking-tight">What We Do</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16 text-slate-500 leading-relaxed font-medium">
            <p>
              In the healthcare industry, Third Party Administrators (TPA) are prominent players that have the expertise and capability to administer all or a portion of the claims process.
            </p>
            <p>
              AMAPHIL is your trusted partner in healthcare in managing your company's self-funded medical plan whose inclusions can be determined according to your requirement, making it cost-effective.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Medical Team', img: 'https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=600' },
              { title: 'Healthcare Costs', img: 'https://images.unsplash.com/photo-1454165833267-023f03b87935?auto=format&fit=crop&q=80&w=600' },
              { title: 'Medical Consultation', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600' },
              { title: 'Technology', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600' }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-64 rounded-3xl overflow-hidden shadow-lg"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-bottom p-6 flex-col justify-end">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Service */}
        <div className="bg-primary rounded-[4rem] p-12 md:p-24 relative overflow-hidden mb-40 text-white">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-8">Core Service</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-medium">
                The core of AMAPHIL's services is to act as the intermediary between the client company's employees and the medical/dental facilities by providing seamless and cashless medical availments using state-of-the-art technology.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl flex flex-col items-center text-center">
                <Laptop className="w-10 h-10 text-accent mb-4" />
                <span className="text-xs font-black uppercase tracking-widest">Digital Solutions</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl flex flex-col items-center text-center">
                <Users className="w-10 h-10 text-accent mb-4" />
                <span className="text-xs font-black uppercase tracking-widest">Patient Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-px bg-slate-100 rounded-[3rem] overflow-hidden mb-40 shadow-xl border border-slate-100">
          <div className="bg-white p-16 flex flex-col items-center text-center group">
            <div className="w-20 h-20 rounded-full bg-soft flex items-center justify-center mb-8 border border-slate-50 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <Eye className="w-8 h-8" />
            </div>
            <h4 className="text-3xl font-black text-primary font-display tracking-tight mb-6">AMAPHIL Vision</h4>
            <p className="text-slate-500 font-medium leading-relaxed uppercase text-xs tracking-widest leading-loose">
              To be the TPA PROVIDER of choice in the healthcare industry
            </p>
          </div>
          <div className="bg-white p-16 flex flex-col items-center text-center group">
            <div className="w-20 h-20 rounded-full bg-soft flex items-center justify-center mb-8 border border-slate-50 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <Target className="w-8 h-8" />
            </div>
            <h4 className="text-3xl font-black text-primary font-display tracking-tight mb-6">AMAPHIL Mission</h4>
            <p className="text-slate-500 font-medium leading-relaxed uppercase text-xs tracking-widest leading-loose">
              To greatly improve the SERVICE QUALITY in the healthcare industry through robust innovations
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center">
          <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-4">Culture</h2>
          <h3 className="text-3xl sm:text-5xl font-black text-primary font-display tracking-tight mb-20">AMAPHIL Core Values</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-[2rem] bg-soft flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:-rotate-6 shadow-sm">
                  <value.icon className="w-10 h-10" />
                </div>
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-colors text-center max-w-[120px]">
                  {value.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
