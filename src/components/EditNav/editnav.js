import React from 'react';
import './editnav.less';
import classNames from 'classnames';
//import NavItem from '../navitem';


export default React.createClass({
    getInitialState(){
        return({
            curId: this.props.curId,
            myChannel: this.props.list,
            
            
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
            editText: "编辑",
            viceTitleText: "点击进入频道",
            
        });
    },
    editing: false,
    /**
     * 
     * @param {*} e 点击事件
     * @param {*} id react-id=.0.1.$0
     */
    
    /**
         , * 
         , * @param {*} e 
         , * @param {*} id 
         , */
    modifyProm(e,id) //点击增加频道
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
    
        //this.modifyCont;
    },
    
    modifyCont(e,id) {
        if (this.editing) //进入编辑状态，删除我的频道项，增加频道推荐项
        {
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
                curId: -1,

            })
        } else //完成，点击进入频道
        { 
            let tempId = id.split('$')[1]-0;
            this.setState({
                curId: tempId,
            });
            this.props.exitEdit(this.state.myChannel,tempId,e);
        }
    },
    render() {
        const afterEditMyChan = this.state.myChannel.map((item)=>{
            return item
        })
        return(
            <section className={ classNames('editnav', { 'show': this.props.show }) }>
                <div onClick={ 
                    e => {
                        this.props.exitEdit(afterEditMyChan,this.state.curId,e)} //退出编辑，返回修改后的列表
                        }>X</div>
                <div className="myChannel">
                    <div className="title">我的频道</div>
                    <div className="viceTitle">{ this.state.viceTitleText }</div>
                    <div className={ classNames('edit') } 
                        onClick={ this.modifyOn }>{ this.state.editText }</div>
                    
                    <div className="myItem">
                        <ul className="cont">
                            { 
                                afterEditMyChan.map((item, index) => {
                                return <li className={ classNames('item', 
                                  {'cur': index == this.state.curId, 'editing': this.editing }
                                )} 
                                key={ index }
                                onClick= { this.modifyCont }>
                                            { item.text }
                                            <span className={classNames('switch',{'show': this.editing})}
                                                >
                                                x
                                            </span> 
                                        </li>
                                }) 
                            }
                        </ul>
                    </div>
                </div>
                <div className="pro">
                    <div className="title">频道推荐</div>
                    <div className="viceTitle">点击添加频道</div>
                    <div className="promItem">
                        <ul className="cont">
                            { 
                                this.state.prom.map((item, index) => {
                                    return <li className={ classNames('item')} 
                                            key={ index }
                                            onClick= { this.modifyProm }>
                                                { item.text }
                                            </li>
                                }) 
                            }
                        </ul>
                    </div>
                </div>
            </section>   
        )
    }
})