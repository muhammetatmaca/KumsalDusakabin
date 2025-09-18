import { ArrowRight, Sparkles, Star, Zap, Droplets } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="modern-hero pt-24 pb-32 relative overflow-hidden" data-testid="section-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 glassmorphism">
              <Star className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-medium">Ankara'nın #1 Duşakabin Markası</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-none tracking-tight">
              <span className="block gradient-text">Kumsal</span>
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
              <Link href="/products" className="group relative px-8 py-4 gradient-primary text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 neon-glow" data-testid="link-products-hero">
                <span className="relative z-10 flex items-center justify-center">
                  <Droplets className="mr-2 h-5 w-5 group-hover:animate-spin" />
                  Ürünleri Keşfet
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <a href="https://wa.me/905551234567" className="whatsapp-btn px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105" data-testid="link-whatsapp-hero">
                <span className="flex items-center justify-center">
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690"/>
                  </svg>
                  Ücretsiz Teklif Al
                  <Zap className="ml-2 h-4 w-4" />
                </span>
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center p-6 modern-card">
                <div className="text-3xl font-black gradient-text mb-2">500+</div>
                <div className="text-sm text-muted-foreground font-medium">Başarılı Proje</div>
              </div>
              <div className="text-center p-6 modern-card">
                <div className="text-3xl font-black gradient-text mb-2">5 Yıl</div>
                <div className="text-sm text-muted-foreground font-medium">Garanti Süresi</div>
              </div>
              <div className="text-center p-6 modern-card">
                <div className="text-3xl font-black gradient-text mb-2">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">Destek Hizmeti</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative lg:ml-8">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl modern-card p-2">
                <img 
                  src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern duşakabin Ankara - Çankaya Keçiören Yenimahalle" 
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 glassmorphism p-4 rounded-2xl neon-glow">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                    <div>
                      <div className="text-sm font-bold gradient-text">Ankara Geneli</div>
                      <div className="text-xs text-muted-foreground">Tüm İlçelerde Hizmet</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
