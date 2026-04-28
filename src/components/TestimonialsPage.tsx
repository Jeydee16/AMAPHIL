import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, MessageSquare, Star, Building2, ChevronRight, X } from 'lucide-react';

const TESTIMONIALS = [
  {
    company: "Switchstore",
    quote: "AMAPHIL provides excellent services that suit the organization's needs.",
    category: "Corporate Support",
    logo: "/switch.png",
    document: "/switch.jpg"
  },
  {
    company: "Resource",
    quote: "AMAPHIL provides a top-notch customer-centric approach to provide medical assistance for the corporate need based on the standard and guidelines.",
    category: "Customer Service",
    logo: "/rib.png",
    document: "/rib.jpg"
  },
  {
    company: "Clinic",
    quote: "With Amaphil, you can choose the nearest lab clinic in your place at your convenient date.",
    category: "Medical Access",
    logo: "/lsco.png",
    document: "/lsco.jpg"
  },
  {
    company: "Clinic",
    quote: "We are already on our second year with AMAPHIL and still looking forward to more years of partnership with them.",
    category: "Partnership",
    logo: "/jpt.png",
    document: "/jpt.jpg"
  },
  {
    company: "Newsim",
    quote: "Has played a vital role as a healthcard provider of the company and continuously giving an outstanding support and superb customer service.",
    category: "Operational Excellence",
    logo: "/newsim.png",
    document: "/newsim.jpg"
  },
  {
    company: "Aleson Shipping",
    quote: "Very much appreciate the wonderful job the whole staff had been consistently extending.",
    category: "Staff commendation",
    logo: "/alster.png",
    document: "/alster (1).png"
  }
];

export default function TestimonialsPage() {
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
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2568&auto=format&fit=crop" 
            alt="Team Success" 
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
              <Star className="w-4 h-4 text-accent" />
              Impact & Success
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white font-display uppercase tracking-tight mb-6">
              Corporate <span className="text-accent">Testimonials</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg font-medium leading-relaxed">
              Consistent with its dedication to extending easy and convenient medical access to Filipinos, AMAPHIL takes pride in the feedback and commendations we have received from our partner corporations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 md:-mt-20 relative z-20 pb-24">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-black/5 border border-slate-100 text-center">
          <div className="w-16 h-16 bg-soft rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Quote className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tight mb-6">
            AMAPHIL Partner Corporate Experience
          </h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-4xl mx-auto">
            This signifies AMAPHIL’s commitment to staying consistent with its values and continuously progressing as the top and premier healthcare TPA in the Philippines. How do corporates experience the AMAPHIL impact?
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => testimonial.document && setSelectedDoc(testimonial.document)}
              className={`bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-black/5 border border-slate-100 flex flex-col group hover:border-accent/30 transition-all duration-500 ${testimonial.document ? 'cursor-pointer' : ''}`}
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <MessageSquare className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-25 px-3 py-1 rounded-full border border-slate-50">
                    {testimonial.category}
                  </span>
                </div>
                
                {testimonial.logo && (
                  <div className="mb-8 w-full flex justify-center">
                    <img 
                      src={testimonial.logo} 
                      alt={testimonial.company} 
                      className="h-10 md:h-12 w-auto object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                )}
                
                <p className="text-slate-700 font-medium text-lg leading-relaxed mb-8 italic flex-1 text-center">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-8 border-t border-slate-50 flex justify-center">
                  <button 
                    onClick={(e) => {
                      if (testimonial.document) {
                        e.stopPropagation();
                        setSelectedDoc(testimonial.document);
                      }
                    }}
                    className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center gap-2 py-2 px-4 rounded-full border ${
                      testimonial.document 
                        ? 'text-accent border-accent/20 bg-accent/5 hover:bg-accent hover:text-white hover:border-accent shadow-sm' 
                        : 'text-slate-300 border-slate-100 cursor-not-allowed opacity-50'
                    }`}
                  >
                    {testimonial.document ? 'Read More' : 'Coming Soon'}
                    <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 bg-slate-50 rounded-full text-slate-500 font-bold uppercase tracking-widest text-xs">
            <Building2 className="w-4 h-4" />
            Join our corporate network
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight mb-8">
            Experience the <span className="text-accent">AMAPHIL Difference</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto mb-12">
            Let us help you transform your organization's healthcare plan into a strategic asset for employee wellness.
          </p>
          <button className="bg-primary text-white px-12 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-accent transition-all shadow-2xl shadow-primary/20">
            Contact Sales Team
          </button>
        </div>
      </section>
    </div>
  );
}
