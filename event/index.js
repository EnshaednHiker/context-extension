console.log('event.js');

import {createStore} from 'redux';
import rootReducer from './reducers';
import {wrapStore} from 'react-chrome-redux';
import { active } from '~/event/actions';

const store = createStore(rootReducer, {});



wrapStore(store, {portName: 'APP'});

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("pressed the extension");
    store.dispatch(active(true));
});
