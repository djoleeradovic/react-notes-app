import { React, useState, useEffect, createContext } from "react";
import "./index.css";
import NotesList from "./Components/NotesList";
import SearchNote from "./Components/SearchNote";

export const NotesContext = createContext();

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [search, setSetSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();

    const newNote = {
      id: notes.length + 1,
      text: text,
      color: "default",
      date:
        date.toLocaleDateString() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes(),
    };

    const newNotes = [newNote, ...notes];

    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    localStorage.removeItem(`noteColor-${id}`);
  };

  const editNote = (id, newText) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, text: newText };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const changeColor = (id, color) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, color: color };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <NotesContext.Provider
      value={{ addNote, deleteNote, editNote, changeColor }}
    >
      <div className="container">
        <SearchNote handleSearchNote={setSetSearch} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(search.toLowerCase())
          )}
        />
      </div>
    </NotesContext.Provider>
  );
};

export default App;
