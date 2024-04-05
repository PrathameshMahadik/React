/* 2.Build a form that includes various input fields like text inputs, checkboxes, and radio buttons. 
Ensure that each input is a controlled component. 
When the user submits the form, log the form data to the console. */
import React, { useState } from "react";

const Task2 = () => {
    const [name,setName] = useState("")
    const [check,setCheck] = useState(false)
    const [option,setOption] = useState("Option1")
    const handleSubmit = (e) => {
        console.log("Name :",name);
        console.log(check? "Task is Completed!":"Task is incomplete!");
        console.log("Department Name :",option);
    }
  return (
    <div>
      <h1>Task2</h1>
      <label>
        Enter Name:
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      </label>
      <br />
      <label>Task Status 
        <br />
        <input type="checkbox" name="task" value={check} onChange={(e)=>setCheck(!check)}/>Task Completed
        <br />
        Select Department :
        <input type="radio" name="dept" id="" onChange={(e)=>setOption("Python")}/>Python
        <input type="radio" name="" onChange={(e)=>setOption("Node")}/>Node
        <br />
        <button type="submit"onClick={handleSubmit}>Submit</button>
      </label>
    </div>
  );
};

export default Task2;
