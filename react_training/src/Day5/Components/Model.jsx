import React, { useState } from "react";
import { Box, Button, Typography, Modal } from "../CSS_Files/mui";

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

const Model = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { a, b } = props;

  return (
    <>
      <h2>Modal Component</h2>
      <div className="modalComponent">
        <Button
          style={{ border: "1px solid #000", width: "200px" }}
          onClick={handleOpen}
        >
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
              <strong>{a}</strong>
            </Typography>
            <Typography id="modal-modal-body" variant="h6" component="h5">
              {b}
            </Typography>
            <Button
              style={{ border: "1px solid #000", width: "200px" }}
              onClick={handleClose}
            >
              Close modal
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default Model;
