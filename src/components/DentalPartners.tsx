import { motion } from 'motion/react';
import { Globe, Phone, Mail, ExternalLink, Smile } from 'lucide-react';

interface DentalPartner {
  name: string;
  tagline: string;
  logo: string;
  website?: string;
  phones: string[];
  email: string;
}

const DENTAL_PARTNERS: DentalPartner[] = [
  {
    name: "ELITE GROUP",
    tagline: "Improving the World, One Smile at a Time.",
    logo: "/elite.png",
    website: "http://www.elitegroup.com.ph/",
    phones: ["(0917) 315-4926"],
    email: "info@elitegroupph.com"
  },
  {
    name: "1 WORLDWIDE HEALTH",
    tagline: "Improving the World, One Smile at a Time.",
    logo: "/1world.png",
    website: "http://1-worldwidehealth.com/",
    phones: ["02 7759 2402 | 0922 898 6481", "0917 8848859 | 0920 5024535"],
    email: "assist@1-worldwidehealth.com"
  }
];

export default function DentalPartners() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative min-h-[400px] overflow-hidden flex items-center bg-primary py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2574&auto=format&fit=crop" 
            alt="Dental Care" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary to-primary/95" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-[0.3em] mb-6">
              <Smile className="w-4 h-4 text-accent" />
              Healthcare Team
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white font-display uppercase tracking-tight mb-6">
              Partner Dental <br />
              <span className="text-accent">Provider Networks</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Experience world-class dental care through our elite selection of partnered networks across the country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 md:-mt-16 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DENTAL_PARTNERS.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] shadow-xl shadow-black/5 border border-slate-100 overflow-hidden group hover:border-accent/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="p-10 md:p-14 flex flex-col h-full flex-1">
                <div className="w-40 h-24 bg-white rounded-2xl flex items-center justify-center mb-10 group-hover:scale-105 transition-transform duration-500 overflow-hidden shadow-sm border border-slate-50">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain p-4" />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-3xl font-black text-primary uppercase tracking-tight mb-3 min-h-[4rem] flex items-center">
                    {partner.name}
                  </h2>
                  <p className="text-accent font-bold italic text-lg mb-8">
                    "{partner.tagline}"
                  </p>
                  
                  <div className="space-y-6 pt-10 border-t border-slate-50">
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">Contact Details:</p>
                    
                    {partner.website && (
                      <a 
                        href={partner.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group/link"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex-shrink-0 flex items-center justify-center text-blue-600 group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                          <Globe className="w-5 h-5" />
                        </div>
                        <span className="text-slate-600 font-bold hover:text-blue-600 transition-colors flex items-center gap-2">
                          {partner.website.replace('http://', '').replace('/', '')}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </span>
                      </a>
                    )}

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex-shrink-0 flex items-center justify-center text-emerald-600">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        {partner.phones.map((phone, i) => (
                          <span key={i} className="text-slate-600 font-bold text-sm leading-tight">{phone}</span>
                        ))}
                      </div>
                    </div>

                    <a 
                      href={`mailto:${partner.email}`}
                      className="flex items-center gap-4 group/email"
                    >
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex-shrink-0 flex items-center justify-center text-amber-600 group-hover/email:bg-amber-600 group-hover/email:text-white transition-all">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-slate-600 font-bold hover:text-amber-600 transition-colors text-sm">
                        {partner.email}
                      </span>
                    </a>
                  </div>
                </div>

                <div className="mt-12">
                  <button className="w-full bg-primary text-white py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-accent transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-accent/30 focus:ring-4 focus:ring-accent/10">
                    Learn More About {partner.name}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">
            Providing More Options for Your Healthcare
          </h3>
          <p className="text-slate-500 font-medium leading-relaxed mb-10">
            For more details regarding our dental network partners, you can contact them directly or reach out to the AMAPHIL customer service hotline. We are constantly expanding our partner networks to ensure you get the best medical access wherever you are in the Philippines.
          </p>
        </div>
      </section>
    </div>
  );
}
