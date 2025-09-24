import { useState, useEffect } from "react";
import { ArrowRight, Star, Droplets, Zap } from "lucide-react";
import { Link } from "wouter";

import dusakabin1 from "@shared/dusakabin1.png";
import dusakabin2 from "@shared/dusakabin2.png";
import dusakabin3 from "@shared/dusakabin3.png";
import dusakabin4 from "@shared/dusakabin4.png";

const slider1 = [dusakabin1, dusakabin2, dusakabin3, dusakabin4];
const slider2 = [dusakabin3, dusakabin1, dusakabin4, dusakabin2];

export default function HeroSection() {
  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrent1((prev) => (prev + 1) % slider1.length);
    }, 2000);
    const interval2 = setInterval(() => {
      setCurrent2((prev) => (prev + 1) % slider2.length);
    }, 2000);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <section className="modern-hero pt-24 pb-32 relative overflow-hidden" data-testid="section-hero">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 glassmorphism">
              <Star className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-medium">Ankara'nın #1 Duşakabin Markası</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-none tracking-tight">
              <span className="block gradient-text">Eflal</span>
              <span className="block text-foreground">Duşakabin</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-4">
                Kaliteyi Banyonuza Taşıyoruz
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              Ankara geneli <strong className="text-primary">tüm ilçelerde</strong> hizmet veren modern duşakabin çözümleri. 
              Çankaya, Keçiören, Yenimahalle, Mamak ve diğer tüm bölgelerde profesyonel montaj garantisi.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
              <Link
                to=""
                className="group relative px-8 py-4 gradient-primary text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 neon-glow"
                data-testid="link-products-hero"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "tel:+905383034028";
                }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Droplets className="mr-2 h-5 w-5 group-hover:animate-spin" />
                  0538 303 40 28 Ara
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <a
                href="https://wa.me/905383034028?text=Merhaba,%20duşakabin%20hakkında%20bilgi%20almak%20istiyorum."
                className="whatsapp-btn px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
                data-testid="link-whatsapp-hero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center justify-center">
                  WhatsApp İletişim
                  <Zap className="ml-2 h-4 w-4" />
                </span>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative lg:ml-8 flex flex-col sm:flex-row gap-4 justify-center">
            <img
              src={slider1[current1]}
              alt={`Duşakabin ${current1 + 1}`}
              className="w-full sm:w-1/2 h-auto rounded-2xl transition-opacity duration-1000 ease-in-out"
            />
            <img
              src={slider2[current2]}
              alt={`Duşakabin ${current2 + 1}`}
              className="w-full sm:w-1/2 h-auto rounded-2xl transition-opacity duration-1000 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
