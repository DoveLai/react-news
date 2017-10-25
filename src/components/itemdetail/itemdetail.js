import React from 'react';
import { Link } from 'react-router';
import './itemdetail.less';

export default React.createClass({
    componentDidMount(){

    },
    render() {
        return(
            <section className="itemdetail">
                <Link to='/'>
                        <div className="close">X</div>
                        </Link>
                <h1 className="title">富国强军的战略之举－－以习同志为核心的党中央
                    领导和推进强军兴军纪实之七
                </h1>
                <div className="vicetitle">
                    <span className="icon">新华网</span>
                    <span className="time">4小时前 新华网官方头条号</span>
                    <span className="btn">关注</span>
                </div>
                <p className="cont">
                    新华社北京9月24日电 题:富国强军的战略之
                    举--以习同志为核心的党中央领导和推进
                    强军兴军纪实之七<br /><br/>
                    新华社记者、解放军报记者<br /><br/>
                    金鸡报晓之年，神州大地凯歌阵阵--<br /><br/>
                    第二艘航母顺利出坞下水，C919客机完成首
                    飞，嫦娥五号奔月征程稳步推进……激越的鼓点，
                    鸣奏着同一部宏大交响：军民融合深度发展。<br/><br/>
                    “推进强军事业，必须深入推进军民融合发展，构
                    建军民一体化的国家战略体系和能力。”党的十八
                    大以来，以习同志为核心的党中央着眼实现
                </p>
                <div className="bottom">
                    <span className="comment">
                        <span className="icon"></span>
                        <input className="comment-input"placeholder="写评论..." aria-label="文明用语" ></input>
                    </span>
                    <span className="icon"></span>
                    <span className="icon"></span>
                    <span className="icon"></span>
                </div>
            </section>
        )
    }
})