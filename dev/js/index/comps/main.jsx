/**
 * Created by chkui on 2016/11/17.
 */

//jsx
/*
var React = require('react');
var ReactDOM = require('react-dom');
var Comp1 = require('./component1.jsx');
require('../../../style/index/index.css');

ReactDOM.render(
    <div className="main">
        react jsx demo:
        <Comp1 />
    </div>,
    document.getElementById('comp')
);
*/

//es2015
import React from 'react';
import ReactDOM from 'react-dom';
import Comp1 from './component1.jsx' /*切记，大写是变量小写是标签*/
import style from '../../../style/index/index.css'

ReactDOM.render(
    <div className="main">
        react es2015 demo:
        <Comp1 />
    </div>
    ,
    document.getElementById('comp')
);
