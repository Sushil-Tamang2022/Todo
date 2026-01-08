import React, { useEffect, useReducer } from "react";
import { createContext } from "react";
import { Bounce, toast } from "react-toastify";
export const TodoContext = createContext();

const getTodo = () => {
  let todos = localStorage.getItem("todoItem");
  return todos ? JSON.parse(todos) : [];
};

const initialState = {
  todoItems: getTodo(),
};

const todoReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "add": {
      const isExists = state.todoItems.find((item) => {
        return item.id === action.payload.id;
      });

      if (isExists) {
        return state;
      } else {
        let newTodoItems = [...state.todoItems, action.payload];
        toast.success("Todo is Added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return {
          todoItems: newTodoItems,
        };
      }
    }
    case "delete": {
      // filter
      //   first get id of that todo
      // then filter the todo except that todo
      // return new todo
      const newTodo = state.todoItems.filter((item) => {
        return item.id !== action.payload.id;
      });

      toast.warn("Deleted SuccessFully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      return {
        todoItems: newTodo,
      };
    }
    case "update": {
      return;
    }
    case "deleteAll": {
      return state;
    }
    default: {
      return state;
    }
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todoItem", JSON.stringify(state.todoItems));
  });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// localStorage.setItem("name", "Ram")
// const x = localStorage.getItem("name")
// localStorage.clear()
// console.log(x)
