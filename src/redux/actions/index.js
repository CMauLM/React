import {
    UPDATE_TASK,
    ADD_TASK,
    REMOVE_TASK,
    MARK_TASK
} from './actionTypes'

export const updateTask = task => {
    return {
        type: UPDATE_TASK,
        payload: task
    }
}