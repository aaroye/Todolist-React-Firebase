import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { deleteUserData } from "../firebase/utils";

const TodoComponent = ({ todoList }: { todoList: object }) => {
  let indents = [];
  const handleDelete = (key: string) => {
    deleteUserData(key);
  };
  for (const key in todoList) {
    const listKeyValuePair = [
      key,
      todoList[key as keyof typeof todoList] as string,
    ];

    indents.push(
      <Card
        key={uuidv4()}
        sx={{
          minWidth: 275,
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          my: 5,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardContent sx={{ flexGrow: 8 }}>
          <Typography variant="body2">{listKeyValuePair[1]}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            onClick={() => {
              handleDelete(listKeyValuePair[0]);
            }}
            sx={{}}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  }
  return <>{indents}</>;
};

export default TodoComponent;
