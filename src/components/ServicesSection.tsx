import { UtensilsCrossed, Car, Truck } from "lucide-react";

const services = [
  { icon: UtensilsCrossed, title: "Repas sur place", desc: "Dégustez nos plats dans un cadre chaleureux" },
  { icon: Car, title: "Drive disponible", desc: "Commandez et récupérez vos plats rapidement" },
  { icon: Truck, title: "Livraison à domicile", desc: "Profitez de nos plats chez vous" },
];

const ServicesSection = () => (
  <section className="py-16 bg-card">
    <div className="container max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm font-body">{s.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-center mt-8 text-muted-foreground font-body">
        💰 Prix moyen : <span className="font-bold text-secondary">50–100 MAD</span> par personne
      </p>
    </div>
  </section>
);

export default ServicesSection;
