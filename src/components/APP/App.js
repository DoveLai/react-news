import React from 'react';
import './App.less';
import Head from '../Head';
import Nav from '../Nav';
import List from '../List';

// const sss = React

export default React.createClass({
    render() {
        const content = [{
            text:"推荐"
        },{
            text:"健康"
        },{
            text:"热点"
        },{
            text:"汽车"
        },{
            text:"社会"
        },{
            text:"体育"
        },{
            text:"娱乐"
        },{
            text:"美食"
        }
        ];
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
        return (
            <section className="news">
                    <Head />
                    <Nav list= { content }/>
                    <List list = { newsList }/>
            </section>
        );
    },
});
