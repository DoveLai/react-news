import React from 'react';
import './KeyValue.less';

export default React.createClass({
    render() {
        const left = this.props.left;
        const right = this.props.right;
        return (
            <li>
                <span className="left">{ left }</span>
                <span className="right">{ right }</span>
            </li>    
        );
    },
});
