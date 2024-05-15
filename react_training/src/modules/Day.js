import {
  Greeting,
  UserCard,
  Weather,
  Counter,
  TaskList,
  Button,
} from "./Day1/Index";
import {
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
} from "./Day2/index";
import { buttonData, task, userData } from "../MockData/Day1Data";
import { tasks } from "../MockData/MockData";

const Day = ["Day-1", "Day-2", "Day-3", "Day-4", "Day-5", "Day-6"];
const Task = {
  "Day-1": ["Task-1", "Task-2", "Task-3", "Task-4", "Task-5", "Task-6"],
  "Day-2": [
    "Task-1",
    "Task-2",
    "Task-3",
    "Task-4",
    "Task-5",
    "Task-6",
    "Task-7",
    "Task-8",
    "Task-9",
    "Task-10",
    "Task-11",
    "Task-12",
    "Task-13",
    "Task-14",
    "Task-15",
    "Task-16",
    "Task-17",
    "Task-18",
    "Task-19",
  ],
  "Day-3": ["Task-1", "Task-2", "Task-3", "Task-4", "Task-5"],
  "Day-4": [
    "Task-1",
    "Task-2",
    "Task-3",
    "Task-4",
    "Task-5",
    "Task-6",
    "Task-7",
    "Task-8",
    "Task-9",
    "Task-10",
    "Task-11",
    "Task-12",
    "Task-13",
    "Task-14",
  ],
  "Day-5": [
    "Task-1",
    "Task-4",
    "Task-5",
    "Task-7",
    "Task-12",
    "Task-13",
    "Task-14",
    "Task-15",
    "Task-16",
  ],
  "Day-6": ["Task-1", "Task-3", "Task-4", "Task-5", "Task-6"],
};
const Day1 = [
  <Greeting />,
  <UserCard userData={userData} />,
  <Weather temp={29} />,
  <Counter />,
  <TaskList task={task} />,
  <Button buttonData={buttonData} />,
];
const Day2 = [
  <Counter />,
  <PersonForm />,
  <ToDoList />,
  <RandomNumberGenerator />,
  <CounterWithStep />,
  <Clock />,
  <Notification />,
  <SlideShow />,
  <ThemeSwitcher />,
  <LanguageSwitcher />,
  <Shopping />,
  <VotingApp />,
  <Parent />,
  <TaskList1 tasks={tasks} />,
  <StudentList />,
  <EmployeeSalary />,
  <CopyButton />,
  <Storage />,
  <CountDownTimer />,
];
export {
  Day,
  Task,
  Day1,
  Day2,
};
