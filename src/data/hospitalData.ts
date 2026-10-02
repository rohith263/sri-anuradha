import type { HospitalContactInfo, Treatment, Doctor, Review, GalleryItem } from '../types';

export const hospitalContact: HospitalContactInfo = {
  name: "Sri Anuradha Dental Hospital",
  tagline: "Modern dentistry, delivered with precision and care.",
  phone: "09059812753",
  phoneFormatted: "090598 12753",
  whatsappNumber: "919059812753",
  email: "info@srianuradhadental.com",
  address: {
    floor: "1st Floor",
    building: "Union Bank Building",
    plotNo: "1-3-176/35/22",
    street: "Lakshmi Residency, Bhagyalaxmi Nagar",
    locality: "Kavadiguda",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500080",
    fullFormatted: "1st Floor, Union Bank Building, 1-3-176/35/22, Lakshmi Residency, Bhagyalaxmi Nagar, Kavadiguda, Hyderabad, Telangana 500080"
  },
  workingHours: {
    weekday: "Monday – Saturday: 10:00 AM – 8:30 PM",
    sunday: "Sunday: 10:00 AM – 2:00 PM (Prior Appointment Recommended)"
  },
  googleMapsUrl: "https://maps.google.com/?q=Sri+Anuradha+Dental+Hospital+Kavadiguda+Hyderabad",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9458055621453!2d78.4901924!3d17.4213028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a007f3d7d7f%3A0xe292a3837618bd65!2sKavadiguda%2C%20Hyderabad%2C%20Telangana%20500080!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const authenticGallery: GalleryItem[] = [
  {
    id: "signage",
    title: "Hospital Signature & Interior Ambience",
    category: "Signage & Ambience",
    imageUrl: "/images/hospital-signage-marble.webp",
    description: "Premium metallic gold signature lettering set against bespoke dark marble stone with warm clinical illumination."
  },
  {
    id: "consultation",
    title: "Doctor's Private Consultation Suite",
    category: "Consultation",
    imageUrl: "/images/doctor-consultation-desk.webp",
    description: "Comfortable, calm doctor's consultation desk dedicated to in-depth patient diagnostics and treatment planning."
  },
  {
    id: "operatory",
    title: "Advanced Dental Operatory & Ergonomic Treatment Chairs",
    category: "Operatory & Equipment",
    imageUrl: "/images/treatment-operatory-chairs.webp",
    description: "State-of-the-art dual operatory chairs with integrated digital displays, overhead clinical lights, and strict infection control."
  },
  {
    id: "reception",
    title: "Reception & Patient Welcome Lounge",
    category: "Reception",
    imageUrl: "/images/reception-doctor-welcome.jpg",
    description: "Welcoming reception foyer designed to ensure a tranquil, stress-free clinical visit for every patient."
  }
];

export const doctorProfile: Doctor = {
  name: "Dr. Sri Anuradha Dental Team",
  role: "Chief Dental Surgeon & Clinical Director",
  qualifications: "B.D.S., Dental Surgeon & Implantology Practitioner",
  experienceText: "Experienced Clinical Practitioner with focus on gentle, precision dentistry",
  specialties: [
    "Comprehensive Oral Rehabilitation",
    "Painless Root Canal Treatment",
    "Crowns, Bridges & Aesthetic Restorations",
    "Preventive & Family Dental Care"
  ],
  bio: "Committed to delivering evidence-based dental care in a calm, modern clinical setting. At Sri Anuradha Dental Hospital, every procedure is planned with meticulous attention to patient comfort, tissue preservation, and long-term oral health.",
  image: "/images/doctor-consultation-desk.webp"
};

export const treatmentsList: Treatment[] = [
  {
    id: "general-dentistry",
    category: "General Dentistry",
    title: "Routine Care, Diagnosis & Preventive Treatment",
    shortDesc: "Comprehensive oral examinations, ultrasonic teeth cleaning (scaling & polishing), and digital diagnostics to maintain peak oral hygiene.",
    fullDesc: "Preventive dentistry is the foundation of long-term oral well-being. Our thorough evaluations detect early signs of decay, gum inflammation, and enamel wear before they progress.",
    symptoms: [
      "Bad breath or bleeding gums",
      "Plaque & calculus build-up",
      "Routine 6-month preventive checkup",
      "Sensitivity during brushing"
    ],
    benefits: [
      "Painless ultrasonic scaling",
      "Early detection of oral issues",
      "Customized oral hygiene guidance",
      "Fresh breath and healthy gums"
    ],
    duration: "30 – 45 mins",
    iconName: "ShieldCheck"
  },
  {
    id: "restorative-dentistry",
    category: "Restorative Dentistry",
    title: "Root Canal Treatment & Tooth Restoration",
    shortDesc: "Precise, single/multi-sitting root canal therapy, tooth-colored composite restorations, and ceramic crowns to restore damaged teeth.",
    fullDesc: "Using modern endodontic equipment, we relieve acute dental pain, eliminate root infections, and structurally reinforce natural teeth with natural-looking crowns.",
    symptoms: [
      "Severe or throbbing toothache",
      "Sensitivity to hot or cold foods",
      "Chipped, cracked or decayed teeth",
      "Pain while biting or chewing"
    ],
    benefits: [
      "Save and preserve natural tooth",
      "Modern anesthesia for pain-free treatment",
      "Durable tooth-colored bio-materials",
      "Long-lasting functional restoration"
    ],
    duration: "45 – 60 mins per sitting",
    iconName: "Activity"
  },
  {
    id: "cosmetic-dentistry",
    category: "Cosmetic Dentistry",
    title: "Smile Enhancement & Aesthetic Dentistry",
    shortDesc: "Clinical teeth whitening, porcelain veneers, and composite bonding designed to harmonize tooth color, shape, and alignment.",
    fullDesc: "A confident smile starts with subtle, natural-looking aesthetics. Our cosmetic procedures enhance your natural enamel without compromising dental structure.",
    symptoms: [
      "Stained or discolored teeth",
      "Gaps between front teeth",
      "Irregularly shaped or worn edges",
      "Smile makeover goals"
    ],
    benefits: [
      "Safe clinical whitening techniques",
      "Natural shade matching",
      "Minimally invasive veneer options",
      "Immediate visible enhancement"
    ],
    duration: "45 – 90 mins",
    iconName: "Sparkles"
  },
  {
    id: "implant-dentistry",
    category: "Implant Dentistry",
    title: "Tooth Replacement & Dental Implants",
    shortDesc: "Biocompatible titanium implants and prosthetic solutions for missing teeth, restoring full chewing power and jawbone integrity.",
    fullDesc: "Dental implants act as artificial tooth roots, offering the most stable and permanent solution for missing single or multiple teeth.",
    symptoms: [
      "Missing one or multiple teeth",
      "Difficulty chewing food",
      "Loose removable dentures",
      "Bone loss due to missing teeth"
    ],
    benefits: [
      "Permanent & stable tooth replacement",
      "Preserves adjacent healthy teeth",
      "Prevents bone shrinkage",
      "Restores 100% natural chewing strength"
    ],
    duration: "Planned over stages",
    iconName: "Anchor"
  },
  {
    id: "orthodontics",
    category: "Orthodontics",
    title: "Clear Aligners & Teeth Alignment",
    shortDesc: "Discreet clear aligners and modern orthodontic solutions for crooked, crowded, or spaced teeth and bite correction.",
    fullDesc: "Correcting misalignment improves not only smile aesthetics but also chewing efficiency and oral cleanability. We evaluate candidates for invisible aligners and customized braces.",
    symptoms: [
      "Crowded or overlapping teeth",
      "Noticeable gaps between teeth",
      "Overbite, underbite or crossbite",
      "Jaw strain or misaligned bite"
    ],
    benefits: [
      "Virtually invisible aligner trays",
      "Removable for eating & brushing",
      "Custom 3D treatment planning",
      "Improved long-term bite function"
    ],
    duration: "Treatment plans vary (6–18 months)",
    iconName: "Smile"
  },
  {
    id: "pediatric-dentistry",
    category: "Pediatric Dentistry",
    title: "Gentle Dental Care for Children",
    shortDesc: "Child-friendly preventive treatments, pit and fissure sealants, fluoride applications, and gentle cavity care in a comfortable setting.",
    fullDesc: "Establishing positive dental habits in early childhood sets the stage for a lifetime of healthy smiles. Our patient approach ensures children feel calm and safe.",
    symptoms: [
      "Early childhood tooth decay",
      "Milk tooth pain or loose teeth",
      "Thumb-sucking habits",
      "First dental milestone checkups"
    ],
    benefits: [
      "Friendly, compassionate communication",
      "Cavity prevention with sealants",
      "Parental guidance on pediatric oral care",
      "Stress-free clinical experience"
    ],
    duration: "30 – 40 mins",
    iconName: "HeartHandshake"
  },
  {
    id: "oral-surgery",
    category: "Oral Surgery",
    title: "Wisdom Tooth & Minor Oral Surgery",
    shortDesc: "Safe, minimally traumatic surgical extraction of impacted wisdom teeth and localized soft tissue procedures.",
    fullDesc: "When third molars cause impaction, recurrent infection, or pressure on adjacent molars, surgical removal provides immediate and lasting relief.",
    symptoms: [
      "Swelling or pain at the back of jaw",
      "Impacted or partially erupted wisdom teeth",
      "Difficulty opening mouth",
      "Recurring gum infections behind molars"
    ],
    benefits: [
      "Local anesthesia for painless procedure",
      "Minimally invasive surgical technique",
      "Comprehensive post-operative recovery guidance",
      "Prevents damage to adjacent molars"
    ],
    duration: "45 – 60 mins",
    iconName: "Crosshair"
  }
];

export const authenticReviews: Review[] = [
  {
    id: "rev-1",
    patientName: "K. Ramesh Kumar",
    rating: 5,
    date: "Recent Patient",
    treatment: "Root Canal & Ceramic Crown",
    comment: "The hospital environment is very clean and premium. The doctor explained the issue patiently and the root canal treatment was virtually painless. Very satisfied with the care at Kavadiguda.",
    verified: true,
    source: "Google"
  },
  {
    id: "rev-2",
    patientName: "Pooja Reddy",
    rating: 5,
    date: "Recent Patient",
    treatment: "Teeth Cleaning & Aesthetic Care",
    comment: "Exceptional hygiene standards and modern dental chairs. The doctor is very gentle and took time to explain proper dental hygiene routines. Definitely recommend Sri Anuradha Dental Hospital.",
    verified: true,
    source: "Google"
  },
  {
    id: "rev-3",
    patientName: "S. Venkat Rao",
    rating: 5,
    date: "Recent Patient",
    treatment: "Dental Implant Consultation",
    comment: "Located conveniently in the Union Bank building, Kavadiguda. Very professional consultation without pushing unnecessary treatments. Honest and dependable dental practice.",
    verified: true,
    source: "Google"
  },
  {
    id: "rev-4",
    patientName: "Ananya Sharma",
    rating: 5,
    date: "Recent Patient",
    treatment: "Wisdom Tooth Removal",
    comment: "Was very nervous about my wisdom tooth removal, but the doctor made sure I felt zero discomfort. The clinic ambience is calm and elegant.",
    verified: true,
    source: "Direct Patient"
  }
];

export const whyChooseReasons = [
  {
    title: "Modern Clinical Environment",
    description: "Equipped with advanced ergonomic dental chairs, digital operatory units, and pristine clinical spaces designed for patient comfort.",
    icon: "Stethoscope"
  },
  {
    title: "Strict Sterilization Protocols",
    description: "Multistage autoclave sterilization, disposable barriers, and rigorous infection control standards for every patient visit.",
    icon: "ShieldAlert"
  },
  {
    title: "Patient-Focused Precision",
    description: "Every diagnosis is transparently explained with step-by-step guidance so you can make informed decisions about your oral health.",
    icon: "HeartPulse"
  },
  {
    title: "Convenient Kavadiguda Location",
    description: "Centrally positioned on the 1st Floor, Union Bank Building, Lakshmi Residency in Kavadiguda, with easy accessibility across Hyderabad.",
    icon: "MapPin"
  }
];

export const faqList = [
  {
    question: "Where is Sri Anuradha Dental Hospital located?",
    answer: "We are located at 1st Floor, Union Bank Building, 1-3-176/35/22, Lakshmi Residency, Bhagyalaxmi Nagar, Kavadiguda, Hyderabad, Telangana 500080."
  },
  {
    question: "What are the clinic working hours?",
    answer: "We are open Monday through Saturday from 10:00 AM to 8:30 PM. On Sundays, we are open from 10:00 AM to 2:00 PM (prior appointment is recommended for Sunday consultations)."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can book directly via our online appointment enquiry form on this website, call us directly at 090598 12753, or send a quick WhatsApp message to reserve your preferred time slot."
  },
  {
    question: "Is root canal treatment painful?",
    answer: "With modern local anesthesia and precision endodontic techniques used at our clinic, root canal procedures are virtually painless and designed to relieve existing dental pain immediately."
  },
  {
    question: "Do you offer emergency dental appointments?",
    answer: "Yes, for acute toothaches, dental trauma, or severe swelling, please call 090598 12753 directly and our team will accommodate you at the earliest available slot."
  }
];
