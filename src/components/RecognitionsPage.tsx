import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Award, Medal, CheckCircle2, Building2, Star, X, ChevronRight } from 'lucide-react';

const RECOGNITIONS = [
  {
    title: "UTILIZATION AWARD - SILVER",
    icon: <Medal className="w-12 h-12 text-slate-400" />,
    color: "bg-slate-50",
    providers: [
      "Mary Mediatrix Medical Center",
      "Mount Grace Hospital"
    ]
  },
  {
    title: "MOST INNOVATIVE",
    icon: <Trophy className="w-12 h-12 text-accent" />,
    color: "bg-accent/5",
    providers: [
      "Divine Grace Medical Center",
      "Mount Grace Hospital"
    ]
  },
  {
    title: "APPRECIATION AWARD FOR HEALTHCARE PARTNER",
    icon: <Award className="w-12 h-12 text-primary" />,
    color: "bg-primary/5",
    providers: [
      "Makati Medical Center",
      "Mount Grace Hospital",
      "Metro Pacific Health",
      "Cardinal Santos Medical Center",
      "Capitol Medical Center Inc."
    ]
  }
];

const GOOD_CREDIT_STANDING = [
  { 
    name: "The Medical City", 
    logo: "/medcity.png", 
    document: "/tmc.png" 
  },
  { 
    name: "St Dominic", 
    logo: "/sdmc.png", 
    document: "/sdmc (1).png" 
  },
  { 
    name: "Cardinal Santos", 
    logo: "/cs.png", 
    document: "/csmc.png" 
  },
  { 
    name: "Makati Medical Center", 
    logo: "/mmc.png", 
    document: "/mmc (1).png" 
  },
  { 
    name: "St Luke's Medical Center", 
    logo: "/slmc.png", 
    document: "/slmc (1).png" 
  },
  { 
    name: "Paranaque Doctors", 
    logo: "/pdh.jpg", 
    document: "/pdh.png" 
  },
  { 
    name: "TSMC", 
    logo: "/tsmc.png", 
    document: "/tsmc (1).png" 
  },
  { 
    name: "School Foundation", 
    logo: "/dmsf.jpg", 
    document: "/dmsf.png" 
  },
  { 
    name: "Cebu Doc", 
    logo: "/cebudoc.png", 
    document: "/cebudoc (1).png" 
  },
  { 
    name: "DDV", 
    logo: "/ddvf.jpg", 
    document: "/ddvmh.png" 
  },
  { 
    name: "ACE Medical Center", 
    logo: "/ace.jpg", 
    document: "/acemd.pngace.jpg" 
  },
  { 
    name: "GMC", 
    logo: "/gmc.jpg", 
    document: "/gmc.png" 
  },
  { 
    name: "SEHI", 
    logo: "/sehi.jpg", 
    document: "/seh.png" 
  },
  { 
    name: "GSDH", 
    logo: "/gsdh.jpg", 
    document: "/gsdh.png" 
  },
  { 
    name: "MMCI", 
    logo: "/mmci.jpg", 
    document: "/mmci.png" 
  },
  { 
    name: "DMC", 
    logo: "/dmc.jpg", 
    document: "/dmc.png" 
  },
  { 
    name: "GCMC", 
    logo: "/gcmc.jpg", 
    document: "/gcmc.png" 
  },
  { 
    name: "OLMC", 
    logo: "/olmc.jpg", 
    document: "/olmc.png" 
  },
  { 
    name: "DZHI", 
    logo: "/dzhi.jpg", 
    document: "/dzhi.png" 
  }
];

