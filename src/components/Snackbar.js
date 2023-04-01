import { useDispatch, useSelector } from "react-redux";
import { hideSnackbar } from "../redux/actions/snackbar";
import { Snackbar as MuiSnackbar } from "@mui/material";
import { Alert } from "@mui/lab";

const Snackbar = () => {
  const dispatch = useDispatch();
  const snackbarState = useSelector((state) => {
    return state.snackbar;
  });

  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <MuiSnackbar
      open={snackbarState.isOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Alert onClose={handleClose} severity={snackbarState.variant}>
        {snackbarState.message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
