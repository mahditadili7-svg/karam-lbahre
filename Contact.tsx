import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">Nous Trouver</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Contact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-card border border-border">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Téléphone</h3>
            <a href="tel:0771315108" className="font-body text-primary hover:underline text-lg">
              07 71 31 51 08
            </a>
          </div>

          <div className="text-center p-8 rounded-xl bg-card border border-border">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Adresse</h3>
            <p className="font-body text-muted-foreground">Casablanca, Maroc</p>
          </div>

          <div className="text-center p-8 rounded-xl bg-card border border-border">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Horaires</h3>
            <p className="font-body text-muted-foreground">Tous les jours</p>
            <p className="font-body text-foreground font-medium">12:30 – 23:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
