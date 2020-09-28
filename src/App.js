import React,{Component} from 'react'; 
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
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">React Todo app</h1>
        <Todos todos={this.state.todos} deletetodo={this.deleteTodo}/>
      </div>
    );
  }
  
}

export default App;
