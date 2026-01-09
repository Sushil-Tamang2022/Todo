import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import NextTodo from "./pages/NextTodo";
import EditTodo from "./pages/EditTodo";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/todo' element={<Todo />}/> */}
        <Route path="/nextTodo" element={<NextTodo />} />
        <Route path="/editTodo" element={<EditTodo />} />
      </Routes>
    </div>
  );
};

export default App;
