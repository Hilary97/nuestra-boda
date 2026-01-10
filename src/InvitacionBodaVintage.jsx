import React, { useState, useEffect } from "react";
import {
  Play,
  MapPin,
  Calendar,
  Clock,
  Heart,
  X,
  ChevronRight,
  Share2,
  Camera,
} from "lucide-react";

const VintageWeddingInvite = () => {
  // Estado para la cuenta regresiva
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // FECHA DE LA BODA (Configurar aquí)
  const weddingDate = new Date("2026-05-02T12:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Datos simulados (Reemplazar con datos reales)
  const couple = {
    names: "Hilario & Yahaira",
    hashtag: "#Hilario&Yahaira2026",
    locationName: "Capilla de nuestra señora de Guadalupe",
    address: "Álvaro Obregón, Cerrito de la reina, Tonala Jal.",
    mapUrl: "https://maps.app.goo.gl/7XZwLxcfZP8mGJze6?g_st=i",
  };

  const galleryImages = [
    "/foto1.jpeg",
    "/foto2.jpeg",
    "/Foto3.jpeg",
    "/foto4.jpeg",
    "/foto5.jpeg",
    "/foto6.jpeg",
  ];

  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#4a4a4a] font-serif overflow-x-hidden selection:bg-[#d4c5a9] selection:text-white">
      {/* Estilos Globales para fuentes Vintage y animaciones */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400&display=swap');
        
        .font-script { font-family: 'Great Vibes', cursive; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        
        .vintage-border {
          border: 1px solid #d4c5a9;
          outline: 4px double #d4c5a9;
          outline-offset: 4px;
        }
        
        .paper-texture {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
      `}</style>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center px-4 paper-texture">
        <div className="absolute inset-0 z-0">
          <img
            src="/foto7.jpeg"
            alt="Fondo Boda"
            className="w-full h-full object-cover opacity-30 grayscale sepia-[.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f7f5f0] via-transparent to-[#f7f5f0]"></div>
        </div>

        <div className="z-10 relative animate-fade-in-up">
          <p className="font-body tracking-[0.3em] text-sm uppercase mb-4 text-[#8c7b64]">
            Nos casamos
          </p>
          <h1 className="font-script text-7xl md:text-9xl text-[#5e503f] mb-2 leading-tight">
            {couple.names}
          </h1>
          <div className="flex items-center justify-center gap-4 my-6">
            <span className="h-[1px] w-12 bg-[#8c7b64]"></span>
            <Heart className="w-5 h-5 text-[#8c7b64] fill-current" />
            <span className="h-[1px] w-12 bg-[#8c7b64]"></span>
          </div>
          <p className="font-playfair text-2xl md:text-4xl italic text-[#5e503f] mb-8">
            02 de Mayo, 2026
          </p>

          {/* Cuenta Regresiva */}
          <div className="flex justify-center gap-6 md:gap-12 text-[#5e503f]">
            {[
              { label: "Días", value: timeLeft.days },
              { label: "Horas", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
              { label: "Seg", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-playfair text-3xl md:text-5xl font-bold">
                  {item.value}
                </span>
                <span className="font-body text-xs tracking-widest uppercase mt-2 opacity-70">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <ChevronRight className="transform rotate-90 w-8 h-8 text-[#8c7b64]" />
        </div>
      </header>

      {/* --- NUESTRA HISTORIA (Video) --- */}
      <section className="py-20 px-4 md:px-10 max-w-5xl mx-auto bg-white shadow-xl my-10 relative vintage-border">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#5e503f] mb-4"></h2>
          <p className="font-body text-[#8c7b64] italic max-w-xl mx-auto">
            "El amor no consiste en mirarse el uno al otro, sino en mirar juntos
            en la misma dirección."
          </p>
        </div>

        <div className="relative aspect-video w-full bg-black shadow-2xl rounded-sm overflow-hidden border-8 border-[#f0ebe0]">
          {/* Placeholder para Video (YouTube Embed) */}
          <iframe
            className="w-full h-full object-cover"
            src="/VideoBoda.mp4"
            title="Wedding Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* --- DETALLES --- */}
      <section className="py-20 bg-[#ebe6d8] relative paper-texture">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Tarjeta de Ceremonia */}
          <div className="bg-[#f7f5f0] p-10 shadow-lg text-center border border-[#d4c5a9] transform hover:-translate-y-2 transition-transform duration-500">
            <div className="inline-block p-4 rounded-full border border-[#8c7b64] mb-6">
              <Calendar className="w-8 h-8 text-[#8c7b64]" />
            </div>
            <h3 className="font-playfair text-3xl text-[#5e503f] mb-2">
              La Ceremonia
            </h3>
            <p className="font-body text-lg text-gray-600 mb-6">
              Sábado, 02 de Mayo
            </p>
            <div className="flex items-center justify-center gap-2 mb-2 text-[#8c7b64]">
              <Clock className="w-4 h-4" />
              <span className="font-bold font-body">12:00 PM</span>
            </div>
            <p className="font-body text-sm text-gray-500 italic"></p>
          </div>

          {/* Tarjeta de Recepción */}
          <div className="bg-[#f7f5f0] p-10 shadow-lg text-center border border-[#d4c5a9] transform hover:-translate-y-2 transition-transform duration-500">
            <div className="inline-block p-4 rounded-full border border-[#8c7b64] mb-6">
              <MapPin className="w-8 h-8 text-[#8c7b64]" />
            </div>
            <h3 className="font-playfair text-3xl text-[#5e503f] mb-2">
              Templo
            </h3>
            <p className="font-body text-lg text-gray-600 mb-6">
              {couple.locationName}
            </p>
            <p className="font-body text-sm text-gray-500 mb-8 max-w-xs mx-auto">
              {couple.address}
            </p>

            <a
              href={couple.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3 bg-[#5e503f] text-[#f7f5f0] font-body text-sm tracking-widest uppercase hover:bg-[#4a3f32] transition-colors shadow-md"
            >
              Ubicación
            </a>
          </div>
        </div>
      </section>

      {/* --- GALERÍA DE FOTOS --- */}
      <section className="py-24 px-4 bg-[#f7f5f0]">
        <div className="text-center mb-16">
          <span className="font-script text-4xl text-[#8c7b64] block mb-2">
            " Porque juntos somos mejores, hemos decidido caminar de la mano
            para siempre."
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#5e503f]"></h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden shadow-lg aspect-[3/4] bg-gray-200 border-4 border-white"
              onClick={() => openModal(img)}
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 sepia-[.2] group-hover:sepia-0"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="text-white w-8 h-8 drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONFIRMACIÓN (RSVP) --- */}
      <section className="py-20 bg-[#5e503f] text-[#f7f5f0] text-center px-4 relative">
        <div className="max-w-2xl mx-auto border border-[#8c7b64] p-8 md:p-12 relative">
          {/* Bordes decorativos */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#f7f5f0]"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#f7f5f0]"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#f7f5f0]"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#f7f5f0]"></div>

          <h2 className="font-playfair text-4xl mb-4">Acompáñanos</h2>
          <p className="font-body mb-8 opacity-90">
            Tu presencia es nuestro mejor regalo. Por favor confirma tu
            asistencia antes del 27 Abril.
          </p>

          <button
            onClick={() => {
              const msg = encodeURIComponent(
                "Confirmo mi asistencia a la boda ♥️"
              );
              window.open(
                `https://api.whatsapp.com/send?phone=3329666124&text=${msg}`,
                "_blank"
              );
            }}
            className="px-10 py-4 bg-[#f7f5f0] text-[#5e503f] font-playfair font-bold text-lg hover:bg-[#e0dcd0] transition-colors shadow-2xl"
          >
            Confirmar Asistencia
          </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#4a3f32] text-[#d4c5a9] py-12 text-center font-body text-sm">
        <h3 className="font-script text-4xl mb-4">{couple.names}</h3>
        <p className="uppercase tracking-widest mb-6 opacity-70">
          Gracias por ser parte de nuestra historia
        </p>
        <p className="opacity-50 text-xs">Hecho con amor • {couple.hashtag}</p>
      </footer>

      {/* --- MODAL PARA GALERÍA --- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50"
            onClick={closeModal}
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-[90vh] shadow-2xl border-4 border-[#2a2a2a] object-contain animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default VintageWeddingInvite;
