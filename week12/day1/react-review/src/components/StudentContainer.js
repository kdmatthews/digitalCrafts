import React from "react";
import Students from "./Students";
import { useSelector } from "react-redux";

export default function StudentContainer() {
 

  const num = [1, 2, 3, 4, 5, 6];
  const students = useSelector(state=> state.students)
  //   for (const i of num) {
  //     console.log(i);
  //   }
  //   num.map((i) => console.log(i));
  // this is the same thing
  return (
    <div>
      <h1>Student Container</h1>
      {students.map((student) => (
        <Students student={student} />
      ))}
    </div>
  );
}