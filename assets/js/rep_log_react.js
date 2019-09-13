import React from 'react';
//import ReactDom from 'react-dom';
import { render } from 'react-dom';
import RepLogApp from './RepLog/RepLogApp';

// const el = React.createElement(
//     'h2',
//     null,
//     'Lift History!',
//     React.createElement('span', null, '❤️')
// );
//const el = <h2>Lift Stuff! <span>❤️</span></h2>

const shouldShowHeart = false;
// const itemOptions = [
//     { id: 'cat', text: 'Cat' },
//     { id: 'fat_cat', text: 'Big Fat Cat' },
//     { id: 'laptop', text: 'My Laptop' },
//     { id: 'coffee_cup', text: 'Coffee Cup' },
//     { id: 'invalid_item', text: 'Dark Matter' }
// ];

render(
    <RepLogApp
        withHeart={shouldShowHeart}
        //itemOptions={itemOptions}
        //itemOptions={window.REP_LOG_APP_PROPS.itemOptions}
        {...window.REP_LOG_APP_PROPS}
    />,
    document.getElementById('lift-stuff-app')
);