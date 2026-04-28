export const MEDICAL_SPECIALIZATIONS = [
  "Internal Medicine",
  "Pediatrics",
  "Obstetrics and Gynecology",
  "Surgery",
  "Ophthalmology",
  "Otolaryngology (ENT)",
  "Dermatology",
  "Psychiatry",
  "Radiology",
  "Anesthesiology",
  "Pathology",
  "Family Medicine",
  "Rehabilitation Medicine",
  "Emergency Medicine",
  "Nuclear Medicine",
  "Neurology",
  "Cardiology",
  "Gastroenterology",
  "Nephrology",
  "Endocrinology",
  "Oncology",
  "Pulmonology",
  "Urology",
  "Orthopedics",
  "Physical Medicine and Rehabilitation",
  "Occupational Medicine",
  "Pain Management",
  "Infectious Diseases",
  "Allergy and Immunology",
  "Rheumatology",
  "Hematology",
  "Geriatric Medicine",
  "Sports Medicine"
].sort();

export const MEDICAL_SUB_SPECIALIZATIONS: Record<string, string[]> = {
  "Internal Medicine": [
    "Cardiology",
    "Endocrinology",
    "Gastroenterology",
    "Hematology",
    "Infectious Diseases",
    "Nephrology",
    "Oncology",
    "Pulmonology",
    "Rheumatology",
    "Allergy and Immunology",
    "Neurology",
    "Geriatrics"
  ],
  "Pediatrics": [
    "Pediatric Cardiology",
    "Pediatric Nephrology",
    "Pediatric Oncology",
    "Neonatology",
    "Developmental Pediatrics",
    "Pediatric Infectious Diseases",
    "Pediatric Pulmonology",
    "Pediatric Gastroenterology",
    "Pediatric Endocrinology"
  ],
  "Surgery": [
    "General Surgery",
    "Orthopedic Surgery",
    "Neurosurgery",
    "Urology",
    "Plastic Surgery",
    "Thoracic Surgery",
    "Vascular Surgery",
    "Pediatric Surgery",
    "Colorectal Surgery",
    "Hepatobiliary Surgery",
    "Transplant Surgery"
  ],
  "Obstetrics and Gynecology": [
    "Perinatology",
    "Gynecologic Oncology",
    "Reproductive Endocrinology and Infertility",
    "Trophoblastic Diseases",
    "Urogynecology"
  ],
  "Radiology": [
    "Diagnostic Radiology",
    "Interventional Radiology",
    "CT Scan",
    "MRI",
    "Ultrasound"
  ],
  "Ophthalmology": [
    "Retina and Vitreous",
    "Glaucoma",
    "Cornea",
    "Pediatric Ophthalmology",
    "External Disease"
  ]
};

export const ALL_SUB_SPECIALIZATIONS = Object.values(MEDICAL_SUB_SPECIALIZATIONS).flat().sort();
