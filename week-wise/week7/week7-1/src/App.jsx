import './App.css'
import React, {memo, Suspense, useCallback, useContext, useState} from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
const Dashboard = React.lazy(() => import("./components/Dashboard.jsx"))
const Landing = React.lazy(() => import("./components/Landing.jsx"))
import {Navigation} from "./components/Navigation.jsx";
import {CountContext} from "./components/Context.jsx";


function App() {
    const [count, setCount] = useState(0);
  return (
      /*
      <>
          <BrowserRouter>
              <Navigation />
              <Routes>
                <Route path={"/dashboard"} element={<Suspense fallback={"loading..."}> <Dashboard /></Suspense>} />
                <Route path={"/"} element={<Suspense fallback={"loading..."}> <Landing/></Suspense>} />
              </Routes>
          </BrowserRouter>
      </>
      */

      <div>
          <CountContext.Provider value={{count, setCount}}>
            <Count/>
          </CountContext.Provider>
      </div>
  )
}

const Count = memo(()=>{
    console.log("count rerender")
    return <div>
        <CountRenderer/>
        <Buttons/>
    </div>
});

function CountRenderer(){
    const {count} = useContext(CountContext)
    return <div>
        {count}
    </div>
}

function Buttons(){
    const {count, setCount} = useContext(CountContext)

    const increaseCounter = useCallback(()=>{
        setCount(count + 1);
    }, [count])
    const decreaseCounter = useCallback(()=>{
        setCount(count - 1);
    }, [count])
    return <div>
        <button onClick={increaseCounter}>Increase</button>
        <br/>
        <button onClick={decreaseCounter}>Decrease</button>
    </div>
}

export default App
