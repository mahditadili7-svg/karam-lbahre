import { useState } from "react";

type MenuItem = { name: string; nameAr: string; price: number };
type Category = { id: string; title: string; titleAr: string; items: MenuItem[] };

const menuData: Category[] = [
  {
    id: "poissons", title: "Nos Poissons", titleAr: "سمك",
    items: [
      { name: "Friture Mixte + Assortiment salade marocaine", nameAr: "فريتور ميكس مع تشكيلة سلطات مغربية", price: 85 },
      { name: "Friture calamar + patatas bravas", nameAr: "فريتور كالامار مع بطاطا برافاس", price: 70 },
      { name: "Friture poulpe + patatas bravas", nameAr: "فريتور روطال مع بطاطا برافاس", price: 65 },
      { name: "Plateau poisson et fruits de mer à la plancha", nameAr: "بلاطوا سمك و فواكه البحر على الشواية", price: 110 },
      { name: "Filet de poisson sur vermicelles", nameAr: "فيليه سمك مع شعرية بالكروفيط", price: 90 },
    ],
  },
  {
    id: "plats", title: "Nos Plats", titleAr: "أطباق",
    items: [
      { name: "Crunchy chicken + pâte + frite", nameAr: "دجاج مقرمش + ليباط + فريت", price: 65 },
      { name: "Crispy chicken sur frites et mac cheese", nameAr: "دجاج مقرمش مع فريت و معكرونة بصوص شيدر", price: 65 },
      { name: "Paella espagnole fruits de mer", nameAr: "بايلا إسبانية", price: 70 },
      { name: "Pastilla au fruits de mer", nameAr: "بسطيلة السمك و فواكه البحر", price: 75 },
      { name: "Fish and chips sauce tartare", nameAr: "سمك والفريت مع صوص تارتار", price: 45 },
      { name: "Brochettes poulet légumes + riz", nameAr: "بروشيط دجاج مع خضار و أرز", price: 55 },
      { name: "Brochettes viande haché légumes + riz", nameAr: "بروشيط كفتة مع خضار و أرز", price: 65 },
    ],
  },
  {
    id: "mkilate", title: "Mkilate", titleAr: "مقيلات",
    items: [
      { name: "Mkila crevettes aux oeufs et fromage", nameAr: "مقيلة كروفيط بالبيض و الفرماج", price: 40 },
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
    id: "pizza", title: "Nos Pizza", titleAr: "بيتزا",
    items: [
      { name: "Pizza fruits de mer", nameAr: "بيتزا فواكه البحر", price: 50 },
      { name: "Pizza poulet", nameAr: "بيتزا دجاج", price: 45 },
      { name: "Pizza viande hachée", nameAr: "بيتزا كفتة", price: 50 },
      { name: "Pizza au thon", nameAr: "بيتزا طون", price: 40 },
    ],
  },
  {
    id: "pates", title: "Nos Pâtes", titleAr: "ليباط",
    items: [
      { name: "Tagliatelles fruits de mer", nameAr: "تاجلياتيل فواكه البحر", price: 60 },
      { name: "Lasagnes fruits de mer", nameAr: "لازانيا فواكه البحر", price: 50 },
      { name: "Lasagnes bolognaise", nameAr: "لازانيا بولونيز", price: 45 },
    ],
  },
  {
    id: "gratins", title: "Nos Gratins", titleAr: "كراطان",
    items: [
      { name: "Gratin de crevettes", nameAr: "كراطان كروفيط", price: 55 },
      { name: "Gratin de fruits de mer et poisson", nameAr: "كراطان السمك و فواكه البحر", price: 60 },
      { name: "Gratin de poulet", nameAr: "كراطان الدجاج", price: 50 },
      { name: "Gratin de viande hachée", nameAr: "كراطان كفتة", price: 60 },
    ],
  },
  {
    id: "tacos", title: "Nos Tacos", titleAr: "طاكوس",
    items: [
      { name: "Tacos fruits de mer", nameAr: "طاكوس مأكولات بحرية", price: 45 },
      { name: "Tacos crispy chicken", nameAr: "طاكوس دجاج مقرمش", price: 45 },
      { name: "Tacos poulet", nameAr: "طاكوس دجاج", price: 40 },
      { name: "Tacos viande hachée", nameAr: "طاكوس كفتة", price: 45 },
    ],
  },
  {
    id: "burger", title: "Nos Burger", titleAr: "برجر",
    items: [
      { name: "Chicken burger + frites", nameAr: "برجر دجاج + فريت", price: 45 },
      { name: "Cheeseburger + frites", nameAr: "شيزبرجر + فريت", price: 45 },
      { name: "Crispy chicken burger + frites", nameAr: "برجر دجاج مقرمش + فريت", price: 45 },
      { name: "Fish burger + frites", nameAr: "برجر سمك", price: 45 },
    ],
  },
  {
    id: "sandwichs", title: "Nos Sandwichs", titleAr: "ساندويش",
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
    id: "salades", title: "Nos Salades", titleAr: "سلطات",
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
    id: "soupes", title: "Nos Soupes", titleAr: "شوربات",
    items: [
      { name: "Soupe de poisson", nameAr: "شوربة سمك", price: 25 },
      { name: "Soupe de poisson + Nems", nameAr: "شوربة سمك مع نيم", price: 40 },
      { name: "Soupe Royale", nameAr: "شوربة ملكية", price: 50 },
    ],
  },
  {
    id: "desserts", title: "Nos Desserts", titleAr: "تحلية",
    items: [
      { name: "Panacota mangue", nameAr: "باناكوطا مونغ", price: 25 },
      { name: "Panacota citron", nameAr: "باناكوطا بلحامض", price: 25 },
      { name: "Crème caramel", nameAr: "كريم كراميل", price: 20 },
      { name: "Mehalabia", nameAr: "مهلبية", price: 20 },
    ],
  },
  {
    id: "boissons", title: "Jus et Boissons", titleAr: "عصائر ومشروبات",
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

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("poissons");

  const activeData = menuData.find((c) => c.id === activeCategory)!;

  return (
    <section id="menu" className="py-20 bg-accent text-accent-foreground">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-secondary font-body text-sm uppercase tracking-[0.3em] mb-2">Notre Carte</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Le Menu</h2>
          <p className="font-display text-2xl mt-2 text-secondary">القائمة</p>
        </div>

        {/* Category tabs - scrollable */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide justify-start md:justify-center">
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-body font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-secondary text-secondary-foreground shadow-lg"
                  : "bg-accent-foreground/10 text-accent-foreground/70 hover:bg-accent-foreground/20"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category header */}
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl font-semibold">{activeData.title}</h3>
          <p className="font-display text-xl text-secondary">{activeData.titleAr}</p>
        </div>

        {/* Menu items */}
        <div className="grid gap-3 max-w-3xl mx-auto">
          {activeData.items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-4 p-4 rounded-xl bg-accent-foreground/5 hover:bg-accent-foreground/10 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="font-body font-bold text-accent-foreground truncate">{item.name}</p>
                <p className="text-accent-foreground/60 text-sm font-body" dir="rtl">{item.nameAr}</p>
              </div>
              <span className="text-secondary font-display font-bold text-lg whitespace-nowrap">
                {item.price}<span className="text-xs ml-0.5">DH</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
