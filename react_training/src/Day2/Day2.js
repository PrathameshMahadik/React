import { tasks } from "./MockData";
import Counter from "./Task1/Counter";
import LanguageSwitcher from "./Task10/LanguageSwitcher";
import Shopping from "./Task11/Shopping";
import VotingApp from "./Task12/Voter";
import Parent from "./Task13/Parent";
import TaskList from "./Task14/TaskList";
import StudentList from "./Task15/StudentList";
import EmployeeSalary from "./Task16/EmployeeSalary";
import CopyButton from "./Task17/CopyButton";
import Storage from "./Task18/Storage";
import CountDownTimer from "./Task19/CountDownTimer";
import PersonForm from "./Task2/PersonForm";
import ToDoList from "./Task3/ToDoList";
import RandomNumberGenerator from "./Task4/RandomNumberGenerator";
import CounterWithStep from "./Task5/CountWithStep";
import Clock from "./Task6/Clock";
import Notification from "./Task7/Notification";
import SlideShow from "./Task8/SlideShow";
import ThemeSwitcher from "./Task9/ThemeSwitcher";

const Day2 = () => {
  return (
    <div className="App">
      <Counter />
      <PersonForm />
      <ToDoList />
      <RandomNumberGenerator />
      <CounterWithStep />
      <Clock />
      <Notification />
      <SlideShow />
      <ThemeSwitcher />
      <LanguageSwitcher />
      <Shopping />
      <VotingApp />
      <Parent />
      <TaskList tasks={tasks} />
      <StudentList />
      <EmployeeSalary />
      <CopyButton />
      <Storage />
      <CountDownTimer />
    </div>
  );
};
export default Day2;
