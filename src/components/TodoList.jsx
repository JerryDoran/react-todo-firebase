import { List } from "@material-ui/core";
import Todo from "./Todo";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "grid",
    placeItems: "center",
    marginTop: "30px"
  }
}));

const TodoList = ({ todos }) => {
  const classes = useStyles();
  return (
    <>
      <List className={classes.list}>
        {todos.map((todo, index) => {
          return <Todo todo={todo} index={index} />;
        })}
      </List>
    </>
  );
};

export default TodoList;
