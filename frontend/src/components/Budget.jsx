// 


// import React, { useEffect, useState } from "react";
// import "./Budget.css";

// const Budget = () => {
//   const [trip, setTrip] = useState(null);

//   useEffect(() => {
//     // mock example for structure only
//     const mockTrip = {
//       title: "Goa Trip",
//       budget: 30000,
//       startDate: "Nov 25",
//       endDate: "Dec 2",
//       days: [
//         { day: "Day 1" },
//         { day: "Day 2" },
//         { day: "Day 3" }
//       ]
//     };

//     setTrip(mockTrip);
//   }, []);

//   if (!trip) {
//     return <div className="loading">Loading…</div>;
//   }

//   // ---- Calculations ----
//   const totalBudget = trip.budget || 0;
//   const numberOfDays = trip.days?.length || 1;
//   const perDayBudget = totalBudget / numberOfDays;

//   // FOR NOW: spent = 0 until backend logic is connected
//   const spent = 0;
//   const remaining = totalBudget - spent;

//   return (
//     <div className="budget-page-container">
//       {/* Header */}
//       <div className="budget-header-block">
//         <h1>{trip.title}</h1>
//         <div className="budget-meta">
//           <span>{trip.startDate} to {trip.endDate}</span>
//           <span className="budget-amount">Budget: ₹{totalBudget.toLocaleString()}</span>
//         </div>
//       </div>

//       {/* Summary Cards */}
//       <div className="budget-cards">
//         <div className="budget-card">
//           <h3>Total Budget</h3>
//           <p className="value">₹{totalBudget.toLocaleString()}</p>
//         </div>

//         <div className="budget-card">
//           <h3>Total Spent</h3>
//           <p className="value">₹{spent.toLocaleString()}</p>
//         </div>

//         <div className="budget-card">
//           <h3>Remaining</h3>
//           <p className="value">₹{remaining.toLocaleString()}</p>
//         </div>

//         <div className="budget-card">
//           <h3>Per Day Estimate</h3>
//           <p className="value">₹{Math.round(perDayBudget).toLocaleString()}</p>
//         </div>
//       </div>

//       {/* Per Day Breakdown Section */}
//       <div className="per-day-section">
//         <h2>📅 Day-Wise Budget</h2>

//         <div className="days-list">
//           {trip.days.map((d, i) => (
//             <div key={i} className="day-card">
//               <h4>{d.day}</h4>
//               <p>Estimated: ₹{Math.round(perDayBudget).toLocaleString()}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Budget;

import React, { useEffect, useState } from "react";
import "./Budget.css";

const Budget = () => {
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    // mock example for structure only
    const mockTrip = {
      title: "Goa Trip",
      budget: 30000,
      startDate: "Jan 10",
      endDate: "Jan 12",
      days: [
        { day: "Day 1" },
        { day: "Day 2" },
        { day: "Day 3" }
      ]
    };

    setTrip(mockTrip);
  }, []);

  if (!trip) {
    return <div className="loading">Loading…</div>;
  }

  // ---- Calculations ----
  const totalBudget = trip.budget || 0;
  const numberOfDays = trip.days?.length || 1;
  const perDayBudget = totalBudget / numberOfDays;

  // FOR NOW: spent = 0 until backend logic is connected
  const spent = 0;
  const remaining = totalBudget - spent;

  return (
    <div className="budget-page-container">
      {/* Header */}
       <div className="budget-card-wrapper"> 
        <div className="budget-header-block">
          <h1>{trip.title}</h1>
          <div className="budget-meta">
            <span>{trip.startDate} to {trip.endDate}</span>
            <span className="budget-amount">Budget: ₹{totalBudget.toLocaleString()}</span>
          </div>
        </div>

      {/* Summary Cards */}
      <div className="budget-cards">
        <div className="budget-card">
          <h3>Total Budget</h3>
          <p className="value">₹{totalBudget.toLocaleString()}</p>
        </div>

        <div className="budget-card">
          <h3>Total Spent</h3>
          <p className="value">₹{spent.toLocaleString()}</p>
        </div>

        <div className="budget-card">
          <h3>Remaining</h3>
          <p className="value">₹{remaining.toLocaleString()}</p>
        </div>

        <div className="budget-card">
          <h3>Per Day Estimate</h3>
          <p className="value">₹{Math.round(perDayBudget).toLocaleString()}</p>
        </div>
      </div>

      {/* Per Day Breakdown Section */}
      <div className="per-day-section">
        <h2>📅 Day-Wise Budget</h2>

        <div className="days-list">
          {trip.days.map((d, i) => (
            <div key={i} className="day-card">
              <h4>{d.day}</h4>
              <p>Estimated: ₹{Math.round(perDayBudget).toLocaleString()}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
