import React, { useEffect, useState } from "react";
import "./MyTrips.css";

const MyTrips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const storedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(storedTrips);
  }, []);

  return (
    <div className="my-trips-container">
      <h2>My Trips</h2>

      <div className="trips-grid">
        {trips.length === 0 ? (
          <p>No trips added yet.</p>
        ) : (
          trips.map((trip, index) => (
            <div key={index} className="trip-card">
              <h3>{trip.title}</h3>
              <p>📍 {trip.location}</p>
              <p>🗓 {trip.duration} Days</p>
              <p>⏰ {trip.startDate} - {trip.endDate}</p>
              <p>💰 {trip.budget}</p>
              <button className="view-details-btn">👁 View Details</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyTrips;