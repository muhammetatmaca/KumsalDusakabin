import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mehmet K.",
    location: "Çankaya",
    rating: 5,
    comment: "Banyomuzu yenileme kararı aldığımızda Eflal Duşakabin'i tercih ettik. Hem ürün kalitesi hem de montaj hizmeti mükemmeldi. Teşekkürler!"
  },
  {
    name: "Ayşe D.",
    location: "Keçiören", 
    rating: 5,
    comment: "Köşe duşakabini için aldığım hizmet harika. Fiyat performans açısından çok memnunum. Herkese tavsiye ederim."
  },
  {
    name: "Ali R.",
    location: "Yenimahalle",
    rating: 5,
    comment: "Profesyonel yaklaşım, kaliteli malzeme ve hızlı montaj.gönül rahatlığı içindeyim."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted" data-testid="section-testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Müşteri Yorumları</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ankara'da duşakabin konusunda bize güvenen müşterilerimizin görüşleri</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">"{testimonial.comment}"</p>
              <div className="font-semibold text-card-foreground">
                {testimonial.name} - {testimonial.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
