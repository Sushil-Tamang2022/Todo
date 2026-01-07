import React, { useState } from "react";
const Todo = () => {
  // states
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  // add note
  const handleAddNote = () => {
    const note = {
      id: Date.now() + Math.random(),
      text: newNote,
    };
    setNotes([...notes, note]);
    setNewNote("");
  };

  // Delete Note
  const handleDelete = (id) => {
    const updatedNote = notes.filter((note) => note.id !== id);
    setNotes(updatedNote);
  };

  // Edit Start
  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  // cancelEdit
  const handleEditCancel = () => {
    setEditingId(null);
    setEditingText("");
  };

  // Save Edit
  const handleSaveEdit = (id) => {
    const updatedNote = notes.map((note) =>
      id === note.id ? { ...note, text: editingText } : note
    );
    setNotes(updatedNote);
    setEditingId(null);
    setEditingText("");
  };

  // Search
  const filteredNote = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  // console.log(search)

  // Render elements
  // console.log(editingText)

  return (
    <div className="border m-auto w-[800px] mt-10 p-10">
      <h1 className="bg-blue-400 text-center text-2xl">Note App</h1>
      <div className="flex justify-evenly w-full mt-3">
        <div className="space-x-10">
          <input
            className="outline-none border rounded-sm px-5 py-2"
            value={newNote}
            onChange={handleChange}
            type="text"
            placeholder="Enter the note"
          />
          <button onClick={handleAddNote} className="bg-black text-white px-5 py-2 rounded-sm">Add</button>
        </div>
        <div className="space-x-10">
          <input
            className="outline-none border rounded-sm"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search note"
          />
          <button className="bg-black text-white px-5 py-2 rounded-sm">Search</button>
        </div>
      </div>

      <ul className="mt-5">
        {filteredNote.map((note) => (
          <li className=" flex justify-start gap-20 space-x-10" key={note.id}>
            {editingId === note.id ? (
              <div className="flex justify-center">
                <div className="flex gap-5 ">
                  <div>
                    <input
                      className="outline-none border rounded-sm px-5 py-2"
                      onChange={(e) => setEditingText(e.target.value)}
                      value={editingText}
                      type="text"
                    />
                  </div>
                  <div className=" flex gap-10">
                    <div>
                      <button className="bg-black text-white px-5 py-2 rounded-sm" onClick={() => handleSaveEdit(note.id)}>
                        Save
                      </button>
                    </div>
                    <div>
                      <button className="bg-black text-white px-5 py-2 rounded-sm" onClick={handleEditCancel}>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {note.text}{" "}
                <button className="bg-black text-white px-5 py-2" onClick={() => handleEdit(note.id, note.text)}>
                  Edit
                </button>{" "}
                <button className="bg-black text-white px-5 py-2" onClick={() => handleDelete(note.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
