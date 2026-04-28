import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Building2, Globe, FileSpreadsheet, FileText, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { PHILIPPINES_LOCATIONS, ALL_REGIONS, ALL_PROVINCES } from '../constants/locations';

interface Provider {
  id: number;
  name: string;
  type: string;
  region: string;
  province: string;
  address: string;
}

const MOCK_PROVIDERS: Provider[] = [
  {
    id: 1,
    name: "3 STAR MEDICAL CLINIC AND DIAGNOSTIC CENTER",
    type: "Clinic",
    region: "NCR",
    province: "Metro Manila",
    address: "UNIT 103-104, VICTORIA STATION 1, GMA EDSA KAMUNING, QUEZON CITY, Kamuning, Quezon City, Metro Manila"
  },
  {
    id: 2,
    name: "A PLUS CARE MEDICAL CLINIC & LABORATORY",
    type: "Clinic",
    region: "NCR",
    province: "Metro Manila",
    address: "4365 HENERAL TINIO COR. CAPT. M. REYES, Bangkal, Makati, Metro Manila"
  },
  {
    id: 3,
    name: "A ZARATE GENERAL HOSPITAL",
    type: "Hospital",
    region: "NCR",
    province: "Metro Manila",
    address: "ATLAS COMPOUND NAGA RD. , Pulang Lupa Uno, Las Pinas, Metro Manila"
  },
  {
    id: 4,
    name: "A-O LINK MEDICAL AND ACCESS PHILIPPINES CENTER",
    type: "Medical Center",
    region: "Region IV-A",
    province: "Batangas",
    address: "UNIT 7 ROMANVILLE COMMERCIAL BLDG. , San Fernando, Malvar, Batangas"
  },
  {
    id: 5,
    name: "ABELLA MIDWAY HOSPITAL",
    type: "Hospital",
    region: "Region X",
    province: "Bukidnon",
    address: "P Valero St, , Valencia City, Bukidnon"
  },
  {
    id: 6,
    name: "ABESAMIS EYE CARE AND CONTACT LENS CENTER",
    type: "Specialized Clinic",
    region: "NCR",
    province: "Metro Manila",
    address: "SUITE 906 MEDICAL PLAZA MAKATI AMORSOLO ST. LEASPI VILLAGE SAN LORENZO 1229 CITY OF MAKATI NCR, San Lorenzo VIllage, Makati, Metro Manila"
  },
  {
    id: 7,
    name: "ACC PHYSICAL THERAPHY CLINIC - IMUS",
    type: "Therapy Clinic",
    region: "Region IV-A",
    province: "Cavite",
    address: "KM. 23 5 ANABU EMILIO AGUINALDO HIGHWAY IMUS"
  },
  {
    id: 8,
    name: "ACC PHYSICAL THERAPY CLINIC - CAVITE CITY",
    type: "Therapy Clinic",
    region: "Region IV-A",
    province: "Cavite",
    address: "P. BURGOS AVE. CARIDAD"
  },
  {
    id: 9,
    name: "ACC PHYSICAL THERAPY CLINIC - KAWIT",
    type: "Therapy Clinic",
    region: "Region IV-A",
    province: "Cavite",
    address: "UNIT #90 COVELANDA RD. BRGY. BINAKAYAN, Binakayan-Aplaya, Kawit, Cavite"
  },
  {
    id: 10,
    name: "ACC PHYSICAL THERAPY CLINIC - NOVELETA",
    type: "Therapy Clinic",
    region: "Region IV-A",
    province: "Cavite",
    address: "9017 UNITS A & B DR. J. SALUD ST., , Magdiwang, Noveleta, Cavite"
  },
  {
    id: 11,
    name: "CAGAYAN VALLEY MEDICAL CENTER",
    type: "Hospital",
    region: "Region II",
    province: "Cagayan",
    address: "Carig, Tuguegarao City, Cagayan"
  },
  {
    id: 12,
    name: "ILOCOS TRAINING AND REGIONAL MEDICAL CENTER",
    type: "Hospital",
    region: "Region I",
    province: "La Union",
    address: "Parian, San Fernando City, La Union"
  },
  {
    id: 13,
    name: "VICENTE SOTTO MEMORIAL MEDICAL CENTER",
    type: "Hospital",
    region: "Region VII",
    province: "Cebu",
    address: "B. Rodriguez St, Cebu City, Cebu"
  },
  {
    id: 14,
    name: "ZAMBOANGA CITY MEDICAL CENTER",
    type: "Hospital",
    region: "Region IX",
    province: "Zamboanga del Sur",
    address: "Dr. Evangelista St, Zamboanga City"
  },
  {
    id: 15,
    name: "DAVAO MEDICAL SCHOOL FOUNDATION HOSPITAL",
    type: "Hospital",
    region: "Region XI",
    province: "Davao del Sur",
    address: "DMSF Drive, Bajada, Davao City"
  },
  {
    id: 16,
    name: "BICOL REGIONAL HOSPITAL AND MEDICAL CENTER",
    type: "Hospital",
    region: "Region V",
    province: "Albay",
    address: "Rizal St, Legazpi City, Albay"
  },
  {
    id: 17,
    name: "MARINDUQUE PROVINCIAL HOSPITAL",
    type: "Hospital",
    region: "MIMAROPA",
    province: "Marinduque",
    address: "Santol, Boac, Marinduque"
  },
  {
    id: 18,
    name: "COTABATO REGIONAL AND MEDICAL CENTER",
    type: "Hospital",
    region: "BARMM",
    province: "Maguindanao del Norte",
    address: "Sinsuat Ave, Cotabato City"
  },
  {
    id: 19,
    name: "EASTERN VISAYAS MEDICAL CENTER",
    type: "Hospital",
    region: "Region VIII",
    province: "Leyte",
    address: "Brgy. 93, Bagacay, Tacloban City"
  },
  {
    id: 20,
    name: "BAGUIO GENERAL HOSPITAL",
    type: "Hospital",
    region: "CAR",
    province: "Benguet",
    address: "Gov. Pack Rd, Baguio City"
  }
];

