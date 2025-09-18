import { Bath, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12" data-testid="footer-main">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bath className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Kumsal Duşakabin</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Ankara'nın en güvenilir duşakabin markası. Kaliteyi banyonuza taşıyoruz.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://wa.me/905551234567"
                className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
                data-testid="link-whatsapp-footer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690"/>
                </svg>
              </a>
              <a
                href="tel:+905551234567"
                className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
                data-testid="link-phone-footer"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@kumsalduskabin.com"
                className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
                data-testid="link-email-footer"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Ürünlerimiz</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/products" className="hover:text-primary transition-colors" data-testid="link-footer-corner">
                  Köşe Duşakabin
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors" data-testid="link-footer-sliding">
                  Sürgülü Sistem
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors" data-testid="link-footer-oval">
                  Oval Kabin
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors" data-testid="link-footer-glass">
                  Cam Kabin
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Ücretsiz Keşif</li>
              <li>Profesyonel Montaj</li>
              <li>5 Yıl Garanti</li>
              <li>24/7 Müşteri Desteği</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>0555 123 45 67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@kumsalduskabin.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Ankara Geneli Hizmet</span>
              </li>
              <li>🕒 Pazartesi-Cumartesi 08:00-18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Kumsal Duşakabin. Tüm hakları saklıdır. | Ankara Duşakabin | Modern Duşakabin Çözümleri
          </p>
        </div>
      </div>
    </footer>
  );
}
