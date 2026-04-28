import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Calendar } from 'lucide-react';

export default function LatestNews() {
  const news = [
    {
      title: "Doctor Anywhere",
      excerpt: "Further advancing medical access: AMAPHIL collaborates with Doctor Anywhere",
      tag: "Development",
      date: "June 27, 2025",
      img: "/da.png"
    },
    {
      title: "AMAPHIL Fast",
      excerpt: "AMAPHIL unveils FAST: Transact more conveniently with A.I. Chat Assistant",
      tag: "A.I. Chat",
      date: "April 25, 2025",
      img: "/fast.png"
    },
    {
      title: "Meet Fast",
      excerpt: "Watch tutorial video: F.A.S.T. on Messenger",
      tag: "Tutorial",
      date: "April 25, 2025",
      img: "/tutorial.png"
    }
  ];

  return (
    <section className="py-32 bg-soft font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-accent font-display tracking-tight leading-none">Latest with AMAPHIL</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {news.map((item, index) => (
            <Link to="/news" key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -15 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 flex flex-col h-full border border-slate-50"
              >
                <div className="relative h-72 overflow-hidden flex items-center justify-center bg-white p-8">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="max-w-full max-h-full object-contain transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow text-center items-center">
                  <h4 className="text-[17px] font-bold text-slate-800 leading-[1.6] mb-8 group-hover:text-accent transition-colors">
                    {item.excerpt}
                  </h4>
                  <div className="mt-auto">
                    <div className="flex items-center gap-4 text-[9px] uppercase font-black text-slate-300 tracking-[0.2em]">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/news"
            className="inline-flex items-center gap-4 px-10 py-5 bg-white rounded-full text-[11px] font-black uppercase tracking-[0.25em] text-primary hover:bg-primary hover:text-white transition-all shadow-xl shadow-black/5 group"
          >
            All News & Articles
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
