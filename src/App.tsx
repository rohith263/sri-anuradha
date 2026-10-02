import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { DoctorProfileSection } from './components/DoctorProfileSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { AppointmentModal } from './components/AppointmentModal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string>('');

  // Handle smooth scroll navigation
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  // Open booking modal
  const handleOpenBooking = (preselectedTreatment?: string) => {
    if (preselectedTreatment) {
      setSelectedTreatmentForBooking(preselectedTreatment);
    }
    setIsBookingModalOpen(true);
  };

  // Treatment booking trigger from treatment cards
  const handleSelectTreatmentForBooking = (treatmentTitle: string) => {
    setSelectedTreatmentForBooking(treatmentTitle);
    // Scroll directly to in-page booking form or open modal
    const apptElement = document.getElementById('appointment');
    if (apptElement) {
      const navOffset = 80;
      const elementPosition = apptElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  // Observe scroll position to highlight active navbar item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'treatments', 'doctor', 'gallery', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        if (section === 'home' && window.scrollY < 300) {
          setActiveSection('home');
          break;
        }
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0e13] text-[#e5e1d8] flex flex-col selection:bg-[#c5a059]/30 selection:text-[#faebd7]">
      
      {/* Top Main Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Layout */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onExploreTreatments={() => scrollToSection('treatments')}
        />

        {/* 2. Trust Section */}
        <TrustBar />

        {/* 3. About Section */}
        <AboutSection
          onOpenBooking={() => handleOpenBooking()}
          onNavigateToDoctor={() => scrollToSection('doctor')}
        />

        {/* 4. Treatments Section */}
        <TreatmentsSection
          onSelectTreatmentForBooking={handleSelectTreatmentForBooking}
        />

        {/* 5. Doctor Section */}
        <DoctorProfileSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 6. Facility & Gallery */}
        <GallerySection />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Patient Reviews */}
        <ReviewsSection />

        {/* 9. Appointment Conversion Form */}
        <AppointmentSection
          initialTreatment={selectedTreatmentForBooking}
        />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />

        {/* 11. Contact & Location Section */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Modal Appointment Booking Popup */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialTreatment={selectedTreatmentForBooking}
      />

    </div>
  );
};

export default App;