export default function AccreditedProviders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [providerType, setProviderType] = useState('');
  const [region, setRegion] = useState('');
  const [province, setProvince] = useState('');
  const [address, setAddress] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const clearFilters = () => {
    setSearchTerm('');
    setProviderType('');
    setRegion('');
    setProvince('');
    setAddress('');
    setCurrentPage(1);
  };

  const filteredProviders = useMemo(() => {
    return MOCK_PROVIDERS.filter(provider => {
      const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = !providerType || provider.type === providerType;
      const matchesRegion = !region || provider.region === region;
      const matchesProvince = !province || provider.province === province;
      const matchesAddress = !address || provider.address.toLowerCase().includes(address.toLowerCase());
      return matchesSearch && matchesType && matchesRegion && matchesProvince && matchesAddress;
    });
  }, [searchTerm, providerType, region, province, address]);

  const totalEntries = filteredProviders.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, totalEntries);
  const currentEntries = filteredProviders.slice(startIndex, endIndex);

  // Derived options for select inputs
  const providerTypes = Array.from(new Set(MOCK_PROVIDERS.map(p => p.type))).sort();
  
  const regions = ALL_REGIONS;
  
  const provinces = useMemo(() => {
    if (region && PHILIPPINES_LOCATIONS[region as keyof typeof PHILIPPINES_LOCATIONS]) {
      return PHILIPPINES_LOCATIONS[region as keyof typeof PHILIPPINES_LOCATIONS];
    }
    return ALL_PROVINCES;
  }, [region]);

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Header Section */}
      <section className="relative min-h-[300px] overflow-hidden flex items-center bg-primary py-16 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop" 
            alt="Medical Providers" 
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
              Accredited Providers
            </h1>
            <p className="text-white/80 max-w-xl text-lg font-medium leading-relaxed">
              Explore our extensive network of certified medical institutions and clinics across the Philippines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 md:-mt-12 relative z-20 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/5 border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Provider Type */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1">
                  Provider Type
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <select 
                    value={providerType}
                    onChange={(e) => setProviderType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">All Types</option>
                    {providerTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Region */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1">
                  Region
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent">
                    <Globe className="w-4 h-4" />
                  </div>
                  <select 
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">All Regions</option>
                    {regions.map(r => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Province */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1">
                  Province
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <select 
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">All Provinces</option>
                    {provinces.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Address Search */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1">
                  Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search address..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                  />
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
                  Download the list of our accredited providers by clicking the "Excel" or "CSV" button.
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
                <option value={100}>100</option>
              </select>
            </div>

            <div className="relative group w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search for Provider..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-11 pr-4 text-[13px] focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 w-1/3">Provider Name</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">Region</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">Province</th>
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 min-w-[300px]">Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {currentEntries.length > 0 ? (
                  currentEntries.map((provider) => (
                    <motion.tr 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={provider.id} 
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-8 py-6">
                        <div className="font-bold text-primary text-[15px] group-hover:text-accent transition-colors">
                          {provider.name}
                        </div>
                        <div className="text-[11px] font-black uppercase tracking-widest text-slate-400 mt-1">
                          {provider.type}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-[14px] font-medium text-slate-600">{provider.region || '—'}</td>
                      <td className="px-8 py-6 text-[14px] font-medium text-slate-600">{provider.province || '—'}</td>
                      <td className="px-8 py-6 text-[14px] leading-relaxed text-slate-500 max-w-md">{provider.address}</td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-8 py-12 text-center text-slate-400 font-medium italic">
                      No providers found matching your criteria.
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
              
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNumber = i + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`w-11 h-11 rounded-xl text-[14px] font-bold transition-all ${
                        currentPage === pageNumber 
                        ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                        : 'text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
                {totalPages > 5 && <span className="px-2 text-slate-300">...</span>}
                {totalPages > 5 && (
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className={`w-11 h-11 rounded-xl text-[14px] font-bold transition-all ${
                      currentPage === totalPages 
                      ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                      : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {totalPages}
                  </button>
                )}
              </div>

              <button
                disabled={currentPage === totalPages || totalPages === 0}
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
