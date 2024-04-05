/* 16.Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
Define an array of employee objects, where each object has a name and salary property.
Use the useMemo hook to calculate the average salary of employees.
Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
Render the average salary on the screen.
Include a button that, when clicked, updates the employee data with new salaries. */
import React, { useMemo } from "react";
import emp from "./emp";

const EmployeeSalary = () => {
  const avgSalary = useMemo(() => {
    let length = emp.length;
    const sum = emp.reduce((acc, curr) => {
      acc = acc + curr.salary;
      return acc;
    }, 0);
    return (sum / length).toFixed(2);
  }, []);
  return (
    <div>
      <h1>Employee Salary </h1>
      <div>Average Salary : {avgSalary}</div>
    </div>
  );
};
export default EmployeeSalary;
