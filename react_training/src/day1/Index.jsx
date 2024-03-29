import Greeting from "./Task1/Greeting";
import UserCard from "./Task2/UserCard";
import Weather from "./Task3/Weather";
import Counter from "./Task4/Counter";
import TaskList from "./Task5/TaskList";
import Button from "./Task6/Button";

function Index() {
  const userData = [
    {
      name: "ABC",
      email: "abc@gmail.com",
      avatarURL:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/176a1601-0d2b-4754-92bb-c9e47b6af7c4/dg72x0s-a5a43284-834e-4a88-a6e2-169db238efdc.jpg/v1/fill/w_200,h_200,q_75,strp/avatar_for_social_media___business_man_by_assistant93_dg72x0s-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDI2IiwicGF0aCI6IlwvZlwvMTc2YTE2MDEtMGQyYi00NzU0LTkyYmItYzllNDdiNmFmN2M0XC9kZzcyeDBzLWE1YTQzMjg0LTgzNGUtNGE4OC1hNmUyLTE2OWRiMjM4ZWZkYy5qcGciLCJ3aWR0aCI6Ijw9MzczIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ocd53kbsbFDfSg9qYGMT4gKHcVTMePImBuXCfS-NqGM",
    },
    {
      name: "MNO",
      email: "mno@gmail.com",
      avatarURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNDlFost2VR4YAIcB7PKiguazi1x2W5VmSdXmQsj0NA&s",
    },
    {
      name: "PQR",
      email: "pqr@gmail.com",
      avatarURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKYo-1zGU0tVDXD5354U9eGVhBME6DpzRw8eBdPZ6IA&s",
    },
    {
      name: "XYZ",
      email: "xyz@gmail.com",
      avatarURL:
        "https://static.vecteezy.com/system/resources/thumbnails/024/183/525/small/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg",
    },
  ];
  const task = [
    { id: 123, title: "abc" },
    { id: 456, title: "pqr" },
    { id: 789, title: "xyz" },
  ];
  const buttonData = [
    {
      color: "blue",
      text: "PQR",
    },
    {
      color: "red",
      text: "ABC",
    },
    {
      color: "Green",
      text: "XYZ",
    },
  ];
  return (
    <div className="App">
      <Greeting />
      <UserCard userData={userData} />
      <Weather temp={29} />
      <Counter />
      <TaskList task={task} />
      <Button buttonData={buttonData} />
    </div>
  );
}
export default Index;
