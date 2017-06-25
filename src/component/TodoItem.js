import React from 'react'
export default class TodoItem extends React.Component{
	render(){
		return (
			<li className={this.props.todo.isDeleted?'fade-out':''}>
				<input type='checkbox' 
				onChange={this.changeCheckbox.bind(this)}
				checked={this.props.todo.isFinished? true : false} 
				className='is-check'
				/> 
				<span className={this.props.todo.isFinished ? 'completed' : ''} 
				> 
					{this.props.todo.content} 
				</span>
				<span onClick={this.deleted.bind(this)} className='todo-delete'> x </span>
			</li>
		)
	}
	changeCheckbox(e){
		this.props.onToggle(e,this.props.todo)
	}
	deleted(e){
		this.props.onDelete(e,this.props.todo)
	}
}