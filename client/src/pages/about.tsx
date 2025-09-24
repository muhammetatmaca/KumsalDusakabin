import SEOHead from "@/components/seo/seo-head.js";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16">
      <SEOHead
        title="Hakkımızda - Eflal Duşakabin | Ankara'nın Güvenilir Duşakabin Markası"
        description="2018'den beri Ankara'da duşakabin sektöründe faaliyet gösteren Eflal Duşakabin. Güvenilir, deneyimli ve müşteri memnuniyetine odaklı hizmet anlayışımız."
        keywords="Eflal Duşakabin hakkında, Ankara duşakabin firması, güvenilir duşakabin markası, deneyimli duşakabin ekibi"
      />

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Hakkımızda
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            2018 yılından bu yana Ankara'da duşakabin sektöründe faaliyet göstermekteyiz. 
            Müşteri memnuniyetini her şeyin üstünde tutan anlayışımızla, kaliteli ürünler ve profesyonel hizmet sunmaktayız.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Eflal Duşakabin ekibi" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Kalite ve Güven Bizim Önceliğimiz
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Eflal Duşakabin olarak, Ankara'da duşakabin sektöründe kendimizi kanıtlamış bir markayız. 
                Her projede en yüksek kalite standartlarını uygulayarak, müşterilerimizin beklentilerini aştığımıza inanıyoruz.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Güvenilir Marka</h4>
                    <p className="text-muted-foreground text-sm">
                      Sektörde tanınmış ve güvenilir bir marka olma yolunda ilerliyoruz. 
                      500+ tamamlanan proje ile Ankara'da öncü konumdayız.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Deneyimli Ekip</h4>
                    <p className="text-muted-foreground text-sm">
                      10+ yıl deneyimli montaj ekibimizle hizmet veriyoruz. 
                      Her ekip üyemiz alanında uzman ve sertifikalı profesyonellerdir.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Müşteri Odaklı</h4>
                    <p className="text-muted-foreground text-sm">
                      Müşteri memnuniyeti odaklı çalışma prensibimiz ile %98 müşteri memnuniyet oranına ulaştık. 
                      Her proje bizim için önemlidir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Kaliteli Ürünler</h4>
                    <p className="text-muted-foreground text-sm">
                      Sadece CE belgeli, temperli güvenlik camı ve paslanmaz çelik aksesuarlar kullanıyoruz. 
                      Tüm ürünlerimiz 5 yıl garantilidir.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Tamamlanan Proje</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">%98</div>
                  <div className="text-sm text-muted-foreground">Müşteri Memnuniyeti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Değerlerimiz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eflal Duşakabin'i tercih etmenizin nedenleri
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Müşteri Memnuniyeti</h3>
              <p className="text-muted-foreground">
                Her müşterimizin ihtiyacını anlayarak, en uygun çözümü sunmak önceliğimizdir.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Güvenilirlik</h3>
              <p className="text-muted-foreground">
                Sözümüzü tutmak, zamanında teslimat yapmak ve verdiğimiz garantileri yerine getirmek temel ilkemizdir.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Yenilikçilik</h3>
              <p className="text-muted-foreground">
                Sektördeki yenilikleri takip ederek, müşterilerimize en modern çözümleri sunuyoruz.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Kalite</h3>
              <p className="text-muted-foreground">
                Sadece en kaliteli malzemeleri kullanarak, uzun ömürlü ve dayanıklı ürünler sunuyoruz.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Uygun Fiyat</h3>
              <p className="text-muted-foreground">
                Kaliteli hizmeti uygun fiyatlarla sunarak, her bütçeye uygun çözümler üretiyoruz.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Sürekli Destek</h3>
              <p className="text-muted-foreground">
                Satış sonrası da yanınızdayız. 24/7 müşteri destek hizmeti ile her zaman ulaşılabilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Hikayemiz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eflal Duşakabin'in bugünlere gelme hikayesi
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">2018</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Kuruluş</h3>
                  <p className="text-muted-foreground">
                    Eflal Duşakabin, Ankara'da küçük bir atölye olarak duşakabin sektöründe faaliyete başladı. 
                    İlk günden itibaren kalite ve müşteri memnuniyeti odaklı çalışma prensibini benimsedik.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">2019</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">İlk 100 Proje</h3>
                  <p className="text-muted-foreground">
                    İlk yılımızı tamamlayarak 100'üncü projemizi bitirdik. Müşteri referansları ile büyümeye devam ettik. 
                    Bu süreçte deneyimli ekip üyelerimizi kadromuza kattık.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">2020</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Teknoloji Yatırımı</h3>
                  <p className="text-muted-foreground">
                    Modern üretim teknolojilerine yatırım yaptık. Temperli cam işleme ve özel kesim teknolojileri ile 
                    daha kaliteli ürünler üretmeye başladık.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">2022</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Büyüme ve Genişleme</h3>
                  <p className="text-muted-foreground">
                    300'üncü projemizi tamamlayarak Ankara'nın önde gelen duşakabin firmalarından biri haline geldik. 
                    Showroom ve servis ağımızı genişlettik.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">2024</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">500+ Proje Başarısı</h3>
                  <p className="text-muted-foreground">
                    Bugün 500'den fazla başarılı proje ile Ankara'nın en güvenilir duşakabin markalarından biriyiz. 
                    %98 müşteri memnuniyeti oranımızla sektörde öncü konumdayız.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
