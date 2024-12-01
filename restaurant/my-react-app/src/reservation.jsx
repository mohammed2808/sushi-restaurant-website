import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Reservation() {
  const [clients, setClients] = useState([]);

  // Load reservations from localStorage
  useEffect(() => {
    const storedClients = JSON.parse(localStorage.getItem("clients")) || [];
    setClients(storedClients); // Set the state to the array of reservations
  }, []);

  const deleteProduct = (productToDelete) => {
    const updatedClients = clients.filter((product) => product !== productToDelete); // Remove the item from the array
    setClients(updatedClients); // Update the state with the new list
    localStorage.setItem("clients", JSON.stringify(updatedClients)); // Update localStorage with the new list
  };

  // Scroll to the top whenever the route changes
  const location = useLocation(); // Hook to track route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]); // Trigger when the location (route) changes

  // Format date to a readable string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Customize this format as needed
  };

  return (
    <>
      <div className="bg-gray-900 py-20">
        <h1 className="text-4xl font-bold font-title underline text-white text-center mb-10">
          Confirmed Reservations
        </h1>
        <div className="reserve grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2 px-10 mx-10 pt-20 bg-cover brightness-75 bg-center bg-[url('/src/reservetwo.jpg')] p-5 rounded-lg shadow-lg">
          {clients.length > 0 ? (
            // Display all clients from the clients array
            clients.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-4 items-start justify-between relative max-w-[256px] w-full h-[250px] bg-black bg-opacity-85 text-white border border-gray-300 rounded-md shadow-md"
              >
                <p className="text-lg font-medium">Name: {item.name}</p>
                <p className="text-sm">Date: {formatDate(item.date)}</p>
                <p className="text-sm">Phone: {item.phone}</p>
                <p className="text-sm">Time: {item.time}</p>
                <p className="text-sm">Table Placement: {item.tablePlacement}</p>
                <p className="text-sm">Table Size: {item.tableSize}</p>

                <svg
                  onClick={() => deleteProduct(item)}
                  className="bg-red-500 absolute top-2 right-2 cursor-pointer p-1 rounded hover:bg-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 -960 960 960"
                  width="16px"
                  fill="white"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </div>
            ))
          ) : (
            // Message if there are no reservations
            
          
            <p className=" text-white flex justify-center items-center w-screen  text-4xl  font-title">No reservations yet.....</p>
            
          )}
        </div>
      </div>
    </>
  );
}

export default Reservation;
