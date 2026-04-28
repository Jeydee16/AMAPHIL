import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Code, PhoneCall, UserPlus, GraduationCap, Laptop, ShieldCheck, Database, ChevronRight, FileText, ChevronDown } from 'lucide-react';

const JOBS = [
  {
    id: 'it-developer',
    title: "I.T. Developer",
    icon: <Code className="w-8 h-8 text-accent" />,
    color: "bg-accent/5",
    summary: "Leading technical innovation by developing and maintaining robust web and mobile applications for our healthcare network.",
    functions: [
      "Development and programming a certain functionality in web applications to cope with the user needs.",
      "Propose and implement new features that would help ease every user’s tasks.",
      "Monitoring and maintaining the performance and functionalities of the web application and mobile application, maintenance of the computer units and network facilities, and diagnosing and solving technical problems inside the office.",
      "Ensuring data backup and recovery as well as the readiness of the system in case of an emergency.",
      "Provide sufficient security measures to protect the data communications between the client end and the system server.",
      "Continuous development and improvement of the system to meet the company’s requirements and expectations.",
      "Maintain the stability of the internal network."
    ],
    qualifications: [
      "Graduate of four years IT related courses.",
      "With at least 2 years of relevant experience in IT development and programming but not required.",
      "Good experience in MS Office applications (excel, word, ppt).",
      "Knowledgeable in HTML, CSS, Javascript (jQuery, Angular JS Framework), PHP, MySQL, Cordova/Phonegap.",
      "Good analytical skills"
    ]
  },
  {
    id: 'corporate-telemarketer',
    title: "Corporate Telemarketer",
    icon: <PhoneCall className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-50",
    summary: "Driving corporate growth through professional outreach and building meaningful connections with prospective partners.",
    functions: [
      "Conduct outbound calls to prospective and existing clients to promote AMAPHIL’s services.",
      "Maintain a database of customer contacts, call logs, and follow-up schedules.",
      "Schedule appointments or meetings for the business development team with interested prospects.",
      "Answer inbound inquiries professionally and provide accurate information."
    ],
    qualifications: [
      "College graduate or equivalent experience in sales/telemarketing.",
      "Excellent communication and interpersonal skills.",
      "Proficient in database management and MS Office.",
      "Goal-oriented with a positive attitude."
    ]
  },
  {
    id: 'account-executive',
    title: "Account Executive",
    icon: <UserPlus className="w-8 h-8 text-emerald-500" />,
    color: "bg-emerald-50",
    summary: "Managing key corporate accounts and ensuring long-term partnership success through strategic relationship management.",
    functions: [
      "Prepares weekly report on the status of each handled account.",
      "Strategize on how to manage and train the assigned accounts.",
      "Proactively addresses and solves service issues within claims, accounts receivable, legal, managed care etc.",
      "Set up meetings between client decision makers and company’s practice leaders."
    ],
    qualifications: [
      "Bachelor's degree in Business, Marketing, or related field.",
      "Proven track record in account management or business development.",
      "Strong negotiation and presentation skills.",
      "Ability to build and maintain long-term client relationships."
    ]
  }
];

interface Job {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  summary: string;
  functions: string[];
  qualifications: string[];
}

const JobCard: React.FC<{ job: Job, index: number }> = ({ job, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5 border border-slate-100 hover:border-accent/30 transition-colors"
    >
      <div className="p-8 md:p-14">
        {/* Header - Always Visible */}
        <div 
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 cursor-pointer group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-6">
            <div className={`${job.color} w-20 h-20 rounded-3xl flex items-center justify-center transition-transform group-hover:scale-110`}>
              {job.icon}
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tight group-hover:text-accent transition-colors">
                {job.title}
              </h2>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full">Full-Time</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full">Makati City</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <p className="hidden md:block text-slate-400 text-sm font-medium max-w-xs text-right">
              {job.summary}
            </p>
            <div className={`w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-accent group-hover:text-accent transition-all ${isExpanded ? 'rotate-180 bg-accent text-white border-accent' : ''}`}>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <div className="pt-12 mt-12 border-t border-slate-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Primary Functions */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Laptop className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-black text-primary uppercase tracking-widest">Primary Functions</h3>
                    </div>
                    <ul className="space-y-4">
                      {job.functions.map((fn, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-500 group">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors flex-shrink-0" />
                          <span className="text-[15px] font-medium leading-relaxed">{fn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Qualifications */}
                  <div className="bg-slate-50/50 rounded-3xl p-8 md:p-10 border border-slate-100">
                    <div className="flex items-center gap-3 mb-6">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-black text-primary uppercase tracking-widest">Qualifications</h3>
                    </div>
                    <ul className="space-y-4">
                      {job.qualifications.map((qual, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-600">
                          <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-[15px] font-bold tracking-tight">{qual}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-12 pt-8 border-t border-slate-200">
                      <div className="flex items-center gap-4 text-slate-400">
                        <Database className="w-5 h-5" />
                        <p className="text-xs font-bold uppercase tracking-widest italic">
                          Values driven and growth-oriented mindset required.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex justify-end">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="bg-accent text-white px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-3"
                  >
                    <FileText className="w-4 h-4" />
                    Submit Application
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function CareersPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:h-[450px] overflow-hidden flex items-center bg-primary py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop" 
            alt="Careers at AMAPHIL" 
            className="w-full h-full object-cover opacity-20 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-[0.3em] mb-6">
              <Briefcase className="w-4 h-4 text-accent" />
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white font-display uppercase tracking-tight mb-6">
              Build Your <span className="text-accent">Future</span> <br />
              With AMAPHIL
            </h1>
            <p className="text-white/70 max-w-xl text-lg font-medium leading-relaxed">
              We are looking for dedicated professionals to help us transform healthcare accessibility in the Philippines. Explore our open positions and find your next role.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Listings */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 md:-mt-20 relative z-20 pb-24">
        <div className="space-y-6">
          {JOBS.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-[3rem] blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
              alt="Office Life" 
              className="relative w-full aspect-square object-cover rounded-[3rem] shadow-2xl"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
              <span className="text-4xl font-black text-primary block">10+</span>
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">Years of Growth</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight mb-8">
              Why Work At <span className="text-accent">AMAPHIL?</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10">
              We believe in consistent progress and excellence. At AMAPHIL, you're not just an employee; you're a vital part of a team dedicated to transforming healthcare for millions of Filipinos.
            </p>
            <div className="space-y-6">
              {[
                "Competitive Compensation Packages",
                "Continuous Learning & Technical Training",
                "Health & Wellness Benefits",
                "Dynamic and Collaborative Work Culture"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-soft flex items-center justify-center text-accent">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <span className="text-primary font-black uppercase text-sm tracking-widest">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">
            Ready to Make an <span className="text-accent">Impact?</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12 text-lg font-medium">
            Send your resume and cover letter to <span className="text-accent font-black">hr@amaphil.com.ph</span> or use our online application system.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate('/contact')}
              className="w-full md:w-auto bg-white text-primary px-12 py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-2xl"
            >
              Apply via Email
            </button>
            <span className="text-white/40 font-black uppercase text-xs tracking-widest">or</span>
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/careers');
              }}
              className="w-full md:w-auto border-2 border-white/20 text-white px-12 py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all"
            >
              View All Openings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
