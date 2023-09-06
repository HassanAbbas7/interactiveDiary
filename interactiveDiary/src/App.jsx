import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Question from "./components/question";


function App() {
  const [count, setCount] = useState(0)


  const idk = ()=>{
    return(
      <>
      <p>good stuff...</p>
      </>
    )
  }
  return (
    <>
    <Routes>
          <Route path="/" exact element={idk()} />
          <Route path="/question" exact element={<Question/>} />
        </Routes>
    </>
  )
}

export default App