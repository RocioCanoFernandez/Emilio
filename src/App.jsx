import React, { useState, useEffect, useRef } from 'react'
import { Phone, Mail, Globe, Linkedin, MapPin, Download, Wrench, Settings, Search, CheckCircle, ChevronRight, MessageCircle } from 'lucide-react'
import './index.css'

function App() {
  const [showCta, setShowCta] = useState(false);
  const linksRef = useRef(null);

  // Uncomment when WhatsApp URL is confirmed
  /*
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowCta(true);
        } else {
          setShowCta(false);
        }
      },
      { threshold: 0.1 }
    );

    if (linksRef.current) {
      observer.observe(linksRef.current);
    }

    return () => {
      if (linksRef.current) observer.unobserve(linksRef.current);
    };
  }, []);
  */

  const data = {
    company: "ENFRIAMOS HVAC",
    name: "Emilio Manuel Fernández Bernabé",
    role: "Técnico experto en plantas enfriadoras",
    email: "emilio@enfriamos.com",
    phone: "653252023",
    phoneUrl: "+34653252023",
    website: "https://www.enfriclima.com/",
    linkedin: "https://es.linkedin.com/in/emilio-fernandez-bernabe-a4940479",
    location: "https://maps.app.goo.gl/X5dKYkNHLUqJht4K8",
    logoUrl: "/logo.png",
    profileImgUrl: "/profile.jpg",
    seviaiLogoUrl: "/logo_sin_fondo.png",
    
    // Pending items
    // whatsappUrl: "https://wa.me/34653252023",
    // dossierUrl: "#",
    // instagram: "#",
    // facebook: "#"
  }

  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${data.name}
ORG:${data.company}
TITLE:${data.role}
TEL;TYPE=WORK,VOICE:${data.phoneUrl}
EMAIL;TYPE=PREF,INTERNET:${data.email}
URL:${data.website}
END:VCARD`;

  const handleDownloadVCard = () => {
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'enfriamos_emilio_fdez.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const services = [
    {
      title: "Mantenimiento de instalaciones de climatización",
      text: "Servicio técnico especializado para el mantenimiento de sistemas de climatización industrial.",
      icon: <Settings size={22} className="service-icon" />
    },
    {
      title: "Reparación e instalación de sistemas",
      text: "Reparación e instalación de sistemas AIRE/AIRE, AIRE/AGUA, AGUA/AGUA y AGUA/AIRE.",
      icon: <Wrench size={22} className="service-icon" />
    },
    {
      title: "Retrofit de refrigerantes",
      text: "Adaptación y actualización de refrigerantes en equipos existentes.",
      icon: <Search size={22} className="service-icon" />
    },
    {
      title: "Modificaciones de control",
      text: "Modificaciones de sistemas de control en equipos CHILLER y ROOFTOP.",
      icon: <CheckCircle size={22} className="service-icon" />
    }
  ];

  return (
    <div className="hub-container">
      {/* VCard Button at Top Right */}
      <button onClick={handleDownloadVCard} className="vcard-btn-floating" title="Guardar contacto" aria-label="Guardar contacto">
        <Download size={22} />
      </button>

      {/* Hero Header */}
      <header className="hero">
        <div className="logo-container">
          <img 
            src={data.logoUrl} 
            alt="ENFRIAMOS HVAC" 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<h2 style="font-weight: 800; color: var(--primary-color);">ENFRIAMOS HVAC</h2>';
            }} 
          />
        </div>
        
        <h1 className="name">{data.company}</h1>
        <p className="role">{data.role}</p>
        
        <div className="hero-contact">
          <a href={`mailto:${data.email}`} className="hero-contact-link">
            <Mail size={16} />
            {data.email}
          </a>
          <a href={`tel:${data.phoneUrl}`} className="hero-contact-link">
            <Phone size={16} />
            {data.phone}
          </a>
        </div>
      </header>

      {/* Profile Area */}
      <section className="profile-section">
        <div className="profile-img-container">
          <img loading="lazy" src={data.profileImgUrl} alt={data.name} className="profile-img" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Emilio+Fdez&background=0B7280&color=fff&size=200' }} />
        </div>
      </section>

      <main className="content">
        
        {/* Intro */}
        <div className="intro-card">
          <p className="intro-text">
            <strong>ENFRIAMOS HVAC.</strong> Expertos en climatización industrial.
          </p>
          <p className="intro-subtext">
            Mantenimiento y reparación de plantas enfriadoras (chillers) y sistemas aire-agua y agua-agua. Todas las potencias frigoríficas.
          </p>
        </div>

        {/* Main CTA */}
        <a href={`tel:${data.phoneUrl}`} className="main-cta">
          <Phone size={22} />
          Contactar
        </a>

        {/* Links */}
        <h3 className="section-title">Accesos Principales</h3>
        <div className="links-container" ref={linksRef}>
          <a href={data.website} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <Globe size={20} />
              </div>
              <span>Web</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>
          
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <Linkedin size={20} />
              </div>
              <span>LinkedIn</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>

          <a href={data.location} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <MapPin size={20} />
              </div>
              <span>Ubicación</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>

          <a href={`tel:${data.phoneUrl}`} className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <Phone size={20} />
              </div>
              <span>Llamar ahora</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>

          {/* Pending Links - Hidden until confirmation */}
          {/*
          <a href={data.dossierUrl} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <Download size={20} />
              </div>
              <span>Ver dossier</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>
          <a href={data.whatsappUrl} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <MessageCircle size={20} />
              </div>
              <span>WhatsApp</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>
          <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <Instagram size={20} />
              </div>
              <span>Instagram</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>
          <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="link-card">
            <div className="link-card-left">
              <div className="link-icon-container">
                <Facebook size={20} />
              </div>
              <span>Facebook</span>
            </div>
            <ChevronRight size={20} className="link-arrow" />
          </a>
          */}
        </div>

        {/* Services */}
        <h3 className="section-title">Servicios Técnicos</h3>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h4 className="service-title">{service.title}</h4>
              <p className="service-text">{service.text}</p>
            </div>
          ))}
        </div>
      </main>
      
      {/* Footer SeviAI Ecosystem */}
      <div className="seviai-footer-container">
        <style>{`
          .seviai-footer-container {
            margin-top: 2rem;
            padding: 0 2rem 2rem 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            opacity: 0.9;
          }
          .seviai-footer-copyright {
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            font-weight: 600;
            color: var(--text-gray);
            text-align: center;
            margin: 0 0 1rem 0;
          }
          .seviai-footer-link {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            font-weight: 800;
            color: var(--text-dark);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            text-decoration: none;
            transition: color 0.3s ease;
            padding: 10px 16px;
          }
          .seviai-footer-logo {
            height: 20px;
            width: auto;
            opacity: 0.7;
            filter: grayscale(100%);
            transition: all 0.3s ease;
          }
          @media (hover: hover) {
            .seviai-footer-link:hover {
              color: var(--primary-color);
            }
            .seviai-footer-link:hover .seviai-footer-logo {
              opacity: 1;
              filter: grayscale(0%);
            }
          }
          .seviai-footer-link:active {
            color: var(--primary-color);
          }
          .seviai-footer-link:active .seviai-footer-logo {
            opacity: 1;
            filter: grayscale(0%);
          }
        `}</style>
        <p className="seviai-footer-copyright">
          © 2026 ENFRIAMOS HVAC
        </p>
        <a href="https://www.seviai.es/" target="_blank" rel="noopener noreferrer" className="seviai-footer-link">
          SeviAI Ecosystem
          <img src={data.seviaiLogoUrl} alt="SeviAI" className="seviai-footer-logo" />
        </a>
      </div>

      {/* Pending WhatsApp floating CTA - Hidden until confirmation */}
      {/* 
      <div className={\`floating-whatsapp-wrapper \${showCta ? 'visible' : ''}\`}>
        <a 
          href={data.whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer" 
          className="fab fab-whatsapp"
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
      */}
    </div>
  )
}

export default App
