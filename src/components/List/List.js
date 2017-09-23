import React from 'react';
import './List.less';

export default React.createClass({
    render() {
        
        const listItems = this.props.list.map((item,index) => {
            return (
                <div className="listItem" key= { index }>
                    <h1 className="title">{ item.title }</h1>
                    <span className="author">{ item.author }</span>
                    <span className="count">评论{ item.count }</span>
                    <span className="time">{ item.time }</span>
                </div>
            );
        });
        return(
            <section className="list">
                { listItems }
            </section>
        )
    }
})