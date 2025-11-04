import React, { useEffect, useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch user profile details
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch profile");

        const data = await response.json();
        setUser({
          name: data.name || "",
          email: data.email || "",
          password: "",
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
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
        body: JSON.stringify(user),
      });

      if (!response.ok) throw new Error("Failed to update profile");

      alert("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Your Profile</h2>
        <button className="edit-btn" onClick={handleEditToggle}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="profile-field">
        <label>Your Name :</label>
        <input
          type="text"
          name="name"
          value={user.name}
          readOnly={!isEditing}
          onChange={handleChange}
        />
      </div>

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
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      )}
    </div>
  );
};

export default Profile;