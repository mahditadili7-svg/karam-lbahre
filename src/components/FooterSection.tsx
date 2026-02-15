import logo from "@/assets/logo.png";

const FooterSection = () => (
  <footer className="bg-accent text-accent-foreground py-12">
    <div className="container max-w-5xl">
      <div className="flex flex-col items-center text-center gap-4">
        <img src={logo} alt="Karam Al Bahr" className="w-16 h-16 rounded-full" />
        <p className="font-display text-xl font-bold">Karam Al Bahr</p>
        <p className="text-accent-foreground/60 text-sm font-body">
          © 2025 Karam Al Bahr – مطعم البحر أكلات السمك. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
