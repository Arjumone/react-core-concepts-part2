
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';
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
    
      <h1>React core concepts part</h1>
      <Counter></Counter>
      <br />
      <Batsman></Batsman>
     <button onClick={handleClick1}>Click me1</button>
     <button onClick={()=>handleClick2(5)}>Click me2</button>
    </>
  )
}

export default App
