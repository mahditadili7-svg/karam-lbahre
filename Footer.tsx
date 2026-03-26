import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Mashawi EL Bacha" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <span className="font-display text-sm font-bold text-primary">Mashawi EL Bacha</span>
            <span className="block text-xs text-muted-foreground">مشاوي الباشا</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          © 2026 Mashawi EL Bacha. Tous droits réservés.
        </p>
        <a
          href="tel:0771315108"
          className="text-sm text-primary hover:underline"
        >
          07 71 31 51 08
        </a>
      </div>
    </footer>
  );
};

export default Footer;
