import './App.css'
import {memo, useCallback} from "react"
import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {countAtom, evenSelector} from "./store/atoms/Count.jsx";


function App() {
  return (
      <div>
          <RecoilRoot>
              <Count/>
          </RecoilRoot>
      </div>
  )
}

const Count = memo(()=>{
    return <div>
        <CountRenderer/>
        <Buttons/>
    </div>
});

function CountRenderer(){
    const count = useRecoilValue(countAtom);
    return <div>
        {count}
    </div>
}

function Buttons(){
    const setCount = useSetRecoilState(countAtom);

    const increaseCounter = useCallback(()=>{
        setCount(count=>count + 1);
    }, [])

    const decreaseCounter = useCallback(()=>{
        setCount(count=>count - 1);
    }, [])

    return <div>
        <button onClick={increaseCounter}>Increase</button>
        <br/>
        <button onClick={decreaseCounter}>Decrease</button>
        <Even />
    </div>
}

function Even(){
    const isEven = useRecoilValue(evenSelector)
    // const isEven = useMemo(()=>{
    //     return count%2===0;
    // }, [count]);

    return <div>
        {isEven ? "It is even" : "" }
    </div>
}
export default App
