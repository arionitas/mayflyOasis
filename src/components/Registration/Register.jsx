import { useState, useEffect } from "react";
import {
  //   FaUser,
  FaEnvelope,
  FaLock,
  FaCalendar,
  FaGlobe,
  FaUser
} from "react-icons/fa";

export default function Register() {
  // Choose from the list of countries
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  //  useEffect for fetching country
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover"
      style={{ backgroundImage: "url(your-background-image-url.jpg)" }}
    >
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md 
p-8 rounded-lg shadow-md">
        <h2 className="text-3xl text-gray-800 font-semibold mb-6">
          Create an Account at Mayfly Oasis
        </h2>
        <form className="flex flex-col items-center">
          {/* -------- FullName --------*/}
          <div className="flex items-center mb-4">
            <FaUser className="mr-2" />
            <input
              type="text"
              className="w-64 p-2 border-b border-gray-500 bg-transparent 
utline-none placeholder-gray-500"
              placeholder="Your FullName"
            />
          </div>
          {/* -------- Email --------*/}
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-2" />

            <input
              type="email"
              className="w-64 p-2 border-b border-gray-500 bg-transparent 
outline-none placeholder-gray-500"
              placeholder="Your Email"
            />
          </div>
          {/* -------- DOB -------- */}
          <div className="flex items-center mb-4">
            <FaCalendar className="mr-2" />
            <input
              type="date"
              className="w-64 p-2 border-b border-gray-500 bg-transparent 
outline-none placeholder-gray-500"
              placeholder="Date of Birth"
            />
          </div>
          {/* -------- Country --------*/}
          <div className="flex items-center mb-4">
            <FaGlobe className="mr-2" />
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              className="w-64 p-2 border-b border-gray-500 bg-transparent 
outline-none placeholder-gray-500"
            >
              <option value="" disabled>
                Select your Country
              </option>
              {countries.map(country =>
                <option key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </option>
              )}
            </select>
          </div>
          {/* -------- Password -------- */}
          <div className="flex items-center mb-4">
            <FaLock className="mr-2" />
            <input
              type="password"
              className="w-64 p-2 border-b border-gray-500 bg-transparent 
outline-none placeholder-gray-500"
              placeholder="Password"
            />
          </div>
          {/* -------- ConfirmPassword -------- */}
          <div className="flex items-center mb-4">
            <FaLock className="mr-2" />
            <input
              type="password"
              className="w-64 p-2 border-b border-gray-500 bg-transparent 
outline-none placeholder-gray-500"
              placeholder="Confirm Password"
            />
          </div>
          {/* -------- Register Button -------- */}
          <button
            type="submit"
            className="bg-black text-white rounded-md py-2 w-64 hover:bg-black-600"
          >
            Register
          </button>
          <p className="mt-4 text-gray-600">
            Already have an account at Mayfly Oasis?{" "}
            <a href="/login" className="text-black-500">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
