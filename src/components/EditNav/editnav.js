import React from 'react';
import './editnav.less';
import classNames from 'classnames';
//import NavItem from '../navitem';


export default React.createClass({
    render() {
        
        return(
            <section className={ classNames('editnav', { 'show': this.props.show }) }>
                <div onClick={ this.props.exitEdit } //退出编辑
                    >X</div>
                <div className="myChannel">
                    <div className="title">我的频道</div>
                    <div className="viceTitle">{ this.props.viceTitleText }</div>
                    <div className={ classNames('edit') } 
                        onClick={ this.props.modifyOn }>{ this.props.editText }</div>
                    
                    <div className="myItem">
                        <ul className="cont">
                            { 
                                this.props.myList.map((item, index) => {
                                return <li className={ classNames('item', 
                                  {'cur': index == this.props.curId, 'editing': this.props.editing }
                                )} 
                                key={ index }
                                onClick= { this.props.handleMyChannel }>
                                            { item.text }
                                            <span className={classNames('switch',{'show': this.props.editing})}
                                                >
                                                x
                                            </span> 
                                        </li>
                                }) 
                            }
                        </ul>
                    </div>
                </div>
                <div className="pro">
                    <div className="title">频道推荐</div>
                    <div className="viceTitle">点击添加频道</div>
                    <div className="promItem">
                        <ul className="cont">
                            { 
                                this.props.promList.map((item, index) => {
                                    return <li className={ classNames('item')} 
                                            key={ index }
                                            onClick= { this.props.handleProm }>
                                                
                                                { item.text }
                                            </li>
                                }) 
                            }
                        </ul>
                    </div>
                </div>
            </section>   
        )
    }
})