import React, { useEffect } from "react";

// ! Arrow Function
// const Effect = () => {
//   return (
//     <div>Effect</div>
//   )
// }
// ! Normal Function
function Effect() {
  useEffect(() => {
    console.log("Hi");
  }, []);
  return (
    <>
      <h1>Effect</h1>
    </>
  );
}
export default Effect;
