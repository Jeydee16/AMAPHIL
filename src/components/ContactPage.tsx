import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Building2, UserCircle, Stethoscope, ChevronRight, Facebook } from 'lucide-react';

type InquiryType = 'CORPORATE' | 'MEMBER' | 'PROVIDER';

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<InquiryType>('CORPORATE');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { inquiryType, ...formData });
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative h-[350px] overflow-hidden flex items-center bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=2520&auto=format&fit=crop" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white font-display uppercase tracking-tight mb-4">
              Get <span className="text-accent">In Touch</span>
            </h1>
            <p className="text-white/70 max-w-xl text-lg font-medium leading-relaxed">
              We're here to help. Reach out to us for inquiries, support, or partnership opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl shadow-black/5 border border-slate-100"
            >
              <div className="space-y-10">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block">Landline</span>
                      <p className="text-lg font-black text-primary">(02) 8355-7500</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block">Email Address</span>
                      <p className="text-lg font-black text-primary">info@amaphil.com.ph</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-2">Office Address</span>
                      <p className="text-slate-600 font-bold leading-relaxed">
                        U-501 5/F Aralco Building, 820 J.P. Rizal Street, Poblacion, Makati City
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-10 border-t border-slate-50">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Connect with us</p>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/Amaphil.Inc" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-6 py-3 bg-slate-50 rounded-xl text-slate-600 text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm flex items-center gap-2"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                  <a 
                    href="https://www.facebook.com/messages/t/163268104339260" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-6 py-3 bg-slate-50 rounded-xl text-slate-600 text-xs font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-sm flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Messenger
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Assistance Card */}
            <div className="bg-primary rounded-[2rem] p-8 text-white">
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">Immediate Support?</h3>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                For urgent medical concerns or hospital coordination, our hotline is available 24/7.
              </p>
              <button className="flex items-center gap-2 text-accent font-black uppercase text-xs tracking-widest group">
                Call Assistance Now
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-black/5 border border-slate-100 h-full"
            >
              <h2 className="text-3xl font-black text-primary uppercase tracking-tight mb-2">Send us a Message</h2>
              <p className="text-slate-500 font-medium mb-10">We aim to respond to all inquiries within 24-48 business hours.</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Inquiry Type Toggle */}
                <div className="grid grid-cols-3 gap-4">
                  {(['CORPORATE', 'MEMBER', 'PROVIDER'] as InquiryType[]).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setInquiryType(type)}
                      className={`py-4 rounded-2xl flex flex-col items-center gap-2 transition-all border-2 ${
                        inquiryType === type 
                          ? 'bg-accent/5 border-accent text-accent' 
                          : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'
                      }`}
                    >
                      {type === 'CORPORATE' && <Building2 className="w-5 h-5" />}
                      {type === 'MEMBER' && <UserCircle className="w-5 h-5" />}
                      {type === 'PROVIDER' && <Stethoscope className="w-5 h-5" />}
                      <span className="text-[10px] font-black uppercase tracking-widest">{type}</span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-accent transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-accent transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Contact Number</label>
                    <input 
                      type="tel" 
                      placeholder="09XX XXX XXXX"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-accent transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject of Inquiry</label>
                    <select 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-accent transition-all font-bold text-slate-600 appearance-none"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option value="">Select subject</option>
                      <option value="billing">Billing & Payments</option>
                      <option value="membership">Membership Application</option>
                      <option value="provider">Accreditation Request</option>
                      <option value="other">Other Concerns</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                  <textarea 
                    required
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-accent transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-6 rounded-2xl text-xs font-black uppercase tracking-[0.3em] hover:bg-accent hover:shadow-2xl hover:shadow-accent/30 transition-all flex items-center justify-center gap-3"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-black text-primary uppercase tracking-tight mb-6">Our Head Office</h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8">
                Visit our headquarters in the heart of Makati City. Our offices are open Monday to Friday, 9:00 AM to 6:00 PM.
              </p>
              <div className="inline-flex items-center gap-4 p-4 bg-soft rounded-2xl border border-slate-100">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-black text-primary">Conveniently Located</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Aralco Building, Poblacion</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-video rounded-[2.5rem] bg-slate-100 overflow-hidden relative shadow-2xl border-8 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.433842183296!2d121.0305886!3d14.563821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8f498b8b3db%3A0x6d11b3e6e6f99f3c!2sAralco%20Building!5e0!3m2!1sen!2sph!4v1714311843198!5m2!1sen!2sph" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
