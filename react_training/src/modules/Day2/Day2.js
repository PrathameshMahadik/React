import { tasks } from "../MockData/MockData";
import {
  Counter,
  LanguageSwitcher,
  Shopping,
  VotingApp,
  Parent,
  TaskList1,
  StudentList,
  EmployeeSalary,
  CopyButton,
  Storage,
  CountDownTimer,
  PersonForm,
  ToDoList,
  RandomNumberGenerator,
  CounterWithStep,
  Clock,
  Notification,
  SlideShow,
  ThemeSwitcher,
} from './index'

const Day2 = () => {
  return (
    <div className="App">
      <Counter />
      <hr />
      <PersonForm />
      <hr />
      <ToDoList />
      <hr />
      <RandomNumberGenerator />
      <hr />
      <CounterWithStep />
      <hr />
      <Clock />
      <hr />
      <Notification />
      <hr />
      <SlideShow />
      <hr />
      <ThemeSwitcher />
      <hr />
      <LanguageSwitcher />
      <hr />
      <Shopping />
      <hr />
      <VotingApp />
      <hr />
      <Parent />
      <hr />
      <TaskList1 tasks={tasks} />
      <hr />
      <StudentList />
      <hr />
      <EmployeeSalary />
      <hr />
      <CopyButton />
      <hr />
      <Storage />
      <hr />
      <CountDownTimer />
      <hr />
    </div>
  );
};
export default Day2;
