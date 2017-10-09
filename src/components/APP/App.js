import React from 'react';
import './App.less';
import Head from '../Head';
import Nav from '../Nav';
import List from '../List';

// const sss = React

export default React.createClass({
    render() {
        const defaultList = [
            {
                title: "广州一村民",
                author: "19楼",
                count: "3187",
                time: "1分钟内",
                tab: 0,
                id: 12345678,
            },{
                title: "火力猛",
                author: "体育疯",
                count: "31",
                time: "1分钟内",
                tab: 0,
                id: 2342543,
            },{
                title: "iPhone 6上市",
                author: "凤凰科技",
                count: "58",
                time: "1分钟内",
                tab: 1,
                id: 235456,
            }
        ]
        return (
            <section className="news">
                    <Head />
                    <Nav />
                    <List list = { defaultList }/>
            </section>
        );
    },
});
