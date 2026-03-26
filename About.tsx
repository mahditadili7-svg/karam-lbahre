import { Flame, Heart, Leaf } from "lucide-react";

const values = [
  { icon: Flame, title: "Charbon de Bois", desc: "Cuisson traditionnelle pour un goût fumé authentique." },
  { icon: Leaf, title: "Produits Frais", desc: "Ingrédients sélectionnés chaque jour au marché." },
  { icon: Heart, title: "Hospitalité", desc: "Un accueil chaleureux à la marocaine." },
];

const About = () => {
  return (
    <section id="apropos" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">Qui sommes-nous</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">À Propos</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg leading-relaxed">
            Chez Mashawi EL Bacha, nous mettons à l'honneur la fraîcheur, le goût, et l'hospitalité marocaine. 
            Notre équipe prépare chaque plat avec passion pour vous offrir le meilleur des grillades traditionnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="text-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <v.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
