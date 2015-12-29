import 'babel-polyfill';

import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

$(function(){
    ReactDOM.render(<App />, $('#application')[0]);
});
