const menuSections = [
  {
    title: "Appetizers",
    items: [
      {
        name: "Crispy Calamares",
        price: 150,
        image: "/img/Crispy Calamares.jpg",
        description:
          "Fresh squid rings coated in seasoned breading and fried until golden and crispy, served with a delicious dipping sauce.",
      },
      {
        name: "Shrimp Tempura",
        price: 180,
        image: "/img/Shrimp Tempura.jpg",
        description:
          "Fresh shrimp coated in light, crispy batter and fried to perfection, served with a savory dipping sauce.",
      },
      {
        name: "Seafood Lumpia",
        price: 120,
        image: "/img/Seafood Lumpia.jpg",
        description:
          "Crispy spring rolls filled with a flavorful mixture of seafood and vegetables, perfect as a starter.",
      },
    ],
  },
  {
    title: "Main Courses",
    items: [
      {
        name: "Grilled Bangus",
        price: 220,
        image: "/img/Grilled Bangus.jpg",
        description:
          "Fresh milkfish grilled to perfection and served with rice, fresh tomatoes, and a traditional Filipino dipping sauce.",
      },
      {
        name: "Garlic Butter Shrimp",
        price: 280,
        image: "/img/Garlic Butter Shrimp.jpg",
        description:
          "Juicy shrimp cooked in rich garlic butter sauce, offering a delicious combination of savory and buttery flavors.",
      },
      {
        name: "Chili Crab",
        price: 350,
        image: "/img/Chili Crab.jpg",
        description:
          "Fresh crab cooked in a flavorful chili sauce with garlic and spices, perfect for seafood lovers.",
      },
      {
        name: "Seafood Boil",
        price: 450,
        image: "/img/Seafood Boil.jpg",
        description:
          "A delicious seafood platter featuring shrimp, crab, mussels, corn, and potatoes tossed in a flavorful seafood sauce.",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Halo-Halo",
        price: 100,
        image: "/img/Halo-Halo.jpg",
        description:
          "A refreshing Filipino dessert made with shaved ice, sweetened beans, jellies, milk, and a scoop of ice cream.",
      },
      {
        name: "Leche Flan",
        price: 90,
        image: "/img/Leche Flan.jpg",
        description:
          "A smooth and creamy Filipino custard dessert topped with sweet caramel sauce.",
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Fresh Calamansi Juice",
        price: 50,
        image: "/img/Fresh Calamansi Juice.jpg",
        description:
          "A refreshing citrus drink made with calamansi juice, perfect for pairing with your favorite seafood dishes.",
      },
      {
        name: "Iced Tea",                   
        price: 45,
        image: "/img/Iced Tea.jpg",
        description:
          "A cold and refreshing iced tea that complements our delicious seafood meals.",
      },
    ],
  },
];

function Menu() {
  return (
    <section className="py-12">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center text-blue-900">
          Our Seafood Menu
        </h1>

        {menuSections.map((section) => (
          <div key={section.title} className="mb-10">
            <h2 className="pb-2 mb-5 text-2xl font-bold text-blue-900 border-b-2 border-blue-900">
              {section.title}
            </h2>

            <ul className="space-y-4 list-none">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col p-4 bg-white rounded-lg shadow-md md:flex-row"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-[100px] h-[200px] md:h-[100px] object-cover rounded-md md:mb-0 md:mr-4 flex-shrink-0"
                  />

                  <div className="flex-1 w-full">
                    <div className="flex items-center justify-between py-2">
                      <span className="font-bold">{item.name}</span>

                      <span className="font-semibold text-blue-900 whitespace-nowrap">
                        PHP {item.price}
                      </span>
                    </div>

                    <p className="mt-2 text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;