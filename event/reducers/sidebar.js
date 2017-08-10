import * as actions from '~/event/actions';


const initialState = {
    tabs: [{
       tab: {
            tabId: null,
            windowId: null, 
            active:false,
        }
    }]

}

export default function (state=initialState, action) {
    if (action.type === actions.CURRENT_TAB) {
        
        if (state.tabs[0].tabId===null && state.tabs[0].windowId===null){
            
            return Object.assign({}, state,{
                tabs: [{
                    tab:{
                        tabId: action.tabId, 
                        windowId: action.windowId,
                        active: false
                    }
                }]
            });
        }
        else {
            return Object.assign({}, state, {
                tabs: state.tabs.map((tab) => {
                    if (tab.tabId != action.tabId && tab.windowId != action.windowId) {
                        return Object.assign({}, tab, {
                            tabId: action.tabId, 
                            windowId: action.windowId
                        })
                    }
                    return tab
                })
            })
        }
    }
    else if (action.type === actions.TOGGLE_ACTIVE){

        return Object.assign({}, state, {
            tabs: state.tabs.map((tab) => {
                if (tab.tabId === action.tabId && tab.windowId === action.windowId) {
                    return Object.assign({}, tab, {
                        active: !action.active
                    })
                }
                return tab
            })
        })
    }
    else {
        return state
    }
}