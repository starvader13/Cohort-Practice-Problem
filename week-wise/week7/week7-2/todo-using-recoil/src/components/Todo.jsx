import Filter from "./Filter.jsx";
import Input from "./Input.jsx";
import {RecoilRoot} from "recoil";

export default function Todo() {
    return <div>
        <RecoilRoot>
            <Input />
            <Filter />
        </RecoilRoot>
    </div>
}
