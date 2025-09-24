import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export default function SEOHead({
  title,
  description,
  keywords = "Ankara duşakabin, Çankaya duşakabin, Keçiören duşakabin, Yenimahalle duşakabin, Mamak duşakabin, Sincan duşakabin, Etimesgut duşakabin, Gölbaşı duşakabin, Pursaklar duşakabin, Altındağ duşakabin, Polatlı duşakabin, Elmadağ duşakabin, Kızılcahamam duşakabin, modern duşakabin, Ankara duşakabin fiyatları, Eflal Duşakabin Ankara, köşe duşakabin, cam kabin, sürgülü duşakabin, oval kabin, temperli cam duşakabin, Ankara duşakabin montajı, duşakabin firması Ankara",
  ogTitle,
  ogDescription,
  ogImage = "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=630"
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta tags
    const setMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const setMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    
    // Open Graph tags
    setMetaProperty('og:title', ogTitle || title);
    setMetaProperty('og:description', ogDescription || description);
    setMetaProperty('og:image', ogImage);
    setMetaProperty('og:type', 'website');
    
    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', ogTitle || title);
    setMetaTag('twitter:description', ogDescription || description);
    setMetaTag('twitter:image', ogImage);

    // Structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Eflal Duşakabin",
      "description": "Ankara'nın tüm ilçelerinde hizmet veren güvenilir duşakabin markası. Çankaya, Keçiören, Yenimahalle, Mamak, Sincan, Etimesgut, Gölbaşı, Pursaklar, Altındağ, Polatlı ve diğer tüm bölgelerde modern duşakabin, köşe duşakabin, sürgülü sistem ve cam kabin montaj hizmeti.",
      "telephone": "+905383034028",
      "email": "info@eflalduskabin.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ankara",
        "addressCountry": "TR"
      },
      "areaServed": [
  // Etimesgut
  'Etimesgut', 'Eryaman', 'Elvankent', 'Bağlıca', 'Göksu', 'Ahi Mesut',
  'Şehitali', 'Topçu Mahallesi', 'Saraycık',

  // Sincan
  'Sincan', 'Yenikent', 'Fatih', 'Temelli',

  // Çankaya
  'Çankaya', 'Kızılay', 'Dikmen', 'Oran', 'Yıldız', 'Bahçelievler', 'Emek',

  // Keçiören
  'Keçiören', 'Etlik', 'Ufuktepe', 'Şefkat', 'Aktepe', 'Ayvalı',

  // Yenimahalle
  'Yenimahalle', 'Batıkent', 'Demetevler', 'İvedik',

  // Mamak
  'Mamak', 'Natoyolu', 'Boğaziçi', 'Kutlu',

  // Altındağ
  'Altındağ', 'Ulus', 'Aydınlıkevler', 'Önder',

  // Gölbaşı
  'Gölbaşı', 'Beytepe', 'Hacılar',

  // Diğer ilçeler
  'Polatlı', 'Pursaklar', 'Çubuk', 'Kahramankazan', 'Bala', 
  'Kızılcahamam', 'Beypazarı', 'Ayaş', 'Haymana', 
  'Nallıhan', 'Şereflikoçhisar', 'Evren'
],
      "serviceType": ["Duşakabin Montajı", "Temperli Cam Montajı", "Banyo Yenileme"],
      "priceRange": "$$",
      "image": "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=630",
      "url": window.location.origin,
      "sameAs": [ 
        "https://wa.me/905383034028"
      ],
      "offers": {
        "@type": "Offer",
        "description": "Ücretsiz keşif ve montaj hizmeti",
        "availability": "https://schema.org/InStock"
      }
    };

    let scriptTag = document.querySelector('#structured-data') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, ogTitle, ogDescription, ogImage]);

  return null;
}
