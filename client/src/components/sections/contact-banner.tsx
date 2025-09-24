import { Phone, Mail } from "lucide-react";

export default function ContactBanner() {
  return (
    <section className="bg-muted py-6" data-testid="section-contact-banner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-foreground">Hemen İletişime Geçin</h3>
            <p className="text-sm text-muted-foreground">Ücretsiz keşif ve fiyat teklifi için</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="tel:+905383034028" className="flex items-center space-x-2 text-primary font-semibold" data-testid="link-phone-banner">
              <Phone className="h-4 w-4" />
              <span>0538 303 40 28</span>
            </a>
            <a href="mailto:info@eflalduskabin.com" className="flex items-center space-x-2 text-primary font-semibold" data-testid="link-email-banner">
              <Mail className="h-4 w-4" />
              <span>info@eflalduskabin.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
