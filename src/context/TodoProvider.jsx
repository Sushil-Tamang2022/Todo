import React, { useReducer } from 'react'
import { createContext } from 'react'
export const TodoContext = createContext();

const initialState = {
    todoItems: [],
}

const todoReducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case "add": {
            const isExists = state.todoItems.find((item) => {
                return item.id === action.payload.id
            })

            if (isExists) {
                return state;
            } else {
                let newTodoItems = [...state.todoItems, action.payload]
                return {
                    todoItems: newTodoItems,
                };
            }
        } 
        case "delete": {
            // filter
            const updatedTodo = state.todoItems.filter(item => item.id !== action.payload.id)
            return {
                todoItems: updatedTodo
            }
        }
        case "update" : {
            return 
        }
        case "deleteAll" : {
            return state
        }
        default : {
            return state
        }
    }
}

export const TodoProvider = ({ children }) => {
    const  [state, dispatch] = useReducer(todoReducer, initialState);
    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}
