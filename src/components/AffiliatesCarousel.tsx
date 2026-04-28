import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ShieldCheck, ChevronRight, Navigation } from 'lucide-react';

export default function AffiliatesCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<any>(null);
  const [viewingImage, setViewingImage] = useState<string | null>(null);
  const [showBranches, setShowBranches] = useState(false);

  const affiliates = [
    { 
      name: 'Anytime Fitness', 
      logo: '/anytimefitness.jpg', 
      role: 'Fitness Partner',
      hasDetails: true,
      perks: [
        { title: "No Expiry", content: "Membership validity remains active as long as you are with AMAPHIL." },
        { title: "Global Access", content: "Reciprocal usage absolutely FREE, with nearly 140 locations in the Philippines and over 5,000 clubs worldwide." },
        { title: "Personal Training", content: "2 FREE PERSONAL TRAINING SESSIONS plus monthly BMI checking and fitness assessments." },
        { title: "PT Discounts", content: "Get up to 20% discount on PT Packages." },
        { title: "Retail Perks", content: "Various discounts on current retail partner products of ANYTIME FITNESS CIRCUIT MAKATI." }
      ],
      gallery: [
        { url: '/AF package.png', label: 'Membership Package' },
        { url: '/AF contact details.png', label: 'Contact Details' },
        { url: '/AF Online registration QR.jpg', label: 'Online Registration' },
        { url: '/AF Online payment Gcash.jpg', label: 'Online Payment' }
      ]
    },
    { 
      name: 'CARA', 
      logo: '/cara.png', 
      role: 'Lifestyle Partner',
      hasDetails: true,
      expiry: "May 26, 2026",
      perks: [
        { title: "30% Laser Discount", content: "30% discount on all laser services of Cara Laser Skin Care for a single transaction." },
        { title: "Included Laser Services", content: "Revlite, Magma Spark Diode, Exilis Elite (Face/Body), Doublo Gold, Oxylight Facial, Emerge & CO2 Fractional Laser." },
        { title: "Dermatologist Consultation", content: "Free Skin Consultation with a dermatologist on duty every visit at any branch." },
        { title: "Free Warts Removal", content: "Free 1 session of Warts Removal (limited to 50 pcs and one treatment area only, excluding skin tags/syringa)." },
        { title: "Mutual Promotion", content: "Both CARA and AMAPHIL promote each other's social media and marketing materials across platforms." }
      ],
      mechanics: [
        "Cardholders must present their membership IDs along with a valid ID to avail the discount.",
        "A discount is only extended to the person with the membership card and not the whole playing group.",
        "Offer valid for a single transaction per visit.",
        "The partnership and offer remain valid until May 26, 2026."
      ]
    },
    { 
      name: 'Vision Express', 
      logo: '/visionexpress.jpg', 
      role: 'Optical Partner',
      hasDetails: true,
      expiry: "December 31, 2028",
      perks: [
        { title: "BOGO Promotion", content: "BUY 1 GET 1 FREE eyewear on over 50+ designer designer brands with savings over 70%." },
        { title: "15% OFF Frames", content: "15% discount on frames (except super luxury: Dior, Maui Jim, Celine, Fendi, Cartier, etc.)." },
        { title: "15% OFF Lenses", content: "15% discount on any customized lens purchase for members." },
        { title: "Vision Plus AI Screening", content: "Advanced eye health screening (worth P2495) for only P499. FREE with P20,000 minimum purchase." },
        { title: "Vision7 Comprehensive Exam", content: "FREE 7-step comprehensive eye exam worth P1295 for all AMAPHIL members." },
        { title: "Contact Lens Offer", content: "15% discount on all corporate agreement for Maxi eyes and Bausch and Lomb Contact Lenses." },
        { title: "Free Maintenance", content: "Free Ultrasonic cleaning services and replacement of screws and nose pads for VEX/ESI purchases." },
        { title: "Eye Care Education", content: "Vision Express can provide a Free Eye Care talk for Vision Care awareness upon request." }
      ],
      mechanics: [
        "Must present company-issued ID or membership card at any participating branch.",
        "Exclusively for personal use of the member; non-transferable.",
        "Not applicable to eye care accessories or contact lens solutions.",
        "Cannot be availed in conjunction with other ongoing store promotions."
      ],
      warranty: [
        "12-month warranty against manufacturer's defects from date of purchase.",
        "Does not cover change of mind, scratches on sun lenses, or damages from abuse/accident.",
        "Normal wear and tear and prescription-connected issues are not covered."
      ],
      locations: "Glorietta 2, Greenbelt 5, Greenhills, The Podium, and 50+ branches nationwide.",
      branches: [
        { name: "EYE SOCIETY OKADA MANILA", address: "UPPER GROUND FLOOR, RETAIL BOULEVARD, NEW SEASIDE DRIVE, ENTERTAINMENT CITY, TAMBO, PARAÑAQUE CITY", city: "PARANAQUE", phone: "(+63) 9190730988" },
        { name: "EYE SOCIETY CITY OF DREAMS", address: "UPPER GROUND FLOOR, CITY OF DREAMS MANILA, ASEANA AVE., COR. ROXAS BLVD., BRGY. TAMBO, PARAÑAQUE CITY", city: "PARANAQUE", phone: "(+63) 9209620686" },
        { name: "EYE SOCIETY NUSTAR", address: "SECOND FLOOR, THE MALL AT NUSTAR RESORT AND CASINO, KAWIT ISLAND, SOUTH ROAD PROPERTIRES, CEBU CITY", city: "CEBU", phone: "(+63) 9189497365" },
        { name: "VISION EXPRESS ALABANG TOWN CENTER", address: "GROUND FLOOR, ALABANG TOWN CENTER, MUNTINLUPA CITY", city: "MUNTINLUPA", phone: "(+63) 9985874166" },
        { name: "VISION EXPRESS AYALA BAY AREA", address: "GROUND FLOOR, AYALA MALLS MANILA BAY BUILDING, MACAPAGAL AVENUE, TAMBO, PARAÑAQUE CITY", city: "PARANAQUE", phone: "(+63) 9399319807" },
        { name: "VISION EXPRESS AYALA ONE BHS", address: "UPPER GROUND FLOOR, ONE BONIFACIO HIGH STREET, BONIFACIO GLOBAL CITY, TAGUIG CITY", city: "TAGUIG", phone: "(+63) 9209682796" },
        { name: "VISION EXPRESS AYALA CAPITOL CENTRAL BACOLOD", address: "FIRST FLOOR AYALA MALLS CAPITOL CENTRAL, GATUSLAO ST., BRGY. 8, BACOLOD CITY", city: "BACOLOD", phone: "(+63) 9209725569" },
        { name: "VISION EXPRESS AYALA CENTER CEBU", address: "FIRST FLOOR, AYALA CENTER CEBU, CARDINAL ROSALES AVE., CEBU BUSINESS PARK, CEBU CITY", city: "CEBU", phone: "(+63) 9399389193" },
        { name: "VISION EXPRESS AYALA UPTC", address: "GROUND FLOOR, U.P. TOWN CENTER, KATIPUNAN AVE., BRGY. U.P. CAMPUS, QUEZON CITY", city: "QUEZON", phone: "(+63) 9399864626" },
        { name: "VISION EXPRESS AYALA VERTIS NORTH", address: "FIRST FLOOR, AYALA MALLS VERTIS NORTH, NORTH AVENUE, BRGY. BAGONG PAG-ASA, QUEZON CITY", city: "QUEZON", phone: "(+63) 9209692936" },
        { name: "VISION EXPRESS MW EASTWOOD", address: "Ground Floor, Eastwood Mall, Eastwood City, E. RODRIGUEZ JR., AVE. (C5), QUEZON CITY", city: "QUEZON", phone: "(+63) 9399385369" },
        { name: "VISION EXPRESS FESTIVAL MALL ALABANG", address: "UPPER GROUND Festival Mall Expansion, Festival Supermall, Alabang Zapote Road, Muntinlupa City", city: "MUNTINLUPA", phone: "(+63) 8980178336" },
        { name: "VISION EXPRESS GATEWAY 2", address: "UPPER GROUND FLOOR, NEW GATEWAY MALL 2, ARANETA CITY, QUEZON CITY", city: "QUEZON", phone: "(+63) 9985845165" },
        { name: "VISION EXPRESS ROBINSONS ERMITA", address: "LEVEL 2, ROBINSONS PLACE MANILA, ADRIATICO COR. PEDRO GIL STS., MALATE, MANILA", city: "MANILA", phone: "(+63) 9190723379" },
        { name: "VISION EXPRESS ROBINSONS GALLERIA CEBU", address: "FIRST FLOOR, ROBINSON GALLERIA CEBU, GEN. MAXILOM AVE., CEBU CITY", city: "CEBU", phone: "(+63) 9285048424" },
        { name: "VISION EXPRESS SM BACOLOD", address: "GROUND FLOOR SM CITY BACOLOD, BISHOP ANTONIO Y. FORTICH AVE., BACOLOD CITY", city: "BACOLOD", phone: "(+63) 9399225326" },
        { name: "VISION EXPRESS SM BF", address: "SECOND FLOOR, SM CITY BF PARANAQUE, DR. A. SANTOS AVE., PARAÑAQUE CITY", city: "PARANAQUE", phone: "(+63) 9989687990" },
        { name: "VISION EXPRESS SM CABANATUAN", address: "SECOND FLOOR SM CITY CABANATUAN, MAHARLIKA HIGHWAY, CABANATUAN CITY", city: "CABANATUAN", phone: "(+63) 9209787584" },
        { name: "VISION EXPRESS SM CDO PREMIER", address: "SECOND FLOOR SM CDO DOWN TOWN PREMIER, CM RECTO AVE., CAGAYAN DE ORO CITY", city: "CAGAYAN DE ORO", phone: "(+63) 9399336145" },
        { name: "VISION EXPRESS SM CEBU", address: "UPPER GROUND FLOOR, SM CITY CEBU, JUAN LUNA AVE., CEBU CITY", city: "CEBU", phone: "(+63) 9209644825" },
        { name: "VISION EXPRESS SM CLARK", address: "GROUND FLOOR SM CITY CLARK, M.A. ROXAS HIGHWAY, ANGELES CITY", city: "ANGELES", phone: "(+63) 9399203238" },
        { name: "VISION EXPRESS SM DASMARINAS", address: "UPPER GROUND FLOOR, SM CITY DASMARIÑAS, GOVERNOR'S DRIVE, DASMARINAS CITY", city: "DASMARINAS", phone: "(+63) 9209725838" },
        { name: "VISION EXPRESS SM DAVAO", address: "GROUND FLOOR, SM CITY DAVAO, QUIMPO BLVD., MATINA, DAVAO CITY", city: "DAVAO", phone: "(+63) 9399252312" },
        { name: "VISION EXPRESS SM EAST ORTIGAS", address: "GROUND FLOOR, SM CITY EAST ORTIGAS, ORTIGAS AVE., EXT., PASIG CITY", city: "PASIG", phone: "(+63) 9189905712" },
        { name: "VISION EXPRESS SM ILOILO", address: "SECOND FLOOR, SM CITY ILOILO, BENIGNO AQUINO AVE., ILOILO CITY", city: "ILOILO", phone: "(+63) 9985825865" },
        { name: "VISION EXPRESS SM PAMPANGA", address: "GROUND FLOOR SM CITY PAMPANGA, SAN JOSE, SAN FERNANDO CITY", city: "SAN FERNANDO", phone: "(+63) 9399252685" },
        { name: "VISION EXPRESS SM SOUTHMALL", address: "LOWER GROUND FLOOR SM SOUTHMALL, ALABANG ZAPOTE ROAD, LAS PIÑAS CITY", city: "LAS PINAS", phone: "(+63) 9498848663" },
        { name: "VISION EXPRESS SM STA ROSA", address: "GROUND FLOOR, SM CITY SANTA ROSA, NATIONAL HIGHWAY, SANTA ROSA CITY", city: "STA. ROSA", phone: "(+63) 9190700242" },
        { name: "VISION EXPRESS SOLENAD NUVALI", address: "GROUND FLOOR, SOLENAD 3, AYALA MALLS SOLENAD, NUVALI, SANTA ROSA CITY", city: "STA. ROSA", phone: "(+63) 9399299466" },
        { name: "VISION EXPRESS STA LUCIA EAST GRAND", address: "SECOND FLOOR, BLDG. 3, STA. LUCIA MALL, MARCOS HIGHWAY, CAINTA", city: "CAINTA", phone: "(+63) 9399241338" },
        { name: "VISION EXPRESS TRINOMA", address: "SECOND FLOOR, TRINOMA, EDSA COR. NORTH AVE., QUEZON CITY", city: "QUEZON", phone: "(+63) 9399377583" },
        { name: "TRENDY by VEX GLORIETTA 4", address: "GROUND FLOOR, GLORIETTA 4, AYALA CENTER, MAKATI CITY", city: "MAKATI", phone: "(+63) 9209669204" },
        { name: "VISION EXPRESS SM LANANG", address: "UPPER GROUND FLOOR, SM LANANG PREMIER, LANANG, DAVAO CITY", city: "DAVAO", phone: "(+63) 9399266168" },
        { name: "VISION EXPRESS AYALA CIRCUIT", address: "LOWER GROUND FLOOR, AYALA MALLS CIRCUIT, STA. ANA, MAKATI CITY", city: "MAKATI", phone: "(+63) 9209637497" },
        { name: "VISION EXPRESS AYALA NORTH EXCHANGE", address: "SECOND FLOOR, SHOPS AT AYALA NORTH EXCHANGE, AYALA AVE., MAKATI CITY", city: "MAKATI", phone: "(+63) 9209698165" },
        { name: "VISION EXPRESS FESTIVE WALK ILOILO", address: "GROUND FLOOR FESTIVE WALK MALL, ILOILO BUSINESS PARK, ILOILO CITY", city: "ILOILO", phone: "(+63) 9209620478" },
        { name: "VISION EXPRESS ROBINSONS GALLERIA ORTIGAS", address: "THIRD FLOOR, ROBINSONS GALLERIA, EDSA COR. ORTIGAS AVE., QUEZON CITY", city: "QUEZON", phone: "(+63) 9399285708" },
        { name: "VISION EXPRESS AYALA CENTRAL BLOC", address: "FIRST FLOOR, AYALA MALLS CENTRAL BLOC, CEBU I.T. PARK, CEBU CITY", city: "CEBU", phone: "(+63) 9989689374" },
        { name: "VISION EXPRESS GREENBELT", address: "THIRD FLOOR, GREENBELT 5, AYALA CENTER, MAKATI CITY", city: "MAKATI", phone: "(+63) 9209714396" },
        { name: "VISION EXPRESS SM SAN JOSE DEL MONTE", address: "UPPER GROUND FLOOR, SM CITY SAN JOSE DEL MONTE, QUIRINO HIGHWAY, BULACAN CITY", city: "SAN JOSE DEL MONTE", phone: "(+63) 9285022510" },
        { name: "VEX SM FAIRVIEW", address: "Upper Ground Floor, Parkway, SM City Fairview, Quirino Highway, Quezon City", city: "QUEZON", phone: "(+63) 9190737816" },
        { name: "VISION EXPRESS SM BAGUIO", address: "LOWER GROUND FLOOR, SM CITY BAGUIO, LUNETA HILL, BAGUIO CITY", city: "BAGUIO", phone: "(+63) 9177025509" },
        { name: "VISION EXPRESS SM BACOOR", address: "SECOND FLOOR, SM CITY BACOOR, GEN. EMILIO AGUINALDO HIGHWAY, BACOOR CITY", city: "BACOOR", phone: "(+63) 9399254372" },
        { name: "VISION EXPRESS GLORIETTA 2", address: "GROUND FLOOR GLORIETTA 2, AYALA CENTER, MAKATI CITY", city: "MAKATI", phone: "(+63) 9985861991" },
        { name: "VISION EXPRESS SM CITY NORTH EDSA THE BLOCK", address: "THIRD FLOOR, SM CITY NORTH EDSA, BAGONG PAG-ASA, QUEZON CITY", city: "QUEZON", phone: "+63) 9399264328" },
        { name: "VISION EXPRESS GREENHILLS MALL", address: "Space 120 Ground Floor, Greenhills Mall, Ortigas Ave., San Juan", city: "SAN JUAN", phone: "+63 917 163 8414" },
        { name: "VISION EXPRESS ONE AYALA", address: "SECOND FLOOR, ONE AYALA, EDSA COR. AYALA AVE., MAKATI CITY", city: "MAKATI", phone: "(+63) 9209842693" },
        { name: "VISION EXPRESS PODIUM", address: "FOURTH FLOOR, THE PODIUM, 12 ADB AVE., ORTIGAS CENTER, MANDALUYONG CITY", city: "MANDALUYONG", phone: "(+63) 9688529805" },
        { name: "VISION EXPRESS ROBINSONS OPUS", address: "ROBINSONS OPUS, BRIDGETOWNE DESTINATION ESTATE, QUEZON CITY", city: "QUEZON", phone: "(+63) 9209476551" },
        { name: "VISION EXPRESS SM J-MALL", address: "UNIT 1116-1117, UPPER GROUND FLOOR, SM CITY J MALL, MANDAUE CITY, CEBU", city: "MANDAUE", phone: "(+63) 9209629951" },
        { name: "VISION EXPRESS SM MALL OF ASIA 2", address: "2nd Floor, SM MALL OF ASIA, J.W. DIOKNO BLVD., PASAY CITY", city: "PASAY", phone: "(+63) 9171663631" },
        { name: "WATSONS EYE CARE BY VEX", address: "Watsons NE Grand 2nd Floor The Block Mall Area SM City North Avenue, QUEZON City", city: "QUEZON", phone: "(+63) 9190824540" },
        { name: "VISION EXPRESS LUCKY CHINA TOWN", address: "Ground Floor, Lucky Chinatown Mall, Reina Regente St, Binondo, Manila", city: "MANILA", phone: "(+63) 9985430864" },
        { name: "VISION EXPRESS SM CITY LA UNION", address: "Lower Ground, SM CITY LA UNION, San Fernando, La Union", city: "SAN FERNANDO", phone: "(+63) 9688514166" },
        { name: "VISION EXPRESS SM MEGAMALL", address: "4F MFH LINKAGE, SM MEGAMALL, MANDALUYONG CITY", city: "MANDALUYONG", phone: "(+63) 9209609503" },
        { name: "VISION EXPRESS SM SEASIDE CEBU", address: "UPPER GROUND FLOOR SM SEASIDE CITY CEBU, BRGY. MAMBALING, CEBU CITY", city: "CEBU", phone: "(+63) 9989696213" }
      ],
      link: "https://visionexpress.ph/pages/store-locator"
    },
    { 
      name: 'CO Fitness', 
      logo: '/cofitness.jpg', 
      role: 'Fitness Partner',
      hasDetails: true,
      perks: [
        { title: "12 Months Membership", content: "Corporate Rate: PHP 2,500/month for a 1-year term." },
        { title: "6 Months Membership", content: "Corporate Rate: PHP 2,750/month for a half-year term." },
        { title: "Smart Programming", content: "Includes smart programming and fitness tracking (non-wearable)." },
        { title: "Inclusions", content: "Unlimited gym access & group classes (HIIT, Strength, Mobility, Yoga)." },
        { title: "Jump Start Sessions", content: "2 Free sessions with our Certified Coaches to get you started." },
        { title: "Recovery Sessions", content: "2 Free trial recovery sessions + discounted rates with Personalized Coaching." }
      ],
      mechanics: [
        "AMAPHIL member must present physical card or offline Mobile Application.",
        "Must be accompanied by a valid ID to avail of the corporate rates.",
        "Available at Ground Floor, One Central H.V. Dela Costa corner Geronimo St., Salcedo Village, Makati."
      ],
      contact: {
        person: "Inquiry Desk",
        phone: "Globe: +63 915 162 2777 | Smart: +63 969 599 5777",
        email: "inquiry@cofitness.com",
        socials: "@cofitnessph"
      },
      link: "https://www.cofitness.com.ph",
      buttonText: "Visit Website"
    },
    { 
      name: 'EO Optical', 
      logo: '/eo.png', 
      role: 'Optical Partner',
      hasDetails: true,
      expiry: "No Expiry",
      perks: [
        { title: "Free Eye Check-up", content: "Complimentary eye examinations for all AMAPHIL members at any branch." },
        { title: "30% Frame Discount", content: "30% discount on all exclusive and signature frames and sunglasses (except Oakley and Mango)." },
        { title: "Free Cleaning", content: "Complimentary professional cleaning following approved optical procedures." },
        { title: "Free Minor Repairs", content: "Free minor repair services following approved optical policies." }
      ],
      mechanics: [
        "Present AMAPHIL physical card or Mobile application plus 1 valid govt-issued ID.",
        "Available in all branches of EO Optical nationwide.",
        "Purchases through cash and credit card payments ONLY.",
        "Discount shall not be combined with any other promotions."
      ],
      contact: {
        person: "Donna Dela Torre",
        phone: "09688587230",
        email: "sales3@eo-executiveoptical.com"
      }
    },
    { 
      name: 'The Isabelle', 
      logo: '/isabelle.png', 
      role: 'Hotel Partner',
      hasDetails: true,
      expiry: "December 31, 2025",
      locations: "Peñafrancia Avenue, Naga City, Camarines Sur",
      perks: [
        { title: "Room Inclusions", content: "Overnight accommodation with complimentary in-room WIFI." },
        { title: "Guest Amenities", content: "Complimentary bottled water, replenished daily." },
        { title: "Free Parking", content: "Complimentary parking for in-house guests only (First come, first served)." }
      ],
      mechanics: [
        "Member must present AMAPHIL physical or digital card with a valid government-issued ID.",
        "Must book at least 7 days before the availment date.",
        "Room accommodation is subject to change without prior notice.",
        "No show / No cancellation policy applies.",
        "Payment must be fully paid before the availment date."
      ],
      contact: {
        person: "Ms. Jinky Martija",
        phone: "09154864341",
        email: "jmartija@thehenryhotel.com"
      },
      gallery: [
        { url: '/isabelle (1).png', label: 'Room Rates & Promo' }
      ]
    },
    { 
      name: 'Moritori', 
      logo: '/moritori.png', 
      role: 'Dining Partner',
      hasDetails: true,
      expiry: "November 30, 2025",
      locations: "SM Araneta City - Cubao",
      perks: [
        { title: "Free Mori Drink", content: "One free regular sized mori iced coffee or milk tea (or any drink of equivalent price or lower) for single receipts of P500+." }
      ],
      mechanics: [
        "Applicable for every single receipt that is 500 pesos or more.",
        "All items must be regular priced to qualify.",
        "Not valid in conjunction with other discounts (including PWD or Senior Citizen discounts).",
        "Must present AMAPHIL membership identification upon order."
      ]
    },
    { 
      name: 'Spa Remede', 
      logo: '/sparemede.png', 
      role: 'Spa Partner',
      hasDetails: true,
      expiry: "March 14, 2026",
      locations: "Ground Floor Crown tower, H.V. Dela Costa, Makati",
      perks: [
        { title: "20% Service Discount", content: "Enjoy a 20% discount on all wellness and spa services." }
      ],
      mechanics: [
        "Present the physical or electronic AMAPHIL card when availing.",
        "Must be accompanied by one valid identification card.",
        "Offer valid until March 14, 2026."
      ],
      link: "https://sparemede.com/",
      buttonText: "Visit Website"
    },
    { 
      name: 'Henry Hotel QC', 
      logo: '/henryqc.png', 
      role: 'Hotel Partner',
      hasDetails: true,
      expiry: "December 31, 2025",
      locations: "26 Mariposa St., Brgy. Bagong Lipunan Crame, Quezon City, Metro Manila",
      perks: [
        { title: "Room Inclusions", content: "Overnight accommodation with complimentary in-room WIFI." },
        { title: "Guest Amenities", content: "Complimentary bottled water, French press with fresh coffee grounds from Henry & Sons, and All Natural Bath Origins bathroom amenities." },
        { title: "Free Parking", content: "Complimentary parking for in-house guests only (First come, first served)." }
      ],
      mechanics: [
        "Member must present AMAPHIL physical or digital card with a valid government-issued ID.",
        "Must book at least 7 days before the availment date.",
        "Room accommodation is subject to change without prior notice.",
        "No show / No cancellation policy applies.",
        "Payment must be fully paid before the availment date."
      ],
      contact: {
        person: "Ms. Jinky Martija",
        phone: "09154864341",
        email: "jmartija@thehenryhotel.com"
      },
      gallery: [
        { url: '/table_henry_quezon.png', label: 'Promotion Details' }
      ],
      link: "https://quezoncity.thehenryhotel.com",
      buttonText: "Visit Website"
    },
    { 
      name: 'Henry Hotel Manila', 
      logo: '/henrymanila.png', 
      role: 'Hotel Partner',
      hasDetails: true,
      expiry: "December 31, 2025",
      locations: "2680 F.B. Harrison St., Pasay City, Metro Manila",
      perks: [
        { title: "Room Inclusions", content: "Overnight accommodation with complimentary in-room WIFI." },
        { title: "Guest Amenities", content: "Complimentary bottled water, French press with fresh coffee grounds from Henry & Sons, and All Natural Bath Origins bathroom amenities." },
        { title: "Free Parking", content: "Complimentary parking for in-house guests only (First come, first served)." }
      ],
      mechanics: [
        "Member must present AMAPHIL physical or digital card with a valid government-issued ID.",
        "Must book at least 7 days before the availment date.",
        "Room accommodation is subject to change without prior notice.",
        "No show / No cancellation policy applies.",
        "Payment must be fully paid before the availment date."
      ],
      contact: {
        person: "Ms. Jinky Martija",
        phone: "09154864341",
        email: "jmartija@thehenryhotel.com"
      },
      gallery: [
        { url: '/table_henry_manila.png', label: 'Promotion Details' }
      ],
      link: "https://manila.thehenryhotel.com",
      buttonText: "Visit Website"
    },
    { 
      name: 'Henry Hotel Laiya', 
      logo: '/henrylaiya.png', 
      role: 'Hotel Partner',
      hasDetails: true,
      expiry: "December 31, 2025",
      locations: "Laiya Aplaya, San Juan, Batangas",
      perks: [
        { title: "Room Inclusions", content: "Overnight accommodation with complimentary in-room WIFI." },
        { title: "Guest Amenities", content: "Complimentary bottled water, French press with fresh coffee grounds from Henry & Sons, and All Natural Bath Origins bathroom amenities." },
        { title: "Free Parking", content: "Complimentary parking for in-house guests only (First come, first served)." }
      ],
      mechanics: [
        "Member must present AMAPHIL physical or digital card with a valid government-issued ID.",
        "Must book at least 7 days before the availment date.",
        "Room accommodation is subject to change without prior notice.",
        "No show / No cancellation policy applies.",
        "Payment must be fully paid before the availment date."
      ],
      contact: {
        person: "Ms. Jinky Martija",
        phone: "09154864341",
        email: "jmartija@thehenryhotel.com"
      },
      gallery: [
        { url: '/table_henry_laiya.png', label: 'Promotion Details' }
      ],
      link: "https://laiya.thehenryhotel.com",
      buttonText: "Visit Website"
    },
    { 
      name: 'Henry Hotel Dumaguete', 
      logo: '/henrydumaguete.png', 
      role: 'Hotel Partner',
      hasDetails: true,
      expiry: "December 31, 2025",
      locations: "Flores Ave., Bantayan, Dumaguete",
      perks: [
        { title: "Room Inclusions", content: "Overnight accommodation with complimentary in-room WIFI." },
        { title: "Guest Amenities", content: "Complimentary bottled water, French press with fresh coffee grounds, and All Natural Bath Origins bathroom amenities." },
        { title: "Free Parking", content: "Complimentary parking for in-house guests only (First come, first served)." }
      ],
      mechanics: [
        "Member must present AMAPHIL physical or digital card with a valid government-issued ID.",
        "Must book at least 7 days before the availment date.",
        "Room accommodation is subject to change without prior notice.",
        "No show / No cancellation policy applies.",
        "Payment must be fully paid before the availment date."
      ],
      contact: {
        person: "Ms. Jinky Martija",
        phone: "09154864341",
        email: "jmartija@thehenryhotel.com"
      },
      gallery: [
        { url: '/table_henry_dumaguete.png', label: 'Promotion Details' }
      ],
      link: "https://dumaguete.thehenryhotel.com",
      buttonText: "Visit Website"
    },
    { 
      name: 'Henry Hotel Boracay', 
      logo: '/henryboracay.png', 
      role: 'Hotel Partner',
      hasDetails: true,
      expiry: "December 31, 2025",
      locations: "Boracay Island, Malay, Aklan",
      perks: [
        { title: "Room Inclusions", content: "Overnight accommodation with complimentary in-room WIFI." },
        { title: "Guest Amenities", content: "Complimentary bottled water, French press with fresh coffee grounds from Henry & Sons, and All Natural Bath Origins bathroom amenities." },
        { title: "Free Parking", content: "Complimentary parking for in-house guests only (First come, first served)." }
      ],
      mechanics: [
        "Member must present AMAPHIL physical or digital card with a valid government-issued ID.",
        "Must book at least 7 days before the availment date.",
        "Room accommodation is subject to change without prior notice.",
        "No show / No cancellation policy applies.",
        "Payment must be fully paid before the availment date."
      ],
      contact: {
        person: "Ms. Jinky Martija",
        phone: "09154864341",
        email: "jmartija@thehenryhotel.com"
      },
      gallery: [
        { url: '/boracay.png', label: 'Promotion Details' }
      ],
      link: "https://boracay.thehenryhotel.com",
      buttonText: "Visit Website"
    },
    { name: 'Henry Hotel Bacolod', logo: '/henrybacolod.png', role: 'Hotel Partner' },
    { 
      name: 'Henry Hotel Siargao', 
      logo: '/henrysiargao.png', 
      role: 'Hotel Partner',
      hasDetails: true,
      expiry: "December 31, 2025",
      locations: "Purok 5, Siargao Island, General Luna, Surigao Del Norte",
      perks: [
        { title: "Room Inclusions", content: "Overnight accommodation with complimentary in-room WIFI." },
        { title: "Guest Amenities", content: "Complimentary bottled water, French press with fresh coffee grounds from Henry & Sons, and All Natural Bath Origins bathroom amenities." },
        { title: "Free Parking", content: "Complimentary parking for in-house guests only (First come, first served)." }
      ],
      mechanics: [
        "Member must present AMAPHIL physical or digital card with a valid government-issued ID.",
        "Must book at least 7 days before the availment date.",
        "Room accommodation is subject to change without prior notice.",
        "No show / No cancellation policy applies.",
        "Payment must be fully paid before the availment date."
      ],
      contact: {
        person: "Ms. Jinky Martija",
        phone: "09154864341",
        email: "jmartija@thehenryhotel.com"
      },
      gallery: [
        { url: '/siargao.png', label: 'Promotion Details' }
      ],
      link: "https://www.siargaothehenryhotel.com",
      buttonText: "Visit Website"
    },
    { 
      name: 'Luis Drum Studio', 
      logo: '/luisdrum.jpg', 
      role: 'Music Studio Partner',
      hasDetails: true,
      expiry: "April 21, 2026",
      locations: "Scandic Palace Building, 4291 Emilia, Makati",
      perks: [
        { title: "5% Lesson Discount", content: "5% discount on music lessons (Drums, Guitar, Voice, Piano, Violin, Ukulele) for 1-10 sessions." },
        { title: "Free Practice Room", content: "1-hour free solo room practice applicable once a week for enrolled students." }
      ],
      mechanics: [
        "Present physical or online AMAPHIL card and one identification card to avail the discount.",
        "Applicable for both actual (in-studio) and online sessions.",
        "Solo room practice is subject to availability and scheduling."
      ],
      contact: {
        email: "luisdrumstudio@gmail.com",
        socials: "FB: luisdrumstudio | IG: @luisdrumstudio.official"
      },
      link: "https://luisdrumstudio.ph/music-lessons",
      registrationLink: "https://luisdrumstudio.ph/student-fill-up-form",
      buttonText: "Lesson Details"
    },
    { 
      name: 'Doctor Anywhere', 
      logo: '/da.png', 
      role: 'Digital Health Partner',
      hasDetails: true,
      perks: [
        { title: "24/7 Teleconsultation", content: "Access general practitioners, internal medicine specialists, and family medicine doctors anytime, even on holidays." },
        { title: "Digital Prescriptions", content: "Receive electronic prescriptions and medical certificates directly through the platform." },
        { title: "No Waiting Times", content: "Consult with a medical professional conveniently from your mobile phone with minimal waiting." }
      ],
      mechanics: [
        "Request a Letter of Authorization (LOA) for teleconsultations directly through the AMAPHIL web or app.",
        "The integrated Dr. Anywhere feature allows requesting an LOA within minutes.",
        "Present the issued LOA CAN in the Doctor Anywhere application to proceed with your consultation."
      ],
      contact: {
        socials: "FB: Doctor Anywhere Philippines | IG: @doctoranywhere_ph"
      },
      link: "https://doctoranywhere.ph/",
      buttonText: "Visit Website"
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-3">Network & Affiliates</h2>
            <h3 className="text-4xl font-black text-primary font-display tracking-tight">Exclusive Perks & Discounts</h3>
          </div>
          <p className="text-slate-500 max-w-sm text-sm font-medium leading-relaxed md:text-right font-sans opacity-80">
            Enjoy curated benefits from our participating partners reserved exclusively for the AMAPHIL members.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div 
          animate={{ x: [0, -1800] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center whitespace-nowrap px-12"
        >
          {[...affiliates, ...affiliates, ...affiliates, ...affiliates].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              onClick={() => {
                if (brand.hasDetails) {
                  setSelectedBrand(brand);
                  setIsModalOpen(true);
                }
              }}
              className={`flex flex-col items-center gap-4 group/logo min-w-[200px] ${brand.hasDetails ? 'cursor-pointer' : ''}`}
            >
              <div className="w-48 h-24 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center p-6 filter grayscale opacity-40 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:shadow-xl transition-all duration-500 transform group-hover/logo:scale-110">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-accent opacity-0 group-hover/logo:opacity-100 transition-all duration-500">
                {brand.role}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="mt-16 text-center">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="text-[11px] font-black uppercase tracking-[0.25em] text-primary border-b-2 border-accent pb-2 hover:text-accent hover:border-primary transition-all duration-300"
        >
          View All Partners
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="p-10 md:p-14 overflow-y-auto">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      {selectedBrand ? (
                        <button 
                          onClick={() => {
                            setSelectedBrand(null);
                            setShowBranches(false);
                          }}
                          className="flex items-center gap-2 text-accent font-black uppercase text-[10px] tracking-widest hover:text-primary transition-colors mr-4"
                        >
                          <ChevronRight className="w-4 h-4 rotate-180" />
                          Back to Directory
                        </button>
                      ) : (
                        <ShieldCheck className="w-5 h-5 text-accent" />
                      )}
                      <h3 className="text-3xl font-black text-primary font-display tracking-tight">
                        {selectedBrand ? selectedBrand.name : 'Our Elite Network'}
                      </h3>
                    </div>
                    <p className="text-slate-500 font-medium tracking-wide uppercase text-[10px] opacity-60">
                      {selectedBrand ? `${selectedBrand.role} • Exclusive Privileges` : 'Verified Member Privileges & Affiliate Perks'}
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setIsModalOpen(false);
                      setSelectedBrand(null);
                      setShowBranches(false);
                    }}
                    className="w-12 h-12 rounded-full bg-soft flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {selectedBrand ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                  >
                    {/* Header with Expiry */}
                    {selectedBrand.expiry && (
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 bg-accent/5 rounded-3xl border border-accent/10">
                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-1">Partnership Validity</h4>
                          <p className="text-primary font-black uppercase text-xl">Offer Valid Until {selectedBrand.expiry}</p>
                        </div>
                        {selectedBrand.locations && (
                          <div className="md:text-right">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-1">Participating Hubs</h4>
                            <p className="text-slate-600 font-bold text-sm">{selectedBrand.locations}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Perks Grid */}
                    <div className="space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Exclusive Perks & Savings</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {selectedBrand.perks?.map((perk: any, i: number) => (
                          <div key={i} className="p-8 bg-soft rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all">
                            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-3">
                              {perk.title}
                            </h4>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                              {perk.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mechanics & Warranty Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                      {selectedBrand.mechanics && (
                        <div className="space-y-6">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Program Mechanics</h4>
                          <ul className="space-y-4">
                            {selectedBrand.mechanics.map((item: string, i: number) => (
                              <li key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 text-[10px] font-black">
                                  {i + 1}
                                </div>
                                <p className="text-slate-600 text-sm font-semibold leading-snug">{item}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedBrand.warranty && (
                        <div className="space-y-6">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Warranty & Policy</h4>
                          <ul className="space-y-4">
                            {selectedBrand.warranty.map((item: string, i: number) => (
                              <li key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                <p className="text-slate-500 text-sm font-medium leading-snug">{item}</p>
                              </li>
                            ))}
                            <li className="pt-2 italic text-[10px] text-slate-400 font-medium">
                              * HOBLI reserves the right to amend and revise the discounts at any time by notice.
                            </li>
                          </ul>
                        </div>
                      )}

                      {selectedBrand.contact && (
                        <div className="space-y-6">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Contact & Support</h4>
                          <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-6">
                            {selectedBrand.contact.person && (
                              <div>
                                <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Contact Person</h5>
                                <p className="text-primary font-black uppercase text-sm tracking-tight">{selectedBrand.contact.person}</p>
                              </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {selectedBrand.contact.phone && (
                                <div>
                                  <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Phone Number</h5>
                                  <p className="text-accent font-black text-sm tracking-tight">{selectedBrand.contact.phone}</p>
                                </div>
                              )}
                              {selectedBrand.contact.email && (
                                <div>
                                  <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Address</h5>
                                  <p className="text-primary font-bold text-sm lowercase">{selectedBrand.contact.email}</p>
                                </div>
                              )}
                            </div>
                            {selectedBrand.contact.socials && (
                              <div className="pt-4 border-t border-slate-100">
                                <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Social Media</h5>
                                <p className="text-primary font-black text-sm tracking-tight">{selectedBrand.contact.socials}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Branches Directory Section */}
                    {selectedBrand.branches && showBranches && (
                      <motion.div 
                        id="branch-directory" 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-8 pt-10 border-t border-slate-100 mt-12"
                      >
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                          <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-2">Store Directory</h4>
                            <h3 className="text-2xl font-black text-primary font-display tracking-tight">Participating Branches</h3>
                          </div>
                          <div className="relative group w-full md:w-64">
                            <input 
                              type="text"
                              placeholder="Search branch or city..."
                              className="w-full bg-white border border-slate-100 rounded-xl px-5 py-3 text-xs font-bold text-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                              onChange={(e) => {
                                const val = e.target.value.toLowerCase();
                                const items = document.querySelectorAll('.branch-item');
                                items.forEach((item: any) => {
                                  const text = item.innerText.toLowerCase();
                                  item.style.display = text.includes(val) ? 'flex' : 'none';
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                          {selectedBrand.branches.map((branch: any, i: number) => (
                            <div key={i} className="branch-item flex flex-col p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-accent/30 transition-colors group">
                              <div className="flex justify-between items-start mb-3">
                                <h5 className="text-[11px] font-black text-primary uppercase tracking-wider leading-snug pr-4">{branch.name}</h5>
                                <span className="bg-slate-50 text-[9px] font-black text-slate-400 px-2 py-1 rounded uppercase tracking-widest">{branch.city}</span>
                              </div>
                              <p className="text-slate-500 text-[10px] font-bold leading-relaxed mb-4">{branch.address}</p>
                              <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                                <span className="text-[9px] font-black text-accent uppercase tracking-widest">{branch.phone}</span>
                                <a 
                                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.name + ' ' + branch.address)}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-[9px] font-black text-slate-400 hover:text-primary transition-colors flex items-center gap-1.5"
                                >
                                  MAP GUIDE <Navigation className="w-2.5 h-2.5" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Gallery/Photos */}
                    {selectedBrand.gallery && (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Affiliate Resources</h4>
                          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest hidden md:block">Click to enlarge image</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {selectedBrand.gallery.map((img: any, i: number) => (
                            <div 
                              key={i} 
                              onClick={() => setViewingImage(img.url)}
                              className="group/img relative aspect-[3/4] bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100 cursor-zoom-in"
                            >
                              <img 
                                src={img.url} 
                                alt={img.label} 
                                className="w-full h-full object-contain p-2 group-hover/img:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">{img.label}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedBrand.link && (
                      <div className="flex flex-col items-center gap-6 pt-8 border-t border-slate-100">
                        <div className="text-center space-y-2">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Official Links</h4>
                          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Connect with our partner</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                          <a 
                            href={selectedBrand.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-accent transition-all shadow-xl shadow-primary/20 group"
                          >
                            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            {selectedBrand.buttonText || "Visit Store Locator"}
                          </a>

                          {selectedBrand.registrationLink && (
                            <a 
                              href={selectedBrand.registrationLink} 
                              target="_blank" 
                              rel="noreferrer"
                              className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-accent/20 group"
                            >
                              <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
                              Enrollment Form
                            </a>
                          )}
                          
                          {selectedBrand.branches && (
                            <button 
                              onClick={() => {
                                setShowBranches(true);
                                setTimeout(() => {
                                  const section = document.getElementById('branch-directory');
                                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                              }}
                              className="inline-flex items-center gap-3 bg-white border-2 border-slate-100 text-slate-400 px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:border-accent hover:text-accent transition-all group"
                            >
                              <Navigation className="w-4 h-4 group-hover:animate-bounce" />
                              View All Branches
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {affiliates.map((brand) => (
                      <div 
                        key={brand.name}
                        onClick={() => brand.hasDetails && setSelectedBrand(brand)}
                        className={`group/item p-8 bg-soft rounded-[2rem] border border-slate-50 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer ${brand.hasDetails ? 'ring-2 ring-accent/0 hover:ring-accent/20' : ''}`}
                      >
                        <div className="aspect-[3/2] rounded-2xl overflow-hidden mb-6 flex items-center justify-center bg-slate-50 p-4 border border-slate-50 filter grayscale group-hover/item:grayscale-0 transition-all duration-700">
                          <img 
                            src={brand.logo} 
                            alt={brand.name} 
                            className="max-w-full max-h-full object-contain group-hover/item:scale-110 transition-transform duration-1000"
                          />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-1">{brand.name}</h4>
                            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{brand.role}</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center text-accent">
                            {brand.hasDetails ? <ChevronRight className="w-4 h-4" /> : <ExternalLink className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-16 pt-10 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-[11px] text-slate-400 font-medium max-w-md text-center md:text-left leading-relaxed">
                    Privileges are subject to terms and conditions of each participating affiliate. Present your active AMAPHIL membership ID to avail of the exclusive discounts.
                  </p>
                  <button 
                    onClick={() => {
                      setIsModalOpen(false);
                      setSelectedBrand(null);
                      setShowBranches(false);
                    }}
                    className="px-10 py-5 bg-primary text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-accent transition-all shadow-xl shadow-primary/10"
                  >
                    Close Directory
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {viewingImage && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setViewingImage(null)}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl cursor-zoom-out"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-full max-h-full flex items-center justify-center"
            >
              <img 
                src={viewingImage} 
                alt="Full preview" 
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              />
              <button 
                onClick={() => setViewingImage(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white hover:text-accent transition-colors flex items-center gap-2 font-black uppercase text-[10px] tracking-widest"
              >
                Close Preview <X className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
