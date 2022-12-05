import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { config } from "./config";

const app = initializeApp(config);
const database = getDatabase(app);
export const auth = getAuth();

export const signInWithGoogle = () => {
  signInWithRedirect(auth, new GoogleAuthProvider());
};

export const SignOut = () => {
  signOut(auth);
};
export const writeUserData = (newTodo: string) => {
  if (!auth.currentUser) console.log("not login.");
  const userId = auth.currentUser?.uid;
  const listRef = ref(database, "users/" + userId + "/list");
  const newRef = push(listRef, newTodo);
};

export const listenUserData = (userId: string, callback: Function) => {
  const todoListRef = ref(database, "users/" + userId + "/list");
  onValue(todoListRef, (snapshot) => {
    console.log("Value Coming");

    const data = snapshot.val();
    callback(data);
  });
};

export const deleteUserData = (id: string) => {
  if (!auth.currentUser) console.log("not login.");
  const userId = auth.currentUser?.uid;
  const dataRef = ref(database, "users/" + userId + "/list/" + id);
  remove(dataRef);
};
