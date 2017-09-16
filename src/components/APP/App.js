import React from 'react';
import './App.less';
import Head from '../Head';
import Nav from '../Nav';
import List from '../List';

// const sss = React

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
