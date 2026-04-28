export const PHILIPPINES_LOCATIONS = {
  "NCR": [
    "Metro Manila"
  ],
  "CAR": [
    "Abra",
    "Apayao",
    "Benguet",
    "Ifugao",
    "Kalinga",
    "Mountain Province"
  ],
  "Region I": [
    "Ilocos Norte",
    "Ilocos Sur",
    "La Union",
    "Pangasinan"
  ],
  "Region II": [
    "Batanes",
    "Cagayan",
    "Isabela",
    "Nueva Vizcaya",
    "Quirino"
  ],
  "Region III": [
    "Aurora",
    "Bataan",
    "Bulacan",
    "Nueva Ecija",
    "Pampanga",
    "Tarlac",
    "Zambales"
  ],
  "Region IV-A": [
    "Batangas",
    "Cavite",
    "Laguna",
    "Quezon",
    "Rizal"
  ],
  "MIMAROPA": [
    "Marinduque",
    "Occidental Mindoro",
    "Oriental Mindoro",
    "Palawan",
    "Romblon"
  ],
  "Region V": [
    "Albay",
    "Camarines Norte",
    "Camarines Sur",
    "Catanduanes",
    "Masbate",
    "Sorsogon"
  ],
  "Region VI": [
    "Aklan",
    "Antique",
    "Capiz",
    "Guimaras",
    "Iloilo",
    "Negros Occidental"
  ],
  "Region VII": [
    "Bohol",
    "Cebu",
    "Negros Oriental",
    "Siquijor"
  ],
  "Region VIII": [
    "Biliran",
    "Eastern Samar",
    "Leyte",
    "Northern Samar",
    "Samar",
    "Southern Leyte"
  ],
  "Region IX": [
    "Zamboanga del Norte",
    "Zamboanga del Sur",
    "Zamboanga Sibugay"
  ],
  "Region X": [
    "Bukidnon",
    "Camiguin",
    "Lanao del Norte",
    "Misamis Occidental",
    "Misamis Oriental"
  ],
  "Region XI": [
    "Davao de Oro",
    "Davao del Norte",
    "Davao del Sur",
    "Davao Occidental",
    "Davao Oriental"
  ],
  "Region XII": [
    "Cotabato",
    "Sarangani",
    "South Cotabato",
    "Sultan Kudarat"
  ],
  "Region XIII": [
    "Agusan del Norte",
    "Agusan del Sur",
    "Dinagat Islands",
    "Surigao del Norte",
    "Surigao del Sur"
  ],
  "BARMM": [
    "Basilan",
    "Lanao del Sur",
    "Maguindanao del Norte",
    "Maguindanao del Sur",
    "Sulu",
    "Tawi-Tawi"
  ]
};

export const ALL_PROVINCES = Object.values(PHILIPPINES_LOCATIONS).flat().sort();
export const ALL_REGIONS = Object.keys(PHILIPPINES_LOCATIONS).sort();
