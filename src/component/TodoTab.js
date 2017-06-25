import React from 'react'
const tabKey=['all','finished','unfinished'];
const tabCt=['全部','已完成','未完成']
export default class TodoTab extends React.Component{
    render(){
        return <ul className='tab'>
            {
                tabKey.map((item,index)=>{
                    return <li  className={this.props.condition===item? 'active':''}key={index} onClick={this.changeStatus.bind(this,item)}>{tabCt[index]}</li>
                })
            }
        </ul>   
    }
    changeStatus(item){
        this.props.onChangeStatus(item);
    }
}