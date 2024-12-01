import { useState, useEffect } from "react";

function Promo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      image: "src/clients/client1.jpg",
      title1: "Yasmine Benkhalifa",
      title2: "⭐️⭐️⭐️⭐️⭐️",
      description:
        "This is hands down the best sushi I've ever tasted in Algeria! The flavors are authentic, and the presentation is just stunning. The staff was incredibly friendly and accommodating. I'll definitely be back with friends next week!",
    },
    {
      image: "src/clients/client2.jpg",
      title1: "Rachid Amrani",
      title2: "⭐️⭐️⭐️⭐️⭐️",
      description:
        "A hidden gem for sushi lovers! The chef's special platter is worth every dinar. Fresh ingredients and creative combinations make this place stand out. Perfect spot for a casual dinner or special occasion. Bravo!",
    },
    {
      image: "src/clients/client3.jpg",
      title1: "Sabrina Djemai",
      title2: "⭐️⭐️⭐️⭐️⭐️",
      description:
        "Absolutely amazing sushi and service! This is the place to go if you want authentic flavors with a modern twist. Highly recommended! The atmosphere is cozy, and the staff makes you feel at home—perfect for casual outings and special occasions.",
    },
  ];

  // Automatic Slide Change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  // Handlers for manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="proback flex justify-center items-center relative px-4 py-8">
      {/* Review Section */}
      <div className="review flex flex-col justify-center items-center w-full sm:w-4/5 lg:w-3/5 h-auto bg-black bg-opacity-70 p-6 sm:p-8 rounded-md">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-10 text-white bg-black bg-opacity-50 p-2 sm:p-3 rounded-full hover:bg-opacity-70 z-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M560-280 360-480l200-200v400Z" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-10 text-white bg-black bg-opacity-50 p-2 sm:p-3 rounded-full hover:bg-opacity-70 z-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M400-280v-400l200 200-200 200Z" />
          </svg>
        </button>

        <h1 className="font-title text-2xl sm:text-4xl underline mb-4">
          Clients Reviews
        </h1>
        <div className="flex flex-col justify-center items-center border-white border-2 border-solid h-auto w-full sm:w-3/4 p-4">
          <img
            src={reviews[currentIndex].image}
            alt={`client${currentIndex + 1}`}
            className="rounded-full w-20 h-20 sm:w-28 sm:h-28 object-cover mb-3"
          />
          <h2 className="text-xl sm:text-2xl text-white">
            {reviews[currentIndex].title1}
          </h2>
          <h2 className="text-sm sm:text-base">{reviews[currentIndex].title2}</h2>
          <p className="text-white text-sm sm:text-base w-full sm:w-2/3 text-center mt-3">
            {reviews[currentIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Promo;
