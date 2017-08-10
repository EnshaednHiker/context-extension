import $ from "jquery";

import '~/assets/styles/content.css'

import '~/assets/images/icon_16_active.png';
import '~/assets/images/icon_16.png';
import '~/assets/images/icon_48.png';
import '~/assets/images/icon_128.png';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';
import Sidebar from '~/content/components/Sidebar';

const store = new Store({
    portName: 'APP'
});

//document.body.setAttribute('style','columns:2');

let webpageWrapper = document.createElement('div');
webpageWrapper.setAttribute('style','width:70%; display: none;');
webpageWrapper.setAttribute('id','idOfAmazingProperties');

document.body.appendChild(webpageWrapper);

let webpageIframe = document.createElement('iframe');

webpageIframe.setAttribute('src',window.location.href);
webpageIframe.setAttribute('style', 'width:100%');
webpageWrapper.appendChild(webpageIframe);

//$('body').children().wrapAll(webpageWrapper);

const id = 'contextExtensionRoot123456';

let extensionWrapper = document.createElement('div');
extensionWrapper.setAttribute('id',id);
document.body.appendChild(extensionWrapper);

store.ready().then(() => {
    console.log("store: ",store);



    render(
        <Provider store={store}> 
            <Sidebar/>
        </Provider>
    , document.getElementById(id));
});

