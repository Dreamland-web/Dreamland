import React from 'react';
import { ArrowRight, Phone, MapPin, Award, ShieldCheck, Calendar, Compass, Star, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

// Custom Elegant Inline Vector SVG Logo representing explore/globe/lands for Dreamland Travel
function DreamlandLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <img
      src="https://i.ibb.co/r2gZCTRq/Mejora-la-calidad-de-este-202605261144.png"
      alt="Dreamland"
      className={`${className} transition-all duration-300 object-contain`}
      referrerPolicy="no-referrer"
    />
  );
}

export default function App() {
  // Direct general WhatsApp link
  const whatsappUrl = "https://wa.me/5493815541939?text=Hola%20Dreamland!%20Quiero%20conocer%20las%20ofertas%20y%20paquetes%20de%20viajes%20que%20tienen%20disponibles.";

  // High quality Unsplash images that render safely without referrer limits
  const heroImage = "https://i.ibb.co/r2BStNTS/Necesito-que-borres-el-logo-202605261132.jpg";
  
  // Custom destination list with specific WhatsApp deep links
  const featuredDestinations = [
    {
      title: "Egipto",
      tagline: "Historia Milenaria & Templos",
      description: "Pirámides de Giza, Templos de Luxor, cruceros exclusivos por el río Nilo y guías en español.",
      img: "https://i.ibb.co/cKb88t59/imagen-egipto-1-comp-2.jpg",
      whatsapp: "https://wa.me/5493815541939?text=Hola%20Dreamland!%20Quiero%20consultar%20por%20el%20viaje%20a%20Egipto%20que%20tienen%20disponible."
    },
    {
      title: "Aruba",
      tagline: "La Isla Feliz del Caribe",
      description: "Maravillosas playas de arena blanca, mar turquesa y resorts todo incluido para relajarse de forma única.",
      img: "https://i.ibb.co/FqLJtP1x/avif.avif",
      whatsapp: "https://wa.me/5493815541939?text=Hola%20Dreamland!%20Quiero%20consultar%20por%20el%20viaje%20a%20Aruba%20que%20tienen%20disponible."
    },
    {
      title: "Nacionales",
      tagline: "Argentina de Extremo a Extremo",
      description: "Los mejores paquetes y escapadas aéreas a Iguazú, Patagonia, Salta y Mendoza con financiación a tu medida.",
      img: "https://i.ibb.co/FkTjHzYp/los-3-destinos-nacionales-mas-elegidos-para-semana-santa-imagenes-pirayu-turismo-ushuaia-y-santa-cru.avif",
      whatsapp: "https://wa.me/5493815541939?text=Hola%20Dreamland!%20Quiero%20consultar%20por%20viajes%20Nacionales%20dentro%20de%20Argentina."
    }
  ];

  return (
    <div className="flex flex-col bg-white text-black antialiased font-sans scroll-smooth min-h-screen">
      
      {/* Inyección de Estilos para las Marquesinas y Animaciones */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .backers-track {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        /* Hover effect updated for web logo image */
        .logo-nav-group:hover .logo-svg {
          transform: scale(1.05);
        }
      `}</style>

      {/* --- SECCIÓN 1: NAVBAR & HERO (H-SCREEN) --- */}
      <div id="hero-sec" className="lg:h-screen flex flex-col overflow-hidden relative bg-white pb-12 lg:pb-0">
        
         {/* Navbar Absoluto sobre el Hero */}
        <nav className="absolute top-0 left-0 right-0 z-30 px-6 py-5 md:h-24 flex items-center justify-between border-b border-gray-100/70 bg-white/70 backdrop-blur-md md:bg-white/10 md:backdrop-blur-none transition-all">
          <div className="max-w-[88rem] mx-auto w-full flex items-center justify-between">
            {/* Logo con efecto Hover - Solo imagen de logotipo */}
            <a href="#" className="flex items-center group logo-nav-group" id="navbar-logo">
              <div className="logo-svg transition-transform duration-300">
                <DreamlandLogo className="h-11 w-auto" />
              </div>
            </a>

            {/* Menú Central (Oculto en móviles) */}
            <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-gray-505">
              <a href="#trayectoria" className="text-black/70 hover:text-[#369493] transition-colors duration-200">
                Trayectoria
              </a>
              <a href="#beneficios" className="text-black/70 hover:text-[#369493] transition-colors duration-200">
                Servicios 360º
              </a>
              <a href="#destinos" className="text-black/70 hover:text-[#369493] transition-colors duration-200">
                Destinos
              </a>
              <span className="flex items-center gap-1.5 text-[#369493] font-bold bg-[#369493]/10 px-3.5 py-1.5 rounded-full text-[10px] tracking-wider font-mono">
                <MapPin className="w-3.5 h-3.5" /> TUCUMÁN, AR
              </span>
            </div>

            {/* Botón de Contacto Superior */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-agendar"
              className="inline-flex items-center gap-2 bg-white text-[#369493] border border-[#369493] text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-[#369493] hover:text-white hover:shadow-md transition-all duration-300 shadow-sm font-display hover:scale-105 active:scale-95 transformLegacy"
            >
              <Phone className="w-4 h-4" />
              <span>AGENDAR VIAJE</span>
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex-1 px-4 sm:px-6 pt-28 lg:pt-24 pb-6 flex items-stretch">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col justify-start pt-14 md:pt-16 pb-12" style={{ minHeight: 'calc(100vh - 130px)' }}>
            
            {/* Imagen de Fondo del Hero - Opacidad progresiva de 0% a 100% hacia el centro/abajo */}
            <div className="absolute inset-0 w-full h-full z-0">
              <img 
                src={heroImage} 
                alt="Dreamland Hero" 
                className="w-full h-full object-cover object-center scale-100"
                referrerPolicy="no-referrer"
              />
              {/* Degradado para desvanecer la parte superior a blanco puro (opacidad de imagen 0) y revelar la imagen hacia abajo */}
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 via-[42%] to-transparent z-10" />
            </div>

            {/* Contenido Principal sobre la Imagen (Centrado Horizontamente y colocado en la mitad superior clara) */}
            <div className="relative z-20 flex flex-col items-center justify-start text-center h-full p-6 sm:p-10 md:p-14 max-w-4xl mx-auto w-full">
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-[3.2rem] font-black uppercase tracking-tighter text-[#369493] leading-[1.05] mb-6 select-none text-center"
              >
                Hacemos tu<br />
                viaje soñado<br />
                realidad.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mb-10 leading-relaxed font-sans font-semibold text-center mx-auto"
              >
                Diseñamos los mejores viajes nacionales e internacionales con respaldo permanente, seguridad del inicio al fin y la financiación premium que buscás desde Tucumán.
              </motion.p>

              {/* CTA Principal y Stats */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center gap-6"
              >
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#369493] text-white border border-[#369493] px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest shadow-xl flex items-center gap-4 hover:bg-black hover:border-black hover:text-white transition-all duration-300 group hover:scale-105 transform"
                >
                  <span className="font-display">PLANIFICAR MI VIAJE</span>
                  <div className="bg-white/10 text-white rounded-full p-1.5 transition-all group-hover:rotate-45 duration-300">
                    <ArrowUpRight className="w-5 h-5" strokeWidth={3} />
                  </div>
                </a>

                <div className="flex flex-col border-l border-gray-200 pl-6 py-1 select-none text-left bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-gray-250/30">
                  <span className="text-3xl font-black tracking-tight text-[#369493] font-display">+2000</span>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest font-mono">Viajeros Felices</span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

      </div>

      {/* --- SECCIÓN 2: TRAYECTORIA & PROPUESTA DE VALOR --- */}
      <section id="trayectoria" className="bg-white px-6 py-28 border-b border-gray-100/80">
        <div className="max-w-[88rem] mx-auto">
          
          {/* Fila Superior: Mensaje e Introducción - Modularizada de forma robusta en dos boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
            {/* Box Izquierdo */}
            <div className="flex flex-col items-start w-full max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-[1.15] tracking-tighter uppercase mb-8 select-none">
                TU TRANQUILIDAD ES <br />
                <span className="text-[#369493]">NUESTRO DESTINO.</span>
              </h2>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#369493] border border-[#369493] text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-full hover:bg-[#369493] hover:text-white transition-all duration-300 group shadow-sm hover:scale-105 transform"
              >
                <span>CONSULTAR UN ASESOR</span>
                <div className="bg-[#369493]/10 text-[#369493] group-hover:bg-white/20 group-hover:text-white rounded-full p-1.5 transition-all group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
            
            {/* Box Derecho */}
            <div className="w-full max-w-xl md:pt-4">
              <p className="text-gray-750 text-xl sm:text-2xl leading-relaxed font-normal font-sans">
                Nos avalan <strong className="text-[#369493] font-extrabold border-b-2 border-[#369493]/20 pb-1">+2000 viajeros felices</strong> de Tucumán que descubrieron el mundo bajo nuestro cuidado permanente, respaldados por la experiencia de un equipo local apasionado.
              </p>
            </div>
          </div>

          {/* Fila Inferior: Beneficios de Dreamland */}
          <div id="beneficios" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tarjeta 1: Atención Personalizada */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-3xl p-8 min-h-[320px] flex flex-col justify-between hover:border-[#369493] transition-all duration-300 shadow-sm"
            >
              <div className="bg-[#369493]/10 text-[#369493] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-black text-xl font-extrabold uppercase tracking-tight mb-3 font-display">Atención personalizada</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  No creamos itinerarios genéricos. Escuchamos tus deseos para moldear cada detalle del viaje exactamente como lo imaginaste, adaptado a tu estilo de viaje.
                </p>
              </div>
            </motion.div>

            {/* Tarjeta 2: Acompañamiento 360º */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#369493] text-white rounded-3xl p-8 min-h-[320px] flex flex-col justify-between shadow-xl shadow-[#369493]/15 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="bg-white/15 text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white text-xl font-extrabold uppercase tracking-tight mb-3 font-display">Acompañamiento 360º</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  Estamos con vos desde el armado del equipaje, check-ins y documentación, hasta que regresás a Tucumán. Tu tranquilidad está asegurada con soporte constante 24/7 ante contingencias.
                </p>
              </div>
            </motion.div>

            {/* Tarjeta 3: Financiación Propia */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-3xl p-8 min-h-[320px] flex flex-col justify-between hover:border-[#369493] transition-all duration-300 shadow-sm"
            >
              <div className="bg-[#369493]/10 text-[#369493] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-black text-xl font-extrabold uppercase tracking-tight mb-3 font-display">Financiación Flexible</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ofrecemos herramientas exclusivas y facilidades de pago para que puedas congelar y abonar tu viaje de forma cómoda, organizada y sin imprevistos financieros.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>



      {/* --- SECCIÓN 4: CTA FINAL & DESTINOS CON FOTOS REALES --- */}
      <section id="destinos" className="bg-white px-6 py-28">
        <div className="max-w-[88rem] mx-auto">
          
          {/* Header de la Sección */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black select-none tracking-tight uppercase leading-[1.1]">
                TU PRÓXIMA AVENTURA <br />
                <span className="text-[#369493]">EMPIEZA HOY.</span>
              </h2>
              <p className="text-gray-650 text-sm sm:text-base leading-relaxed max-w-xl font-sans font-medium">
                Elegí tu próximo destino nacional o internacional con las mejores tarifas y asesoramiento personalizado.
              </p>
            </div>
          </div>

          {/* Fila de Tarjetas e Itinerarios con Botones de WhatsApp que pre-rellenan */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Destinos Populares Directos */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredDestinations.slice(0, 2).map((item, idx) => (
                <motion.div 
                   key={idx}
                  whileHover={{ y: -6 }}
                  className="glass-card rounded-3xl overflow-hidden hover:border-[#369493]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Media container */}
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute bottom-4 left-4 text-white text-[10px] uppercase tracking-widest font-mono font-bold bg-[#369493] px-2.5 py-1 rounded">
                        {item.title.toUpperCase()}
                      </span>
                    </div>

                    <div className="p-6">
                      <span className="text-[#369493] text-[10px] font-black uppercase tracking-widest block mb-1.5 font-mono">
                        {item.tagline}
                      </span>
                      <h4 className="text-black text-lg font-bold uppercase tracking-tight mb-2 font-display">
                        Folleto {item.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <a 
                      href={item.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-widest bg-white border border-[#369493] text-[#369493] hover:bg-[#369493] hover:text-white transition-all duration-300 px-5 py-4 rounded-2xl group/btn"
                    >
                      <span>COTIZAR ESTE ITINERARIO</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}

              {/* Tercer Destino de Ancho completo en móviles */}
              <motion.div 
                whileHover={{ y: -6 }}
                className="hover:shadow-xl sm:col-span-2 glass-card rounded-3xl overflow-hidden hover:border-[#369493]/35 transition-all duration-300 flex flex-col sm:flex-row justify-between group"
              >
                <div className="sm:w-1/2 h-52 sm:h-auto overflow-hidden relative">
                  <img 
                    src={featuredDestinations[2].img} 
                    alt={featuredDestinations[2].title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-white text-[10px] uppercase tracking-widest font-mono font-bold bg-[#369493] px-2.5 py-1 rounded">
                    {featuredDestinations[2].title.toUpperCase()}
                  </span>
                </div>

                <div className="sm:w-1/2 p-7 flex flex-col justify-between">
                  <div>
                    <span className="text-[#369493] text-[10px] font-black uppercase tracking-widest block mb-1.5 font-mono">
                      {featuredDestinations[2].tagline}
                    </span>
                    <h4 className="text-black text-lg font-bold uppercase tracking-tight mb-2 font-display">
                      Paquetes {featuredDestinations[2].title}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                      {featuredDestinations[2].description}
                    </p>
                  </div>

                  <a 
                    href={featuredDestinations[2].whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-xs font-bold uppercase tracking-widest bg-white border border-[#369493] text-[#369493] hover:bg-[#369493] hover:text-white transition-all duration-300 px-5 py-4 rounded-2xl group/btn"
                  >
                    <span>CONSULTAR TARIFAS NACIONALES</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Columna Derecha: Banner Destacado Principal en el color de referencia */}
            <div className="lg:col-span-5 bg-[#369493] rounded-3xl overflow-hidden p-8 sm:p-12 text-white relative flex flex-col justify-between shadow-2xl min-h-[440px]">
              {/* Sombreado interno para dar calidad y tridimensionalidad */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/0 to-black/35 pointer-events-none" />
              
              {/* Background abstract decoration representing orbit maps */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 rounded-full border border-white/10 pointer-events-none"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full border border-white/5 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="bg-white/95 px-3.5 py-1.5 rounded-xl shadow-sm inline-flex items-center justify-center">
                    <DreamlandLogo className="h-6 w-auto" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold bg-white/15 px-3 py-1.5 rounded-full text-white tracking-widest uppercase font-mono">
                    <Star className="w-3 h-3 fill-white stroke-none" /> PROMOTIONS ACTIVE
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mb-3 font-display select-none">
                  CONOCÉ TODAS NUESTRAS OFERTAS Y FOLLETOS VIGENTES
                </h3>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed font-sans max-w-sm">
                  Contactanos para recibir las tarifas actualizadas, los folletos digitales de temporada y planes de financiación directa.
                </p>
              </div>

              <div className="relative z-10 pt-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border border-[#369493]/40 text-[#369493] text-xs font-black uppercase tracking-widest px-8 py-4.5 rounded-full hover:bg-[#369493] hover:text-white transition-all duration-300 group shadow-md hover:scale-105 transform border border-[#369493]"
                >
                  <span className="font-display">VER OFERTAS DISPONIBLES</span>
                  <div className="bg-[#369493]/10 text-[#369493] group-hover:text-white rounded-full p-1 group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- SECCIÓN 5: FOOTER CON LOGO GRANDE --- */}
      <footer className="bg-gray-50 border-t border-gray-100 px-6 py-20">
        <div className="max-w-[88rem] mx-auto flex flex-col items-center justify-between gap-12">
          
          {/* Logo Grande Requerido en Footer */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-4 text-center">
            <img 
              src="https://i.ibb.co/r2gZCTRq/Mejora-la-calidad-de-este-202605261144.png"
              alt="Dreamland"
              className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl h-auto object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col items-center gap-2 mt-1 select-none">
              <p className="text-gray-500 text-xs sm:text-sm font-sans font-semibold tracking-wide uppercase">
                Pje. Benjamín Paz, T4000 San Miguel de Tucumán, Tucumán, Argentina
              </p>
              <p className="text-gray-400 text-[11px] font-mono font-semibold tracking-widest">
                LAZARTE MARIA ELENA • CUIT 27-38249249-3
              </p>
            </div>
          </div>

          {/* Enlaces y Legales */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full border-t border-gray-200/60 pt-10 gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <div className="text-center md:text-left">
              <p className="font-sans">© {new Date().getFullYear()} DREAMLAND TRAVEL. TODOS LOS DERECHOS RESERVADOS.</p>
              <p className="text-gray-300 text-[10px] font-mono mt-1">SAN MIGUEL DE TUCUMÁN, ARGENTINA.</p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-gray-500 font-bold uppercase tracking-widest">
              <a 
                href="https://www.instagram.com/dreamlandevyt/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#369493] transition-colors"
                id="footer-insta"
              >
                INSTAGRAM
              </a>
              <a 
                href="https://www.facebook.com/dreamlandtravelevt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#369493] transition-colors"
                id="footer-fb"
              >
                FACEBOOK
              </a>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#369493] hover:bg-[#369493] hover:text-white flex items-center gap-1.5 bg-[#369493]/5 border border-[#369493]/30 px-3.5 py-2 rounded-full transition-all text-xs font-black tracking-widest font-display"
                id="footer-wa"
              >
                <Phone className="w-3.5 h-3.5" /> WHATSAPP: +54 9 381 554-1939
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
