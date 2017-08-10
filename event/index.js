console.log('event.js');

import {createStore} from 'redux';
import rootReducer from './reducers';
import {wrapStore} from 'react-chrome-redux';
import { toggleActive, currentTab } from '~/event/actions';

const store = createStore(rootReducer, {});



wrapStore(store, {portName: 'APP'});



chrome.tabs.onActivated.addListener((tab) => {
    console.log(`noted the current tab of tabId: ${tab.tabId} and windowId: ${tab.windowId}`);
    store.dispatch(currentTab(tab.tabId,tab.windowId));
});

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    store.dispatch(toggleActive(false,tab.id, tab.windowId));
});

//how to get the sidebar on page with everything else
////do we use an iframe or some other way to display content with the contacts sidebar
////managing state by tab, namespace the tabId in event.js and content.js
////opening and closing context extension closes the extension
//how to manage content on page with the sidebar
