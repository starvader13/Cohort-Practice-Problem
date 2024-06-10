import {useRecoilState, useRecoilValue} from "recoil";
import {allNotificationAtom, totalNotificationAtom} from "./store/atoms.js";

export default function AsyncHeader(){
    const [allNotificationCount] = useRecoilState(allNotificationAtom);
    const totalNotificationCount = useRecoilValue(totalNotificationAtom);


    return <>
        <button>Home</button>
        <button>My Network ({allNotificationCount.network >= 100 ? "99+" : allNotificationCount.network})</button>
        <button>Jobs ({allNotificationCount.jobs})</button>
        <button>Messaging ({allNotificationCount.messaging})</button>
        <button>Notification ({allNotificationCount.notifications})</button>
        <button>Me ({totalNotificationCount})</button>
    </>
}
