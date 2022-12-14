import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Container, Paper, Typography } from "@mui/material";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import { auth, listenUserData } from "./firebase/utils";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState<object>({});
  const navigate = useNavigate();
  const receivedDataCallback = (data: object) => {
    setTodoList(data);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("is changed");
      setIsLoading(false);
      if (user) {
        setIsLogin(true);
        listenUserData(user.uid, receivedDataCallback);
        navigate("/");
      } else {
        setTodoList({});
        setIsLogin(false);
        navigate("/login");
      }
    });

    return unsubscribe;
  }, []);
  return (
    <div>
      <NavBar isLogin={isLogin} isLoading={isLoading} />
      <Container fixed sx={{ pt: 4 }}>
        <Routes>
          <Route
            path="/"
            element=<HomePage
              todoText={todoText}
              setTodoText={setTodoText}
              todoList={todoList}
            />
          />
          <Route path="/login" element=<LoginPage /> />
        </Routes>
      </Container>
    </div>
  );
}
export default App;
