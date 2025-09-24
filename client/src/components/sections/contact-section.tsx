import { useState } from "react";
import { Button } from "@/components/ui/button.js";
import { Input } from "@/components/ui/input.js";
import { Textarea } from "@/components/ui/textarea.js";
import { Label } from "@/components/ui/label.js";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.js";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast.js";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    productType: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mesajınız alındı!",
        description: "En kısa sürede size dönüş yapacağız. Teşekkürler!",
      });
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        productType: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-background" data-testid="section-contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">İletişim</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ankara duşakabin ihtiyacınız için hemen iletişime geçin. Ücretsiz keşif ve fiyat teklifi.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                  <p className="text-muted-foreground">0538 303 40 28</p>
                  <a href="tel:+905383034028" className="text-primary hover:underline text-sm" data-testid="link-phone-contact-section">
                    Hemen Ara
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">0538 303 40 28</p>
                  <a href="https://wa.me/905383034028" className="text-primary hover:underline text-sm" data-testid="link-whatsapp-contact-section">
                    WhatsApp ile Yaz
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-posta</h3>
                  <p className="text-muted-foreground">info@eflalduskabin.com</p>
                  <a href="mailto:info@eflalduskabin.com" className="text-primary hover:underline text-sm" data-testid="link-email-contact-section">
                    E-posta Gönder
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                  <p className="text-muted-foreground">Ankara Geneli Hizmet Veriyoruz</p>
                  <p className="text-primary text-sm">Ücretsiz Keşif Hizmeti</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-muted rounded-xl">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Çalışma Saatleri
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Pazartesi - Cumartesi</span>
                  <span className="font-medium">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar</span>
                  <span className="font-medium">09:00 - 17:00</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">Ücretsiz Fiyat Teklifi</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact-name" className="block text-sm font-medium text-card-foreground mb-2">Ad Soyad</Label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="Adınız ve soyadınız"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    data-testid="input-contact-name"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-phone" className="block text-sm font-medium text-card-foreground mb-2">Telefon</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="0538 303 40 28"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    data-testid="input-contact-phone"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="contact-email" className="block text-sm font-medium text-card-foreground mb-2">E-posta</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="ornek@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  data-testid="input-contact-email"
                />
              </div>
              
              <div>
                <Label htmlFor="contact-product-type" className="block text-sm font-medium text-card-foreground mb-2">Ürün Tercihi</Label>
                <Select value={formData.productType} onValueChange={(value) => handleInputChange('productType', value)}>
                  <SelectTrigger data-testid="select-contact-product-type">
                    <SelectValue placeholder="Hangi ürünle ilgileniyorsunuz?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corner">Köşe Duşakabin</SelectItem>
                    <SelectItem value="sliding">Sürgülü Sistem</SelectItem>
                    <SelectItem value="oval">Oval Kabin</SelectItem>
                    <SelectItem value="glass">Cam Kabin</SelectItem>
                    <SelectItem value="other">Diğer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="contact-message" className="block text-sm font-medium text-card-foreground mb-2">Mesajınız</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Duşakabin ihtiyacınızı detaylı olarak açıklayın..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="h-32"
                  data-testid="textarea-contact-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
                data-testid="button-submit-contact-section"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Fiyat Teklifi Gönder
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
