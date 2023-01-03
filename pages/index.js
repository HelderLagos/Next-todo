import { useState } from "react";

const Index = () => {

    const [userInput, setUserInput] = useState('')
    const [todoList, setTodoList] = useState([])
    const [doneList, setDoneList] = useState([])

    const handleChangeDone = (task) => {
        setDoneList([...doneList, task]);
        setTodoList(todoList.filter((t) => t !== task));
      };

    const handleChange = (e) => {
        e.preventDefault()
        setUserInput(e.target.value)        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setTodoList([
        userInput,
        ...todoList
        ])
        setUserInput('')
    }

    const handleDelete = (todo) => {
        const updateArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
        setTodoList(updateArr)
    }
    const handleClear = () => {
        setDoneList([]);
      }
    

      return (
        <div className="container">
                <div className="todo">
        <h3>NEXTJS TODO LIST</h3>
        <form className="form">
          <input
            type="text"
            value={userInput}
            placeholder="ADICIONE UMA TAREFA"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>ADICIONAR</button>
        </form>
        <div className="bar"></div>
        <ul>
          {todoList.length >= 1 ? (
            todoList.map((todo, idx) => {
              return (
                <li className="list" onClick={() => {
                    handleChangeDone(todo);
                  }}>
                  
                  {todo}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(todo);
                    }}
                  >
                    CONCLUIR
                  </button>
                </li>
              );
            })
          ) : (
            <span>Nenhuma tarefa no momento</span>
          )}
        </ul>
      </div>

          <div className="done">
          <div className="bar"></div>
        <h3>TAREFAS CONCLUÍDAS</h3>        
        <ul>
          {doneList.length >= 1 ? (
            doneList.map((done, idx) => {
              return (
                <li className="list">
                  {done}                  
                </li>
              );
            })
          ) : (
            <span>Nenhuma tarefa concluída no momento</span>
          )}
        </ul>
        <button className="btn-clear" onClick={handleClear}>LIMPAR TAREFAS</button>
      </div>
        </div>
      );
      
    };


export default Index;