import menuLamb from "@/assets/menu-lamb.jpg";
import menuChicken from "@/assets/menu-chicken.jpg";
import menuKefta from "@/assets/menu-kefta.jpg";
import menuMixed from "@/assets/menu-mixed.jpg";

const menuCategories = [
  {
    name: "Grillades",
    items: [
      { name: "Côtelettes d'Agneau", nameAr: "ريش الغنم", price: "120 MAD", image: menuLamb, desc: "Côtelettes grillées aux herbes fraîches" },
      { name: "Brochettes de Poulet", nameAr: "شيش طاووق", price: "90 MAD", image: menuChicken, desc: "Brochettes marinées aux épices marocaines" },
      { name: "Kefta", nameAr: "كفتة مشوية", price: "80 MAD", image: menuKefta, desc: "Viande hachée épicée sur charbon de bois" },
      { name: "Plateau Mixte", nameAr: "مشاوي مشكلة", price: "200 MAD", image: menuMixed, desc: "Assortiment de nos meilleures grillades" },
    ],
  },
  {
    name: "Entrées",
    items: [
      { name: "Salade Marocaine", nameAr: "سلطة مغربية", price: "30 MAD" },
      { name: "Zaalouk", nameAr: "زعلوك", price: "25 MAD" },
      { name: "Harira", nameAr: "حريرة", price: "20 MAD" },
      { name: "Briouates", nameAr: "بريوات", price: "35 MAD" },
    ],
  },
  {
    name: "Accompagnements",
    items: [
      { name: "Frites Maison", nameAr: "بطاطس مقلية", price: "20 MAD" },
      { name: "Riz Parfumé", nameAr: "أرز معطر", price: "15 MAD" },
      { name: "Pain Marocain", nameAr: "خبز مغربي", price: "5 MAD" },
      { name: "Légumes Grillés", nameAr: "خضر مشوية", price: "25 MAD" },
    ],
  },
  {
    name: "Boissons",
    items: [
      { name: "Thé à la Menthe", nameAr: "أتاي بالنعناع", price: "15 MAD" },
      { name: "Jus d'Orange Frais", nameAr: "عصير برتقال طبيعي", price: "20 MAD" },
      { name: "Eau Minérale", nameAr: "ماء معدني", price: "10 MAD" },
      { name: "Soda", nameAr: "مشروب غازي", price: "15 MAD" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Pastilla au Lait", nameAr: "بسطيلة بالحليب", price: "30 MAD" },
      { name: "Cornes de Gazelle", nameAr: "كعب الغزال", price: "25 MAD" },
      { name: "Fruits de Saison", nameAr: "فواكه الموسم", price: "20 MAD" },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">Notre Carte</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Le Menu</h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Des grillades préparées avec passion sur charbon de bois. Prix moyen : 90–200 MAD par personne.
          </p>
        </div>

        {/* Featured Grills with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {menuCategories[0].items.map((item, index) => (
            <div
              key={item.name}
              className="menu-card opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {item.image && (
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-display text-base font-semibold text-foreground">{item.name}</h4>
                  <span className="text-primary font-semibold text-sm whitespace-nowrap ml-2">{item.price}</span>
                </div>
                <p className="text-xs text-muted-foreground font-body mb-1">{item.nameAr}</p>
                {item.desc && <p className="text-xs text-muted-foreground/70">{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Other Menu Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {menuCategories.slice(1).map((category) => (
            <div key={category.name}>
              <h3 className="font-display text-2xl font-bold text-primary mb-6 border-b border-border pb-3">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center group">
                    <div>
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                      <span className="text-muted-foreground text-sm ml-2">{item.nameAr}</span>
                    </div>
                    <div className="flex-1 border-b border-dotted border-border mx-4" />
                    <span className="text-primary font-semibold text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
