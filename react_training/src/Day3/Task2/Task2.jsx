/* 2.Extend the previous application to demonstrate the use of nested contexts.
Create a new context to manage user preferences (e.g., theme preference).
Modify the parent component to provide both the authentication and preferences contexts.
Create a child component that consumes both contexts.
Allow the user to change their theme preference (light/dark) using a button in the child component.
Display the theme preference in the UI and adjust the component's styling accordingly. */
import React from "react";
import { Child2 , ParentProvider2} from "../Components";
import { ThemeProvider } from "../Components/ParentTask2";

const Task2 = () => {
  return (
    <div>
      <ThemeProvider>
        <ParentProvider2>
          <Child2 />
        </ParentProvider2>
      </ThemeProvider>
    </div>
  );
};

export default Task2;
