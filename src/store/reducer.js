import {ADD_JOB, SET_JOBNAME, SET_LOADING, DELETE_JOB, UPDATE_JOB, SET_EDITTODO, SET_NEWNAME} from './constants'

const initialState = {
    todoList: [
        {
            id: 1,
            name: "Ăn cơm",
        },
        {
            id: 2,
            name: "Uống nước",
        },
        {
            id: 3,
            name: "Học bài",
        }
    ],
    jobname: "",
    editTodo: null,
    loading: false
}



const reducer = (state, action) => {
    switch (action.type) {
        case ADD_JOB: {
            let newTodoList = [...state.todoList];
            newTodoList.sort((todo1, todo2) => todo2.id - todo1.id);

            let newJob = {
                id: newTodoList[0].id + 1,
                name: state.jobname,
                complete: false
            }
            return {
                ...state,
                todoList: [...state.todoList, newJob],
                jobname: ''
            }
        }
        case SET_JOBNAME: {
            return {
                ...state,
                jobname: action.payload
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case UPDATE_JOB: {
            let newTodoList = state.todoList.map((todo) => {
                if (todo.id === action.payload) {
                    state.todoList[todo.id - 1].name = action.newName;      
                } 
                return todo;
            })

            console.log(newTodoList);
            
           return {
            ...state,
                todoList: newTodoList,
                editTodo: null,
                jobname: ''
           }

        }
        case DELETE_JOB: {
            let newTodoList = state.todoList.filter(item => item.id !== action.payload)
            return {
                ...state,
                todoList: newTodoList,
                jobname: ''
            }   
        }
        case SET_EDITTODO: {
            let newTodo = state.todoList.filter(item => item.id === action.payload)[0];
            return {
                ...state,
                editTodo: newTodo
            }
        }
        case SET_NEWNAME: {
            return {
                ...state,
                editTodo: {
                    ...state.editTodo,
                    name: action.payload
                }
            }
        }

        default: {
            throw new Error("Invalid Action")
        }
    }
}

export {reducer, initialState}