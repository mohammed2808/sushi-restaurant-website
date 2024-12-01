


import { useState } from "react";
import Panier from "./Panier";

function Menuecontain() {
  const food = [
    {
      title: "Maki",
      items: [
        {
          name: "California Roll",
          description: "Crab, avocado, cucumber",
          price: 8.99, // updated to real number
          picture: "src/maki/maki1.jpg"
        },
        {
          name: "Spicy Tuna Roll",
          description: "Tuna, spicy mayo, cucumber",
          price: 9.99, // updated to real number
          picture: "src/maki/maki2.jpg"
        },
        {
          name: "Dragon Roll",
          description: "Eel, avocado, cucumber, topped with avocado slices",
          price: 12.99, // updated to real number
          picture: "src/maki/maki3.jpg"
        },
        {
          name: "Rainbow Roll",
          description: "Assorted fish, avocado, cucumber",
          price: 13.99, // updated to real number
          picture: "src/maki/maki4.jpg"
        },
        {
          name: "Philadelphia Roll",
          description: "Salmon, cream cheese, cucumber",
          price: 10.99, // updated to real number
          picture: "src/maki/maki5.jpg"
        },
        {
          name: "Vegetable Roll",
          description: "Avocado, cucumber, carrots",
          price: 7.99, // updated to real number
          picture: "src/maki/maki6.jpg"
        },
        {
          name: "Shrimp Tempura Roll",
          description: "Shrimp, avocado, cucumber",
          price: 11.99, // updated to real number
          picture: "src/maki/maki7.jpg"
        },
        {
          name: "Spider Roll",
          description: "Soft-shell crab, avocado, cucumber, spicy mayo",
          price: 14.99, // updated to real number
          picture: "src/maki/maki8.jpg"
        }
      ]
      
    },
    {
      title: "Nigiri",
items: [
  {
    name: "Salmon Nigiri",
    description: "Fresh salmon over sushi rice",
    price: 5.99,  // updated to real number
    picture: "src/nigiri/nigi1.jpg"  // Changed to nigiri1.jpg
  },
  {
    name: "Tuna Nigiri",
    description: "Fresh tuna over sushi rice",
    price: 6.99,  // updated to real number
    picture: "src/nigiri/nigiri2.jpg"  // Changed to nigiri2.jpg
  },
  {
    name: "Eel Nigiri",
    description: "Grilled eel over sushi rice",
    price: 7.99,  // updated to real number
    picture: "src/nigiri/nigiri3.jpg"  // Changed to nigiri3.jpg
  },
  {
    name: "Shrimp Nigiri",
    description: "Cooked shrimp over sushi rice",
    price: 5.99,  // updated to real number
    picture: "src/nigiri/nigiri4.jpg"  // Changed to nigiri4.jpg
  },
  {
    name: "Octopus Nigiri",
    description: "Sliced octopus over sushi rice",
    price: 6.99,  // updated to real number
    picture: "src/nigiri/nigiri5.jpg"  // Changed to nigiri5.jpg
  },
  {
    name: "Scallop Nigiri",
    description: "Fresh scallop over sushi rice",
    price: 7.49,  // updated to real number
    picture: "src/nigiri/nigiri6.jpg"  // Changed to nigiri6.jpg
  },
  {
    name: "Yellowtail Nigiri",
    description: "Yellowtail fish over sushi rice",
    price: 6.99,  // updated to real number
    picture: "src/nigiri/nigiri7.jpg"  // Changed to nigiri7.jpg
  },
  {
    name: "Crab Nigiri",
    description: "Imitation crab over sushi rice",
    price: 4.99,  // updated to real number
    picture: "src/nigiri/nigiri8.jpg"  // Changed to nigiri8.jpg
  }
]

    },
    {
      title: "Traditional Nigiri",
      items: [
        {
          name: "Unagi Nigiri",
          description: "Grilled eel, eel sauce",
          price: 7.99, // updated to real number
          picture: "src/traditional/tr1.jpg" // Updated to tr1.jpg
        },
        {
          name: "Ikura Nigiri",
          description: "Salmon roe over sushi rice",
          price: 8.99, // updated to real number
          picture: "src/traditional/tr2.jpg" // Updated to tr2.jpg
        },
        {
          name: "Tamago Nigiri",
          description: "Sweet egg omelet over sushi rice",
          price: 4.99, // updated to real number
          picture: "src/traditional/tr3.jpg" // Updated to tr3.jpg
        },
        {
          name: "Maguro Nigiri",
          description: "Fresh tuna over sushi rice",
          price: 6.99, // updated to real number
          picture: "src/traditional/tr4.jpg" // Updated to tr4.jpg
        },
        {
          name: "Hamachi Nigiri",
          description: "Yellowtail fish over sushi rice",
          price: 7.49, // updated to real number
          picture: "src/traditional/tr5.jpg" // Updated to tr5.jpg
        },
        {
          name: "Hotate Nigiri",
          description: "Scallop over sushi rice",
          price: 7.49, // updated to real number
          picture: "src/traditional/tr6.jpg" // Updated to tr6.jpg
        },
        {
          name: "Amaebi Nigiri",
          description: "Sweet shrimp over sushi rice",
          price: 9.99, // updated to real number
          picture: "src/traditional/tr7.jpg" // Updated to tr7.jpg
        },
        {
          name: "Kani Nigiri",
          description: "Crab over sushi rice",
          price: 6.99, // updated to real number
          picture: "src/traditional/tr8.jpg" // Updated to tr8.jpg
        }
      ]
      
    },
    {
      title: "Temaki",
items: [
  {
    name: "California Temaki",
    description: "Crab, avocado, cucumber",
    price: 8.99, // updated to real number
    picture: "src/temaki/temaki1.jpg" // Updated to temaki1.jpg
  },
  {
    name: "Spicy Tuna Temaki",
    description: "Tuna, spicy mayo, cucumber",
    price: 9.99, // updated to real number
    picture: "src/temaki/temaki2.jpg" // Updated to temaki2.jpg
  },
  {
    name: "Dragon Temaki",
    description: "Eel, avocado, cucumber, eel sauce",
    price: 11.99, // updated to real number
    picture: "src/temaki/temaki3.jpg" // Updated to temaki3.jpg
  },
  {
    name: "Rainbow Temaki",
    description: "Assorted fish, avocado, cucumber",
    price: 12.99, // updated to real number
    picture: "src/temaki/temaki4.jpg" // Updated to temaki4.jpg
  },
  {
    name: "Philadelphia Temaki",
    description: "Salmon, cream cheese, cucumber",
    price: 10.99, // updated to real number
    picture: "src/temaki/temaki5.jpg" // Updated to temaki5.jpg
  },
  {
    name: "Vegetable Temaki",
    description: "Avocado, cucumber, carrots",
    price: 7.99, // updated to real number
    picture: "src/temaki/temaki6.jpg" // Updated to temaki6.jpg
  },
  {
    name: "Shrimp Tempura Temaki",
    description: "Shrimp, avocado, cucumber",
    price: 11.99, // updated to real number
    picture: "src/temaki/temaki7.jpg" // Updated to temaki7.jpg
  },
  {
    name: "Spider Temaki",
    description: "Soft-shell crab, avocado, cucumber, spicy mayo",
    price: 14.99, // updated to real number
    picture: "src/temaki/temaki8.jpg" // Updated to temaki8.jpg
  }
]


    }
    ,
    {
      title: "Apetit",
      items: [
        {
          name: "Edamame", // Updated name
          description: "Steamed soybeans with sea salt",
          price: 4.99,
          picture: "src/apetit/apt1.jpg" // Updated to apt1.jpg
        },
        {
          name: "Miso Soup", // Updated name
          description: "Traditional Japanese soup with tofu and seaweed",
          price: 3.99,
          picture: "src/apetit/apt2.jpg" // Updated to apt2.jpg
        },
        {
          name: "Seaweed Salad", // Updated name
          description: "Fresh seaweed with sesame dressing",
          price: 5.99,
          picture: "src/apetit/apt3.jpg" // Updated to apt3.jpg
        }
      ]
    },
    {
      title: "Drinks",
      items: [
        {
          name: "Green Tea", // Updated name
          description: "A soothing, warm tea made from steamed green tea leaves.",
          price: 4.99,
          picture: "src/drinks/dr1.jpg" // Updated to dr1.jpg
        },
        {
          name: "Soda", // Updated name
          description: "Refreshing carbonated beverages in a variety of flavors.",
          price: 3.99,
          picture: "src/drinks/dr2.jpg" // Updated to dr2.jpg
        },
        {
          name: "Sake", // Updated name
          description: "Traditional Japanese rice wine, served warm or chilled.",
          price: 5.99,
          picture: "src/drinks/dr3.jpg" // Updated to dr3.jpg
        }
      ]
      
    },
    {
      title: "Specialty Dishes",
      items: [
        {
          name: "Sushi Platter Deluxe",
          description: "An assortment of 15 premium sushi pieces",
          price: 29.99,
          picture: "src/special/sp1.jpg" // Image for Sushi Platter Deluxe
        },
        {
          name: "Sashimi Boat",
          description: "A selection of fresh sashimi served on a decorative boat",
          price: 34.99,
          picture: "src/special/sp2.jpg" // Image for Sashimi Boat
        },
        {
          name: "Volcano Roll",
          description: "A fiery roll with spicy tuna, avocado, and a crunchy tempura topping",
          price: 14.99,
          picture: "src/special/sp3.jpg" // Image for Volcano Roll
        },
        {
          name: "Chef's Special Nigiri",
          description: "Daily selection of seasonal nigiri by our chef",
          price: 24.99,
          picture: "src/special/sp4.jpg" // Image for Chef's Special Nigiri
        }
      ]
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Mochi Ice Cream",
          description: "Assorted flavors",
          price: 4.99,
          picture: "src/desserts/d1.jpg" // Image for Mochi Ice Cream
        },
        {
          name: "Green Tea Cheesecake",
          description: "Creamy and rich green tea-flavored cheesecake",
          price: 5.99,
          picture: "src/desserts/d2.jpg" // Image for Green Tea Cheesecake
        },
        {
          name: "Yuzu Sorbet",
          description: "Refreshing citrus dessert",
          price: 4.99,
          picture: "src/desserts/d3.jpg" // Image for Yuzu Sorbet
        }
      ]
    }
  ];

 
  const [product, setProduct] = useState({
    name: "",
    price: "",
    picture: ""
  });

  const handleOrderNow = (name, price, picture) => {
    setProduct({ name, price, picture });
  };


  return (
    <>
    <Panier name={product.name} prix={product.price} picture={product.picture} />
      <div className="menu-page text-white p-20 bg-black flex justify-center">
        <div className="backmenue w-4/5 flex flex-col   font-title ">
          <div className="menu-header text-center mb-12">
            <h1 className="text-6xl font-title">Sushi Al Bahri Menu</h1>
            <p className="text-2xl italic mt-4">Explore the ocean's finest, crafted just for you.</p>
          </div>

          {/* Main Sushi Categories */}
          <div className="flex  gap-16 px-16">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-10 w-full">
  {food.slice(0, 8).map((category, index) => (
    <div key={index} className="menu-section col-span-1">
      <h2 className="text-4xl font-title border-b-2  border-red-500 inline-block mb-4">{category.title}</h2>
      <ul className="text-xl space-y-2">
        {category.items.map((item, itemIndex) => (
          <>
          <li key={itemIndex} className="flex items-center space-x-4">
            <img src={item.picture} alt={item.name} className="w-16 h-16 object-cover hover:scale-110" />
            <span>
              <strong>{item.name}</strong> - {item.description} | ${item.price.toFixed(2)}
            </span>
            <svg
                          onClick={() => handleOrderNow(item.name, item.price, item.picture)}
                          className="hover:fill-red-500 ml-auto cursor-pointer"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#FFFFFF"
                        >
                          <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                        </svg>
          </li>
           <hr className="border-red-500 w-4/5" />
           </>
          
          
        ))}
      </ul>
    </div>
  ))}


</div>


          </div>


        </div>
      </div>
    </>
  );
}

export default Menuecontain;
