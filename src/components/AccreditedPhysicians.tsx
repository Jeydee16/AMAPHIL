import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, User, Stethoscope, Building2, MapPin, FileSpreadsheet, FileText, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { MEDICAL_SPECIALIZATIONS, MEDICAL_SUB_SPECIALIZATIONS, ALL_SUB_SPECIALIZATIONS } from '../constants/specializations';

interface Physician {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  provider: string;
  specialization: string;
  subSpecialization: string;
}

const MOCK_PHYSICIANS: Physician[] = [
  {
    id: 1,
    lastName: "DELA CRUZ",
    firstName: "JUAN",
    middleName: "SANTOS",
    provider: "MAKATI MEDICAL CENTER",
    specialization: "Internal Medicine",
    subSpecialization: "Cardiology"
  },
  {
    id: 2,
    lastName: "GARCIA",
    firstName: "MARIA",
    middleName: "LUISA",
    provider: "ST. LUKE'S MEDICAL CENTER",
    specialization: "Pediatrics",
    subSpecialization: "Neonatology"
  },
  {
    id: 3,
    lastName: "REYES",
    firstName: "RICARDO",
    middleName: "BAUTISTA",
    provider: "THE MEDICAL CITY",
    specialization: "Surgery",
    subSpecialization: "Orthopedic Surgery"
  },
  {
    id: 4,
    lastName: "SANTOS",
    firstName: "ELENA",
    middleName: "CRUZ",
    provider: "ASIAN HOSPITAL",
    specialization: "Obstetrics and Gynecology",
    subSpecialization: "Perinatology"
  },
  {
    id: 5,
    lastName: "BAUTISTA",
    firstName: "ANTONIO",
    middleName: "M.",
    provider: "MANILA DOCTORS HOSPITAL",
    specialization: "Ophthalmology",
    subSpecialization: ""
  },
  {
    id: 6,
    lastName: "LOPEZ",
    firstName: "CARMEN",
    middleName: "P.",
    provider: "CHINESE GENERAL HOSPITAL",
    specialization: "Dermatology",
    subSpecialization: ""
  },
  {
    id: 7,
    lastName: "PASCUAL",
    firstName: "FELIX",
    middleName: "R.",
    provider: "CARDINAL SANTOS MEDICAL CENTER",
    specialization: "Radiology",
    subSpecialization: ""
  },
  {
    id: 8,
    lastName: "MENDOZA",
    firstName: "GRACE",
    middleName: "V.",
    provider: "PHILIPPINE GENERAL HOSPITAL",
    specialization: "Family Medicine",
    subSpecialization: ""
  },
  {
    id: 9,
    lastName: "VILLANUEVA",
    firstName: "ROBERTO",
    middleName: "L.",
    provider: "MAKATI MEDICAL CENTER",
    specialization: "Cardiology",
    subSpecialization: "Interventional Cardiology"
  },
  {
    id: 10,
    lastName: "TORRES",
    firstName: "FLORIDA",
    middleName: "C.",
    provider: "ST. LUKE'S MEDICAL CENTER",
    specialization: "Neurology",
    subSpecialization: ""
  },
  {
    id: 11,
    lastName: "LIM",
    firstName: "STEPHANIE",
    middleName: "Y.",
    provider: "THE MEDICAL CITY",
    specialization: "Endocrinology",
    subSpecialization: ""
  },
  {
    id: 12,
    lastName: "CASTRO",
    firstName: "MANUEL",
    middleName: "G.",
    provider: "CARDINAL SANTOS MEDICAL CENTER",
    specialization: "Orthopedics",
    subSpecialization: "Spine Surgery"
  }
];

