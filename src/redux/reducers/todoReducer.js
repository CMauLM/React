import { UPDATE_TASK,
        ADD_TASK,
        REMOVE_TASK,
        MARK_TASK
     } from "../actions/actionTypes";

const INITIAL_STATE = {
    task: '',
    list: []
}

export default (state = INITIAL_STATE, action)  => {
    let { task , list } = state

    switch (action.type){
        case UPDATE_TASK:
        task = action.payload;
        return {
            ...state, task
        }
        default: 
        return state
    }
}