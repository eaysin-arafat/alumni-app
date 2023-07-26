import React, { useEffect } from "react";

// Import Google Maps library
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  useEffect(() => {
    // Load Google Maps API
    const loader = new Loader({
      apiKey: "YOUR_API_KEY", // Replace with your Google Maps API key
      version: "weekly",
    });

    // Initialize and render the map
    loader.load().then(() => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.006 }, // Set initial map center
        zoom: 12, // Set initial map zoom level
      });

      // Set a predefined address as the center of the map
      const address = "1234 Main St, New York, NY 10001"; // Replace with your predefined address
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results.length > 0) {
          map.setCenter(results[0].geometry.location);
          new window.google.maps.Marker({
            position: results[0].geometry.location,
            map,
            title: "Contact Us", // Marker title
          });
        } else {
          console.error(
            "Geocode was not successful for the following reason:",
            status
          );
        }
      });
    });
  }, []);

  return (
    <div>
      {/* Render an empty div as a placeholder for the map */}
      <div
        id="map"
        style={{ marginBottom: "30px", height: "300px", width: "100%" }}
      ></div>
    </div>
  );
};

export default Map;
