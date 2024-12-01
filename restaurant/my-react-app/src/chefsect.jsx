import { useEffect, useState } from "react";

function Chef() {
  const [isVisible, setIsVisible] = useState(false);

  // Observer callback to set visibility when in/out of view
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true); // Set visibility to true when the element comes into view
      } else {
        setIsVisible(false); // Set visibility to false when the element is out of view
      }
    });
  };

  // Set up Intersection Observer when component mounts
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5, // Trigger when 50% of the element is in the viewport
    });

    const targetElement = document.querySelector(".chef-content");
    if (targetElement) {
      observer.observe(targetElement); // Observe the target element
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement); // Cleanup on component unmount
      }
    };
  }, []);

  return (
    <div className="chefe flex justify-center items-center w-full bg-cover bg-center bg-[url('/src/chefback.jpg')] px-4 py-8">
      <div className="relative flex flex-col sm:flex-row  justify-center sm:justify-between lg:justify-center lg:w-4/5    gap-8 border-2 border-solid border-black bg-black bg-opacity-90 p-4 sm:p-8 rounded-md w-full sm:w-full h-auto sm:h-4/5">
        {/* Content Layer */}
        <div
          className={`chef-content flex flex-col mr-10  items-center text-center sm:text-left z-10 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src="src/chef.png"
            alt="chef"
            className="h-32 w-32 min-w-32 sm:h-40 sm:w-40 lg:h-60 lg:w-60  mb-4"
          />
          <h2 className="text-sm  sm:text-xs lg:text-2xl font-title text-white">
            Chef Mira
          </h2>
        </div>

        {/* Description Layer */}
        <p
          className={`descript text-white text-sm sm:text-lg lg:text-2xl max-w-full sm:max-w-xl mt-2 sm:mt-0 font-title transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          "Chef Mira is an accomplished culinary expert with over 8 years of
          dedicated experience specializing in Japanese cuisine, particularly
          sushi. Trained under world-renowned chefs, she has developed an
          exceptional mastery of traditional sushi-making techniques and an
          innovative approach to modern sushi presentations. Chef Mira’s
          expertise extends to sourcing the finest ingredients, ensuring the
          highest quality and freshness in every dish. Her meticulous attention
          to detail, passion for perfection, and creative flair in crafting
          both classic and contemporary sushi make her an invaluable asset to
          any culinary team. Chef Mira brings a unique blend of authenticity
          and artistry to the world of sushi, elevating the dining experience
          with every expertly prepared plate."
        </p>
      </div>
    </div>
  );
}

export default Chef;