export default function RecognitionsPage() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Document Overlay */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDoc(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 md:p-20"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedDoc(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="w-6 h-6 text-black" />
              </button>
              <div className="w-full h-full overflow-auto p-4 md:p-8 bg-slate-100 flex items-start justify-center">
                <img 
                  src={selectedDoc} 
                  alt="Document" 
                  className="max-w-full shadow-2xl rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <section className="relative min-h-[450px] md:h-[500px] overflow-hidden flex items-center bg-primary py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?q=80&w=2573&auto=format&fit=crop" 
            alt="Awards and Recognitions" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-[0.3em] mb-6">
              <Trophy className="w-4 h-4 text-accent" />
              Impact & Success
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white font-display uppercase tracking-tight mb-6">
              Recognitions & <br />
              <span className="text-accent">Good Credit Standing</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg font-medium leading-relaxed">
              AMAPHIL’s services are distinguished by the awards and recognitions it has garnered from its healthcare partners. We are committed to being a trusted healthcare TPA partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Stats Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 md:-mt-20 relative z-20 pb-24">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-black/5 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tight mb-8">
                Distinguished Excellence in Healthcare
              </h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10 italic">
                "With more than 2,000 partner providers and 53,000 accredited medical professionals, AMAPHIL continues to set the benchmark for quality TPA services in the Philippines."
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="bg-soft px-8 py-6 rounded-2xl border border-slate-100 flex-1 min-w-[200px]">
                  <span className="text-3xl font-black text-primary block mb-1">2,000+</span>
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Partner Providers</span>
                </div>
                <div className="bg-soft px-8 py-6 rounded-2xl border border-slate-100 flex-1 min-w-[200px]">
                  <span className="text-3xl font-black text-accent block mb-1">53,000+</span>
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Medical Professionals</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl shadow-xl w-full h-[400px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" 
                  alt="Corporate Recognition" 
                   className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Recognitions Grid */}
        <div className="mt-20 px-4 md:px-0">
          <div className="flex items-center gap-4 mb-12">
            <Trophy className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-black text-primary uppercase tracking-tight">Our Recognitions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RECOGNITIONS.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${award.color} rounded-[2rem] p-10 border border-slate-100 shadow-xl shadow-black/5 flex flex-col group hover:scale-[1.02] transition-all duration-500`}
              >
                <div className="mb-8 p-6 bg-white rounded-2xl shadow-sm inline-block self-start group-hover:shadow-lg transition-all">
                  {award.icon}
                </div>
                <h3 className="text-xl font-black text-primary uppercase tracking-tight mb-8 leading-tight h-14 flex items-center">
                  {award.title}
                </h3>
                <div className="space-y-4 pt-8 border-t border-slate-200/50">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Awarded by:</span>
                  {award.providers.map((provider, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Star className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-bold text-sm tracking-tight">{provider}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Good Credit Standing Section */}
        <div className="mt-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 px-4 md:px-0">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              <h2 className="text-3xl font-black text-primary uppercase tracking-tight">Good Credit Standing</h2>
            </div>
            <div className="bg-emerald-50 text-emerald-700 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
              Verified Healthcare Partners
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {GOOD_CREDIT_STANDING.map((hospital, index) => {
              const hasExtendedInfo = !!hospital.logo || !!hospital.document;
              
              if (hasExtendedInfo) {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                    className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-black/5 border border-slate-100 flex flex-col group hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 cursor-default min-h-[320px] relative"
                  >
                    <div className="absolute top-6 right-6">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500/20 group-hover:text-emerald-500 transition-colors" />
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="h-28 w-full flex items-center justify-center p-2 mb-4">
                        {hospital.logo ? (
                          <img 
                            src={hospital.logo} 
                            alt={hospital.name} 
                            className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-700 ease-out" 
                          />
                        ) : (
                          <div className="w-20 h-20 rounded-[2rem] bg-slate-50 flex items-center justify-center text-slate-200 group-hover:text-accent transition-all duration-500">
                            <Building2 className="w-10 h-10" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.2em] text-center leading-tight max-w-[90%] mb-1">
                        {hospital.name}
                      </h3>
                      <div className="text-[7px] font-bold text-slate-300 uppercase tracking-widest">
                        Partner Institution
                      </div>
                    </div>

                    <div className="mt-8">
                      <button 
                        onClick={() => hospital.document && setSelectedDoc(hospital.document)}
                        disabled={!hospital.document}
                        className={`w-full py-4 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-300 border ${
                          hospital.document 
                            ? 'bg-primary text-white border-primary hover:bg-accent hover:border-accent shadow-lg shadow-primary/10' 
                            : 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed'
                        }`}
                      >
                        {hospital.document ? (
                          <>
                            View Cert
                            <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                          </>
                        ) : 'Pending'}
                      </button>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (index % 6) * 0.05 }}
                  className="bg-slate-50/30 p-8 rounded-[2.5rem] border border-dashed border-slate-100 flex flex-col items-center justify-center gap-8 group hover:border-accent/20 transition-all cursor-default min-h-[320px]"
                >
                  <div className="w-24 h-24 rounded-[2.5rem] bg-white border border-slate-50 flex items-center justify-center text-slate-200 group-hover:text-accent/30 transition-all duration-500 shadow-sm">
                    <Building2 className="w-10 h-10" />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-slate-400 font-black text-[11px] uppercase tracking-wider text-center leading-tight">
                      {hospital.name}
                    </span>
                    <div className="text-[8px] font-black text-slate-200 uppercase tracking-widest">
                      Verified Partner
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">
            Commitment to Global Standards
          </h3>
          <p className="text-slate-500 font-medium leading-relaxed mb-10 text-lg">
            Our commitment goes beyond providing medical access; we strive to maintain the highest levels of professional integrity and operational excellence. These recognitions reflect the trust our partners place in AMAPHIL every single day.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </section>
    </div>
  );
}
