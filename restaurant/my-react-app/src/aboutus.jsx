import React, { useState, useEffect } from "react";
import "./input.css";
import { Link, useLocation } from "react-router-dom";

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const slides = ["src/aboutus.jpg", "src/aboutus2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the height of the entire page
        behavior: "smooth", // Smooth scroll
      });
    }, 100); // Add a slight delay to ensure the page is loaded
  };

  return (
    <>
      {/* Slider */}
      <div className="slider-container">
        <div
          className="slide"
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
          }}
        ></div>
      </div>

      {/* Navbar */}
      <div
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black bg-opacity-70" : "bg-transparent"}`}
        style={{ backdropFilter: isScrolled ? "blur(10px)" : "none" }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="px-10 flex-col text-white">
            <h2 className="text-5xl font-title mt-4">Sushi</h2>
            <h2 className="text-2xl font-title ml-10">al-Bahri</h2>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden z-30">
            <button
              className="text-white text-3xl absolute right-14 top-9"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center gap-16">
            <ul className="text-white flex items-center justify-between h-24 px-16 gap-14">
              <li>
                <Link to="/" className="hover:underline font-title text-2xl">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menue" className="hover:underline font-title text-2xl">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline font-title text-2xl">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="hover:underline font-title text-2xl">
                  Reservation
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={scrollToBottom}
                  className="hover:underline font-title text-2xl"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add the Contact Section at the bottom of your page */}
      <div className="absolute top-1/3 text-white flex-col px-8 justify-center text-center w-screen">
        <h2 className="text-7xl font-title">About Us</h2>
        <h3 className="text-4xl mt-4 font-light italic">
          Experience the art of sushi like never before.
        </h3>
        <p className="mt-6 text-xl">
          At our restaurant, we blend tradition with innovation, offering an
          authentic yet modern sushi experience crafted with the freshest
          ingredients.
        </p>
      </div>
      <div className="flex flex-col px-6 p-44 bg-gray-800 gap-10 items-center  h-auto w-auto">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 font-title w-11/12 lg:w-3/4 border-2 border-solid border-white text-white py-10 lg:py-36 px-6 lg:px-32">
          <img src="src/ourstory.jpg" alt="aboutus" className="w-full lg:w-1/2 h-auto" />
          <div className="flex w-full lg:w-1/2 flex-col gap-5 justify-center items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl underline text-center">Our Story</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-center">
              "The story of Sushi Al Bahri began with a vision: to bring the authentic taste of Japan to Algeria while honoring the freshness of the ocean. Inspired by the artistry of sushi-making and a love for bold flavors, we’ve combined tradition and innovation to create a menu that excites the senses. Our journey has been one of passion and dedication, building a space where food lovers gather to enjoy exceptional sushi in a warm and welcoming atmosphere."
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 font-title w-11/12 lg:w-3/4 border-2 border-solid border-white text-white py-10 lg:py-36 px-6 lg:px-32">
          <div className="flex w-full lg:w-1/2 flex-col gap-5 justify-center items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl underline text-center">Our Philosophy: Where Tradition Meets Creativity</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-center">
              "Sushi Al Bahri is built on the belief that food is a universal language of joy and connection. We honor the centuries-old techniques of Japanese sushi-making while embracing creativity to craft dishes that are not only visually stunning but also rich in flavor. Every piece of sushi is a work of art, crafted with care, precision, and an unwavering commitment to quality."
            </p>
          </div>
          <img src="src/ourphilo.jpg" alt="Our Philosophy: Where Tradition Meets Creativity" className="w-full lg:w-1/2 h-auto" />
        </div>

        {/* Section 3 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 font-title w-11/12 lg:w-3/4 border-2 border-solid border-white text-white py-10 lg:py-36 px-6 lg:px-32">
          <img src="src/ourchef.jpg" alt="aboutus" className="w-full lg:w-1/2 h-auto" />
          <div className="flex w-full lg:w-1/2 flex-col gap-5 justify-center items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl underline text-center">What Sets Sushi Al Bahri Apart</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-center">
              At Sushi Al Bahri, we bring you the freshest seafood, crafted by skilled chefs with passion and precision. Our menu blends traditional Japanese techniques with modern flavors, all served in a serene, coastal-inspired atmosphere for a memorable dining experience.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 font-title w-11/12 lg:w-3/4 border-2 border-solid border-white text-white py-10 lg:py-36 px-6 lg:px-32">
          <div className="flex w-full lg:w-1/2 flex-col gap-5 justify-center items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl underline text-center">Discover the Art of Sushi</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-center">
              "Every dish at Sushi Al Bahri tells a story—of culture, creativity, and care. From our signature sushi rolls to our sashimi platters, each bite is a harmonious blend of flavors and textures. Our menu caters to both sushi aficionados and those new to the experience, ensuring there’s something for everyone."
            </p>
          </div>
          <img src="src/art.jpg" alt="aboutus" className="w-full lg:w-1/2 h-auto" />
        </div>
      </div>
    </>
  );
}

export default About;
