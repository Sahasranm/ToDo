import React,{useEffect, useState} from 'react'
import Create from './Create'
import './App.css'
import axios from 'axios'
import { BsCircleFill, BsFillTrashFill, BsFillCheckCircleFill } from 'react-icons/bs'




function Home() {
    const [todos, setTodos]  = useState([])

    useEffect(()=>{
      axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
    },[])

    const handleEdit = (id) =>
      {
        axios.put('http://localhost:3001/update/'+id)
        .then(result => {
          location.reload()
        })
        .catch(err => console.log(err))
      }
   
    const handelDelete = (id) => {
      axios.delete('http://localhost:3001/delete/'+id)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))

    }


  return (
    <div className='home'>
      <h1>ToDo List</h1>
      <Create/>
      {
        todos.length === 0 ?
        <div><h2>No Records</h2></div>
        :
          todos.map(todo=>(
            <div className = 'task'>
              <div className ='checkbox'onClick={() => handleEdit(todo._id)}>
                   {todo.done ? 
                     <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                   :<BsCircleFill className='icon'/>
                   }
                   <p className={todo.done ? "line_through" : ""}>  {todo.task} </p>
              </div>
              <div>
                  <span><BsFillTrashFill className='icon' onClick={() => handelDelete(todo._id)}/></span>
              </div>           
            </div>
          ))

        }

    </div>
  )
}

export default Home
