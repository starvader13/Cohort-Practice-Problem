import './App.css'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil";
import {jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationCountSelector} from "./store/atoms.js";
import AsyncHeader from "./components/AsyncHeader.jsx";
import AtomFamily from "./components/AtomFamily/AtomFamily.jsx";
import {useEffect} from "react";
import {todosAtomFamily} from "./components/AtomFamily/atoms.js";
import SelectorFamily from "./components/SelectorFamily/SelectorFamily.jsx";

function App() {

   return <RecoilRoot>
     {/*<LinkedinTopBar />*/}

     {/*<AsyncHeader />*/}

     {/*<Updater />*/}
     {/*<AtomFamily id={1} />*/}
     {/*<AtomFamily id={2} />*/}

     <SelectorFamily id={1}/>
     <SelectorFamily id={2}/>
   </RecoilRoot>
}

function Updater(){
  const setTodo = useSetRecoilState(todosAtomFamily(2));

  useEffect(() => {
    setTimeout(()=>{
      setTodo({
        id: 2,
        title: "foo",
        description: "bar"
      })
    }, 5000)
  }, []);
}

function LinkedinTopBar(){
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const totalCount = useRecoilValue(totalNotificationCountSelector);

  return <>
    <button>Home</button>
    <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
    <button>Jobs ({jobsCount})</button>
    <button>Messaging ({messageCount})</button>
    <button>Notification ({notificationCount})</button>
    <button>Me ({totalCount})</button>
  </>
}

export default App
