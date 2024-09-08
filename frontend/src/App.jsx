import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [jokes,setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data)
      console.log(res.data)})
  },[])

  return (
   <>
   <h1>frontend Project</h1>
   <h2>jokes:{jokes.length}</h2>

   {
    jokes.map((joke)=>{
      return <div key={joke.id}>
        <h1>{joke.title}</h1>
        <h2>{joke.content}</h2>
      </div>
    })
   }
   </>
  )
}

export default App
