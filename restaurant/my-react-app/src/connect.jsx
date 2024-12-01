import { useState, useEffect } from "react";
import Reservation from "./reservation";

function Connect() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [tablePlacement, setTablePlacement] = useState("");
  const [tableSize, setTableSize] = useState("");
  const [conf, setConf] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("conf");
    if (storedName) {
      setConf(storedName);
    }
  }, []);
  
  const changeName = (event) => setName(event.target.value);
  const changeDate = (event) => setDate(event.target.value);
  const changePhone = (event) => setPhone(event.target.value);
  const changeTime = (event) => setTime(event.target.value);
  const changeTablePlacement = (event) => setTablePlacement(event.target.value);
  const changeTableSize = (event) => setTableSize(event.target.value);

  const confirm = () => {
    const newReservation = {
      name,
      date,
      phone,
      time,
      tablePlacement,
      tableSize,
    };

    const storedReservations = JSON.parse(localStorage.getItem("clients")) || [];
    storedReservations.push(newReservation);
    localStorage.setItem("clients", JSON.stringify(storedReservations));
    setConf(name);
    setVisible(false);  // Set visible to true to show reservation confirmation
    setName("");
    setDate("");
    setPhone("");
    setTime("");
    setTablePlacement("");
    setTableSize("");
  };

  return (
    <>
      {visible && <Reservation clients={conf} />} {/* Ensure proper prop passing */}

      <div className="flex flex-row h-auto  justify-center brightness-75 bg-cover bg-center bg-[url('/src/reservation.png')] items-center px-10">
        <div className="flex flex-col items-center pt-14 my-36 border-4 border-double text-white border-white h-auto w-full md:w-3/5 sm:w-full bg-black opacity-90">
          <h1 className="text-4xl font-title underline">Reservation</h1>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 px-10 items-start justify-center pb-14 mt-5 w-full max-w-4xl">
            {/* Date Input */}
            <div className="flex flex-col">
              <label htmlFor="date" className="text-sm font-medium text-gray-700">
                Select Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={changeDate}
                className="mt-2 border border-gray-300 text-black rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Name Input */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your Name..."
                value={name}
                onChange={changeName}
                className="mt-2 border border-gray-300 text-black rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Time Input */}
            <div className="flex flex-col">
              <label htmlFor="time" className="text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={changeTime}
                className="mt-2 border border-gray-300 text-black rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone Input */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                value={phone}
                onChange={changePhone}
                className="mt-2 border border-gray-300 text-black rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Table Placement */}
            <div className="flex flex-col">
              <label htmlFor="tablePlace" className="text-sm font-medium text-gray-700">
                Table Placement
              </label>
              <select
                id="tablePlace"
                value={tablePlacement}
                onChange={changeTablePlacement}
                className="mt-2 border border-gray-300 text-black rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1">------------------------------------------------------</option>
                <option value="window">Window Seat</option>
                <option value="outdoor">Outdoor</option>
                <option value="indoor">Indoor</option>
                <option value="quiet">Quiet Area</option>
              </select>
            </div>

            {/* Table Size */}
            <div className="flex flex-col">
              <label htmlFor="tableSize" className="text-sm font-medium text-gray-700 ">
                Table Size
              </label>
              <select
                id="tableSize"
                value={tableSize}
                onChange={changeTableSize}
                className="mt-2 border border-gray-300 text-black rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1">------------------------------------------------------</option>
                <option value="2">2 Person</option>
                <option value="4">4 Person</option>
                <option value="6">6 Person</option>
                <option value="8">8+ Person</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center col-span-full">
              <button
                className="butt border-2 border-solid border-white p-3 text-xl bg-red-400 text-white rounded-lg font-title hover:bg-black hover:text-white mt-5"
                onClick={confirm}
              >
                Reserve now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connect;
