import React, { useState, useEffect } from "react";
import "./Journal.css";

const Journal = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null); // null = show main page, number = edit note

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Load notes from localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const handleNewNote = () => {
    setCurrentNote("new");
    setTitle("");
    setContent("");
  };

  const handleOpenNote = (index) => {
    setCurrentNote(index);
    const note = notes[index];
    setTitle(note.title);
    setContent(note.content);
  };

  const handleSave = () => {
    let updatedNotes = [...notes];
    const noteData = { title, content, date: new Date().toISOString() };

    if (currentNote === "new") {
      updatedNotes.push(noteData);
    } else {
      updatedNotes[currentNote] = noteData;
    }

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
    setCurrentNote(null); // go back to main page
  };

  const handleBack = () => {
    setCurrentNote(null);
  };

  // --- Render ---
  if (currentNote !== null) {
    // Note editor view
    return (
      <div className="editor-container">
        <button className="back-btn" onClick={handleBack}>⬅ Back</button>
        <input
          className="note-title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="note-content"
          placeholder="Start writing..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="save-note-btn" onClick={handleSave}>Save</button>
      </div>
    );
  }

  // Main journal page view
  return (
    <div className="journal-container">
      <div className="new-note" onClick={handleNewNote}>
        <span className="plus-icon">+</span>
        <p>Create New Note</p>
      </div>

      {notes.length > 0 && (
        <div className="notes-preview">
          <h3>Saved Notes</h3>
          {notes.map((note, idx) => (
            <div key={idx} className="note-preview-card" onClick={() => handleOpenNote(idx)}>
              <h4>{note.title || "Untitled"}</h4>
              <p>{note.content.substring(0, 50)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Journal;