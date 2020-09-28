import React from 'react';

const Todos = ({todos,deletetodo})=>{

    console.log(todos);
    const todolisted = todos.length>0?(
        todos.map(
            todo =>{
                return(
                    <div className="collection-item" key={todo.id}>
                         <p onClick={()=>{deletetodo(todo.id)}} >{todo.content}</p>
                    </div>
                )
            }
        )
    ):
    <p>There is no todos for you!!!</p>

    return (
        <div>
            {todolisted}
        </div>
    ); 
}

export default Todos;