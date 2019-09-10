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

const shouldShowHeart = true;

render(
    <RepLogApp withHeart={shouldShowHeart} />,
    document.getElementById('lift-stuff-app')
);