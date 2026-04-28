import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ShieldAlert } from 'lucide-react';

export default function WarningModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show only once per session
    const hasSeenModal = sessionStorage.getItem('hasSeenWarningModal');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500); // Small delay for better UX
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('hasSeenWarningModal', 'true');
    setIsOpen(false);
  };

  const links = [
    { name: 'First Life', href: 'https://firstlife.com.ph/' },
    { name: 'HCI', href: 'https://www.hcd.com.ph/' },
    { name: 'Pangpamilya', href: 'https://pangpamilya.org/' },
    { name: 'Paramount', href: 'https://www.paramount.com.ph/' },
    { name: 'Optimum HMO', href: 'https://www.optimumhmo.ph/' },
    { name: 'Climbs', href: 'https://climbs.coop/' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary">Official Notice</h3>
              </div>

              <div className="space-y-6">
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  AMAPHIL agents and staff do not sell premium-based plans for individuals or families. You can, however, deal directly with our insurance and HMO partners. 
                  <span className="block mt-2 font-medium text-slate-900">Please click the following links to visit their websites:</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-2xl bg-soft border border-slate-100 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all group"
                    >
                      {link.name}
                      <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>

                <p className="text-slate-500 text-sm italic border-l-4 border-amber-200 pl-4 py-1">
                  If someone is selling premium-based programs and is claiming to be from AMAPHIL, please exercise caution and disregard their offer.
                </p>
              </div>

              <div className="mt-10">
                <button
                  onClick={handleClose}
                  className="w-full py-4 bg-[#607d3b] text-white rounded-2xl font-bold hover:bg-[#6d8d43] active:scale-[0.98] transition-all shadow-lg shadow-primary/10"
                >
                  Got it!
                </button>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-primary transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
