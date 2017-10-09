import React from 'react';
import './List.less';
import NormalList from '../normallist';
import PromList from '../promlist';

export default React.createClass({
    renderNormalList(item,index) {
        return <NormalList listItem = { item } key = { index }/>
    },
    render() {
        const list = this.props.list;
        const listItems = list.map((item,index) => {
            if (item.tab == 0) {
                return (
                    this.renderNormalList(item,index)
                );
            } else {
                return (
                    <PromList listItem={ item } key={ index }/>
                )
            }
        });
        return(
            <section className="list">
                { listItems }
            </section>
        )
    }
})