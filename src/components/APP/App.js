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
                title: "习近平助推中国智慧渐成国际共识",
                author: "央广网",
                count: "710",
                time: "1分钟内",
                imgsrc: "http://i.ce.cn/ce/xwzx/gnsz/szyw/201710/23/W020171023299174508974.jpg",
                tab: 0,
                id: 23545611,
            },{
                title: "太好听了！一直被模仿从未被超越的一首歌！现场版，燃爆了！",
                author: "最爱MV",
                count: "148",
                time: "1分钟内",
                tab: 0,
                id: 23545612,
            },{
                title: "高速路开车遇到这种情况直接撞上去，千万别犹豫！大车小车都一样",
                author: "生活转转乐",
                count: "0",
                time: "16分钟内",
                tab: 0,
                id: 23545613,
            },{
                title: "你看到过哪些非常精彩的0分作文？",
                author: "悟空问答",
                count: "358",
                time: "31分钟内",
                tab: 0,
                id: 23545614,
            },{
                title: "搞笑视频 总有些笑死人的二货还在活着",
                author: "来搞笑",
                count: "20",
                time: "46分钟内",
                tab: 0,
                id: 23545615,
            },{
                title: "洗脚水里放一点，将体内湿气去得一干二净，腰细了，体重也轻了",
                author: "我们装修拒绝甲醛",
                count: "4",
                time: "53分钟内",
                tab: 0,
                id: 23545616,
            },{
                title: "这些坑爹的星二代，有的至今不能翻身，唯独郭德纲陈佩斯儿子长脸",
                author: "娱乐报送",
                count: "378",
                time: "1小时前",
                tab: 0,
                id: 23545617,
            },{
                title: "中国官兵正在为施工护卫，忽然来了几个持枪非洲人，一问让人暖心",
                author: "影视精剪荟",
                count: "490",
                time: "1小时前",
                tab: 0,
                id: 23545618,
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
