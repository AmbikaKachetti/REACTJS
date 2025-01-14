import React, {useState} from 'react'
    // ! normal component
// const State = () => {
//   return (
//     <div>State</div>
//   )
// }

function State(){
    // ! without useState Hook
//     let count = 0;
//     function Increase(){
//         count = count + 1;
//         console.log(count);
//     }
    // ! with useState Hook
    const [count, setCount] = useState(0);
    function Increase(){
        setCount(count+1)
        console.log(count);
    }
    return (
        <div>
            <h1>useState</h1>
            <p>Count: {count}</p>
            <button onClick={Increase}>Click</button>
        </div>
    )
}

export default State