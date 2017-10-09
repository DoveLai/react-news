import React from 'react';
import './normallist.less';
import ItemDetail from '../itemdetail';
import { Router, Route, Link } from 'react-router';

export default React.createClass({
    render() {
        const listItem= this.props.listItem;
        const index = this.props.key;
        return(
            <section className="normal" key = { index }>
                <Link to="/listitem">
                    <div className="listItem" >
                        <h1 className="title">
                            { listItem.title }
                                                 
                        </h1>
                        <span className="author">{ listItem.author }</span>
                        <span className="count">{ listItem.count }评论</span>                        
                    </div>
                </Link>
            </section>
        )
    }
})