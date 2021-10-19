import React from "react";
import Students from "./Students";

export default function StudentContainer(props) {
  console.log(props.students);

  const num = [1, 2, 3, 4, 5, 6];

  //   for (const i of num) {
  //     console.log(i);
  //   }
  //   num.map((i) => console.log(i));
  // this is the same thing
  return (
    <div>
      <h1>Student Container</h1>
      {/* {props?.students.map((student) => (
        <Students student={student} />
      ))} */}
    </div>
  );
}