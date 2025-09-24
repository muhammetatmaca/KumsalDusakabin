import SEOHead from "@/components/seo/seo-head";
import { ArrowRight, Calculator } from "lucide-react";
import { Link } from "wouter";
import foto1 from '@shared/kabinler/ay01.jpg';
import foto2 from '@shared/kabinler/ay01ornek.jpg';
import foto3 from '@shared/kabinler/ay03altınkatlanabilir.jpg';
import foto4 from '@shared/kabinler/ay03katlanabilir.jpg';
import foto5 from '@shared/kabinler/ay05.jpg';
import foto6 from '@shared/kabinler/ay06altın.jpg';
import foto7 from '@shared/kabinler/ay06duvardanduvara.jpg';
import foto8 from '@shared/kabinler/ay07duvaradanduvara.jpg';
import foto10 from '@shared/kabinler/ay09.jpg';
import foto11 from '@shared/kabinler/ay68duvardanduvara.jpg';
import foto12 from '@shared/kabinler/aykarısıkcizgili.jpg';
import foto13 from '@shared/kabinler/iceacılırkoyu.jpg';


const products = [
  {
    id: "corner",
    name: "Köşe Duşakabin ay-01",
    description: "Köşe kullanımına özel tasarlanmış space-saving modeller. Compact banyolar için ideal çözüm.",
    price: "2.500₺'den başlayan fiyatlar",
    image: foto1,
    features: [
  "90°x90° ve 80°x80° boyutları",
  "Temperli güvenlik camı",
  "Paslanmaz çelik profil",
  "Sürgülü veya menteşeli kapı sistemi"
]
  },
  {
    id: "sliding",
    name: "Köşe Duşakabin ay-01",
    description: "Pratik kullanım için sürgülü kapı sistemleri. Geniş açılım alanı sağlar.",
    price: "3.200₺'den başlayan fiyatlar",
    image: foto2,
    features: [
  "90°x90° ve 80°x80° boyutları",
  "Temperli güvenlik camı",
  "Paslanmaz çelik profil",
  "Sürgülü veya menteşeli kapı sistemi"
]
  },
  {
    id: "oval",
    name: "ay-03 altın katlanabilir",
    description: "Estetik tasarım için oval ve kavisli modeller. Modern banyo dekorasyonu için mükemmel.",
    price: "4.000₺'den başlayan fiyatlar",
    image: foto3,
    features: [
  "Kare, dikdörtgen veya özel boyutlandırma",
  "Şeffaf temperli güvenlik camı",
  "Altın rengi kaplamalı paslanmaz çelik profil",
  "Menteşeli veya katlanabilir kapı sistemi"
]
  },
  {
    id: "glass",
    name: "ay-03 katlanabilir",
    description: "Temperli cam ile maksimum şeffaflık ve güvenlik. Lüks banyo konseptleri için ideal.",
    price: "3.800₺'den başlayan fiyatlar",
    image: foto4,
    features: [
  "Banyonun ölçülerine özel boyutlandırma",
  "Temperli güvenlik camı",
  "Paslanmaz çelik, mat siyah veya altın profiller",
  "Katlanabilir kapı mekanizması"
]
  },
  {
    id: "glass",
    name: "ay05 duşakabin",
    description: "Temperli cam ile maksimum şeffaflık ve güvenlik. Lüks banyo konseptleri için ideal.",
    price: "3.800₺'den başlayan fiyatlar",
    image: foto5,
    features: ["8mm temperli güvenlik camı", "Anti-kireç korumalı yüzey", "Krom kaplama aksesuarlar", "Nano teknoloji su itici"]
  },
  {
    id: "glass",
    name: "ay-06 altın duşakabin",
    description: "Temperli cam ile maksimum şeffaflık ve güvenlik. Lüks banyo konseptleri için ideal.",
    price: "3.800₺'den başlayan fiyatlar",
    image: foto6,
    features: ["8mm temperli güvenlik camı", "Anti-kireç korumalı yüzey", "Krom kaplama aksesuarlar", "Nano teknoloji su itici"]
  },
  {
    id: "glass",
    name: "ay-06 duvardan duvara duşakabin",
    description: "Temperli cam ile maksimum şeffaflık ve güvenlik. Lüks banyo konseptleri için ideal.",
    price: "3.800₺'den başlayan fiyatlar",
    image: foto7,
    features: ["8mm temperli güvenlik camı", "Anti-kireç korumalı yüzey", "Krom kaplama aksesuarlar", "Nano teknoloji su itici"]
  },
  {
    id: "glass",
    name: "ay-07 duvaradan duvara duşakabin",
    description: "Temperli cam ile maksimum şeffaflık ve güvenlik. Lüks banyo konseptleri için ideal.",
    price: "3.800₺'den başlayan fiyatlar",
    image: foto8,
    features: ["8mm temperli güvenlik camı", "Anti-kireç korumalı yüzey", "Krom kaplama aksesuarlar", "Nano teknoloji su itici"]
  },
  {
    id: "glass",
    name: "ay-09 duşakabin",
    description: "Temperli cam ile maksimum şeffaflık ve güvenlik. Lüks banyo konseptleri için ideal.",
    price: "3.800₺'den başlayan fiyatlar",
    image: foto10,
    features: ["8mm temperli güvenlik camı", "Anti-kireç korumalı yüzey", "Krom kaplama aksesuarlar", "Nano teknoloji su itici"]
  },
  {
    id: "glass",
    name: "ay-68 duvardan duvara duşakabin",
    description: "Temperli cam ile maksimum şeffaflık ve güvenlik. Lüks banyo konseptleri için ideal.",
    price: "3.800₺'den başlayan fiyatlar",
    image: foto11,
    features: ["8mm temperli güvenlik camı", "Anti-kireç korumalı yüzey", "Krom kaplama aksesuarlar", "Nano teknoloji su itici"]
  },
  {
    id: "glass",
    name: "ay-70 karısık çizgili duşakabin",
    description: "Temperli cam ile maksimum şeffaflık ve güvenlik. Lüks banyo konseptleri için ideal.",
    price: "3.800₺'den başlayan fiyatlar",
    image: foto12,
    features: ["8mm temperli güvenlik camı", "Anti-kireç korumalı yüzey", "Krom kaplama aksesuarlar", "Nano teknoloji su itici"]
  },
  {
    id: "glass",
    name: "ay-71 içe açılır koyu duşakabin",
    description: "Temperli cam ile maksimum şeffaflık ve güvenlik. Lüks banyo konseptleri için ideal.",
    price: "3.800₺'den başlayan fiyatlar",
    image: foto13,
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
           profesyonel montaj hizmeti.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-xl shadow-lg border border-border hover-lift flex flex-col overflow-hidden"
              >
                {/* Image */}
                <div className="flex-1 flex items-center justify-center bg-gray-100 max-h-[300px] sm:max-h-none">
                  <img
                    src={product.image}
                    alt={`${product.name} - Ankara duşakabin`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col">
                  <h2 className="text-2xl font-semibold text-card-foreground mb-3">{product.name}</h2>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">{product.description}</p>

                  <div className="space-y-1 mb-4 flex-1">
                    <h3 className="font-semibold text-card-foreground">Özellikler:</h3>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary font-medium hover:underline mt-2"
                    data-testid={`link-product-${product.id}`}
                  >
                    Fiyat Teklifi Al
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              data-testid="button-quote-products"
            >
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
