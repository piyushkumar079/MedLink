import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BedsAvailability = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const cityData = {
    Uttar_Pradesh: ['Lucknow', 'Kanpur', 'Prayagraj', 'Agra', 'Varanasi', 'Ghaziabad', 'Jhansi', 'Unnao', 'Vrindavan'],
    Madhya_Pradesh: ['Sagar', 'Bhopal', 'Beena', 'Ujjain', 'Jabalpur', 'Indore', 'Damoh'],
    Bihar: ['Patna', 'Muzaffarnagar', 'Madhubani', 'Banka', 'Darbhanga'],
    Maharastra: ['Mumbai', 'Pune', 'Nagpur', 'Akola', 'Amarvati', 'Washim'],
    Gujarat: ['Ahemdabad', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Surat', 'Bhuj', 'Mandvi'],
    Rajasthan: ['Kota', 'Jaipur', 'Jodhpur', 'Udaipur', 'Bikaner', 'Alwar'],
    Chattisgarh: ['Raipur', 'Bilaspur', 'Raigarh', 'Jashpur', 'Pratappur'],
    Uttrakhand: ['Almora', 'Dehradun', 'Nainital', 'Rishikesh', 'Kashipur'],
    Punjab: ['Amritsar', 'Jalandhar', 'Ludhiana', 'Patiala', 'Moga', 'Bhatinda'],
    Himachal_Pradesh: ['Chamba', 'Manali', 'Rampur', 'Rajgarh', 'Mandi', 'Una']
  };

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setSelectedCity(cityData[newState][0]);
  };

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    setSelectedCity(newCity);
  };

  const handleSubmit = () => {
    // Add logic to handle form submission here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Check Beds Availability</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <label htmlFor="states" className="block text-lg text-gray-800 mb-2">Select State:</label>
          <select id="states" onChange={handleStateChange} className="border border-gray-300 rounded p-2 pl-10 w-full">
            <option value="" disabled selected>Select State</option>
            {Object.keys(cityData).map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        {selectedState && (
          <div className="mb-4">
            <label htmlFor="city" className="block text-lg text-gray-800 mb-2">Select City:</label>
            <select id="city" onChange={handleCityChange} className="border border-gray-300 rounded p-2 pl-10 w-full">
              {cityData[selectedState].map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        )}

        <div className="text-center">
          <Link to={`http://13.60.28.39:4000/hospitals/${selectedCity}`}>
            <button 
              className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition duration-300 ${!selectedCity && 'opacity-50 cursor-not-allowed'}`}
              onClick={handleSubmit}
              disabled={!selectedCity}
            >
              Check Availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BedsAvailability;
