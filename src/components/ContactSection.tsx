import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-card">
    <div className="container max-w-5xl">
      <div className="text-center mb-12">
        <p className="text-secondary font-body text-sm uppercase tracking-[0.3em] mb-2">Contact</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Nous trouver</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border">
          <MapPin className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Adresse</h3>
          <p className="text-muted-foreground text-sm font-body leading-relaxed">
            2, Lotissement Fajr Ennasr, n°665 magasin,<br />
            Had Soualem 20402
          </p>
          <p className="text-muted-foreground text-xs font-body mt-2">📍 C4FV+9G Had Soualem</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border">
          <Phone className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Téléphone</h3>
          <a
            href="tel:0606812019"
            className="text-secondary font-bold text-xl font-body hover:brightness-110 transition"
          >
            06 06 81 20 19
          </a>
        </div>

        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border">
          <Clock className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Horaires</h3>
          <p className="text-muted-foreground text-sm font-body">Ouvert tous les jours</p>
          <p className="text-foreground font-bold font-body mt-1">Ferme à 23:00</p>
        </div>
      </div>

      {/* Map embed */}
      <div className="mt-12 rounded-2xl overflow-hidden shadow-xl border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5!2d-7.88!3d33.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI1JzEyLjAiTiA3wrA1Mic0OC4wIlc!5e0!3m2!1sfr!2sma!4v1!5m2!1sfr!2sma"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Karam Al Bahr location"
        />
      </div>
    </div>
  </section>
);

export default ContactSection;
