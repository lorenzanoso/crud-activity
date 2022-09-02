import React from "react";
import { useState } from "react";
import AddStudentHeader from "./AddStudentHeader";
import StudentBody from "./StudentBody";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState({});
  const [editMode, setEditMode] = useState(false);

  const addStudent = (newStudentList) => {
    const newStudentLists = [newStudentList, ...students];

    setStudents(newStudentLists);
  };

  const removeTodo = (id) => {
    const newStudentLists = [...students].filter((data) => data.id !== id);
    setStudents(newStudentLists);
  };

  const updateStudent = () => {
    const newStudents = students.map((data) =>
      data.id === editStudent.id ? editStudent : data
    );

    setStudents(newStudents);
  };

  return (
    <div>
      <div className="container p-5 bg-dark">
        <h1 className="text-white">STUDENT RECORD</h1>
      </div>

      <AddStudentHeader
        addStudent={addStudent}
        editStudent={editStudent}
        editMode={editMode}
        setEditMode={setEditMode}
        setEditStudent={setEditStudent}
        updateStudent={updateStudent}
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
