import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Ürünler", href: "/products" },
    { name: "Hakkımızda", href: "/about" },
    { name: "İletişim", href: "/contact" }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50" data-testid="header-main">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2" data-testid="link-logo">
            <Bath className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Kumsal Duşakabin</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link transition-colors ${
                  location === item.href
                    ? "text-primary font-medium"
                    : "text-foreground hover:text-primary"
                }`}
                data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            <a
              href="tel:+905551234567"
              className="hidden sm:flex items-center space-x-2 text-primary"
              data-testid="link-phone-header"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">0555 123 45 67</span>
            </a>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block py-2 px-4 rounded-lg transition-colors ${
                        location === item.href
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      }`}
                      onClick={() => setIsOpen(false)}
                      data-testid={`link-mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a
                    href="tel:+905551234567"
                    className="flex items-center space-x-2 text-primary py-2 px-4"
                    data-testid="link-phone-mobile"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm font-medium">0555 123 45 67</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
