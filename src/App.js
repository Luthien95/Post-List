import React from "react";
import "./styles.css";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";

import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}
