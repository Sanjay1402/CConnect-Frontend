import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";
import { useState } from "react";
 
const SS = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
    address: null,
  });

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({
            latitude,
            longitude,
            error: null,
          });
          fetchAddress(latitude, longitude); // Fetch the address based on location
        },
        (error) => {
          setLocation({
            latitude: null,
            longitude: null,
            error: error.message,
            address: null,
          });
        }
      );
    } else {
      setLocation({
        latitude: null,
        longitude: null,
        error: "Geolocation is not supported by this browser.",
        address: null,
      });
    }
  };

  const fetchAddress = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      setLocation((prevState) => ({
        ...prevState,
        address: data.display_name || 'Address not found',
      }));
    } catch (error) {
      setLocation((prevState) => ({
        ...prevState,
        address: 'Error retrieving address',
      }));
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Find Your Area</h2>
      <button onClick={handleGetLocation}>Get Current Location</button>

      {location.latitude && location.longitude && (
        <div>
          <h3>Your Location:</h3>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Area: {location.address}</p>
        </div>
      )}

      {location.error && (
        <div style={{ color: 'red' }}>
          <p>Error: {location.error}</p>
        </div>
      )}
    </div>
  );
};

export default SS;