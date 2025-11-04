import React, { useState, useEffect } from "react";
import "./Memories.css";

const Memories = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbum, setNewAlbum] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    const savedAlbums = localStorage.getItem("albums");
    if (savedAlbums) setAlbums(JSON.parse(savedAlbums));
  }, []);

  const updateAlbums = (updatedAlbums, updatedSelectedAlbum = null) => {
    setAlbums(updatedAlbums);
    localStorage.setItem("albums", JSON.stringify(updatedAlbums));
    if (updatedSelectedAlbum) setSelectedAlbum(updatedSelectedAlbum);
  };

  const addAlbum = () => {
    if (!newAlbum.trim()) return;
    const newEntry = { name: newAlbum, location, description, images: [] };
    updateAlbums([...albums, newEntry]);
    setNewAlbum("");
    setLocation("");
    setDescription("");
  };

  const deleteAlbum = (name) => {
    if (!window.confirm(`Delete album "${name}"?`)) return;
    const updated = albums.filter((a) => a.name !== name);
    updateAlbums(updated, selectedAlbum?.name === name ? null : selectedAlbum);
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    const base64Images = await Promise.all(
      files.map(
        (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          })
      )
    );

    const updatedAlbums = albums.map((album) =>
      album.name === selectedAlbum.name
        ? { ...album, images: [...album.images, ...base64Images] }
        : album
    );

    const updatedSelectedAlbum = {
      ...selectedAlbum,
      images: [...selectedAlbum.images, ...base64Images],
    };

    updateAlbums(updatedAlbums, updatedSelectedAlbum);
  };

  const deletePhoto = (index) => {
    if (!window.confirm("Delete this photo?")) return;
    const updatedImages = selectedAlbum.images.filter((_, i) => i !== index);
    const updatedAlbums = albums.map((a) =>
      a.name === selectedAlbum.name ? { ...a, images: updatedImages } : a
    );
    const updatedSelectedAlbum = { ...selectedAlbum, images: updatedImages };
    updateAlbums(updatedAlbums, updatedSelectedAlbum);
  };

  const goBack = () => setSelectedAlbum(null);

  return (
    <div className="memories-container">
      {!selectedAlbum ? (
        <>
          <h2>My Travel Albums</h2>

          <div className="add-album">
            <input
              type="text"
              placeholder="Album name (e.g., Goa Trip)"
              value={newAlbum}
              onChange={(e) => setNewAlbum(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={addAlbum}>Add Album</button>
          </div>

          <div className="album-grid">
            {albums.length === 0 && <p>No albums yet.</p>}
            {albums.map((album, index) => (
              <div key={index} className="album-card">
                <div
                  onClick={() => setSelectedAlbum(album)}
                  style={{ cursor: "pointer" }}
                >
                  {album.images[0] ? (
                    <img
                      src={album.images[0]}
                      alt={album.name}
                      className="album-cover"
                    />
                  ) : (
                    <div className="album-placeholder">📷</div>
                  )}
                  <p className="album-name">{album.name}</p>
                  {album.location && <p className="album-location">📍 {album.location}</p>}
                  {album.description && <p className="album-description">{album.description}</p>}
                </div>
                <button
                  className="delete-album-btn"
                  onClick={() => deleteAlbum(album.name)}
                >
                  🗑 Delete
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Only show back button */}
          <button className="back-btn" onClick={goBack}>
            ← Back to Albums
          </button>

          {/* Photo upload */}
          <div className="upload-section">
            <label className="upload-btn">
              ➕ Add Pictures
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                hidden
              />
            </label>
          </div>

          <div className="photo-grid">
            {selectedAlbum.images.length > 0 ? (
              selectedAlbum.images.map((img, i) => (
                <div key={i} className="photo-card">
                  <img src={img} alt={`memory-${i}`} />
                  <button
                    className="delete-photo-btn"
                    onClick={() => deletePhoto(i)}
                  >
                    🗑
                  </button>
                </div>
              ))
            ) : (
              <p className="no-photos">No photos added yet.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Memories;