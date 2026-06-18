"use client";

import { useState } from "react";

const MENU_DATA = [
  {
    number: "01",
    name: "Starters & Kebabish",
    items: [
      {
        id: "menu-item-1-1",
        title: "Flame Grilled Lamb Chops",
        price: "£7.95",
        description: "Tender chops marinated in our signature spices, flame-grilled to perfection. A customer favorite.",
        badges: ["Popular", "Gluten Free"]
      },
      {
        id: "menu-item-1-2",
        title: "Seekh Kebab Platter",
        price: "£6.45",
        description: "Spiced minced lamb blended with coriander, green chilies, and onions, grilled over open coals.",
        badges: []
      },
      {
        id: "menu-item-1-3",
        title: "Chickaros Hot Wings",
        price: "£5.95",
        description: "Crispy chicken wings tossed in our sweet and fiery house glaze, served with a cool garlic dip.",
        badges: ["Popular"]
      },
      {
        id: "menu-item-1-4",
        title: "Paneer Tikka Skewers",
        price: "£5.45",
        description: "Marinated cubes of paneer cheese grilled with bell peppers and onions, finished with mint chutney.",
        badges: ["Vegetarian"]
      }
    ]
  },
  {
    number: "02",
    name: "Burgers & Mains",
    items: [
      {
        id: "menu-item-2-1",
        title: "The Chickaros Signature Burger",
        price: "£11.95",
        description: "Double beef patty, melted cheddar, crispy turkey bacon, caramelized onions, and our secret house burger sauce.",
        badges: ["Popular"]
      },
      {
        id: "menu-item-2-2",
        title: "Buttermilk Fried Chicken Burger",
        price: "£10.45",
        description: "Crispy golden buttermilk chicken breast, spicy slaw, pickles, and dynamic hot mayo in a brioche bun.",
        badges: []
      },
      {
        id: "menu-item-2-3",
        title: "Lamb Doner Sizzler",
        price: "£12.95",
        description: "Stir-fried spiced lamb doner strips with onions and peppers, served sizzler-style with classic naan.",
        badges: ["Chef Special"]
      },
      {
        id: "menu-item-2-4",
        title: "Halal Club Sandwich",
        price: "£9.45",
        description: "Layers of grilled chicken, egg, tomato, cheddar cheese, turkey bacon, and light mayo on toasted sourdough.",
        badges: []
      }
    ]
  },
  {
    number: "03",
    name: "Steaks & Chicken",
    items: [
      {
        id: "menu-item-3-1",
        title: "Flame-Grilled Chicken Breast Platter",
        price: "£13.95",
        description: "Perfectly cooked chicken breast – soft, juicy, and full of flavor. Served with roasted vegetables and choice of steak cut fries or spicy rice.",
        badges: ["Popular", "Healthy Choice"]
      },
      {
        id: "menu-item-3-2",
        title: "Prime Black Angus Sirloin",
        price: "£18.95",
        description: "250g sirloin steak aged for 28 days, cooked to your preference, served with mushroom sauce or peppercorn gravy.",
        badges: ["Premium"]
      },
      {
        id: "menu-item-3-3",
        title: "Chickaros Mixed Grill Platter",
        price: "£21.95",
        description: "The ultimate feast: grilled lamb chop, seekh kebab, hot wings, and half grilled chicken. Perfect for sharing.",
        badges: ["Huge Portion"]
      }
    ]
  },
  {
    number: "04",
    name: "Refreshing Mocktails",
    items: [
      {
        id: "menu-item-4-1",
        title: "Strawberry Mint Daiquiri",
        price: "£4.95",
        description: "Vibrant blend of fresh strawberries, crushed lime, and fresh mint, served chilled in our signature tall glass.",
        badges: ["Best Seller"]
      },
      {
        id: "menu-item-4-2",
        title: "Passionfruit & Citrus Fizz",
        price: "£4.95",
        description: "Sparkling passionfruit nectar with a splash of fresh orange, key lime juice, and a sweet sugar-rimmed garnish.",
        badges: ["Refreshing"]
      },
      {
        id: "menu-item-4-3",
        title: "Classic Blue Lagoon Mocktail",
        price: "£4.45",
        description: "A cool blue lemonade mix with curaçao flavor, lemon slice, and dynamic ice crystals.",
        badges: []
      }
    ]
  },
  {
    number: "05",
    name: "Desserts & Shakes",
    items: [
      {
        id: "menu-item-5-1",
        title: "Hollywood Freakshake",
        price: "£6.95",
        description: "An indulgent cookies-and-cream milkshake topped with a chocolate brownie, whipped cream, and rainbow sprinkles.",
        badges: ["Popular"]
      },
      {
        id: "menu-item-5-2",
        title: "Warm Fudge Brownie & Gelato",
        price: "£5.95",
        description: "Fudgy double chocolate brownie served warm with a scoop of premium Madagascan vanilla gelato.",
        badges: []
      },
      {
        id: "menu-item-5-3",
        title: "Strawberry Dream Waffle",
        price: "£6.45",
        description: "Freshly baked Belgian waffle topped with sliced fresh strawberries, milk chocolate drizzle, and vanilla ice cream.",
        badges: []
      }
    ]
  }
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  const toggleCategory = (index) => {
    if (activeCategory === index) {
      // Keep at least one open or toggle
      setActiveCategory(index);
    } else {
      setActiveCategory(index);
    }
  };

  return (
    <section id="menu" className="menu-section">
      <div className="section-header-editorial">
        <h2 className="editorial-section-title" id="menu-heading">
          Explore <span>Our Menu</span>
        </h2>
        <p className="editorial-meta-text">
          Comforting dishes prepared with the finest ingredients, exactly what you need when you're in the mood for something dependable.
        </p>
      </div>

      <div className="menu-category-list" role="tablist" aria-label="Restaurant Menu Categories">
        {MENU_DATA.map((category, index) => {
          const isActive = activeCategory === index;
          return (
            <div
              key={category.number}
              className={`menu-category-row ${isActive ? "active" : ""}`}
              onClick={() => toggleCategory(index)}
              id={`category-wrapper-${category.number}`}
            >
              <div
                className="menu-category-header"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${category.number}`}
                id={`tab-${category.number}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCategory(index);
                  }
                }}
              >
                <div className="category-left">
                  <span className="category-number">{category.number}</span>
                  <h3 className="category-name">{category.name}</h3>
                </div>
                <div className="category-arrow-btn" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>

              <div
                id={`panel-${category.number}`}
                className="menu-category-content"
                role="tabpanel"
                aria-labelledby={`tab-${category.number}`}
                style={{
                  maxHeight: isActive ? `${category.items.length * 160 + 100}px` : "0",
                }}
              >
                <div className="menu-items-grid">
                  {category.items.map((item) => (
                    <div key={item.id} className="menu-item-card" id={item.id}>
                      <div className="menu-item-title-row">
                        <h4 className="menu-item-title">{item.title}</h4>
                        <span className="menu-item-price">{item.price}</span>
                      </div>
                      <p className="menu-item-desc">{item.description}</p>
                      {item.badges.length > 0 && (
                        <div className="menu-item-badges">
                          {item.badges.map((badge, bIdx) => (
                            <span
                              key={bIdx}
                              className={`menu-item-badge ${badge.toLowerCase() === "popular" ? "popular" : ""}`}
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
