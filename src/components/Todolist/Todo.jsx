import React, { useReducer } from 'react';


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

const ADD_JOB = 'ADD_JOB';
const SET_JOBNAME = 'SET_JOBNAME';
const SET_LOADING = 'SET_LOADING';
const DELETE_JOB = 'DELETE_JOB';
const UPDATE_JOB = 'UPDATE_JOB';
const SET_EDITTODO = 'SET_EDITTODO';
const SET_NEWNAME = 'SET_NEWNAME';

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
function Todo(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {todoList, jobname, editTodo, loading} = state

    return (
        <>
            <div className='container d-flex flex-colum justify-content-center align-items-center mt-5'>
                <div className='row col-sm-6'>
                    <h1 className='text-center'>Todo List</h1>
                    <div className='w-100'>
                        <div className='col-12 d-flex form-group justify-content-between'>
                            <input type="text" className="form-control"
                                value={jobname}
                                onInput={(e) => dispatch({ type: SET_JOBNAME, payload: e.target.value })}
                            />
                            <button className="btn btn-sm btn-primary"
                                onClick={() => dispatch({ type: ADD_JOB, payload: null })}>
                                Add Job</button>

                            {/* <button className="btn btn-sm btn-secondary" onClick={() => dispatch({type: SET_LOADING, payload: true})}>
                                Set Loading</button> */}
                        </div>

                    </div>
                    <div className='w-100'>
                        <ul className='list-group'>
                            {
                                state?.todoList?.map((todo) => (
                                    <li key={todo.id} className='list-group-item list-group-item-secondary d-flex align-items-center justify-content-between '>
                                        {
                                            (editTodo && editTodo.id === todo.id) ? (
                                                <>

                                                    <input type="text"  className='form-control' style={{ width: '90%' }}
                                                        value={editTodo.name || todo.name} onInput={(e)=> dispatch({type: SET_NEWNAME, payload: e.target.value})}/>
                                                    <div>
                                                        <i role="button" className='fa fa-save text-warning me-2'
                                                          onClick={() => dispatch({ type: UPDATE_JOB, 
                                                                                    payload: todo.id, 
                                                                                    newName: editTodo.name || todo.name })} ></i>
                                                        <i role="button" className='fa fa-times text-danger'
                                                          onClick={() => dispatch({ type: SET_EDITTODO, payload: null })}  ></i>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <span>{todo.id}. {todo.name}</span>
                                                    <div>
                                                        <i role="button" className='fa fa-edit text-warning me-2'
                                                            onClick={() => dispatch({ type: SET_EDITTODO, payload: todo.id })}></i>
                                                        <i role="button" className='fa fa-trash text-danger'
                                                            onClick={() => dispatch({ type: DELETE_JOB, payload: todo.id })}></i>
                                                    </div>
                                                </>
                                            )

                                        }
                                    </li>
                                ))
                            }

                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Todo;