import React from 'react'
import ComponentB from './ComponentB'

// ! Arrow Function
// const ComponentA = () => {
//   return (
//     <div>ComponentA</div>
//   )
// }

// ! Normal Function
function ComponentA({count}) {
    return (
        <div>
            ComponentA
            <ComponentB count = {count}/>
        </div>
    )
}
export default ComponentA