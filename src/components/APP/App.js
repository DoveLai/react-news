import React from 'react';
import './App.less';
import Head from '../Head';
import Nav from '../Nav';
import List from '../List';

// const sss = React

export default React.createClass({
    render() {
        return (
            <section className="news">
                    <Head />
                    <Nav />
                    <List />
            </section>
        );
    },
});
