
import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';
import Users from './Users';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=> res.json())

function App() {
  
  const handleClick1 =()=>{
    alert("Done")
  }
  const handleClick2 =(num)=>{
    const sum = num + 5
    alert(sum)
  }

  return (
    <>
    
      <h1>React core concepts part2</h1>
     <button onClick={handleClick1}>Click me1</button>
     <button onClick={()=>handleClick2(5)}>Click me2</button>
      <br />
      <Counter></Counter>
      <br />
      <Batsman></Batsman>
    
      <Suspense fallback= {<h2>Loading...</h2>}>
       <Users fetchUsers ={fetchUsers}></Users>
     </Suspense>
    </>
  )
}

export default App
