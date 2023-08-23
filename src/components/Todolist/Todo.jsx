import React, {useReducer} from 'react';

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
    loading: false
}

const ADD_JOB = 'ADD_JOB';
const SET_JOBNAME = 'SET_JOBNAME';
const SET_LOADING = 'SET_LOADING';

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_JOB: {
            let newTodoList = [...state.todoList];
        }
    }
}
function Todo(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            
        </div>
    );
}

export default Todo;