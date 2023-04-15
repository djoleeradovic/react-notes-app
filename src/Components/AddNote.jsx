import React, { useState, useRef, useContext } from "react";
import { NotesContext } from "../App";

const AddNote = () => {
  const { addNote } = useContext(NotesContext);

  const [noteText, setnoteText] = useState("");

  const maxLetters = 200;
  const textRef = useRef(null);

  const handleChange = (e) => {
    if (maxLetters - e.target.value.length >= 0) {
      setnoteText(e.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      addNote(noteText);
      setnoteText("");
      textRef.current.focus();
    }
  };

  return (
    <article className="note create">
      <textarea
        rows={8}
        cols={10}
        ref={textRef}
        placeholder="Type to add a note..."
        onChange={handleChange}
        value={noteText}
      ></textarea>

      <footer>
        <small>{maxLetters - noteText.length}</small>

        <button onClick={handleSave}>Save</button>
      </footer>
    </article>
  );
};

export default AddNote;
