export interface Treatment {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  symptoms: string[];
  benefits: string[];
  duration?: string;
  iconName: string;
}

export interface Doctor {
  name: string;
  role: string;
  qualifications: string;
  experienceText: string;
  specialties: string[];
  bio: string;
  image: string;
}

export interface Review {
  id: string;
  patientName: string;
  rating: number;
  date: string;
  treatment: string;
  comment: string;
  verified: boolean;
  source: 'Google' | 'Direct Patient';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Signage & Ambience' | 'Consultation' | 'Operatory & Equipment' | 'Reception';
  imageUrl: string;
  description: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email?: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  message: string;
}

export interface HospitalContactInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  email: string;
  address: {
    floor: string;
    building: string;
    plotNo: string;
    street: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
  };
  workingHours: {
    weekday: string;
    sunday: string;
  };
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
}