export default function AccreditedPhysicians() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [provider, setProvider] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [subSpecialization, setSubSpecialization] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const clearFilters = () => {
    setLastName('');
    setFirstName('');
    setMiddleName('');
    setProvider('');
    setSpecialization('');
    setSubSpecialization('');
    setCurrentPage(1);
  };

  const filteredPhysicians = useMemo(() => {
    return MOCK_PHYSICIANS.filter(p => {
      const matchesLastName = p.lastName.toLowerCase().includes(lastName.toLowerCase());
      const matchesFirstName = p.firstName.toLowerCase().includes(firstName.toLowerCase());
      const matchesMiddleName = p.middleName.toLowerCase().includes(middleName.toLowerCase());
      const matchesProvider = p.provider.toLowerCase().includes(provider.toLowerCase());
      const matchesSpec = !specialization || p.specialization === specialization;
      const matchesSubSpec = !subSpecialization || p.subSpecialization === subSpecialization;
      return matchesLastName && matchesFirstName && matchesMiddleName && matchesProvider && matchesSpec && matchesSubSpec;
    });
  }, [lastName, firstName, middleName, provider, specialization, subSpecialization]);

  const totalEntries = filteredPhysicians.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, totalEntries);
  const currentEntries = filteredPhysicians.slice(startIndex, endIndex);

  const subSpecOptions = useMemo(() => {
    if (specialization && MEDICAL_SUB_SPECIALIZATIONS[specialization]) {
      return MEDICAL_SUB_SPECIALIZATIONS[specialization];
    }
    return ALL_SUB_SPECIALIZATIONS;
  }, [specialization]);

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Header Section */}
      <section className="relative min-h-[300px] overflow-hidden flex items-center bg-primary py-16 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop" 
            alt="Medical Physicians" 
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
              Accredited Physicians
            </h1>
            <p className="text-white/80 max-w-xl text-lg font-medium leading-relaxed">
              Find top-tier medical specialists and physicians part of our accredited network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 md:-mt-12 relative z-20 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/5 border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1">
                  Last Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
              </div>

              {/* First Name */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1">
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
              </div>

              {/* Middle Name */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1">
                  Middle Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Middle Name"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
              </div>

              {/* Provider */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1">
                  Provider
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Hospital/Clinic"
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
              </div>

              {/* Specialization */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1">
                  Specialization
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <select 
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">All Specializations</option>
                    {MEDICAL_SPECIALIZATIONS.map(spec => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Sub Specialization */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1">
                  Sub Specialization
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <select 
                    value={subSpecialization}
                    onChange={(e) => setSubSpecialization(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">All Sub-Specializations</option>
                    {subSpecOptions.map(sub => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-6">
              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={clearFilters}
                  className="bg-slate-100 text-slate-600 px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Clear Filters
                </button>
                <button 
                  className="bg-primary text-white px-10 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>

              <div className="flex flex-col items-end gap-3 text-right">
                <p className="text-[13px] font-medium text-slate-500 max-w-xs">
                  Download the list of our accredited physicians by clicking the "Excel" or "CSV" button.
                </p>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-6 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all">
                    <FileSpreadsheet className="w-4 h-4" />
                    📊 Excel
                  </button>
                  <button className="flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                    <FileText className="w-4 h-4" />
                    📄 CSV
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Table Controls */}
          <div className="px-8 md:px-12 py-6 bg-slate-50 border-y border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-bold text-slate-500">Show entries:</span>
              <select 
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-[13px] font-bold focus:outline-none focus:ring-2 focus:ring-accent/20 cursor-pointer"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>

            <div className="relative group w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Quick search..."
                className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-11 pr-4 text-[13px] focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">Full Name</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">Provider</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">Specialization</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">Sub Specialization</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {currentEntries.length > 0 ? (
                  currentEntries.map((physician) => (
                    <motion.tr 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={physician.id} 
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-8 py-6">
                        <div className="font-bold text-primary text-[15px] group-hover:text-accent transition-colors">
                          {physician.lastName}, {physician.firstName} {physician.middleName}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2 text-[14px] font-medium text-slate-600">
                          <Building2 className="w-4 h-4 text-accent" />
                          {physician.provider}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[12px] font-bold">
                          {physician.specialization}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[14px] font-medium text-slate-500">
                          {physician.subSpecialization || '—'}
                        </span>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-8 py-12 text-center text-slate-400 font-medium italic">
                      No physicians found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-8 md:px-12 py-8 bg-white flex flex-wrap items-center justify-between gap-6 border-t border-slate-100">
            <p className="text-[14px] font-medium text-slate-500">
              Showing <span className="font-bold text-primary">{totalEntries === 0 ? 0 : startIndex + 1}</span> to <span className="font-bold text-primary">{endIndex}</span> of <span className="font-bold text-primary">{totalEntries}</span> entries
            </p>
            
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentPage(1)}
                className={`w-11 h-11 rounded-xl text-[14px] font-bold transition-all ${
                  currentPage === 1 
                  ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                  : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                1
              </button>
              <button
                disabled={currentPage === totalPages || totalPages <= 1}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
