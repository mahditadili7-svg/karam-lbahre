import logo from "@/assets/logo.png";

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container max-w-4xl text-center">
      <p className="text-secondary font-body text-sm uppercase tracking-[0.3em] mb-2">À propos</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Notre Histoire</h2>
      <img src={logo} alt="Karam Al Bahr" className="w-28 h-28 mx-auto mb-8 rounded-full shadow-xl" />
      <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
        Chez <span className="text-primary font-bold">Karam Al Bahr</span>, nous mettons à l'honneur la fraîcheur, le goût, et l'hospitalité marocaine. 
        Notre équipe prépare chaque plat avec passion pour vous offrir le meilleur de la mer. 
        Avec une note de <span className="text-secondary font-bold">4.7/5</span> de nos clients satisfaits, 
        nous nous engageons à offrir qualité, saveur et une expérience culinaire chaleureuse.
      </p>
    </div>
  </section>
);

export default AboutSection;
