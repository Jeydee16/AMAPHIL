import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Building2, User, Stethoscope, DoorOpen, Clock, Phone, History, ChevronLeft, ChevronRight } from 'lucide-react';

interface Coordinator {
  id: number;
  providerName: string;
  coordinator: string;
  specialization: string;
  room: string;
  schedule: string;
  secretary: string;
  contact: string;
}

const COORDINATORS_DATA: Coordinator[] = [
  {
    id: 1,
    providerName: "ASIAN HOSPITAL & MEDICAL CENTER",
    coordinator: "MICHELLE ANGELA TAN-REYES",
    specialization: "IM-PULMO",
    room: "ROOM 101",
    schedule: "M-F 9AM-5PM ; SAT 9AM-12 NN",
    secretary: "MS. MAE",
    contact: "(02) 771-9312"
  },
  {
    id: 2,
    providerName: "CARDINAL SANTOS MEDICAL CENTER",
    coordinator: "FELICISIMO AGAS",
    specialization: "IM- GASTRO AND ENDOSCOPY",
    room: "Rm 214",
    schedule: "WF 1-3PM / TTHSAT 10-12",
    secretary: "JOAN / TERRY",
    contact: "7213751"
  },
  {
    id: 3,
    providerName: "CEBU DOCTORS' UNIVERSITY HOSPITAL",
    coordinator: "JOSHUA E. TUASON",
    specialization: "GENERAL SURGERY / LAPAROSCOPY / ENDOSCOPY",
    room: "MAB 2 ROOM 209",
    schedule: "M-Sat 9AM-12NN",
    secretary: "Rinalyn Arebato",
    contact: "0923-4371999 / (0312) 255 5555 local 792"
  },
  {
    id: 4,
    providerName: "CEBU NORTH GENERAL HOSPITAL",
    coordinator: "MARIA JANET S. PORCIA",
    specialization: "PEDIATRICIAN",
    room: "HMO DEPARTMENT",
    schedule: "M-SAT 9 - 6 PM",
    secretary: "c/o HMO DEPARTMENT LAARNI A. DAET",
    contact: "(0312) 412-4799 ; 343-7777"
  },
  {
    id: 5,
    providerName: "CEBU SOUTH GENERAL HOSPITAL",
    coordinator: "EVELYN B. TANG",
    specialization: "FAMILY MEDICINE",
    room: "104",
    schedule: "M-F 9-12 ; 2-4 SAT 9-1",
    secretary: "Janet Ydayan",
    contact: "(0312) 266-9301 ; 09122724780"
  },
  {
    id: 6,
    providerName: "CHINESE GENERAL HOSPITAL",
    coordinator: "JOSEFINO QUA",
    specialization: "GENERAL AND CANCER SURGERY / LAPAROSCOPIC SURGERY",
    room: "RM N-6",
    schedule: "MON-SAT 9AM - 3-PM",
    secretary: "CECILIA GO",
    contact: "7270001 local 2135"
  },
  {
    id: 7,
    providerName: "MACTAN DOCTORS HOSPITAL",
    coordinator: "MYRNA GONZALES LOPEZ",
    specialization: "PEDIATRICIAN",
    room: "106",
    schedule: "MTWF-10AM-4PM ; THSAT-10AM-12NN",
    secretary: "MS. JOY TUMULAK",
    contact: "(0312) 236 0000 / 0922-253-2650"
  },
  {
    id: 8,
    providerName: "MAKATI MEDICAL CENTER",
    coordinator: "JOSE SANCHEZ",
    specialization: "CARDIOLOGY",
    room: "HALL C 257",
    schedule: "M-SAT 8-5 PM",
    secretary: "Ms. Emee / She / Dina",
    contact: "888-8999 loc 2257"
  },
  {
    id: 9,
    providerName: "MANILA DOCTORS HOSPITAL",
    coordinator: "JOSE SANCHEZ",
    specialization: "CARDIOLOGY",
    room: "ROOM D705",
    schedule: "M-S 8:30-4:30",
    secretary: "Ms. Daphney / Janet",
    contact: "524-2718 / 09338626073"
  },
  {
    id: 10,
    providerName: "MARIA REYNA-XAVIER UNIVERSITY HOSPITAL, INC",
    coordinator: "CHERRY LOU PEPINO",
    specialization: "INTERNAL MEDICINE",
    room: "HMO DEPARTMENT",
    schedule: "Mon-Sat (8:30 AM-12:00 NN, 2:00 PM- 5:00 PM)",
    secretary: "c/o HMO Department",
    contact: "(08822) 712 664 local 696 ; 09772577961"
  },
  {
    id: 11,
    providerName: "MEDICAL CENTER MANILA",
    coordinator: "KATHA W. NGO-SANCHEZ",
    specialization: "Infectious Diseases / Internal Medicine",
    room: "HMO Concierge",
    schedule: "M-Sat (8:00 AM - 5:00 PM)",
    secretary: "c/o HMO Department",
    contact: "523-8131 local 3"
  },
  {
    id: 12,
    providerName: "PHILIPPINE HEART CENTER",
    coordinator: "TERESITA SADAVA",
    specialization: "CARDIOLOGY",
    room: "409",
    schedule: "Mon, Wed, Fri 3 to 5pm Tues, Thurs, Sat 10am to 12nn",
    secretary: "MS. JOY DAYRIT",
    contact: "(02) 925 2401"
  },
  {
    id: 13,
    providerName: "SAINT PATRICK'S HOSPITAL AND MEDICAL CENTER",
    coordinator: "LORALIE EVANGELINE PEREZ-MIRANDA",
    specialization: "INTERNAL MEDICINE",
    room: "—",
    schedule: "—",
    secretary: "MS. LORIE JANE ASI GEBA",
    contact: "—"
  },
  {
    id: 14,
    providerName: "SLMC GLOBAL CITY",
    coordinator: "VICTORIA T. SHIA",
    specialization: "CARDIOLOGY",
    room: "MAB 925",
    schedule: "Tues, Thurs, Sat 9am to 12nn",
    secretary: "NANETTE",
    contact: "(02) 789 7700 loc. 7925"
  },
  {
    id: 15,
    providerName: "SLMC QUEZON CITY",
    coordinator: "JOHNNY T. SHIA",
    specialization: "CARDIOLOGY",
    room: "MAB 326",
    schedule: "Mon, Tues, Thurs 2 to 5:30pm Wed 10am to 1:30pm Sat 10am to 3pm",
    secretary: "PEECHY ALEGADO",
    contact: "1230101 loc. 6326"
  },
  {
    id: 16,
    providerName: "THE MEDICAL CITY",
    coordinator: "ROMMEL TOLENTINO",
    specialization: "IM-NEPHROLOGY",
    room: "ROOM 1708",
    schedule: "M-S except Fri 2-5pm",
    secretary: "APPLE / MARIBELLE CLEMENTE",
    contact: "9881000 loc. 5238"
  },
  {
    id: 17,
    providerName: "LUNG CENTER OF THE PHILIPPINES",
    coordinator: "GUILLERMO BARROA",
    specialization: "—",
    room: "—",
    schedule: "—",
    secretary: "—",
    contact: "—"
  },
  {
    id: 18,
    providerName: "SAN PEDRO HOSPITAL OF DAVAO CITY",
    coordinator: "ANNABELLE GARADO",
    specialization: "OB-GYNE",
    room: "Rita's Tan Bldg. Room 403",
    schedule: "M-F 10am to 6p / Sat 10am-2pm",
    secretary: "Myra Jane Asna",
    contact: "(082) 222 6100 loc. 165"
  },
  {
    id: 19,
    providerName: "SAN JUAN DE DIOS EDUCATIONAL FOUNDATION INC.",
    coordinator: "RUSSELINI R. MAGDAONG",
    specialization: "INTERNIST-GASTROENTEROLOGIST",
    room: "ROOM # 22",
    schedule: "Mon & Wed 9AM-1PM ; Tue, Thurs, Fri & Sat 9AM-4PM",
    secretary: "MICHELLE JUSON / ROCHELLE",
    contact: "(02) 831-9731 loc 1236"
  },
  {
    id: 20,
    providerName: "DAVAO DOCTORS HOSPITAL",
    coordinator: "ANGELITO REGONDOLA",
    specialization: "GENERAL SURGERY-HEPATOBILIARY",
    room: "Room 808",
    schedule: "M-F 9AM-12NN ; 2PM-4PM / SAT. 9AM-12NN",
    secretary: "FLORA J. DEPALING",
    contact: "(082) 222-8000 loc 6808 ; 09229545098"
  },
  {
    id: 21,
    providerName: "UNIVERSITY OF CEBU MEDICAL CENTER",
    coordinator: "GUIAN DARNELL T. SUMALINOG",
    specialization: "FAMILY MEDICINE",
    room: "SUITE 7A",
    schedule: "MON-SAT 10AM-12NN",
    secretary: "AHYEN TAMPUS",
    contact: "9459887409"
  },
  {
    id: 22,
    providerName: "MEYCAUAYAN DOCTORS HOSPITAL",
    coordinator: "CESARIO IRA",
    specialization: "UROLOGY",
    room: "HMO DEPARTMENT",
    schedule: "M-S 10:00 -12:00",
    secretary: "c/o HMO Department",
    contact: "044 7690951 ; 044 7696450"
  },
  {
    id: 23,
    providerName: "MARYMOUNT HOSPITAL",
    coordinator: "CESARIO IRA",
    specialization: "UROLOGY",
    room: "HMO DEPARTMENT",
    schedule: "MON. - SAT 9-6 PM",
    secretary: "c/o HMO Department",
    contact: "09062322864 ; 09293801992"
  },
  {
    id: 24,
    providerName: "CAPITOL MEDICAL CENTER",
    coordinator: "Cecile Clemente-Ocampo",
    specialization: "DERMATOLOGY",
    room: "Unit 501 Medical Arts Building, Capitol Medical Center",
    schedule: "—",
    secretary: "Ms. Weng",
    contact: "(02) 8372-3825"
  },
  {
    id: 25,
    providerName: "SOUTH BACOLOD GENERAL HOSPITAL",
    coordinator: "Dr. Benjamin S. Souribio",
    specialization: "—",
    room: "—",
    schedule: "—",
    secretary: "—",
    contact: "—"
  },
  {
    id: 26,
    providerName: "SOUTH BACOLOD GENERAL HOSPITAL",
    coordinator: "Dr. Rodean Nonato",
    specialization: "—",
    room: "—",
    schedule: "—",
    secretary: "—",
    contact: "—"
  }
];

