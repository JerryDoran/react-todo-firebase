import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(3)
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const InputForm = ({ input, addTodo, setInput }) => {
  const classes = useStyles();
  return (
    <form type="submit" className={classes.form}>
      <FormControl>
        <InputLabel color="primary">Enter Todo</InputLabel>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
      </FormControl>
      <Button
        disabled={!input}
        color="primary"
        variant="contained"
        size="small"
        onClick={addTodo}
        className={classes.button}
      >
        Add todo
      </Button>
    </form>
  );
};

export default InputForm;
