import React from "react";

const students = [
  {
    id: 1,
    name: "Student 1",
  },
  {
    id: 2,
    name: "Student 2",
  },
  {
    id: 3,
    name: "Student 3",
  },
  {
    id: 4,
    name: "Student 4",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}

export default AttendanceBook;
