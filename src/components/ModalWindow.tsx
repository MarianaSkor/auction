import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ModalWindowProp } from "src/constants";
import { ROUTES } from "src/constants/routes";

export const ModalWindow = ({ isOpen, handleClose }: ModalWindowProp) => {
  const navigate = useNavigate();

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {" For continue buying, please sign up or log in:)"}
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              navigate(ROUTES.REGISTER);
              handleClose();
            }}
          >
            Sign up
          </Button>
          <Button
            autoFocus
            onClick={() => {
              navigate(ROUTES.AUTHORIZATION);
              handleClose();
            }}
          >
            Log in
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
