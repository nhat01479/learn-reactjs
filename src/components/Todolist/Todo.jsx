import React, { useReducer, useState } from 'react';
import {reducer, initialState, addJob, addJobName, setEditTodo, setNewName, updateJob, deleteJob} from '../../store'


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
                                onInput={(e) => dispatch(addJobName(e.target.value))}
                            />
                            <button className="btn btn-sm btn-primary"
                                onClick={() => dispatch(addJob(null))}>
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
                                                        value={editTodo.name || todo.name} onInput={(e)=> dispatch(setNewName(e.target.value))}/>
                                                    <div>
                                                        <i role="button" className='fa fa-save text-warning me-2'
                                                          onClick={() => dispatch(updateJob(todo.id, editTodo.name))} ></i>
                                                        <i role="button" className='fa fa-times text-danger'
                                                          onClick={() => dispatch(setEditTodo(null))}  ></i>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <span>{todo.id}. {todo.name}</span>
                                                    <div>
                                                        <i role="button" className='fa fa-edit text-warning me-2'
                                                            onClick={() => dispatch(setEditTodo(todo.id))}></i>
                                                        <i role="button" className='fa fa-trash text-danger'
                                                            onClick={() => dispatch(deleteJob(todo.id))}></i>
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