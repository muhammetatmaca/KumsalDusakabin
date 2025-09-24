import SEOHead from "@/components/seo/seo-head.js";
import HeroSection from "@/components/sections/hero-section.js";
import ContactBanner from "@/components/sections/contact-banner.js";
import ProductsSection from "@/components/sections/products-section.js";
import FeaturesSection from "@/components/sections/features-section.js";
import AboutSection from "@/components/sections/about-section.js";
import TestimonialsSection from "@/components/sections/testimonials-section.js";
import ContactSection from "@/components/sections/contact-section.js";

export default function Home() {
  return (
    <div>
      <SEOHead
        title="Eflal Duşakabin - Ankara Duşakabin | Kaliteyi Banyonuza Taşıyoruz"
        description="Ankara'nın en güvenilir duşakabin markası Eflal Duşakabin. Modern duşakabin, köşe duşakabin, sürgülü sistem ve cam kabin modelleri. Kaliteyi banyonuza taşıyoruz."
        keywords="Ankara duşakabin, modern duşakabin, Ankara duşakabin fiyatları, Eflal Duşakabin Ankara, köşe duşakabin, cam kabin, sürgülü duşakabin"
      />
      
      <HeroSection />
      <ContactBanner />
      <ProductsSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
