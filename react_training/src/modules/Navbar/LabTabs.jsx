import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Day1, Day2, Task } from "../Day";
import {
  Questions_Day1,
  Questions_Day2,
  Questions_Day3,
  Questions_Day4,
  Questions_Day5,
  Questions_Day6,
} from "../../constants/Question_constants";
import { Day3 } from "../Day3";
import { Day4 } from "../Day4";
import { Day6 } from "../Day6";
import { Day5 } from "../Day5/index";

export default function LabTabs(props) {
  const { days, value, setValue } = props;

  let day = "";
  let Tasks = "";
  let Questions = "";

  switch (days) {
    case "Day-1":
      Tasks = Day1;
      Questions = Questions_Day1;
      day = Task[days];
      break;

    case "Day-2":
      Tasks = Day2;
      Questions = Questions_Day2;
      day = Task[days];
      break;

    case "Day-3":
      Tasks = Day3;
      Questions = Questions_Day3;
      day = Task[days];
      break;

    case "Day-4":
      Tasks = Day4;
      Questions = Questions_Day4;
      day = Task[days];

      break;

    case "Day-5":
      Tasks = Day5;
      Questions = Questions_Day5;
      day = Task[days];
      break;

    case "Day-6":
      Tasks = Day6;
      Questions = Questions_Day6;
      day = Task[days];

      break;

    default:
      Tasks = Day1;
      Questions = Questions_Day1;
      day = Task["Day-1"];
      break;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {day.map((Component, index) => (
              <Tab
                key={`name${index}`}
                label={Component}
                value={`${index + 1}`}
              />
            ))}
          </TabList>
        </Box>
        {Tasks.map((Component, index) => (
          <TabPanel key={index} value={`${index + 1}`}>
            <h3>Question :</h3>
            <p>{Questions[index]}</p>
            <h3>Solution :</h3>
            {Component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
