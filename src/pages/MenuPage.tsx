import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

import dish1 from "@/assets/menu/dish-1.jpg";
import dish2 from "@/assets/menu/dish-2.jpg";
import dish3 from "@/assets/menu/dish-3.jpg";
import dish4 from "@/assets/menu/dish-4.jpg";
import dish5 from "@/assets/menu/dish-5.jpg";
import dish6 from "@/assets/menu/dish-6.jpg";
import dish7 from "@/assets/menu/dish-7.jpg";
import dish8 from "@/assets/menu/dish-8.jpg";

type MenuItem = { name: string; nameAr: string; price: number; image?: string };
type Category = { id: string; title: string; titleAr: string; image: string; items: MenuItem[] };

const menuData: Category[] = [
  {
    id: "poissons", title: "Nos Poissons", titleAr: "سمك", image: dish1,
    items: [
      { name: "Friture Mixte + Assortiment salade marocaine", nameAr: "فريتور ميكس مع تشكيلة سلطات مغربية", price: 85, image: dish1 },
      { name: "Friture calamar + patatas bravas", nameAr: "فريتور كالامار مع بطاطا برافاس", price: 70 },
      { name: "Friture poulpe + patatas bravas", nameAr: "فريتور روطال مع بطاطا برافاس", price: 65 },
      { name: "Plateau poisson et fruits de mer à la plancha", nameAr: "بلاطوا سمك و فواكه البحر على الشواية", price: 110, image: dish2 },
      { name: "Filet de poisson sur vermicelles", nameAr: "فيليه سمك مع شعرية بالكروفيط", price: 90 },
    ],
  },
  {
    id: "plats", title: "Nos Plats", titleAr: "أطباق", image: dish3,
    items: [
      { name: "Crunchy chicken + pâte + frite", nameAr: "دجاج مقرمش + ليباط + فريت", price: 65, image: dish3 },
      { name: "Crispy chicken sur frites et mac cheese", nameAr: "دجاج مقرمش مع فريت و معكرونة بصوص شيدر", price: 65 },
      { name: "Paella espagnole fruits de mer", nameAr: "بايلا إسبانية", price: 70, image: dish4 },
      { name: "Pastilla au fruits de mer", nameAr: "بسطيلة السمك و فواكه البحر", price: 75 },
      { name: "Fish and chips sauce tartare", nameAr: "سمك والفريت مع صوص تارتار", price: 45 },
      { name: "Brochettes poulet légumes + riz", nameAr: "بروشيط دجاج مع خضار و أرز", price: 55 },
      { name: "Brochettes viande haché légumes + riz", nameAr: "بروشيط كفتة مع خضار و أرز", price: 65 },
    ],
  },
  {
    id: "mkilate", title: "Mkilate", titleAr: "مقيلات", image: dish5,
    items: [
      { name: "Mkila crevettes aux oeufs et fromage", nameAr: "مقيلة كروفيط بالبيض و الفرماج", price: 40, image: dish5 },
      { name: "Mkila calamar aux oeufs et fromage", nameAr: "مقيلة كالامار بالبيض و الفرماج", price: 40 },
      { name: "Mkila de moules aux oeufs et fromage", nameAr: "مقيلة بوزروك بالبيض و الفرماج", price: 40 },
      { name: "Mkila de poulpe aux oeufs et fromage", nameAr: "مقيلة روطال بالبيض و الفرماج", price: 40 },
      { name: "Mkila fruits de mer mixte", nameAr: "مقيلة فواكه البحر ميكس بالبيض و الفرماج", price: 55 },
      { name: "Crevettes PIL PIL", nameAr: "كروفيط بيل بيل", price: 55 },
      { name: "Moules PIL PIL", nameAr: "بوزروك بيل بيل", price: 55 },
      { name: "Poulpe PIL PIL", nameAr: "روطال بيل بيل", price: 50 },
      { name: "Mixte PIL PIL", nameAr: "ميكس بيل بيل", price: 60 },
    ],
  },
  {
    id: "pizza", title: "Nos Pizza", titleAr: "بيتزا", image: dish6,
    items: [
      { name: "Pizza fruits de mer", nameAr: "بيتزا فواكه البحر", price: 50, image: dish6 },
      { name: "Pizza poulet", nameAr: "بيتزا دجاج", price: 45 },
      { name: "Pizza viande hachée", nameAr: "بيتزا كفتة", price: 50 },
      { name: "Pizza au thon", nameAr: "بيتزا طون", price: 40 },
    ],
  },
  {
    id: "pates", title: "Nos Pâtes", titleAr: "ليباط", image: dish7,
    items: [
      { name: "Tagliatelles fruits de mer", nameAr: "تاجلياتيل فواكه البحر", price: 60, image: dish7 },
      { name: "Lasagnes fruits de mer", nameAr: "لازانيا فواكه البحر", price: 50 },
      { name: "Lasagnes bolognaise", nameAr: "لازانيا بولونيز", price: 45 },
    ],
  },
  {
    id: "gratins", title: "Nos Gratins", titleAr: "كراطان", image: dish8,
    items: [
      { name: "Gratin de crevettes", nameAr: "كراطان كروفيط", price: 55, image: dish8 },
      { name: "Gratin de fruits de mer et poisson", nameAr: "كراطان السمك و فواكه البحر", price: 60 },
      { name: "Gratin de poulet", nameAr: "كراطان الدجاج", price: 50 },
      { name: "Gratin de viande hachée", nameAr: "كراطان كفتة", price: 60 },
    ],
  },
  {
    id: "tacos", title: "Nos Tacos", titleAr: "طاكوس", image: dish3,
    items: [
      { name: "Tacos fruits de mer", nameAr: "طاكوس مأكولات بحرية", price: 45 },
      { name: "Tacos crispy chicken", nameAr: "طاكوس دجاج مقرمش", price: 45 },
      { name: "Tacos poulet", nameAr: "طاكوس دجاج", price: 40 },
      { name: "Tacos viande hachée", nameAr: "طاكوس كفتة", price: 45 },
    ],
  },
  {
    id: "burger", title: "Nos Burger", titleAr: "برجر", image: dish4,
    items: [
      { name: "Chicken burger + frites", nameAr: "برجر دجاج + فريت", price: 45 },
      { name: "Cheeseburger + frites", nameAr: "شيزبرجر + فريت", price: 45 },
      { name: "Crispy chicken burger + frites", nameAr: "برجر دجاج مقرمش + فريت", price: 45 },
      { name: "Fish burger + frites", nameAr: "برجر سمك", price: 45 },
    ],
  },
  {
    id: "sandwichs", title: "Nos Sandwichs", titleAr: "ساندويش", image: dish2,
    items: [
      { name: "Sandwich crevettes", nameAr: "ساندويش كروفيت", price: 40 },
      { name: "Sandwich calamars", nameAr: "ساندويش كلمار", price: 40 },
      { name: "Sandwich viande hachée", nameAr: "ساندويش كفتة", price: 35 },
      { name: "Sandwich fruits de mer", nameAr: "ساندويش فواكه البحر ميكس", price: 45 },
      { name: "Sandwich poulet", nameAr: "ساندويش دجاج", price: 30 },
      { name: "Sandwich Crunchy chicken", nameAr: "ساندويش دجاج مقرمش", price: 35 },
    ],
  },
  {
    id: "salades", title: "Nos Salades", titleAr: "سلطات", image: dish5,
    items: [
      { name: "Variété de salades marocaines", nameAr: "تشكيلة سلطات مغربية", price: 30 },
      { name: "Salade russe", nameAr: "سلطة روسية", price: 30 },
      { name: "Salade russe au saumon", nameAr: "سلطة روسية بالسلمون", price: 45 },
      { name: "Salade russe aux crevettes", nameAr: "سلطة روسية بالكروفيط", price: 45 },
      { name: "Salade fruits de mer", nameAr: "سلطة فواكه البحر", price: 55 },
      { name: "Salade Karam Al Bahr", nameAr: "سلطة كرم البحر", price: 60 },
    ],
  },
  {
    id: "soupes", title: "Nos Soupes", titleAr: "شوربات", image: dish1,
    items: [
      { name: "Soupe de poisson", nameAr: "شوربة سمك", price: 25 },
      { name: "Soupe de poisson + Nems", nameAr: "شوربة سمك مع نيم", price: 40 },
      { name: "Soupe Royale", nameAr: "شوربة ملكية", price: 50 },
    ],
  },
  {
    id: "desserts", title: "Nos Desserts", titleAr: "تحلية", image: dish6,
    items: [
      { name: "Panacota mangue", nameAr: "باناكوطا مونغ", price: 25 },
      { name: "Panacota citron", nameAr: "باناكوطا بلحامض", price: 25 },
      { name: "Crème caramel", nameAr: "كريم كراميل", price: 20 },
      { name: "Mehalabia", nameAr: "مهلبية", price: 20 },
    ],
  },
  {
    id: "boissons", title: "Jus et Boissons", titleAr: "عصائر ومشروبات", image: dish7,
    items: [
      { name: "Jus de carotte à l'orange", nameAr: "عصير جزر بالبرتقال", price: 18 },
      { name: "Jus concombre au citron", nameAr: "عصير خيار بالحامض", price: 18 },
      { name: "Jus de citron à la menthe", nameAr: "عصير الحامض بالنعناع", price: 17 },
      { name: "Jus tropical", nameAr: "عصير تروبيكال", price: 20 },
      { name: "Mojito à la mangue", nameAr: "موخيتو بالمانجو", price: 18 },
      { name: "Eau minérale 50cl", nameAr: "مياه معدنية", price: 8 },
      { name: "Soda", nameAr: "صودا", price: 8 },
    ],
  },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 bg-accent/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container max-w-6xl flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3 text-accent-foreground hover:text-secondary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <img src={logo} alt="Karam Al Bahr" className="w-10 h-10 rounded-full" />
            <span className="font-display font-bold text-lg hidden sm:inline">Karam Al Bahr</span>
          </Link>
          <a
            href="tel:0606812019"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold hover:brightness-110 transition"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Commander</span>
          </a>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-accent text-accent-foreground py-12 text-center">
        <p className="text-secondary font-body text-sm uppercase tracking-[0.3em] mb-2">Notre Carte Complète</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold">Le Menu</h1>
        <p className="font-display text-2xl mt-2 text-secondary">القائمة</p>
      </div>

      {/* Category tabs - sticky */}
      <div className="sticky top-[60px] z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container max-w-6xl">
          <div className="flex overflow-x-auto gap-2 py-3 scrollbar-hide">
            {menuData.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-body font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-secondary text-secondary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu categories */}
      <div className="container max-w-6xl py-10 space-y-16">
        {menuData.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-32">
            {/* Category header with image */}
            <div className="relative rounded-2xl overflow-hidden mb-8 h-48 md:h-64">
              <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground">{cat.title}</h2>
                <p className="font-display text-xl text-secondary" dir="rtl">{cat.titleAr}</p>
              </div>
            </div>

            {/* Items grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-md transition-shadow group"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                    />
                  )}
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <p className="font-body font-bold text-card-foreground leading-tight">{item.name}</p>
                    <p className="text-muted-foreground text-sm font-body mt-1" dir="rtl">{item.nameAr}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-secondary font-display font-bold text-lg whitespace-nowrap">
                      {item.price}<span className="text-xs ml-0.5">DH</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="bg-accent text-accent-foreground text-center py-12">
        <p className="font-display text-2xl font-bold mb-4">Envie de commander ?</p>
        <a
          href="tel:0606812019"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-full text-lg font-bold hover:brightness-110 transition shadow-lg"
        >
          <Phone className="w-5 h-5" />
          06 06 81 20 19
        </a>
      </div>
    </main>
  );
};

export default MenuPage;