export default function MedicalCoordinators() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  const filteredData = useMemo(() => {
    return COORDINATORS_DATA.filter(item => 
      item.providerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.coordinator.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalEntries = filteredData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, totalEntries);
  const currentEntries = filteredData.slice(startIndex, endIndex);

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Header Section */}
      <section className="relative h-[300px] overflow-hidden flex items-center bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop" 
            alt="Medical Coordinators" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-white font-display uppercase tracking-tight mb-4">
              Medical Coordinators
            </h1>
            <p className="text-white/80 max-w-xl text-lg font-medium leading-relaxed">
              Our dedicated medical coordinators are available to assist you at our partner hospitals nationwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/5 border border-slate-100 overflow-hidden">
          {/* Search Bar */}
          <div className="p-8 md:p-12 border-b border-slate-50">
            <div className="max-w-2xl">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 block mb-4">
                Search for Hospital, Coordinator or Specialization
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-accent">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Type to search..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pl-14 pr-6 text-base font-medium focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all shadow-inner"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 min-w-[300px]">Hospital / Provider</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 min-w-[250px]">Coordinator</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">Specialization</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 min-w-[200px]">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {currentEntries.length > 0 ? (
                  currentEntries.map((item) => (
                    <motion.tr 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={item.id} 
                      className="hover:bg-soft transition-colors group"
                    >
                      <td className="px-8 py-8 align-top">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <Building2 className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-primary text-[15px] leading-snug group-hover:text-accent transition-colors">
                              {item.providerName}
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-8 align-top">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                            <User className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 text-[15px] leading-snug">
                              {item.coordinator}
                            </p>
                            <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 mt-1 block">
                              Medical Coordinator
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-8 align-top">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-[13px] font-bold">
                          <Stethoscope className="w-3.5 h-3.5" />
                          {item.specialization || 'General'}
                        </div>
                      </td>
                      <td className="px-8 py-8 align-top">
                        <div className="space-y-4">
                          {item.room !== '—' && (
                            <div className="flex items-center gap-3 text-[13px] text-slate-600">
                              <DoorOpen className="w-4 h-4 text-accent flex-shrink-0" />
                              <span className="font-medium">Room: {item.room}</span>
                            </div>
                          )}
                          {item.schedule !== '—' && (
                            <div className="flex items-start gap-3 text-[13px] text-slate-600">
                              <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="font-medium leading-relaxed">{item.schedule}</span>
                            </div>
                          )}
                          {item.contact !== '—' && (
                            <div className="flex items-start gap-3 text-[13px] text-slate-600">
                              <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="font-bold text-primary">{item.contact}</span>
                            </div>
                          )}
                          {item.secretary !== '—' && (
                            <div className="flex items-center gap-3 text-[13px] text-slate-500 pt-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                              <span>Sec: {item.secretary}</span>
                            </div>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-8 py-20 text-center">
                      <div className="flex flex-col items-center gap-4 text-slate-400">
                        <History className="w-12 h-12 opacity-20" />
                        <p className="font-medium">No results found for your search term.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-8 md:px-12 py-8 bg-slate-50 flex flex-wrap items-center justify-between gap-6">
            <p className="text-[14px] font-medium text-slate-500">
              Showing <span className="font-bold text-primary">{totalEntries === 0 ? 0 : startIndex + 1}</span> to <span className="font-bold text-primary">{endIndex}</span> of <span className="font-bold text-primary">{totalEntries}</span> entries
            </p>
            
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all bg-white shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-11 h-11 rounded-xl text-[14px] font-bold transition-all ${
                      currentPage === i + 1 
                      ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                      : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all bg-white shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Note */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-primary uppercase tracking-tight mb-6">
              Need Further Assistance?
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed text-lg mb-8">
              Our medical coordinators are here to ensure your hospital visits are seamless and well-coordinated. If you cannot find a coordinator for a specific hospital or need immediate help, please don't hesitate to reach out to our central support team.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-4 bg-soft rounded-2xl">
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 block mb-1">
                  Hotline
                </span>
                <span className="text-primary font-black text-lg">
                  (02) 8372-3825
                </span>
              </div>
              <div className="px-6 py-4 bg-soft rounded-2xl">
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 block mb-1">
                  Email Support
                </span>
                <span className="text-primary font-black text-lg">
                  info@amaphil.com.ph
                </span>
              </div>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1576091160607-22073ad30193?q=80&w=2670&auto=format&fit=crop" 
              alt="Assistance" 
              className="w-full h-full object-cover translate-y-4"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
