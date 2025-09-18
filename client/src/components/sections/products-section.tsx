import { ArrowRight, Calculator, Sparkles, Star, Zap } from "lucide-react";
import { Link } from "wouter";

const products = [
  {
    id: "corner",
    name: "Köşe Duşakabin",
    description: "Ankara'nın tüm ilçelerinde montajı yapılan köşe kullanımına özel space-saving modeller",
    price: "2.500₺",
    priceText: "'den başlayan fiyatlar",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    popular: false
  },
  {
    id: "sliding",
    name: "Sürgülü Sistem", 
    description: "Çankaya, Keçiören, Yenimahalle'de en çok tercih edilen sürgülü kapı sistemleri",
    price: "3.200₺",
    priceText: "'den başlayan fiyatlar",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    popular: true
  },
  {
    id: "oval",
    name: "Oval Kabin",
    description: "Modern banyo tasarımları için estetik oval ve kavisli modeller",
    price: "4.000₺",
    priceText: "'den başlayan fiyatlar", 
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    popular: false
  },
  {
    id: "glass",
    name: "Premium Cam Kabin",
    description: "Temperli güvenlik camı ile maksimum şeffaflık ve güvenlik",
    price: "3.800₺",
    priceText: "'den başlayan fiyatlar",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    popular: false
  }
];

export default function ProductsSection() {
  return (
    <section className="py-32 relative overflow-hidden" data-testid="section-products">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 glassmorphism">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span className="text-sm font-medium">Premium Koleksiyonumuz</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-6">Modern Duşakabin Modelleri</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ankara'nın <strong className="text-primary">tüm ilçelerinde</strong> profesyonel montaj garantisi ile 
            sunduğumuz kaliteli duşakabin çeşitleri. Her banyoya uygun farklı model ve boyutlarda.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={product.id} className="group relative modern-card overflow-hidden slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 gradient-primary text-white text-xs font-bold rounded-full neon-glow">
                  <Star className="inline h-3 w-3 mr-1" />
                  EN POPÜLER
                </div>
              )}
              
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={`${product.name} - Ankara Çankaya Keçiören Yenimahalle duşakabin`} 
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black gradient-text">{product.price}</span>
                    <span className="text-xs text-muted-foreground">{product.priceText}</span>
                  </div>
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/5 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="glassmorphism p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Ücretsiz Fiyat Teklifi Alın</h3>
            <p className="text-muted-foreground mb-6">
              Ankara'nın tüm ilçelerinde ücretsiz keşif hizmeti. Profesyonel ekibimiz en uygun çözümü sunuyor.
            </p>
            <Link href="/contact" className="group inline-flex items-center justify-center px-8 py-4 gradient-primary text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 neon-glow" data-testid="button-quote-products-home">
              <Calculator className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Hemen Teklif Al
              <Zap className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
