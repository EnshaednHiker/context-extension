import * as actions from '~/event/actions';


const initialState = {
    active:false
}

export default function (state=initialState, action) {
    if (action.type === actions.ACTIVE) {
        console.log("state: ", state);
        console.log(`sweet iframe here with ${state} state and ${action} action`);
        return Object.assign({}, state,{
            active: action.active
        });
    }
    else {
        return state
    }
}