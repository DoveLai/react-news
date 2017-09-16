import React from 'react';
import './Nav.less';
import classNames from 'classnames';
//import List from '../List';

export default React.createClass({
    render() {
        const content = [
            
                "推荐"
            ,
                "健康"
            ,
                "热点"
            ,
                "汽车"
            ,
                "社会"
            ,
                "体育"
            ,
                "娱乐"
            ,
                "美食"
            
        ];
        const listItems = content.map((item, index) => {
            return <li className="item" key={ index }>{ item }</li>
        });
        return(
            <section className="nav">
                <ul className="nav-list">
                    { listItems }
                </ul>
                <span className="icon">+</span>
            </section>
        ) 
    }
});