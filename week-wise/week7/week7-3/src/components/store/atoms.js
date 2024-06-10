import {atom, selector} from "recoil";
import axios from "axios";

// Asynchronous Data queries
export const allNotificationAtom = atom({
    key: "allNotificationAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            await new Promise(r => setTimeout(r,5000));
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
});

export const totalNotificationAtom = selector({
    key: "totalNotificationAtom",
    get: ({get})=>{
        const notifications = get(allNotificationAtom);
        return notifications.network + notifications.jobs + notifications.messaging + notifications.notifications;
    }
})
