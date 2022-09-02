import React from "react";
import { useState } from "react";

function AddStudentHeader({
  addStudent,
  editStudent,
  editMode,
  setEditMode,
  setEditStudent,
  updateStudent,
}) {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setinputEmail] = useState("");
  const [inputNumber, setinputNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addStudent({
      id: Math.floor(Math.random() * 1000000),
      name: inputName,
      email: inputEmail,
      number: inputNumber,
    });

    setInputName("");
    setinputEmail("");
    setinputNumber("");
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateStudent();
    setEditMode(false);
  };

  return (
    <div className="container p-2 bg-secondary">
      {editMode ? (
        <form onSubmit={handleSave}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Student Name"
                value={editStudent.name}
                onChange={(e) =>
                  setEditStudent({ ...editStudent, name: e.target.value })
                }
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Student Email"
                value={editStudent.email}
                onChange={(e) =>
                  setEditStudent({ ...editStudent, email: e.target.value })
                }
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Student Number"
                value={editStudent.number}
                onChange={(e) =>
                  setEditStudent({ ...editStudent, number: e.target.value })
                }
              />
            </div>
            <div className="col">
              <button
                className="btn btn-primary"
                type="submit"
                style={{ width: "100%" }}
              >
                SAVE CHANGES
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Student Name"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Student Email"
                value={inputEmail}
                onChange={(e) => setinputEmail(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Student Number"
                value={inputNumber}
                onChange={(e) => setinputNumber(e.target.value)}
              />
            </div>
            <div className="col">
              {/* <button
              className="btn btn-primary"
              type="submit"
              style={{ width: "100%" }}
            >
              SAVE CHANGES
            </button> */}

              <button
                className="btn btn-primary"
                type="submit"
                style={{ width: "100%" }}
              >
                ADD STUDENT
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddStudentHeader;
