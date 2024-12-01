import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from 'react-router-dom'; 


function Footer() {
  return (
    <>
      <div className="foot flex flex-col w-full">
      
     
        <div className="flex flex-wrap justify-center lg:justify-start items-start lg:flex-nowrap">
      
          {/* About Us Section */}
        
          <div className="footcont flex flex-col gap-2 w-full lg:w-1/3 h-1/3 px-6 text-white">
      

           
            <h2 className="text-xl mb-5 text-center lg:text-left">About Us</h2>
            <p className="text-gray-400 text-sm text-center lg:text-left">
              At Sushi Al Bahri, we are passionate about crafting exceptional sushi and delivering an unforgettable dining experience. With years of expertise in Japanese cuisine, we aim to innovate and elevate traditional sushi while providing top-notch service. Discover more about our team and culinary vision on our{" "}
              <Link to="/about" className="underline hover:text-gray-500  ">
                  About Us page
                </Link>
            </p>
            <h2 className="text-xl mb-5 mt-7 text-center lg:text-left">Open for You</h2>
            <p className="text-gray-400 text-sm text-center lg:text-left">Monday to Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-400 text-sm text-center lg:text-left">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-400 text-sm text-center lg:text-left">Sunday: Closed</p>
           
          </div>

          {/* Contact Information Section */}
          <div className="secondfoot footcont flex flex-col mt-2 gap-2 w-full lg:w-1/3 h-1/3 px-6 text-white">
            <h2 className="text-xl mb-5 text-center lg:text-left">Contact Information</h2>
            <p className="text-gray-400 text-sm text-center lg:text-left">📧 Email: SushiAlBahri@gmail.com</p>
            <p className="text-gray-400 text-sm text-center lg:text-left">📞 Fixed Line: +213 21 123 456</p>
            <p className="text-gray-400 text-sm text-center lg:text-left">📱 Mobile: +213 555 123 456</p>
            <p className="text-gray-400 text-sm text-center">
  <ul className="flex flex-row justify-start sm:justify-center lg:justify-start gap-4">
    <li><p className="mt-1 text-gray-400 text-sm">🌍 Social Media:</p></li>
    <li>
      <a href="#" className="group hover:underline text-lg">
        <FontAwesomeIcon icon={faFacebook} className="text-white group-hover:text-blue-900" />
      </a>
    </li>
    <li>
      <a href="#" className="group hover:underline text-lg">
        <FontAwesomeIcon icon={faInstagram} className="text-white group-hover:text-pink-600" />
      </a>
    </li>
    <li>
      <a href="#" className="group hover:underline text-lg">
        <FontAwesomeIcon icon={faTwitter} className="text-white group-hover:text-blue-300" />
      </a>
    </li>
  </ul>
</p>



           
            <h2 className="text-xl mb-5 mt-7 text-center lg:text-left">Remain Updated</h2>
            <div className="flex justify-center lg:justify-start">
  <div className="relative w-full sm:w-2/3 lg:w-4/5">
    <input
      type="email"
      placeholder="Your email address"
      className="w-full p-2 pr-20 rounded-sm text-gray-700 border text-sm border-gray-300 focus:outline-none"
    />
    <button
      className="absolute top-0 right-0 w-1/5  h-full bg-orange-700 text-sm rounded-sm text-white hover:bg-orange-500"
    >
      Sign Up
    </button>
  </div>
</div>



          </div>

          {/* Location Section */}
          <div className="secondfoot flex flex-col gap-2 w-full lg:w-1/3 h-1/3 px-6 text-white">
            <h2 className="text-xl mt-2 mb-3 text-center lg:text-left">Our Location</h2>
            <div className="relative w-full h-56 sm:h-64 lg:h-72 mb-10">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.841775881492!2d-73.96828508459386!3d40.78509127932457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589cbe0f6b87%3A0xa4f9e657c94a0b4c!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
              ></iframe>
            </div>
          </div>
        </div>
        <hr className="w-full" />

        {/* Copyright Section */}
        <div className="flex justify-center w-full mt-5">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Sushi Al Bahri. Designed with passion. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
