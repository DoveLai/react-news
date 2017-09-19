import React from 'react';
import './Nav.less';
import classNames from 'classnames';
import EditNav from '../editnav';
//import List from '../List';

export default React.createClass({
    getInitialState() {
        return{
            selectedIdx: 0,
            edited: false
        };
    },
    /**
     * 
     * @param {*} e 事件
     * @param {*} idx data-react-id末尾
     */
    changeIdx(e, idx) {

        this.setState({ 
            selectedIdx: idx.substr(idx.indexOf('$')+1) - 0 
        })
    },
    changeEdit(e) {
        this.setState({ 
            edited: true
        }) 
    },
    closeEdit(e) {
        this.setState({
            edited: false
        })  
    },
    render() {
        const listItems = this.props.list.map((item, index) => {
            return <li 
                    className={ classNames('item' ,{ 'cur': index == this.state.selectedIdx }) }  
                    onClick={ this.changeIdx } 
                    key={ index }>{ item.text }</li>
        })
        return(
            <section className="nav">
                <ul className="nav-list">
                    { listItems }
                </ul>
                <span className="icon" onClick={ this.changeEdit }>+</span>
                <EditNav show={ this.state.edited } closeEdit={ this.closeEdit }/>
            </section>
        ) 
    }
});