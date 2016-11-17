/**
 * Created by chkui on 2016/11/17.
 */

//jsx
/*
var React = require('react');
var comp1 = React.createClass({
    render: function () {
        return (
          <div className = "index">
            hello react!
          </div>
        );
    }
});
module.exports = comp1;
*/

//es6
import React from "react"
class Comp1 extends React.Component{
    //构造函数
    constructor(...args){
        super(...args);
    }
    //覆盖父类的渲染方法
    render() {
        return (
            <div className = "index">
                hello react!
            </div>
        );
    }
}
export default Comp1;
