import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  ListItem,
  ListItemText,
  Modal
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import db from "../firebase.config";
import { SettingsPowerRounded } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  paper: {
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  modal: {
    display: "grid",
    placeItems: "center"
  },
  button: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2)
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const Todo = ({ todo, index }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo = () => {
    db.collection("todos").doc(todo.id).set(
      {
        todo: input
      },
      { merge: true }
    );
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <form type="submit" className={classes.form}>
        <FormControl>
          <InputLabel color="primary"></InputLabel>
          <Input
            autoFocus
            placeholder={todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </FormControl>
        <Button
          variant="outlined"
          size="small"
          onClick={updateTodo}
          className={classes.button}
        >
          Update
        </Button>
      </form>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {body}
      </Modal>
      <ListItem key={index} className={classes.listItem}>
        <ListItemText primary={todo.todo} secondary={Date().substring(0, 15)} />
        <IconButton
          color="secondary"
          onClick={(e) => db.collection("todos").doc(todo.id).delete()}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={() => setOpen(true)}>
          <EditIcon fontSize="small" />
        </IconButton>
      </ListItem>
    </div>
  );
};

export default Todo;
