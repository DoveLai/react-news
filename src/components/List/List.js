import React from 'react';
import './List.less';

export default React.createClass({
    render() {
        const newsList = [
            {
                title: "广州一村民",
                author: "19楼",
                count: "3187",
                time: "1分钟内",
            },{
                title: "火力猛",
                author: "体育疯",
                count: "31",
                time: "1分钟内",
            },{
                title: "iPhone 6上市",
                author: "凤凰科技",
                count: "58",
                time: "1分钟内",
            }
        ]
        const listItems = newsList.map((item,index) => {
            return (
                <div className="listItem" key= { index }>
                    <h1 className="title">{ item.title }</h1>
                    <span>{ item.author }</span>
                    <span>{ item.count }</span>
                    <span>{ item.time }</span>
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