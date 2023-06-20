import React,{useState} from 'react'
import SearchBar from './components/SearchBar'
import TodoList from './components/TodoList'
import './App.css'


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Brush my teeth",
      isCompleted: true
    },
    {
      id: 2,
      item: "Meditate and exercise",
      isCompleted: false
    },
    {
      id: 3,
      item: "Make to-do-list",
      isCompleted: false
    } 
  ])

  const [searchTodo, setSearchTodo] = useState('')
  
  const handleInputChange = (value) => {
    setSearchTodo(value)
  };
  
  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, isCompleted: !todo.isCompleted}: todo)
    )
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !==  id))
  }


  const filteredTodos = todos.filter((todo) => todo.item.toLowerCase().includes(searchTodo.toLowerCase()))


  return (
    <div>
      <h1>/ to-do-list</h1>
      <SearchBar onChange={handleInputChange}/>
      <ul className='todo-items'>
        {filteredTodos.map((todo) => (
          <TodoList 
            key={todo.id} 
            todo={todo} 
            onToggleComplete={() => handleToggleComplete(todo.id)} 
            onDeleteTodo={() => handleDeleteTodo(todo.id)}/>
        ))}
      </ul>
    </div>    
  )
}

export default App