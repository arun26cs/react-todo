import React,{Component} from 'react'; 
import Addtodo from './component/Addtodo';
import Todos from './component/Todos';
 

class App extends Component {
  state={
    todos:[
      {id:1,content:'eat food'},
      {id:2,content:'sleep well'}
    ]
  }

  deleteTodo = (id)=>{
    let todotemp = [...this.state.todos];
    console.log(id)
    let finallist= todotemp.filter(todo=>{
      return todo.id!==id;
    })
    this.setState({
      todos:finallist
    })
  }

  addTodo=(todo)=>{
    let temp = this.state.todos;
    temp.push(todo);
    this.setState({
      todos:temp
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">React Todo app</h1>
        <Todos todos={this.state.todos} deletetodo={this.deleteTodo}/>
        <Addtodo todos={this.state.todos} addtodo={this.addTodo}/>
      </div>
    );
  }
  
}

export default App;
