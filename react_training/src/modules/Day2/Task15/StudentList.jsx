/*Create a functional component named StudentList that displays a list of student names..
Define an array of student names as a constant within the component.
Use the useMemo hook to memoize the list of student names.
Render the list of student names on the screen.
Include a button that, when clicked, appends a new student name to the list.*/
import React, { useMemo, useState } from "react";

const StudentList = () => {
  const [studentName, setStudentName] = useState([]);
  const [data, setData] = useState("");
  const memoStudents = useMemo(() => {
    return studentName.map((name, index) => {
      return <li key={index}>{name}</li>;
    });
  }, [studentName]);
  const addStudent = () => {
    setStudentName([...studentName, data]);

    setData("");
  };
  return (
    <>
    <h1>Student List</h1>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
        value={data}
      />
      <button onClick={() => addStudent()}>Add Student</button>

      <ul>{memoStudents}</ul>
    </>
  );
};
export default StudentList;
