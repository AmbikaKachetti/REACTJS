import React from 'react'
import ComponentC from './ComponentC'

// ! Arrow Function
// const ComponentB = () => {
//   return (
//     <div>ComponentB</div>
//   )
// }
// ! Normal Function
function ComponentB({count}) {
    return (
        <div>
            ComponentB
            <ComponentC count={count}/> 
        </div>
    )
}
export default ComponentB