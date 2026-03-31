"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";


// Logo Component - Uses the uploaded logo image
const LOGO_URL = "https://i.ibb.co/849XkGh9/A-2.png";

const Logo = ({ className = "w-72 h-auto", invert = false }: { className?: string; invert?: boolean }) => (
  <img
    src={LOGO_URL}
    alt="Tres Gaviotas - Joyería oro 18k"
    className={`mx-auto ${className} ${invert ? "brightness-0 invert opacity-70" : ""}`}
  />
);

// Star sparkle decoration
const Sparkle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`w-4 h-4 ${className}`} fill="currentColor">
    <path d="M12 0L13.5 9L22 12L13.5 15L12 24L10.5 15L2 12L10.5 9L12 0Z" />
  </svg>
);

// Product images
const products = [
  {
    id: 1,
    name: "Collar Elegance",
    category: "Collares",
    price: "$5'250.000 COP",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Anillo Eternity",
    category: "Anillos",
    price: "$3'580.000 COP",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Pulsera Lumière",
    category: "Pulseras",
    price: "$2'850.000 COP",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Aretes Celestial",
    category: "Aretes",
    price: "$1'750.000 COP",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
  },
];

const categories = [
  {
    name: "Collares",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=600&fit=crop",
    description: "Elegancia que enmarca tu belleza",
  },
  {
    name: "Anillos",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=600&fit=crop",
    description: "Símbolos de amor eterno",
  },
  {
    name: "Pulseras",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=600&fit=crop",
    description: "Delicadeza en cada movimiento",
  },
  {
    name: "Aretes",
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=500&h=600&fit=crop",
    description: "Brillo que ilumina tu rostro",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <img
              src={LOGO_URL}
              alt="Tres Gaviotas"
              className="h-14 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {["Inicio", "Colección", "Categorías", "Nosotros", "Contacto"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm tracking-widest uppercase text-charcoal/80 hover:text-gold transition-colors duration-300 font-body"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <a
            href="https://wa.me/573188454741"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="text-sm tracking-wider">WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <Logo className="w-80 md:w-96 h-auto" />
          </div>

          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <Sparkle className="text-gold/60" />
            <p className="font-body text-xl md:text-2xl tracking-[0.3em] text-gray-500 italic">
              Joyería oro 18k
            </p>
            <Sparkle className="text-gold/60" />
          </div>

          <p className="font-body text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Descubre piezas únicas de oro de 18 kilates, creadas con pasión y
            dedicación para quienes aprecian la verdadera elegancia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            <Button
              asChild
              className="bg-[#1a1a1a] text-[#faf9f6] hover:bg-[#1a1a1a]/90 px-10 py-6 text-sm tracking-[0.2em] uppercase font-body transition-all duration-300 hover:shadow-xl"
            >
              <a href="#colección">Ver Colección</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gold text-charcoal hover:bg-gold hover:text-white px-10 py-6 text-sm tracking-[0.2em] uppercase font-body transition-all duration-300"
            >
              <a href="https://wa.me/573188454741" target="_blank" rel="noopener noreferrer">
                Contactar
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="colección" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
              Exclusivo
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-4 mb-6">
              Colección Destacada
            </h2>
            <div className="w-24 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-cream mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="bg-white text-charcoal px-6 py-3 text-sm tracking-wider uppercase font-body">
                      Ver Detalles
                    </span>
                  </div>
                </div>
                <span className="text-xs tracking-[0.2em] text-gold uppercase font-body">
                  {product.category}
                </span>
                <h3 className="font-display text-xl text-charcoal mt-1">
                  {product.name}
                </h3>
                <p className="font-body text-lg text-charcoal/70 mt-1">
                  {product.price}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              variant="outline"
              className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-12 py-6 text-sm tracking-[0.2em] uppercase font-body transition-all duration-300"
            >
              <a href="https://wa.me/573188454741" target="_blank" rel="noopener noreferrer">
                Ver Toda la Colección
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categorías" className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
              Explora
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-4 mb-6">
              Nuestras Categorías
            </h2>
            <div className="w-24 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-2xl mb-2">{category.name}</h3>
                  <p className="font-body text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 px-6 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
                Nuestra Historia
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 mb-8">
                Tradición y Elegancia
              </h2>
              <div className="w-24 h-px bg-gold mb-8" />
              <p className="font-body text-lg text-white/80 leading-relaxed mb-6">
                En Tres Gaviotas, cada pieza cuenta una historia. Desde nuestros
                inicios, nos hemos dedicado a crear joyas de oro de 18 kilates que
                trascienden el tiempo y las tendencias.
              </p>
              <p className="font-body text-lg text-white/80 leading-relaxed mb-6">
                Nuestro compromiso con la calidad y la artesanía nos ha convertido
                en referentes de la joyería fina. Seleccionamos cuidadosamente cada
                material y aplicamos técnicas tradicionales combinadas con diseño
                contemporáneo.
              </p>
              <div className="flex items-center gap-8 mt-10">
                <div className="text-center">
                  <span className="font-display text-4xl text-gold">18k</span>
                  <p className="font-body text-sm text-white/60 mt-1">Oro Puro</p>
                </div>
                <div className="w-px h-12 bg-gold/30" />
                <div className="text-center">
                  <span className="font-display text-4xl text-gold">100%</span>
                  <p className="font-body text-sm text-white/60 mt-1">Garantía</p>
                </div>
                <div className="w-px h-12 bg-gold/30" />
                <div className="text-center">
                  <span className="font-display text-4xl text-gold">+500</span>
                  <p className="font-body text-sm text-white/60 mt-1">Clientes</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop"
                alt="Artesanía en joyería"
                className="w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkle className="text-gold mx-auto mb-8 w-8 h-8" />
          <blockquote className="font-display text-3xl md:text-4xl text-charcoal italic leading-relaxed mb-8">
            "La joyería es una forma de arte que llevas contigo, una expresión de
            tu personalidad y tu historia."
          </blockquote>
          <div className="w-16 h-px bg-gold mx-auto mb-4" />
          <p className="font-body text-gold tracking-[0.2em] uppercase">
            Tres Gaviotas
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
                Contáctanos
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-4 mb-8">
                Estamos para Ti
              </h2>
              <div className="w-24 h-px bg-gold mb-8" />
              <p className="font-body text-lg text-charcoal/70 leading-relaxed mb-10">
                ¿Tienes preguntas sobre nuestras piezas? ¿Buscas algo especial?
                Contáctanos y con gusto te ayudaremos a encontrar la joya perfecta.
              </p>

              <div className="space-y-6">
                <a
                  href="https://wa.me/573188454741"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 border border-gold flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm text-charcoal/60">WhatsApp</p>
                    <p className="font-body text-lg text-charcoal">+57 318 845 4741</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/joyeria.tresgaviotas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 border border-gold flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm text-charcoal/60">Instagram</p>
                    <p className="font-body text-lg text-charcoal">@joyeria.tresgaviotas</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-gold flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm text-charcoal/60">Ubicación</p>
                    <p className="font-body text-lg text-charcoal">Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=700&fit=crop"
                alt="Joyería Tres Gaviotas"
                className="w-full h-auto"
              />
              <div className="absolute top-6 right-6 bg-gold text-white px-6 py-4">
                <p className="font-display text-lg">Envíos a toda Colombia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/573188454741"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Logo className="w-48 h-auto" invert={true} />
              </div>
              <p className="font-body text-white/60 leading-relaxed max-w-md">
                Elegancia y distinción en cada pieza. Joyas de oro de 18 kilates
                para quienes aprecian la belleza atemporal.
              </p>
            </div>

            <div>
              <h4 className="font-display text-lg mb-6">Enlaces</h4>
              <ul className="space-y-3">
                {["Inicio", "Colección", "Categorías", "Nosotros", "Contacto"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="font-body text-white/60 hover:text-gold transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg mb-6">Síguenos</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/joyeria.tresgaviotas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-gold hover:bg-gold transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/573188454741"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-gold hover:bg-gold transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-white/40">
              © 2024 Tres Gaviotas. Todos los derechos reservados.
            </p>
            <p className="font-body text-sm text-white/40">
              Joyería Oro 18k de Alta Calidad
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
