import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronRight, Play, ArrowRight, Share2, Search, X } from 'lucide-react';
import { useState } from 'react';

export default function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const articles = [
    {
      title: "FURTHER ADVANCING MEDICAL ACCESS: AMAPHIL COLLABORATES WITH DOCTOR ANYWHERE",
      category: "Doctor Anywhere",
      date: "June 27, 2025",
      img: "/da.png",
      excerpt: "Establishing an affiliation with the digital health platform's network of teleconsult doctors to provide 24/7 virtual consultations, prescriptions, and medical certificates directly from your mobile phone.",
      content: `Amaphil launched its latest collaboration with Dr. Anywhere on June 27, 2025, establishing an affiliation with the digital health platform’s network of teleconsult doctors. Dr. Anywhere offers medical services including 24/7 virtual consultations, enabling the issuance of prescriptions and medical certificates to patients. 

This partnership strengthens Amaphil’s commitment to advancing medical access for its members. No more long lines or delayed waiting times—you can now consult a medical professional conveniently from your mobile phone.

Members can request a Letter of Authorization (LOA) for teleconsultations within minutes directly through the web or app via the integrated Dr. Anywhere feature. The issued LOA CAN must be presented in the Dr. Anywhere application to proceed with the consultation. Amaphil members can access a wide variety of accredited health practitioners, including general practitioners, internal medicine specialists, and family medicine doctors. Patients can schedule an appointment or request an immediate consultation within minutes, even on holidays.

Access to healthcare should be simple and within reach. Amaphil continues to expand its services and options to provide members with further advanced medical access, living up to our brand’s mission. Transforming healthcare one tap at a time, we can’t wait to share more innovative medical access solutions with you! Amaphil assistance is always available via email, Messenger, or our in-app AI chatbot, FAST!`,
      type: "Read More"
    },
    {
      title: "AMAPHIL UNVEILS FAST: Transact More Conveniently with A.I. Chat Assistant",
      category: "FAST",
      date: "April 25, 2025",
      img: "/fast.png",
      excerpt: "Friendly Assistant for Speedy Transactions (FAST) is designed to provide seamless, prompt support for convenient access to benefit plans and coverage.",
      content: `Taking another step forward, Advanced Medical Access Philippines (AMAPHIL) Inc. has launched its innovative AI chatbot, FAST—Friendly Assistant for Speedy Transactions. Introduced on April 25, 2025, FAST is designed to provide seamless, prompt support to AMAPHIL members for more convenient access to their benefit plans and coverage.

Available through AMAPHIL’s Messenger, webchat, and mobile app, FAST is a user-friendly artificial intelligence chatbot that puts account information at members’ fingertips. Through one-time identity verification, FAST offers seamless access to check and update account details, generate Letter of Authorization (LOA), review transaction history, and assist with inquiries about medical access. With this new integration into AMAPHIL’s services, updating account information and availing of benefits more efficiently are now made possible.

AMAPHIL’s commitment to innovation is reflected through the launch of FAST and its purpose of making healthcare accessible to its stakeholders. Members can now effortlessly navigate their healthcare benefit plans and explore various ways to utilize them. Continuing its mission to advance medical access in the Philippines, AMAPHIL has taken another step forward with FAST. It doesn’t stop here; staying future-oriented and forward-thinking, members can surely look forward to more upgrades!`,
      type: "Read More"
    },
    {
      title: "WATCH: F.A.S.T. ON MESSENGER Tutorial Video",
      category: "Tutorial",
      date: "April 25, 2025",
      img: "/tutorial.png",
      excerpt: "Step-by-step guide on how to maximize our new A.I. assistant directly through Facebook Messenger.",
      videoUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D746381934498245&show_text=false&width=1280&height=720",
      content: `Maximize your AMAPHIL membership with our new A.I. assistant, FAST, now available on Facebook Messenger! 

In this video tutorial, we walk you through the simple steps to connect with FAST, from basic inquiries to advanced feature usage. Learn how to get instant responses to your most common questions and discover how FAST can help you manage your healthcare needs on the go.

Watch the full tutorial to start transacting more conveniently today!`,
      type: "Watch"
    }
  ];

  return (
    <div className="pt-24 bg-soft font-sans min-h-screen">
      {/* Header */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.5em] mb-6">Inside AMAPHIL</h2>
            <h1 className="text-5xl md:text-7xl font-black text-primary font-display tracking-tight leading-none mb-8">
              News & <span className="font-serif italic font-normal text-slate-400">Articles</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Stay updated with the latest collaborations, technological breakthroughs, and healthcare guides from the country's leading TPA.
            </p>
          </div>
        </div>
      </section>

      {/* Main Feed */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedArticle(article)}
                className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 flex flex-col border border-slate-100 cursor-pointer"
              >
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img 
                    src={article.img} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-primary shadow-xl">
                      {article.category}
                    </span>
                  </div>
                  {article.type === "Watch" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <Play className="w-6 h-6 ml-1 fill-current" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    {article.date}
                  </div>
                  
                  <h3 className="text-2xl font-black text-primary font-display leading-[1.3] mb-6 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-500 text-[15px] leading-relaxed mb-10 flex-grow font-medium opacity-80 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                    <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-primary group-hover:text-accent transition-all">
                      {article.type}
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                    <button className="text-slate-300 hover:text-accent transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter / More Section */}
          <div className="mt-32 bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>
            
            <div className="max-w-2xl relative z-10">
              <h4 className="text-4xl font-black font-display tracking-tight mb-6">Subscribe to Insights</h4>
              <p className="text-slate-300 text-lg font-medium mb-10">Get the latest healthcare trends and AMAPHIL updates delivered straight to your inbox.</p>
              
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-grow bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-5 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all font-medium"
                />
                <button className="bg-accent text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-3 shadow-xl shadow-black/10 group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
              <p className="mt-6 text-[10px] uppercase font-bold tracking-widest text-slate-400">We respect your privacy. No spam, ever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-5xl h-full max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 flex flex-col"
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-8 right-8 z-20 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all shadow-xl"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex-grow overflow-y-auto">
                <div className="relative aspect-video bg-black rounded-t-[3rem] overflow-hidden">
                  {selectedArticle.videoUrl ? (
                    <iframe 
                      src={selectedArticle.videoUrl} 
                      className="w-full h-full border-none"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
                    />
                  ) : (
                    <div className="h-96 w-full">
                      <img 
                        src={selectedArticle.img} 
                        alt={selectedArticle.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                    </div>
                  )}
                </div>

                <div className="px-10 md:px-20 pb-20 pt-12 relative z-10">
                  <div className="flex items-center gap-4 text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-6">
                    <span className="px-5 py-2 bg-white rounded-full shadow-lg border border-slate-50 text-primary">
                      {selectedArticle.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-2">
                       <Calendar className="w-4 h-4" />
                       {selectedArticle.date}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black text-primary font-display leading-[1.1] mb-10 tracking-tight">
                    {selectedArticle.title}
                  </h2>

                  <div className="prose prose-slate prose-lg max-w-none">
                    {selectedArticle.content.split('\n\n').map((para: string, idx: number) => (
                      <p key={idx} className="text-slate-600 font-medium leading-relaxed mb-6">
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Share this article</h4>
                      <div className="flex items-center gap-4">
                        {['FB', 'IG', 'LI', 'TW'].map(s => (
                          <button key={s} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[10px] font-black hover:bg-accent hover:text-white transition-all">
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedArticle(null)}
                      className="bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-accent transition-all shadow-xl"
                    >
                      Close Article
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Category Filter Desktop */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-full px-8 py-4 flex items-center gap-8">
          <div className="flex items-center gap-3 text-accent border-r border-slate-100 pr-8">
            <Search className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Filter</span>
          </div>
          <div className="flex items-center gap-8">
            {['All', 'Medical', 'Tech', 'Events', 'Guide'].map((cat) => (
              <button 
                key={cat}
                className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors relative group"
              >
                {cat}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

