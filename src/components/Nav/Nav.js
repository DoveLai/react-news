import React from 'react';
import './Nav.less';
import classNames from 'classnames';
import EditNav from '../editnav';
//import List from '../List';

export default React.createClass({
    getInitialState() {
        return{
            selectedId: 0,
            edited: false,
            myChannel: [{
                text:"推荐"
            },{
                text:"健康"
            },{
                text:"热点"
            },{
                text:"汽车"
            },{
                text:"社会"
            },{
                text:"体育"
            },{
                text:"娱乐"
            },{
                text:"美食"
            },{
                text:"科技"
            },{
                text:"图片"
            },{
                text:"问答"
            },{
                text:"直播"
            },{
                text:"房产"
            }],
        };
    },
    
    
    /**
     * 
     * @param {*} channelData 子组件传回的编辑后列表
     * @param {*} number 子组件传回的高亮项下标
     * @param {*} e 
     */
    handleEdit(channelData,number,e) {

        if (this.state.edited == false) {
            //this.myChannel = list;
            this.setState({ 
                edited: true,
            }) 
        } else {
            
            this.setState({
                edited: false,
                myChannel: channelData,
                selectedId: number,
            })
        }
    },
    
    handleId(idValue,e) {
        this.setState({
            selectedId: idValue,
        })  
    },
    render() {
        return(
            <section className="nav">
                <ul className="nav-list">
                    { 
                        this.state.myChannel.map((item, index) => {
                    return <li 
                    className={ classNames('item' ,{ 'cur': index == this.state.selectedId }) }  
                    onClick={ e => {this.handleId(index,e) } }
                    key={ index }>{ item.text }</li>
                        }) 
                    }
                </ul>
                <span className="icon" onClick={ this.handleEdit }>+</span>
                <EditNav show={ this.state.edited } exitEdit={ this.handleEdit }
                list={ this.state.myChannel } 
                
                curId= { this.state.selectedId } 
                
                 />
            </section>
        ) 
    }
});