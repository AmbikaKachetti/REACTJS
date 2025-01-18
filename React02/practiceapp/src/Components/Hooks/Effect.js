import React, { useEffect, useState } from "react";
import axios from "axios";

// ! Arrow Function
// const Effect = () => {
//   return (
//     <div>Effect</div>
//   )
// }
// ! Normal Function
function Effect() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log("Hi");
    axios
      .get("https://icubecode-server.onrender.com/users")
      .then((result) => {
        // console.log(result);
        console.log(result);
        setData(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    if (count === 10) {
      alert("You have reached the daily limit");
    }
  }, [count]);
  return (
    <>
      <h1>Effect</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      {data.map((item, index) => {
        return <p key={index}>Usernae: {item.username}</p>;
      })}
    </>
  );
}
export default Effect;
