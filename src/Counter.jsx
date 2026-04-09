import { useState } from "react"

export default function Counter(){

    const counterStyle = {
        border:'5px solid yellow'
    }

    const [count,setCount] = useState(0);

    const handleCount =()=>{
        const newCount = count +1;
        setCount(newCount);
    }
    const handleCount2 =()=>{
        const newCount = count - 1;
        setCount(newCount);
    }

    return(
        <div style={counterStyle}>
            <h3>Count:{count}</h3>
            <button onClick={handleCount}>Add</button>
            <button onClick={handleCount2}>Reduce</button>
        </div>
    )
}