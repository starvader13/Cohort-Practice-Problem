import Header from './components/Header.jsx'
import React from "react";
import './App.css'

function App() {
   const [title, setTitle] = React.useState("Ashu");

  function updateTitle(){
      setTitle(Math.random().toString());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title={"Ashutosh"}></Header>
      <Header title={"Ashutosh"}></Header>
      <Header title={"Ashutosh"}></Header>
      <Header title={"Ashutosh"}></Header>
      <Header title={"Ashutosh"}></Header>
      <Header title={"Ashutosh"}></Header>
    </div>
  )
}

// First Solution
// function HeaderWithButton(){
//     const [title, setTitle] = React.useState("Ashu");
//
//     function updateTitle(){
//         setTitle(Math.random().toString());
//     }
//
//     return <div>
//         <button onClick={updateTitle}>Update the title</button>
//         <Header title={title}></Header>
//     </div>
// }

// Second Solution
// React.memo

export default App
