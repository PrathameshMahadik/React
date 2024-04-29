import Greeting from "./Task1/Greeting";
import UserCard from "./Task2/UserCard";
import Weather from "./Task3/Weather";
import Counter from "./Task4/Counter";
import TaskList from "./Task5/TaskList";
import Button from "./Task6/Button";
import { userData, task, buttonData } from "./mockData";

function Index() {

  return (
    <div className="App">
      <Greeting />
      <hr />
      <br/>
      <UserCard userData={userData} />
      <hr />
      <br />
      <Weather temp={29} />
      <hr />
      <Counter />
      <hr />
      <TaskList task={task} />
      <hr />
      <Button buttonData={buttonData} />
      <hr />
    </div>
  );
}
export default Index;
