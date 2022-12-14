import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import TodoComponent from "../components/TodoComponent";
import { writeUserData } from "../firebase/utils";

const HomePage = ({
  todoText,
  setTodoText,
  todoList,
}: {
  todoText: string;
  setTodoText: Function;
  todoList: object;
}) => {
  const handleSetTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };
  return (
    <>
      <Card sx={{ minWidth: 275, boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
            Todo List App
          </Typography>
          <Typography variant="body2">
            Enter your todo, save it to server!
          </Typography>
        </CardContent>
        <CardActions>
          <TextField
            id="outlined-basic"
            label="Todo"
            variant="outlined"
            fullWidth
            value={todoText}
            onChange={handleSetTodoText}
          />
          <Button
            variant="contained"
            sx={{ py: 2, px: 5, ml: 2 }}
            onClick={() => {
              setTodoText("");
              writeUserData(todoText);
            }}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
      <TodoComponent todoList={todoList} />
    </>
  );
};

export default HomePage;
