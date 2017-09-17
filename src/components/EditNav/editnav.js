import React from 'react';
import './editnav.less';
import classNames from 'classnames';
import NavItem from '../navitem';


export default React.createClass({
    /*getInitialState(){
        return({
            edited: false
        });
    },*/
    
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
        return(
            <section className={ classNames('editnav', { 'show': this.props.show }) }>
                <div onClick={ this.props.closeEdit }>X</div>
                <div className="myChannel">
                    <div className="title">我的频道</div>
                    <div className="viceTitle">点击进入频道</div>
                    <div className="edit">编辑</div>
                    <NavItem list= { content }/>
                </div>
                <div className="pro">
                    <div className="title">频道推荐</div>
                    <div></div>

                </div>
            </section>   
        )
    }
})