// import React, { useEffect, useState } from "react";
// import "./Profile.css";

// const Profile = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   // Fetch user profile details
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/user/profile", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         if (!response.ok) throw new Error("Failed to fetch profile");

//         const data = await response.json();
//         setUser({
//           name: data.name || "",
//           email: data.email || "",
//           password: "",
//         });
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSave = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/user/profile", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify(user),
//       });

//       if (!response.ok) throw new Error("Failed to update profile");

//       alert("Profile updated successfully!");
//       setIsEditing(false);
//     } catch (error) {
//       console.error("Error saving profile:", error);
//     }
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <h2>Your Profile</h2>
//         <button className="edit-btn" onClick={handleEditToggle}>
//           {isEditing ? "Cancel" : "Edit"}
//         </button>
//       </div>

//       <div className="profile-field">
//         <label>Your Name :</label>
//         <input
//           type="text"
//           name="name"
//           value={user.name}
//           readOnly={!isEditing}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="profile-field">
//         <label>Your Email :</label>
//         <input
//           type="email"
//           name="email"
//           value={user.email}
//           readOnly={!isEditing}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="profile-field">
//         <label>Your Password :</label>
//         <input
//           type="password"
//           name="password"
//           value={user.password}
//           readOnly={!isEditing}
//           onChange={handleChange}
//         />
//       </div>

//       {isEditing && (
//         <button className="save-btn" onClick={handleSave}>
//           Save
//         </button>
//       )}
//     </div>
//   );
// };

// export default Profile;

// import React, { useEffect, useState } from "react";
// import "./Profile.css";

// const Profile = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   // Fetch user profile
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/user/profile", {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         if (!res.ok) throw new Error("Failed to fetch profile");
//         const data = await res.json();

//         setUser((prev) => ({
//           ...prev,
//           name: data.name || "",
//           email: data.email || "",
//         }));
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSave = async () => {
//   try {
//     const response = await fetch("http://localhost:5000/api/user/profile", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify({
//         name: user.name,
//         email: user.email,
//         password: user.password,
//         newPassword: user.newPassword,
//       }),
//     });

//     const result = await response.json();

//     if (!response.ok) {
//       alert(result.message || "Failed to update");
//       return;
//     }

//     alert("Profile updated successfully!");

//     // refresh UI
//     setUser({
//       name: result.user.name,
//       email: result.user.email,
//       password: "",
//       newPassword: "",
//       confirmPassword: "",
//     });

//     setIsEditing(false);
//   } catch (error) {
//     console.error("Error saving profile:", error);
//     alert("Error updating profile");
//   }
// };


//   return (
//     <div className="profile-wrapper">

//       {/* Profile Card */}
//       <div className="profile-card">

//         {/* Left profile icon */}
//         <div className="profile-avatar">
//           <img src="/L.png" alt="profile" />
//         </div>

//         {/* Content */}
//         <div className="profile-content">
//           <div className="profile-header">
//             <h2>Your Profile</h2>
//             <button className="edit-btn" onClick={handleEditToggle}>
//               {isEditing ? "Cancel" : "Edit"}
//             </button>
//           </div>

//           {/* Name */}
//           <div className="profile-field">
//             <label>Your Name :</label>
//             <input
//               type="text"
//               name="name"
//               value={user.name}
//               readOnly={!isEditing}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Email */}
//           <div className="profile-field">
//             <label>Your Email :</label>
//             <input
//               type="email"
//               name="email"
//               value={user.email}
//               readOnly={!isEditing}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="profile-field">
//             <label>Your Password :</label>
//             <input
//               type="password"
//               name="password"
//               value={user.password}
//               readOnly={!isEditing}
//               onChange={handleChange}
//             />
//           </div>


//           {/* Old Password */}
//           {isEditing && (
//             <div className="profile-field">
//               <label>Current Password :</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={user.password}
//                 onChange={handleChange}
//               />
//             </div>
//           )}

//           {/* New Password */}
//           {isEditing && (
//             <div className="profile-field">
//               <label>New Password :</label>
//               <input
//                 type="password"
//                 name="newPassword"
//                 value={user.newPassword}
//                 onChange={handleChange}
//               />
//             </div>
//           )}

//           {/* Confirm Password */}
//           {isEditing && (
//             <div className="profile-field">
//               <label>Confirm Password :</label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={user.confirmPassword}
//                 onChange={handleChange}
//               />
//             </div>
//           )}

//           {/* Save Button */}
//           {isEditing && (
//             <button className="save-btn" onClick={handleSave}>
//               Save Changes
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useEffect, useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    username: "",   // ← changed from name
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Fetch user profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/user/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();

        setUser((prev) => ({
          ...prev,
          username: data.username || "",   // ← changed
          email: data.email || "",
        }));
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          username: user.username,   // ← changed
          email: user.email,
          password: user.password,
          newPassword: user.newPassword,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Failed to update");
        return;
      }

      alert("Profile updated successfully!");

      // refresh UI
      setUser({
        username: result.user.username,  // ← changed
        email: result.user.email,
        password: "",
        newPassword: "",
        confirmPassword: "",
      });

      setIsEditing(false);
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Error updating profile");
    }
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-avatar">
          <img src="/L.png" alt="profile" />
        </div>

        <div className="profile-content">
          <div className="profile-header">
            <h2>Your Profile</h2>
            <button className="edit-btn" onClick={handleEditToggle}>
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          {/* Username */}
          <div className="profile-field">
            <label>Your Name :</label>
            <input
              type="text"
              name="username"     // ← changed
              value={user.username} // ← changed
              readOnly={!isEditing}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="profile-field">
            <label>Your Email :</label>
            <input
              type="email"
              name="email"
              value={user.email}
              readOnly={!isEditing}
              onChange={handleChange}
            />
          </div>

          <div className="profile-field">
            <label>Your Password :</label>
            <input
              type="password"
              name="password"
              value={user.password}
              readOnly={!isEditing}
              onChange={handleChange}
            />
          </div>

          {isEditing && (
            <div className="profile-field">
              <label>Current Password :</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
          )}

          {isEditing && (
            <div className="profile-field">
              <label>New Password :</label>
              <input
                type="password"
                name="newPassword"
                value={user.newPassword}
                onChange={handleChange}
              />
            </div>
          )}

          {isEditing && (
            <div className="profile-field">
              <label>Confirm Password :</label>
              <input
                type="password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
              />
            </div>
          )}

          {isEditing && (
            <button className="save-btn" onClick={handleSave}>
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
