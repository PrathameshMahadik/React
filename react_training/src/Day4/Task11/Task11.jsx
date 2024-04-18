// 11.Design a modal dialog component using Material-UI's Dialog component.
// Use it to display additional information or capture user input within your app.
import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
} from "../Components/material";
import "../CSS/Task10.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Task11 = () => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.validity.valid) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };
  return (
    <div className="signInBox">
      <Box
        height={300}
        width={300}
        my={4}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        gap={6}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
      <div>
      <h2>Ques11</h2>
      <br /><br />
        <TextField
          required
          label="Name"
          value={name}
          onChange={handleNameChange}
          error={nameError}
          inputProps={{
            pattern: "[A-Za-z ]+",
          }}
          helperText={
            nameError ? "Please enter your name (letters and spaces only)" : ""
          }
        />
        <br />
        <br />
        <Button onClick={handleOpen} variant="contained" disabled={name.length === 0} className="button1">
          Open modal
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
          </Box>
        </Modal>
      </div>
      </Box>
    </div>
  );
};
export default Task11;
