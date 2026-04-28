import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'About', 
      href: '#',
      submenu: [
        { name: 'Our Outline', href: '/our-outline' },
        { name: 'Why AMAPHIL', href: '/why-amaphil' },
        { name: 'News and Articles', href: '/news' },
        { name: 'Data Privacy Policy', href: '/privacy-policy' },
      ]
    },
    { 
      name: 'Medical Access', 
      href: '#',
      submenu: [
        { name: 'Accredited Providers', href: '/accredited-providers' },
        { name: 'Accredited Physicians', href: '/accredited-physicians' },
        { name: 'Dental Network Partners', href: '/dental-partners' },
        { name: 'Medical Coordinators', href: '/medical-coordinators' },
      ]
    },
    { 
      name: 'Impact & Success', 
      href: '#',
      submenu: [
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Certificate of Good Credit Standing', href: '/recognitions' },
      ]
    },
    { name: 'Get In Touch', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 py-4' : 'bg-white py-6 shadow-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <img src="/logo.png" alt="AMAPHIL Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isDirectActive = location.pathname === link.href;
              const hasActiveChild = link.submenu?.some(sub => sub.href === location.pathname);
              const isActive = isDirectActive || hasActiveChild;

              return (
                <div 
                  key={link.name}
                  className="relative group/menu"
                  onMouseEnter={() => setActiveSubmenu(link.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link 
                    to={link.href}
                    className={`flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300 relative group/link py-4 ${
                      isActive ? 'text-primary' : 'text-slate-500 hover:text-primary'
                    }`}
                  >
                    {link.name}
                    {link.submenu && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeSubmenu === link.name ? 'rotate-180 text-accent' : (isActive ? 'text-accent' : '')}`} />
                    )}
                    <span className={`absolute bottom-2 left-0 h-0.5 bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
                  </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.submenu && activeSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 pt-2"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-slate-100 overflow-hidden py-3">
                        {link.submenu.map((subItem) => {
                          const isSubActive = location.pathname === subItem.href;
                          return subItem.href.startsWith('/') ? (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`flex items-center justify-between px-6 py-3.5 text-[14px] font-medium transition-colors group/item ${
                                isSubActive ? 'bg-soft text-primary' : 'text-slate-600 hover:bg-soft hover:text-primary'
                              }`}
                              onClick={() => setActiveSubmenu(null)}
                            >
                              {subItem.name}
                              <ChevronRight className={`w-4 h-4 transition-all text-accent ${
                                isSubActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0'
                              }`} />
                            </Link>
                          ) : (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center justify-between px-6 py-3.5 text-[14px] font-medium text-slate-600 hover:bg-soft hover:text-primary transition-colors group/item"
                            >
                              {subItem.name}
                              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-accent" />
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          </div>
          <Link 
            to="/member-login"
            className="bg-accent text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-primary hover:shadow-xl hover:shadow-accent/20 active:scale-95 transition-all duration-500"
          >
            Member Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link) => {
                const hasActiveChild = link.submenu?.some(sub => sub.href === location.pathname);
                const isDirectActive = location.pathname === link.href;
                const isActive = isDirectActive || hasActiveChild;

                return (
                  <div key={link.name} className="flex flex-col">
                    <div className="flex items-center justify-between py-3">
                      {link.href.startsWith('/') ? (
                          <Link 
                          to={link.href}
                          className={`text-lg font-bold font-display tracking-tight ${isActive ? 'text-accent' : 'text-slate-900'}`}
                          onClick={() => !link.submenu && setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a 
                          href={link.href}
                          className={`text-lg font-bold font-display tracking-tight ${isActive ? 'text-accent' : 'text-slate-900'}`}
                          onClick={() => !link.submenu && setIsOpen(false)}
                        >
                          {link.name}
                        </a>
                      )}
                      {link.submenu && (
                        <button 
                          onClick={() => setMobileSubmenu(mobileSubmenu === link.name ? null : link.name)}
                          className="p-2 text-slate-400"
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileSubmenu === link.name || hasActiveChild ? 'rotate-180 text-accent' : ''}`} />
                        </button>
                      )}
                    </div>
                  
                  {link.submenu && (
                    <AnimatePresence>
                      {mobileSubmenu === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden border-l-2 border-accent/20 ml-4 mb-4"
                        >
                          <div className="flex flex-col gap-2 py-2">
                            {link.submenu.map((subItem) => {
                              const isSubActive = location.pathname === subItem.href;
                              return subItem.href.startsWith('/') ? (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className={`px-4 py-2.5 text-[15px] font-medium transition-colors ${
                                    isSubActive ? 'text-accent' : 'text-slate-500 hover:text-primary'
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ) : (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="px-4 py-2.5 text-[15px] font-medium text-slate-500 hover:text-primary transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </a>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
              <div className="mt-6 pt-6 border-t border-slate-50">
                <Link 
                  to="/member-login"
                  className="w-full bg-primary text-white py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-accent transition-all shadow-xl shadow-primary/10 flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Member Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
