import SEOHead from "@/components/seo/seo-head";
import HeroSection from "@/components/sections/hero-section";
import ContactBanner from "@/components/sections/contact-banner";
import ProductsSection from "@/components/sections/products-section";
import FeaturesSection from "@/components/sections/features-section";
import AboutSection from "@/components/sections/about-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div>
      <SEOHead
        title="Kumsal Duşakabin - Ankara Duşakabin | Kaliteyi Banyonuza Taşıyoruz"
        description="Ankara'nın en güvenilir duşakabin markası Kumsal Duşakabin. Modern duşakabin, köşe duşakabin, sürgülü sistem ve cam kabin modelleri. Kaliteyi banyonuza taşıyoruz."
        keywords="Ankara duşakabin, modern duşakabin, Ankara duşakabin fiyatları, Kumsal Duşakabin Ankara, köşe duşakabin, cam kabin, sürgülü duşakabin"
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
