import { ArrowRight, Calculator } from "lucide-react";
import { Link } from "wouter";

const products = [
  {
    id: "corner",
    name: "Köşe Duşakabin",
    description: "Köşe kullanımına özel tasarlanmış space-saving modeller",
    price: "2.500₺'den başlayan fiyatlar",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "sliding",
    name: "Sürgülü Sistem",
    description: "Pratik kullanım için sürgülü kapı sistemleri",
    price: "3.200₺'den başlayan fiyatlar",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "oval",
    name: "Oval Kabin",
    description: "Estetik tasarım için oval ve kavisli modeller",
    price: "4.000₺'den başlayan fiyatlar",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "glass",
    name: "Premium Cam Kabin",
    description: "Temperli cam ile maksimum şeffaflık ve güvenlik",
    price: "3.800₺'den başlayan fiyatlar",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
  }
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-background" data-testid="section-products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Modern Duşakabin Modelleri</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ankara'nın en kaliteli duşakabin çeşitleri. Her banyoya uygun farklı model ve boyutlarda.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-card rounded-xl overflow-hidden shadow-lg hover-lift border border-border">
              <img 
                src={product.image} 
                alt={`${product.name} - Ankara duşakabin`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{product.price}</span>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors" data-testid="button-quote-products-home">
            <Calculator className="mr-2 h-5 w-5" />
            Ücretsiz Fiyat Teklifi Al
          </Link>
        </div>
      </div>
    </section>
  );
}
