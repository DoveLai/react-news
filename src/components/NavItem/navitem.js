import React from 'react';
import classNames from 'classnames';
import './navitem.less';

export default React.createClass({
    render() {
        const listItem = this.props.list.map((item, index) => {
            return <li 
            className={ classNames('item', {'cur': index == 0})} 
            key={ index }>
                { item }
            </li>
        }

        )

        return(
            <section className="navitem">
                <ul className="navitem-cont">
                    { listItem }
                </ul>
            </section>
        )
    }
})

