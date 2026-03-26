import { Star, MapPin, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, hsla(30, 10%, 8%, 0.4), hsla(30, 10%, 8%, 0.9))" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-1 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
          <span className="ml-2 text-primary font-medium">4.8/5</span>
        </div>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-2 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Mashawi EL Bacha
        </h1>
        <p
          className="font-display text-2xl md:text-3xl text-primary mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          مشاوي الباشا
        </p>
        <p
          className="font-body text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          Découvrez le goût authentique des grillades marocaines à Casablanca. 
          Fraîcheur, saveur et hospitalité à chaque bouchée.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            href="#menu"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Voir le Menu
          </a>
          <a
            href="tel:0771315108"
            className="border border-primary text-primary px-8 py-3 rounded-lg font-medium text-lg hover:bg-primary/10 transition-colors"
          >
            Réserver
          </a>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-foreground/60 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1.1s" }}
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Casablanca
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            12:30 – 23:00
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
