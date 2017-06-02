import React from 'react'
import TodoInp from './component/TodoInp.js'
import TodoItem from './component/TodoItem.js'
import './App.css'
export default class App extends React.Component{
	constructor(){
		super();
		this.state={
			todoLis:[],
			newTodo: ''
		}
	}
	render(){
		return (
			<div className='app'>
				<h3 className='title'>To Do List</h3>
				<TodoInp content={this.state.newTodo} 
				onSubmit = {this.addTodo.bind(this)}
				onChange={this.changeTitle.bind(this)}
				/>
				<ul  className='center todo-list'>
					{this.state.todoLis.filter(item=>{
						return !item.isDeleted
					}).map((item,index)=>{
						return <TodoItem onDelete={this.willDeleted} onToggle={this.changeCheckbox} key={index} todo={item}/>
					})}
				</ul>
			</div>	
		)
	}
	changeTitle(e){
		this.setState({
			todoLis:this.state.todoLis,
			newTodo:e.target.value
		})
	}
	addTodo(e){
		let id = this.state.todoLis.length;
		this.state.todoLis.unshift({
			id:id,
			content:e.target.value,
			isFinished:false,
			isDeleted:false
		});
		this.setState({
     	  	newTodo: '',
			todoList: this.state.todoList
     	})
	}
	changeCheckbox=(e,todo)=>{
		todo.isFinished=e.target.checked;
		this.setState(this.state)
	}
	willDeleted=(e,todo)=>{
		todo.isDeleted = true;
		this.setState(this.state)
	}
}