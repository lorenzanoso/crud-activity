import React from "react";

function StudentBody({ students, removeTodo, setEditMode, setEditStudent }) {
  const editSelectedStudent = (data) => {
    setEditMode(true);

    setEditStudent({ ...data });
  };

  return (
    <div className="container">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Student Name</th>
            <th scope="col">Student Email</th>
            <th scope="col">Student Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.number}</td>
              <td>
                <button
                  // onClick={() => editStudent(data)}
                  onClick={() => editSelectedStudent(data)}
                  className="btn btn-success me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeTodo(data.id)}
                  className="btn btn-danger "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentBody;
