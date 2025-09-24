import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Droplets, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button.js";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.js";
import arkasibosIcon from '@shared/arkasibos.png';

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Ürünler", href: "/products" },
    { name: "Hakkımızda", href: "/about" },
    { name: "İletişim", href: "/contact" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'glassmorphism border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`} data-testid="header-main">
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/95 to-background/90"></div>
      
      <nav className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Modern Logo */}
          <Link
      href="/"
      className="inline-flex items-center space-x-3 group"
      data-testid="link-logo"
    >
      <div className="relative">
          <img
            src={arkasibosIcon} 
            alt="Duşakabin Icon"
            className="h-[4rem]  object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold gradient-text">Eflal</span>
        <span className="text-xs text-muted-foreground font-medium tracking-widest">
          DUŞAKABİN
        </span>
      </div>
    </Link>
          
          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-12"> 
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative group py-2 px-1 transition-all duration-300 ${
                  location === item.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span className="relative z-10 font-medium">{item.name}</span>
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  location === item.href ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                }`}></div>
                {location === item.href && (
                  <div className="absolute -inset-x-2 -inset-y-1 bg-primary/10 rounded-lg -z-10 animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Phone Button */}
            <a
              href="tel:+905383034028"
              className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-xl glassmorphism text-foreground hover:text-primary transition-all duration-300 group"
              data-testid="link-phone-header"
            >
              <Phone className="h-4 w-4 group-hover:animate-pulse" />
              <span className="text-sm font-medium">0538 303 40 28</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/05383034028"
              className="hidden md:flex whatsapp-btn px-6 py-2.5 rounded-xl text-white font-medium text-sm"
              data-testid="link-whatsapp-header"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690"/>
              </svg>
              İletişim
            </a>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden w-10 h-10 rounded-xl glassmorphism hover:bg-primary/20" 
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[350px] bg-background/95 backdrop-blur-xl border-l border-white/10">
                <div className="flex flex-col pt-8">
                  <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-white/10">
                    <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                      <Droplets className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold gradient-text">Eflal</span>
                      <span className="text-xs text-muted-foreground">DUŞAKABIN</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                          location === item.href
                            ? "gradient-primary text-white"
                            : "text-foreground hover:bg-muted glassmorphism"
                        }`}
                        onClick={() => setIsOpen(false)}
                        data-testid={`link-mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-8 space-y-4 pt-6 border-t border-white/10">
                    <a
                      href="tel:+905383034028"
                      className="flex items-center space-x-3 p-4 rounded-xl glassmorphism text-foreground hover:text-primary transition-colors"
                      data-testid="link-phone-mobile"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-medium">0538 303 40 28</span>
                    </a>
                    <a
                      href="https://wa.me/905383034028"
                      className="whatsapp-btn flex items-center space-x-3 p-4 rounded-xl text-white font-medium"
                      data-testid="link-whatsapp-mobile"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690"/>
                      </svg>
                      WhatsApp İletişim
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
