import SEOHead from "@/components/seo/seo-head";
import { ArrowRight, Calculator } from "lucide-react";
import { Link } from "wouter";

const products = [
  {
    id: "corner",
    name: "Köşe Duşakabin",
    description: "Köşe kullanımına özel tasarlanmış space-saving modeller. Compact banyolar için ideal çözüm.",
    price: "2.500₺'den başlayan fiyatlar",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    features: ["90°x90° ve 80°x80° boyutları", "Temperli güvenlik camı", "Paslanmaz çelik profil", "Ayarlanabilir menteşe sistemi"]
  },
  {
    id: "sliding",
    name: "Sürgülü Sistem",
    description: "Pratik kullanım için sürgülü kapı sistemleri. Geniş açılım alanı sağlar.",
    price: "3.200₺'den başlayan fiyatlar",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    features: ["Pürüzsüz kayma sistemi", "6mm temperli cam", "Alüminyum ray sistemi", "Kolay temizlenebilir yüzey"]
  },
  {
    id: "oval",
    name: "Oval Kabin",
    description: "Estetik tasarım için oval ve kavisli modeller. Modern banyo dekorasyonu için mükemmel.",
    price: "4.000₺'den başlayan fiyatlar",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    features: ["Ergonomik kavisli tasarım", "Özel kalıplanmış cam", "Premium aksesuarlar", "Su sızdırmaz conta sistemi"]
  },
  {
    id: "glass",
    name: "Premium Cam Kabin",
    description: "Temperli cam ile maksimum şeffaflık ve güvenlik. Lüks banyo konseptleri için ideal.",
    price: "3.800₺'den başlayan fiyatlar",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    features: ["8mm temperli güvenlik camı", "Anti-kireç korumalı yüzey", "Krom kaplama aksesuarlar", "Nano teknoloji su itici"]
  }
];

export default function Products() {
  return (
    <div className="pt-16">
      <SEOHead
        title="Duşakabin Modelleri - Ankara | Eflal Duşakabin Ürünleri"
        description="Köşe duşakabin, sürgülü sistem, oval kabin ve premium cam kabin modelleri. Ankara'nın en kaliteli duşakabin çeşitleri uygun fiyatlarla."
        keywords="köşe duşakabin, sürgülü duşakabin, oval kabin, cam kabin, Ankara duşakabin modelleri, duşakabin çeşitleri"
      />

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Modern Duşakabin Modelleri
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Ankara'nın en kaliteli duşakabin çeşitleri. Her banyoya uygun farklı model ve boyutlarda, 
            5 yıl garanti ile profesyonel montaj hizmeti.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <div key={product.id} className="bg-card rounded-xl shadow-lg border border-border overflow-hidden hover-lift">
                <img 
                  src={product.image} 
                  alt={`${product.name} - Ankara duşakabin`} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-card-foreground mb-3">{product.name}</h2>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h3 className="font-semibold text-card-foreground">Özellikler:</h3>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-lg">{product.price}</span>
                    <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:underline" data-testid={`link-product-${product.id}`}>
                      Fiyat Teklifi Al
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors" data-testid="button-quote-products">
              <Calculator className="mr-2 h-5 w-5" />
              Ücretsiz Fiyat Teklifi Al
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Neden Eflal Duşakabin?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ankara'da duşakabin konusunda tercih edilme nedenlerimiz
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">5 Yıl Garanti</h3>
              <p className="text-muted-foreground">Tüm ürünlerimizde 5 yıl kapsamlı garanti süresi</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Profesyonel Montaj</h3>
              <p className="text-muted-foreground">Uzman ekibimizle hızlı ve kaliteli montaj hizmeti</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Premium Kalite</h3>
              <p className="text-muted-foreground">CE belgeli temperli cam ve paslanmaz çelik aksesuarlar</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">24/7 Destek</h3>
              <p className="text-muted-foreground">Satış sonrası sürekli müşteri destek hizmeti</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
