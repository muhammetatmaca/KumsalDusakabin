import { Shield, Wrench, Gem, Home, DollarSign, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "5 Yıl Garanti",
    description: "Tüm ürünlerimizde 5 yıl kapsamlı garanti süresi"
  },
  {
    icon: Wrench,
    title: "Profesyonel Montaj",
    description: "Uzman ekibimizle hızlı ve kaliteli montaj hizmeti"
  },
  {
    icon: Gem,
    title: "Premium Kalite",
    description: "CE belgeli temperli cam ve paslanmaz çelik aksesuarlar"
  },
  {
    icon: Home,
    title: "Ücretsiz Keşif",
    description: "Ankara genelinde ücretsiz ölçüm ve keşif hizmeti"
  },
  {
    icon: DollarSign,
    title: "Uygun Fiyat",
    description: "Kaliteli ürünleri en uygun fiyatlarla sunuyoruz"
  },
  {
    icon: Headphones,
    title: "24/7 Destek",
    description: "Satış sonrası sürekli müşteri destek hizmeti"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-muted" data-testid="section-features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Neden Kumsal Duşakabin?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ankara'da duşakabin konusunda tercih edilme nedenlerimiz</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
