import React from 'react';
import './promlist.less';

export default React.createClass({
    render() {
        return(
            <section className="promlist" key= { this.props.key }>
                <div className="listItem" >
                        <h1 className="title">{ this.props.listItem.title }</h1>                        
                        <span className="count">{ this.props.listItem.count }评论</span>                        
                    </div>
            </section>
        )
    }
})