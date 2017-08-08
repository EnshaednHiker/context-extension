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

const id = 'contextExtensionRoot123456';

let wrapper = document.createElement('div');
wrapper.setAttribute('id',id);
document.body.appendChild(wrapper);

store.ready().then(() => {
    render(
        <Provider store={store}> 
            <Sidebar/>
        </Provider>
    , document.getElementById(id));
});

//create a component that's getting state, current popup compohnent,
//wrap an iframe in a div, manually inject it on the page, use Dom.render to mount component to that element.
// export default function () {
//     Dom.render(<Popup />, document.getElementById('root'));
// }

