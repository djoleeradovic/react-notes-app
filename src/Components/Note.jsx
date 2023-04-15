import { React, useContext, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { NotesContext } from "../App";

const Note = ({ id, text, date, color }) => {
  const { deleteNote, editNote, changeColor } = useContext(NotesContext);

  const [showColors, setShowColors] = useState(false);

  const change = (id, newColor) => {
    changeColor(id, newColor);
    setShowColors(false);
  };

  return (
    <article className={`note ${color}`} key={id}>
      <textarea
        spellCheck="false"
        autoCorrect="false"
        autoCapitalize="false"
        onChange={(e) => editNote(id, e.target.value)}
        value={text}
      ></textarea>
      <footer>
        <small>{date}</small>
        <button
          className="colors-btn"
          onClick={() => setShowColors((prev) => !prev)}
        ></button>
        <div className={showColors ? "colors" : "hide"}>
          <span className="default" onClick={() => change(id, "")}></span>
          <span className="danger" onClick={() => change(id, "danger")}></span>
          <span
            className="success"
            onClick={() => change(id, "success")}
          ></span>
          <span
            className="warning"
            onClick={() => change(id, "warning")}
          ></span>
        </div>
        <MdDeleteForever
          onClick={() => deleteNote(id)}
          className="delete-icon"
        />
      </footer>
    </article>
  );
};

export default Note;
