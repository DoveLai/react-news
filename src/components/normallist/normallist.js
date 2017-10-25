import React from 'react';
import './normallist.less';
import ItemDetail from '../itemdetail';
import { Router, Route, Link } from 'react-router';
import { LoadMore, Button } from 'react-weui';
//import 'weui';
//import 'react-weui/build/packages/react-weui.css';

export default React.createClass({
    
    render() {
        const listItem= this.props.listItem;
        const index = this.props.key;
        return(
            <section className="normal" key = { index }>
                    
                    <div className="listItem" >
                        <div className="itemCont">
                            <Link to='/listitem' query={ {id: listItem.id} }>
                                <h1 className="title">
                                    { listItem.title }
                                    </h1>
                                </Link>
                            <span className="author">{ listItem.author }</span>
                            <span className="count">{ listItem.count }评论</span>   
                            <span className="time">{ listItem.time }</span>
                            
                            </div>             
                        <img className="img" src={ listItem.imgsrc } />            
                    </div>
                    
            </section>
        )
    }
})