import React from 'react';
import './editnav.less';
import classNames from 'classnames';

export default React.createClass({
    /*getInitialState(){
        return({
            edited: false
        });
    },*/
    
    render() {
        return(
            <section className={ classNames('editnav', { 'show': this.props.show }) }>
                <div onClick={ this.props.closeEdit }>X</div>
                <div>我的频道</div>
            </section>   
        )
    }
})