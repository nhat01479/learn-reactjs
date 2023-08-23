import {ADD_JOB, SET_JOBNAME, SET_LOADING, DELETE_JOB, UPDATE_JOB, SET_EDITTODO, SET_NEWNAME} from './constants'

const addJob = (payload) => {
    return {type: ADD_JOB, payload: payload}
}

const addJobName = (payload) => {
    return {type: SET_JOBNAME, payload: payload}
}

const setEditTodo = (payload) => {
    return {type: SET_EDITTODO, payload: payload}
}

const setNewName = (payload) => {
    return {type: SET_NEWNAME, payload: payload}
}

const updateJob = (payload, newName) => {
    return {type: UPDATE_JOB, payload: payload, newName: newName}
}
const deleteJob = (payload) => {
    return {type: DELETE_JOB, payload: payload}
}

export {addJob, addJobName, setEditTodo, setNewName, updateJob, deleteJob}
