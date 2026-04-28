import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const accepted = localStorage.getItem('cookieAccepted');
      if (!accepted) setShow(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[100]"
        >
          <div className="glass-panel p-6 rounded-3xl shadow-2xl flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Cookie className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <h4 className="text-sm font-bold text-primary mb-1">Cookie Policy</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We use cookies to improve your experience. By continuing, you agree to our 
                  <a href="#" className="text-accent underline ml-1">cookie policy</a>.
                </p>
              </div>
              <button 
                onClick={() => setShow(false)}
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={handleAccept}
                className="flex-grow py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:bg-primary-light transition-all"
              >
                Accept All
              </button>
              <button 
                onClick={() => setShow(false)}
                className="px-6 py-2.5 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all text-nowrap"
              >
                Necessary Only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
