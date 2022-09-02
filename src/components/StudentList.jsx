import React from "react";
import { useState } from "react";
import AddStudentHeader from "./AddStudentHeader";
import StudentBody from "./StudentBody";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editStudent, setEditStudent] = useState({});

  const addStudent = (newStudentList) => {
    const newStudentLists = [newStudentList, ...students];

    setStudents(newStudentLists);
  };

  const removeTodo = (id) => {
    const newStudentLists = [...students].filter((data) => data.id !== id);
    setStudents(newStudentLists);
  };

  // const getStudent = (data) => {
  //   if (data) {
  //     setEditMode(true);
  //   }

  //   setEditStudent(data);
  //   console.log(editStudent);
  // };

  return (
    <div>
      <div className="container p-5 bg-dark">
        <h1 className="text-white">STUDENT RECORD</h1>
      </div>

      <AddStudentHeader
        addStudent={addStudent}
        // editStudent={editStudent}
        // editMode={editMode}
        // setEditMode={setEditMode}
        // setEditStudent={setEditStudent}
      />
      <div className="container">
        <hr />
        <br />
      </div>
      <StudentBody
        students={students}
        removeTodo={removeTodo}
        editMode={editMode}
        setEditMode={setEditMode}
        editStudent={editStudent}
        setEditStudent={setEditStudent}
        // getStudent={getStudent}
      />
    </div>
  );
}

export default StudentList;
