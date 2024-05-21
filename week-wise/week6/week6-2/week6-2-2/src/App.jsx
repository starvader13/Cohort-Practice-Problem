import { useState, useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function calculateSum(){
    const value = parseInt(input)
    return value*((value+1)/2)
  }

  let sum = useMemo(calculateSum,[input]);

  return (
    <>
      <InputBox setInput={setInput} />
      <div>
        Sum is {sum}
      </div>
      <Counter count={count} setCount={setCount}/>
    </>
  )
}

// eslint-disable react/prop-types
/*eslint-disable react/prop-types*/
function Counter({count, setCount}){
  return <div>
    <button onClick={() => {
      setCount(count + 1);
    }}>Counter ({count})
    </button>
  </div>
}

function InputBox({setInput}){
  return <div>
    <input type={"number"} onChange={(e)=>{setInput(e.target.value)}}/>
  </div>
}
export default App
