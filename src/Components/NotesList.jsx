import React from "react";
import { AddNote, Note } from "./";

const NotesList = ({ notes }) => {
  return (
    <>
      <div className="notes-list">
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={note.id}
              text={note.text}
              date={note.date}
              color={note.color}
            />
          );
        })}
        <AddNote />
      </div>
    </>
  );
};

export default NotesList;
