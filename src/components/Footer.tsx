import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 block w-fit">
              <img src="/logo.png" alt="AMAPHIL Logo" className="h-8 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Advanced Medical Access Philippines. Effortlessly manage your medical requests and transactions with ease.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/Amaphil.Inc" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all text-slate-300 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/messages/t/163268104339260" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all text-slate-300 hover:text-white">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="mailto:info@amaphil.com.ph" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all text-slate-300 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/our-outline" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Medical Access</a></li>
              <li><Link to="/news" className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Join Our Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {['LOA Request', 'Emergency Access', 'Laboratory Services', 'Hospital Admission', 'Reimbursements'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span>U-501 5/F Aralco Building, 820 J.P. Rizal Street, Poblacion, Makati City</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>(02) 8888 8888</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span>info@amaphil.com.ph</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-xs text-slate-500 text-center md:text-left">
              Copyright © 2024 Advanced Medical Access Philippines. All rights reserved.
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start opacity-50 hover:opacity-100 transition-opacity">
              <img src="/NPCseal.png" alt="NPC Seal" className="h-10 w-auto object-contain" />
              <img src="/NPCcert.png" alt="NPC Certificate" className="h-10 w-auto object-contain" />
            </div>
          </div>
          <div className="flex gap-8 text-xs text-slate-500 font-medium">
             <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
