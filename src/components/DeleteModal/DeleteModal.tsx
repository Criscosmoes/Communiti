import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import LoadingButton from "@mui/lab/LoadingButton";
import { toast } from "react-toastify";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
};

export default function DeleteModal(props: any) {
  const { openButton, onSubmit, item } = props;

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClick = async () => {
    setLoading(true);

    try {
      await onSubmit(item);

      setLoading(false);
      handleClose();
      toast.success("Successfully deleted", { position: "bottom-left" });
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>{openButton}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you use you want to delete this?
          </Typography>
          <LoadingButton className="submit" onClick={onClick} loading={loading}>
            Delete
          </LoadingButton>
        </Box>
      </Modal>
    </div>
  );
}
