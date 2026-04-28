import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, UserCheck, HelpCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  const purposes = [
    "Process membership application",
    "Bill and collect fees",
    "Process medical information necessary for treatment and coverage valuation",
    "Process claims and reimbursement",
    "Process accreditation",
    "Process employment",
    "Generate reports",
    "Conduct studies, researches, and analysis to improve service",
    "Process any request made by you",
    "Send promotional information",
    "Comply with applicable laws of the Philippines"
  ];

  const collections = [
    "Name, Address, Email, Contact Numbers",
    "Date of Birth, Gender, Civil Status, Nationality",
    "Philhealth Number, Date of employment",
    "Bank details (for reimbursements)",
    "Health Data & Medical Availments",
    "Professional info (for affiliates/employees)",
    "Government-issued / Employer ID",
    "IP address, geolocation, device identifiers",
    "Customer Feedback"
  ];

  const sources = [
    "Your employer or insurance company",
    "Forms, agreements, and related documents",
    "Website, mobile applications, and web-portals",
    "Accredited healthcare providers",
    "Customer service interactions",
    "Authorized third parties and public directories"
  ];

  return (
    <div className="pt-24 bg-white font-sans min-h-screen">
      {/* Header */}
      <section className="py-24 bg-soft border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-6">
              <div>
                <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-6">Compliance & Security</h2>
                <h1 className="text-5xl md:text-6xl font-black text-primary font-display tracking-tight leading-none mb-8">
                  Data Privacy <span className="font-serif italic font-normal text-slate-400">Policy</span>
                </h1>
              </div>
              <div className="flex items-center gap-6 pb-2">
                <img src="/NPCseal.png" alt="NPC Seal" className="h-16 md:h-20 w-auto object-contain hover:scale-110 transition-transform" />
                <img src="/NPCcert.png" alt="NPC Certificate" className="h-16 md:h-20 w-auto object-contain hover:scale-110 transition-transform" />
              </div>
            </div>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Advanced Medical Access Philippines, Inc. (AMAPHIL) is committed to protecting your privacy in compliance with the Philippine Data Privacy Act of 2012.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Table of Contents / Sidebar */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-32 space-y-4">
                <div className="p-8 bg-soft rounded-[2.5rem] border border-slate-50">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    Policy Sections
                  </h4>
                  <nav className="flex flex-col gap-4">
                    {['Service Outline', 'Purposes', 'Collection', 'Sources', 'Access & Rights', 'Protection'].map((item) => (
                      <a 
                        key={item} 
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        className="text-[13px] font-bold text-slate-400 hover:text-accent transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>
                
                <div className="p-8 bg-primary rounded-[2.5rem] text-white">
                  <Shield className="w-8 h-8 text-accent mb-4" />
                  <h4 className="text-lg font-black font-display mb-2">Secure by Design</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Our systems are built with international standards to ensure your medical data stays private.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Policy Text */}
            <div className="lg:col-span-8 space-y-24">
              
              {/* Privacy Notice */}
              <div id="service-outline">
                <h3 className="text-2xl font-black text-primary font-display tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-soft rounded-lg flex items-center justify-center text-accent text-sm">01</span>
                  Privacy Notice & Service Outline
                </h3>
                <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
                  <p>
                    AMAPHIL ensures that the privacy of our members and employees is protected. We periodically update this notice to guarantee that our practices remain compliant with appropriate laws and industry trends.
                  </p>
                  <p>
                    As a Third Party Administrator (TPA), we provide healthcare services thru a network of hospitals, clinics, and physicians. To effectively provide these services, we partner with providers who may collect and process your information relevant to the purposes of healthcare administration.
                  </p>
                </div>
              </div>

              {/* Purposes */}
              <div id="purposes">
                <h3 className="text-2xl font-black text-primary font-display tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 bg-soft rounded-lg flex items-center justify-center text-accent text-sm">02</span>
                  Purposes of Data Collection
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {purposes.map((p, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-soft rounded-2xl border border-slate-50">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-[14px] font-bold text-slate-700 tracking-tight">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What we collect */}
              <div id="collection">
                <h3 className="text-2xl font-black text-primary font-display tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 bg-soft rounded-lg flex items-center justify-center text-accent text-sm">03</span>
                  What We Collect
                </h3>
                <p className="text-slate-600 font-medium mb-8">Personal Information means any data that can identify you. To deliver our service efficiently, we collect:</p>
                <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                  {collections.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-3 border-b border-slate-50">
                      <UserCheck className="w-4 h-4 text-slate-300" />
                      <span className="text-[14px] font-bold text-slate-600 tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sources */}
              <div id="sources">
                <h3 className="text-2xl font-black text-primary font-display tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 bg-soft rounded-lg flex items-center justify-center text-accent text-sm">04</span>
                  Sources of Information
                </h3>
                <div className="space-y-4">
                  {sources.map((source, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-600 font-medium">
                      <div className="w-8 h-8 rounded-full bg-soft flex items-center justify-center text-accent">
                        <Lock className="w-4 h-4" />
                      </div>
                      {source}
                    </div>
                  ))}
                </div>
              </div>

              {/* Access & Rights */}
              <div id="access-&-rights" className="p-10 bg-primary rounded-[3rem] text-white">
                <h3 className="text-2xl font-black font-display tracking-tight mb-8">Access and Your Rights</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-accent uppercase font-black tracking-widest text-[10px] mb-4">Zero Third-Party Disclosure</h4>
                    <p className="text-slate-300 leading-relaxed font-medium">
                      We do not share, sell, swap or otherwise disclose your data to third parties outside AMAPHIL and your company/insurance provider. Data is only forwarded to agents or hospitals to meet our commitments to you.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div>
                      <h4 className="text-accent uppercase font-black tracking-widest text-[10px] mb-4">Right to Information</h4>
                      <p className="text-slate-400 text-sm font-medium">Request info about your data, correct inaccuracies, or withdraw consent via written notice.</p>
                    </div>
                    <div>
                      <h4 className="text-accent uppercase font-black tracking-widest text-[10px] mb-4">Consequences</h4>
                      <p className="text-slate-400 text-sm font-medium">Choosing not to disclose or withdrawing consent may result in our inability to provide healthcare services.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Protection & Contact */}
              <div id="protection">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-black text-primary font-display tracking-tight mb-6">Protecting Your Data</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      We have taken physical, technical, and administrative measures to protect your data from loss, manipulation, and unauthorized access. We limit access and securely destroy information when no longer needed.
                    </p>
                  </div>
                  <div className="bg-soft p-8 rounded-[2.5rem] border border-slate-100 w-full md:w-80">
                    <HelpCircle className="w-8 h-8 text-accent mb-4" />
                    <h4 className="text-xs font-black uppercase text-primary tracking-widest mb-4">Contact Our DPO</h4>
                    <div className="space-y-3">
                      <a href="mailto:info@amaphil.com.ph" className="flex items-center gap-2 text-[13px] font-bold text-slate-500 hover:text-accent transition-colors">
                        <Mail className="w-4 h-4" />
                        info@amaphil.com.ph
                      </a>
                      <p className="flex items-center gap-2 text-[13px] font-bold text-slate-500">
                        <Phone className="w-4 h-4" />
                        8809-5360
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Quick Location Grid */}
      <section className="py-24 bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-6 p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center shrink-0">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h5 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Head Office</h5>
                <p className="text-xs font-bold text-primary leading-relaxed">U-501 5/F Aralco Bldg, JP Rizal, Makati</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 overflow-hidden">
                <img src="/NPCseal.png" alt="NPC Seal" className="w-14 h-14 object-contain" />
              </div>
              <div>
                <h5 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Data Security</h5>
                <p className="text-xs font-bold text-primary leading-relaxed">ISO 9001:2015 <br /> Certified QMS</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 overflow-hidden">
                <img src="/NPCcert.png" alt="NPC Certificate" className="w-14 h-14 object-contain" />
              </div>
              <div>
                <h5 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Compliance</h5>
                <p className="text-xs font-bold text-primary leading-relaxed">DPA of 2012 <br /> Full Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
