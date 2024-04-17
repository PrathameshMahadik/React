import { Task1, ErrorCounter, Task3, Task4, Task5, Task6 } from "./index";
import "./CSS/Day6.css";
import Task2 from "./Task2/Task2";

function Assignment6() {
  return (
    <>
      <div className="Task-1">
        <h2>Task1 1</h2>
        <Task1 />
      </div>

      <div className="Task-3">
        <h2>Task 3</h2>
        <Task3 />
      </div>

      <div className="quTask">
        <h2>Task 4</h2>
        <Task2 fallback={"Error Loading Page"}>
          <Task4 />
        </Task2>
      </div>

      <div className="Task-5">
        <h2>Task 5</h2>
        <Task5
          name="John Doe"
          email="john.doe@example.com"
          phone="123-456-7890"
        />
      </div>

      <div className="Task-6">
        <h2>Task 6</h2>
        <Task6 />
      </div>
    </>
  );
}
export default Assignment6;
