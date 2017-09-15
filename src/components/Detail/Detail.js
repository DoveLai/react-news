import React from 'react';
import './Detail.less';
import KeyValue from '../KeyValue';

export default React.createClass({
    render() {
        const listItems = this.props.list.map((item) => {
            return <KeyValue className="item" left={ item.key } right = { item.value }/>;
        });
        return (
            <section className="Detail">
                <div className="head">{ this.props.title }</div>
                <ul>
                    { listItems }
                </ul>

            </section>
        );
    },
});
