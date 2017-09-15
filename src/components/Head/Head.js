import React from 'react';
import './Head.less';

export default React.createClass({
    render() {
        return(
            <section className="head">
                <span className="icon">头像</span>
                <div className="title">今日头条</div>
                <span className="icon">更多</span>
            </section>
        );
    },
});