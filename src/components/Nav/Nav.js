import React from 'react';
import './Nav.less';
import classNames from 'classnames';
import EditNav from '../editnav';
//import List from '../List';

export default React.createClass({
    getInitialState() {
        return{
            selectedId: 0,
            edited: false, //点击＋进入编辑页面
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
                text:"房产"
            }],
            prom: [{
                text: "小说"
            },{
                text: "历史"
            },{
                text: "时尚"
            },{
                text: "育儿"
            },{
                text: "直播"
            },{
                text: "搞笑"
            },{
                text: "数码"
            },{
                text: "养生"
            }],
            
            viceTitleText: "点击进入频道",
            editText: "编辑",
        };
    },
    editing: false,  //编辑/完成状态
    
    /**
     * 
     * 
     * 
     * @param {*} e 点击事件
     */
    handleEdit() {
        if (this.state.edited == false) {
            this.setState({ 
                edited: true,
            }) 
        } else {
            this.setState({
                edited: false,
            })
        }
    },
    
    handleId(idValue) {
        
        this.setState({
            selectedId: idValue,
        })  
    },

    handleMyChan(e,id) {
        if (this.editing) //进入编辑状态，删除我的频道项，增加频道推荐项
        {   
            if( this.state.myChannel.length > 1) {
                let contentAfterDeleted = [];
                let promAfterAdd = [];
                let curId = id.split('$')[1]-0;
                let deletedCont = this.state.myChannel[curId];
                promAfterAdd = this.state.prom.map((item) =>{
                    return item;
                });
                promAfterAdd.push(deletedCont);
                this.state.myChannel.forEach((item) =>{
                    if (item !== deletedCont) {
                        contentAfterDeleted.push(item);
                    }
                });
                this.setState({
                    myChannel: contentAfterDeleted,
                    prom: promAfterAdd,
                    selectedId: 0,
                })
            } else {
                alert('操作无效，频道列表不能为空');
            }
        } else //完成，点击进入频道
        { 
            let tempId = id.split('$')[1]-0;
            this.setState({
                selectedId: tempId,
            });
            this.handleEdit();
        }
    },

    handleProm(e,id) //点击增加频道
    {
        let contentAfterAdd = [];
        let promAfterDeleted = [];
        let curId = id.split('$')[1]-0;
        let deletedProm = this.state.prom[curId];
        contentAfterAdd = this.state.myChannel.map((item)=>{
            return item;
        });
        contentAfterAdd.push(deletedProm);
        this.state.prom.forEach((item) =>{
            if (item !== deletedProm) {
                promAfterDeleted.push(item);
            }
        });
        this.setState({
            myChannel: contentAfterAdd,
            prom: promAfterDeleted
        })
        
    },

    modifyOn() {
        if(!this.editing) //点击进入
        {
            this.setState({
                editText: "完成",  //修改文本
                viceTitleText: "拖曳可以排序",
            });
            this.editing = true; //编辑状态
        } else {
            this.setState({
                    
                editText: "编辑",
                viceTitleText: "点击进入频道",
            
            });
            this.editing = false;
        }
    },
    
    render() {
        return(
            <section className="nav">
                <ul className="nav-list">
                    { 
                        this.state.myChannel.map((item, index) => {
                    return <li 
                    className={ classNames('item' ,{ 'cur': index == this.state.selectedId }) }  
                    onClick={ ()=> {this.handleId(index) } }
                    key={ index }>{ item.text }</li>
                        }) 
                    }
                </ul>
                <span className="icon" onClick={ this.handleEdit }>+</span>
                <EditNav show={ this.state.edited } 
                myList={ this.state.myChannel } promList = { this.state.prom }
                handleMyChannel = { this.handleMyChan } exitEdit = { this.handleEdit }
                handleProm = { this.handleProm }
                curId= { this.state.selectedId } 
                modifyOn = { this.modifyOn }
                viceTitleText = { this.state.viceTitleText } editText = {this.state.editText}
                editing = { this.editing }
                 />
            </section>
        ) 
    }
});