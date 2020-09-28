import React,{Component} from 'react';

class Addtodo extends Component{
    state={
        id:null,
        content:null
    }
    changeHandler=(e)=>{
        //state gets updated here
        this.setState({
            id:Math.random(),
            content:e.target.value
        })
    }

    submitHandler=(e)=>{
        console.log(this.state)
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({
            content:''
        })
    }
    render(){

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <h2>Add Items</h2>
                    <input type='text' onChange={this.changeHandler} value={this.state.content}></input>
                     
                </form>
                
            </div>
        )
    }
}

export default Addtodo;