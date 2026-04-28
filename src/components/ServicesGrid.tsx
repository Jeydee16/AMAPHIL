import { motion } from 'motion/react';
import { 
  Stethoscope, 
  Ambulance, 
  Microscope, 
  Bed, 
  ClipboardCheck, 
  PhilippinePeso 
} from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    { name: 'CONSULTATION', icon: Stethoscope, description: 'Quick outpatient approval' },
    { name: 'EMERGENCY', icon: Ambulance, description: 'Priority access in critical needs' },
    { name: 'LABORATORY', icon: Microscope, description: 'Seamless diagnostic requests' },
    { name: 'ADMISSION', icon: Bed, description: 'Efficient hospital confinement process' },
    { name: 'A.P.E.', icon: ClipboardCheck, description: 'Annual Physical Examination portal' },
    { name: 'REIMBURSEMENT', icon: PhilippinePeso, description: 'Fast claim processing and tracking' },
  ];

  return (
    <section className="py-32 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-4">Core Ecosystem</h2>
          <h3 className="text-5xl md:text-6xl font-black text-primary font-display tracking-tight leading-none mb-8">Integrated Medical Access</h3>
          <p className="text-slate-500 font-medium max-w-xl mx-auto leading-relaxed text-[15px] opacity-80 uppercase tracking-widest leading-loose">
            Digitally unified medical request management at your command.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary/5">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white p-12 md:p-16 hover:bg-soft transition-all duration-500 cursor-pointer text-center flex flex-col items-center justify-center"
            >
              <div className="mb-8 w-20 h-20 rounded-3xl bg-soft text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 shadow-sm group-hover:shadow-2xl">
                <service.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-[11px] font-black tracking-[0.3em] text-slate-400 group-hover:text-primary transition-colors mb-4 uppercase leading-none">
                {service.name}
              </h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
