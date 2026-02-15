import heroImage from "@/assets/hero-seafood.jpg";
import logo from "@/assets/logo.png";
import { Phone, MapPin, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      {/* Nav bar */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-4">
        <img src={logo} alt="Karam Al Bahr Logo" className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg" />
        <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide">
          <a href="#menu" className="text-primary-foreground/90 hover:text-secondary transition-colors">Menu</a>
          <a href="#about" className="text-primary-foreground/90 hover:text-secondary transition-colors">À propos</a>
          <a href="#contact" className="text-primary-foreground/90 hover:text-secondary transition-colors">Contact</a>
        </div>
        <a
          href="tel:0606812019"
          className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold hover:brightness-110 transition"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">06 06 81 20 19</span>
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
        <img src={logo} alt="Karam Al Bahr" className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full shadow-2xl border-4 border-secondary/40" />
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-2">
          Karam Al Bahr
        </h1>
        <p className="font-display text-2xl md:text-3xl text-gradient-gold mb-4">مطعم البحر أكلات السمك</p>
        <p className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Découvrez le goût authentique de la mer à Had Soualem — Poissons frais et spécialités de fruits de mer
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-primary-foreground/70 text-sm font-body">
          <span className="flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4 text-secondary" /> Had Soualem
          </span>
          <span className="flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock className="w-4 h-4 text-secondary" /> Ouvert tous les jours
          </span>
          <span className="flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
            ⭐ 4.7/5
          </span>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#menu" className="bg-secondary text-secondary-foreground font-bold px-8 py-3 rounded-full text-lg hover:brightness-110 transition shadow-lg">
            Voir le Menu
          </a>
          <a href="#contact" className="border-2 border-primary-foreground/30 text-primary-foreground font-body px-8 py-3 rounded-full text-lg hover:bg-primary-foreground/10 transition">
            Nous contacter
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
