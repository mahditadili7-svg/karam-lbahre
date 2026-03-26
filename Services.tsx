import { UtensilsCrossed, Car, Truck } from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Repas sur place",
    description: "Profitez d'une ambiance chaleureuse dans notre restaurant.",
  },
  {
    icon: Car,
    title: "Drive disponible",
    description: "Commandez et récupérez vos plats sans quitter votre voiture.",
  },
  {
    icon: Truck,
    title: "Livraison à domicile",
    description: "Recevez vos grillades préférées directement chez vous.",
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
