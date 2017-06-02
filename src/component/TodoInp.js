import React from 'react';
export default class Inp extends React.Component{
    render(){
        return (
            <input className='todo-inp ' 
            type='text' 
            onKeyPress={this.submit} 
            value={this.props.content} 
            placeholder='回车添加'
            onChange={this.changeTitle.bind(this)}
            />
        )
    }
    submit=e=>{
    	if(e.key==='Enter'){
    		this.props.onSubmit(e)
    	}
    }
    changeTitle(e){
		this.props.onChange(e)
	}
}