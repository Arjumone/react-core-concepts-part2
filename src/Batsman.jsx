import React, { useState } from 'react';

const Batsman = () => {

     const run = {
        border:'4px solid red'
    }

    const [runs,setRuns] = useState(0)
    const [six,setSix] = useState(0)
    const [four,setFour] = useState(0)

    const handleRuns = () =>{
        const updatedRuns = runs +1;
        setRuns(updatedRuns)
    }

    const handleRuns2 = () =>{
        const updatedRuns = runs +4;
        const updatedFour = four+1;
        setRuns(updatedRuns);
        setFour(updatedFour)
    }

    const handleRuns3 = () =>{
        const updatedRuns = runs +6;
        const updatedSix = six+1;
        setRuns(updatedRuns)
        setSix(updatedSix)
    }

    return (
        <div style={run}>
            <h3>Player: Bangladeshi</h3>
            {
                six>10 && <p>You are great</p>
            }
            <h2>Six:{six}</h2>
            <h2>Four:{four}</h2>
            <h1>Score:{runs}</h1>
            <button onClick={handleRuns}>Single</button>
            <button onClick={handleRuns2}>Four</button>
            <button onClick={handleRuns3}>Six</button>
        </div>
    );
};

export default Batsman;