import React, { useState } from 'react';
import Header from './header';
import Panier from './Panier';


function Best() {
  // Use state to manage visibility of the "show" div and selected food
  const [isVisible, setIsVisible] = useState(false);
  const[isvis,setisvis] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const[selectbest,setselectbest]=useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    picture: ""
  });
  
  const handleOrderNow = (name, price, picture) => {
    setProduct({
      name: name,
      price: price,
      picture: picture
    });
  };

  const bestfood = [
    {
      name: "California Roll",
      description: "Crab, avocado, cucumber",
      price: 8.99,
      picture: "src/californiaroll.jpg"
    },
    {
      name: "Makisushi",
      description: "Tuna, spicy mayo, cucumber",
      price: 9.9,
      picture: "src/makisushi.jpg"
    },
    {
      name: "Sake Nigiri",
      description: "Eel, avocado, cucumber, topped with avocado slices",
      price: 12.99,
      picture: "src/nigiri.jpg"
    },
    {
      name: "Tuna Sashimi",
      description: "Assorted fish, avocado, cucumber",
      price: 13.99,
      picture: "src/tunasashimi.jpg"
    },
    {
      name: "Chirachi Saumon",
      description: "Salmon, cream cheese, cucumber",
      price: 10.99,
      picture: "src/Chirachi.jpg"
    },
    {
      name: "Shrimp Tempura Roll",
      description: "Shrimp, avocado, cucumber",
      price: 11.99,
      picture: "src/shrim.jpg"
    },
    {
      name: "Uramaki",
      description: "Uramaki features rice on the outside and nori",
      price: 11,
      picture: "src/uramaki.jpg"
    },
    {
      name: "Inari Sushi",
      description: "Sushi rice stuffed into a pouch of fried tofu",
      price: 15.99,
      picture: "src/inari.jpg"
    },
    {
      name: "Oshizushi",
      description: "Oshizushi is made by layering rice and fish in a mold",
      price: 11.79,
      picture: "src/Oshizushi.jpg"
    },
    {
      name: "Gunkan-Maki",
      description: "Vinegared rice topped with luxurious toppings in nori",
      price: 12.99,
      picture: "src/Gunkan-Maki.jpg"
    }
  ];

  
  

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
  ];
  
  
  
  
  ;
  

  // Toggle visibility when an image is clicked and set the selected food
  const handleImageClick = (index) => {
    setSelectedFood(food[index]); // Get food data by index
    setIsVisible(!isVisible); // Toggle visibility
  };
  const handleImageClick1 = (index) => {
    setselectbest(bestfood[index]); // Get food data by index
    setisvis(!isvis); // Toggle visibility
  };
  const hideit = ()=>{
    setisvis(false);
  }
  

 

  return (
    <>
    <Panier name={product.name} prix={product.price} picture={product.picture}  />
   

      <div className="relative ">
        <h1 className="flex justify-center mt-9 text-5xl font-title underline items-center">
         Main Categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="28px"
            viewBox="0 -960 960 960"
            width="28px"
            className="mt-3"
            fill="#000000"
          >
            <path d="m175-120-56-56 410-410q-18-42-5-95t57-95q53-53 118-62t106 32q41 41 32 106t-62 118q-42 44-95 57t-95-5l-50 50 304 304-56 56-304-302-304 302Zm118-342L173-582q-54-54-54-129t54-129l248 250-128 128Z" />
          </svg>
        </h1>

        <ul className=" mt-36 px-32 justify-center  gap-16 hover:cursor-pointer grid items-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          <li
            className="text-center font-title text-3xl transform  transition hover:scale-110"
            onClick={() => handleImageClick(0)} // Pass the index of Maki
          >
            <img src="src/categorie1.jpg" alt="ca1" className="mb-6" />
            <h2>Maki</h2>
          </li>
          <li
            className="text-center font-title text-3xl transform transition hover:scale-110"
            onClick={() => handleImageClick(1)} // Pass the index of Nigiri
          >
            <img src="src/gategorie2.jpg" alt="ca1" className="mb-6" />
            <h2>Nigiri</h2>
          </li>
          <li
            className="text-center font-title text-3xl transform transition hover:scale-110"
            onClick={() => handleImageClick(2)} // Pass the index of Traditional Nigiri
          >
            <img src="src/categorie3.jpg" alt="ca1" className="mb-6" />
            <h2>Traditional Nigiri</h2>
          </li>
          <li
            className="text-center font-title text-3xl transform transition hover:scale-110"
            onClick={() => handleImageClick(3)} // Pass the index of Temaki
          >
            <img src="src/categorie4.jpg" alt="ca1" className="mb-6" />
            <h2>Temaki</h2>
          </li>
        </ul>

        <div className="mt-36">
  <div className="flex-col bg-gray-900  mt-10 relative ">
  <div
  style={{
    display: isvis ? 'block' : 'none',
    position: 'absolute',
    inset: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: '0',
    backgroundSize: 'cover',
    
    zIndex: '20',
  }}
  className="w-full  h-auto md:max-w-xl max-w-full rounded-md  overflow-y-auto flex justify-center mt-28 flex-col  "
>
  <div className="w-full pt-10 flex flex-col items-center  bg-gray-800 opacity-100">
    {selectbest && (
      <>


        <h2 className='flex justify-center items-center text-white text-3xl font-title'>
          Sushi Al Bahri

        </h2>
        <button
          className="absolute right-7 text-white"
          onClick={() => handleImageClick1()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FFFFFF">
            <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
          </svg>
        </button>
        <div className="flex rounded-md rounded-t-none  flex-col items-center border-2 border-collapse p-8 w-4/5 mb-10 mt-10">
        <img
        src={selectbest.picture}
        alt={selectbest.name}
        className="mb-4 rounded-lg object-cover w-40 h-40 opacity-100"
      />
      <p className="text-2xl font-title text-white">{selectbest.name}</p>
      <p className="text-sm text-gray-400">{selectbest.description}</p>
      <p className="font-bold text-xl text-white font-title">{selectbest.price}$</p>
      <button
                className="font-title p-2 mt-5 text-white rounded-md border-2 border-solid border-white bg-red-500 hover:bg-red-700 hover:cursor-pointer"
                onClick={ () => {handleOrderNow(selectbest.name,selectbest.price,selectbest.picture);
                               hideit()}
          
                  



              } // Pass the name on button click
              >
                Add to card
              </button>
</div>

      </>
    )}
  </div>
</div>
    <h1 className="flex justify-center pt-8 text-5xl mb-6  font-title underline items-center text-white">
    <svg xmlns="http://www.w3.org/2000/svg" height="42px" viewBox="0 -960 960 960" width="42px" fill="#FFF"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"/></svg>Best Selling
    </h1>
    <div
      className="best grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-6 p-8 pb-20 font-title    "
    >
      <div   className="text-center text-white border-2 border-collapse px-20 py-7 bg-gray-950">
        <img
          src="src/californiaroll.jpg"
          alt="Best 1"
          className="mb-4 rounded-lg object-cover w-full h-40"
          onClick={() => handleImageClick1(0)}
        />
        <h2 className="text-2xl">California Roll</h2>
        <p>Crab, avocado, cucumber</p>
        <p>$8.99</p>

      </div>
      <div className="text-center text-white border-2 border-collapse px-20 py-7 bg-gray-950">
        <img
          src="src/makisushi.jpg"
          alt="Best 2"
          className="mb-4 rounded-lg object-cover w-full h-40"
          onClick={() => handleImageClick1(1)}
        />
        
        <h2 className="text-2xl">Makisushi</h2>
        <p>Tuna, spicy mayo, cucumber</p>
        <p>$9.99</p>

      </div>
      <div className="text-center text-white border-2 border-collapse px-20 py-7 bg-gray-950">
        <img
          src="src/nigiri.jpg"
          alt="Best 3"
          className="mb-4 rounded-lg object-cover w-full h-40"
          onClick={() => handleImageClick1(2)}
        />
        <h2 className="text-2xl">Sake Nigiri</h2>
        <p>Eel, avocado, cucumber, topped with avocado slices</p>
        <p>$12.99</p>
      </div>
      <div className="text-center text-white border-2 border-collapse px-20 py-7 bg-gray-950">
        <img
          src="src/tunasashimi.jpg"
          alt="Best 4"
          className="mb-4 rounded-lg object-cover w-full h-40"
          onClick={() => handleImageClick1(3)}
          
        />
        <h2 className="text-2xl">Tuna Sashimi</h2>
        <p>Assorted fish, avocado, cucumber</p>
        <p>$13.99</p>
      </div>
      <div className="text-center text-white border-2 border-collapse px-20 py-7 bg-gray-950">
        <img
          src="src/Chirachi.jpg"
          alt="Best 5"
          className="mb-4 rounded-lg object-cover w-full h-40"
          onClick={() => handleImageClick1(4)}
         
        />
        <h2 className="text-2xl">Chirachi Saumon</h2>
        <p>Salmon, cream cheese, cucumber</p>
        <p>$10.99</p>
      </div>
      <div className="text-center text-white border-2 border-collapse px-20 py-7 bg-gray-950">
        <img
          src="src/shrim.jpg"
          alt="Best 6"
          className="mb-4 rounded-lg object-cover w-full h-40"
          onClick={() => handleImageClick1(5)}
        />
        <h2 className="text-2xl">Shrimp Tempura Roll</h2>
        <p>Shrimp, avocado, cucumber</p>
        <p>$11.99</p>
      </div>
      <div className="text-center text-white border-2 border-collapse px-20 py-7 bg-gray-950">
        <img
          src="src/uramaki.jpg"
          alt="Best 4"
          className="mb-4 rounded-lg object-cover w-full h-40"
          onClick={() => handleImageClick1(6)}
        />
        <h2 className="text-2xl">Uramaki</h2>
        <p>Uramaki features rice on the outside and nori </p>
        <p>$11.99</p>
      </div>
      <div className="text-center text-white border-2 border-collapse px-20 py-7 bg-gray-950">
        <img
          src="src/inari.jpg"
          alt="Best 5"
          className="mb-4 rounded-lg object-cover w-full h-40"
          onClick={() => handleImageClick1(7)}        />
        <h2 className="text-2xl">Inari Sushi</h2>
        <p>sushi rice stuffed into a pouch of fried tofu</p>
        <p>$15.99</p>
      </div>
      <div className="text-center text-white border-2 border-collapse px-20 py-7 bg-gray-950">
        <img
          src="src/Oshizushi.jpg"
          alt="Best 6"
          className="mb-4 rounded-lg object-cover w-full h-40"
          onClick={() => handleImageClick1(8)}
        />
        <h2 className="text-2xl">Oshizushi</h2>
        <p>Oshizushi is made by layering rice and fish in a mold</p>
        <p>$11.79</p>
      </div>
      <div className="text-center text-white border-2 border-collapse px-20 py-7 bg-gray-950">
        <img
          src="src/Gunkan-Maki.jpg"
          alt="Best 6"
          className="mb-4 rounded-lg object-cover w-full h-40"
          onClick={() => handleImageClick1(9)}
        />
      
        <h2 className="text-2xl">Gunkan-Maki</h2>
        <p>Vinegared rice topped with luxurious toppings in nori.</p>
        
        <p>$12.99</p>
      </div>
    </div>
  </div>
</div>


        {/* Conditional Display Using Inline Style */}
        <div
  style={{
    display: isVisible ? 'block' : 'none',
    position: 'fixed',
    inset: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: '0',

    backgroundSize: 'cover',
  
    zIndex: '10',
  }}
  className="w-full h-auto md:max-w-xl max-w-full mt-48 overflow-y-auto flex flex-col relative brightness-75"
>
<div className="w-full pt-10 flex flex-col items-center bg-black opacity-95 overflow-y-auto max-h-[600px] fixed top-0 left-0 right-0 ">
  {selectedFood && (
    <>
      <button
        className="absolute right-7 text-white"
        onClick={() => handleImageClick()}
      >
        <svg
          className="hover:fill-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          height="28px"
          viewBox="0 -960 960 960"
          width="28px"
          fill="#FFFFFF"
        >
          <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
        </svg>
      </button>
      <p className="text-white text-4xl mb-6 space-y-2 font-title">{selectedFood.title}</p>
      <div className="flex flex-col items-center border-2 gap-4 border-collapse p-8 w-full mt-10">
        {selectedFood.items.map((item, index) => (
          <div key={index} className="space-y-2">
            <p className="text-white text-2xl gap-2 flex items-center font-title hover:cursor-pointer">
              <img
                src={item.picture}
                alt={item.name}
                className="w-1/4 hover:scale-110"
              />
              <div className="hover:text-red-600">
                <strong>{item.name}</strong> | <span>{item.price}</span>
              </div>
              <button
                className="font-title text-sm text-white rounded-md border-2 border-solid border-white bg-red-500 hover:bg-red-700 hover:cursor-pointer ml-auto px-4 py-2"
                onClick={() => {
                  handleOrderNow(item.name, item.price, item.picture);
                  hideit();
                }}
              >
                Order
              </button>
            </p>
          </div>
        ))}
      </div>
    </>
  )}
</div>

</div>






 



      </div>
    </>
  );
}

export default Best;
