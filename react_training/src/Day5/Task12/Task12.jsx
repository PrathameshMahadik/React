/* Create a reusable Button component in React that accepts props for different styles 
(e.g., primary, secondary, danger) and click handlers. Demonstrate how to use this component in a sample application. */
import React from "react";
import { ReuseButton } from "../Components/index";
import { buttons } from "../MockData/Task12";

const Task12 = () => {
  return (
    <>
      <h2>Resuable Button Component</h2>
      <div className="reuseButton">
        {buttons.map((button, index) => (
          <section key={`name_${index}`}>
            <ReuseButton
              key={index}
              label={button.label}
              style={button.style}
              onClick={button.onClick}
            />
            <br />
            <br />
          </section>
        ))}
      </div>
    </>
  );
};

export default Task12;
