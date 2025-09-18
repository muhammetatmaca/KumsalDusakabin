import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-background" data-testid="section-about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Kumsal Duşakabin ekibi" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Hakkımızda</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Kumsal Duşakabin olarak, 2018 yılından bu yana Ankara'da duşakabin sektöründe faaliyet göstermekteyiz. Müşteri memnuniyetini her şeyin üstünde tutan anlayışımızla, kaliteli ürünler ve profesyonel hizmet sunmaktayız.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Güvenilir Marka</h4>
                  <p className="text-muted-foreground text-sm">Sektörde tanınmış ve güvenilir bir marka olma yolunda ilerliyoruz</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Deneyimli Ekip</h4>
                  <p className="text-muted-foreground text-sm">10+ yıl deneyimli montaj ekibimizle hizmet veriyoruz</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Müşteri Odaklı</h4>
                  <p className="text-muted-foreground text-sm">Müşteri memnuniyeti odaklı çalışma prensibimiz</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Tamamlanan Proje</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">%98</div>
                <div className="text-sm text-muted-foreground">Müşteri Memnuniyeti</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
