import React from 'react'
import TodoInp from './component/TodoInp.js'
import TodoItem from './component/TodoItem.js'
import * as localStore from './localStore.js'
import './App.css'
import TodoTab from './component/TodoTab.js'
export default class App extends React.Component{
	constructor(){
		super();
		this.state={
			todoLis:localStore.load('todoLis') || [],
			newTodo: '',
			condition:'all'
		}
	}
	componentDidUpdate(){
		localStore.save('todoLis',this.state.todoLis)
	}
	render(){
		return (
			<div className='app'>
				<div className="title-wrap">
					<div className="title">
						<h3>Manage Your plane</h3>
						<TodoTab 
						 condition={this.state.condition}
						 onChangeStatus={this.changeStatus.bind(this)}
						/>
					</div>
				</div>
				<TodoInp content={this.state.newTodo} 
				onSubmit = {this.addTodo.bind(this)}
				onChange={this.changeTitle.bind(this)}
				/>
				<ul  className='center todo-list'>
					{this.state.todoLis.filter(item=>{
						if(this.state.condition==='finished') return !item.isDeleted&&item.isFinished;
						if(this.state.condition==='unfinished') return !item.isDeleted&&!item.isFinished;
						return !item.isDeleted;
					}).map((item,index)=>{
						return <TodoItem 
									onDelete={this.willDeleted} 
									onToggle={this.changeCheckbox} 
									key={index} 
									todo={item}
								/>
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
		Object.assign(this.state,{
     	  	newTodo: '',
			todoList: this.state.todoList
     	})
		this.setState(this.state)
	}
	changeCheckbox=(e,todo)=>{
		todo.isFinished=e.target.checked;
		this.setState(this.state)
	}
	willDeleted=(e,todo)=>{
		todo.isDeleted = true;
		this.setState(this.state)
	}
	changeStatus = (key)=>{
		this.setState(Object.assign(this.state,{
			condition:key
		}))
	}
}
/*
	<ul className='tab'>
							<li className={this.state.condition==='all'? 'active':''} onClick={this.changeStatus.bind(this,'all')}>全部</li>
							<li className={this.state.condition==='finished'? 'active':''} onClick={this.changeStatus.bind(this,'finished')}>已完成</li>
							<li className={this.state.condition==='unfinished'? 'active':''} onClick={this.changeStatus.bind(this,'unfinished')}>未完成</li>
						</ul>
*/