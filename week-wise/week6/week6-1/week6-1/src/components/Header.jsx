import React from "react";

// export function Header({ title }){
//
//     return <div>
//         My name is: {title}
//     </div>
// }


const Header = React.memo(({ title })=>{

    return <div>
        My name is: {title}
    </div>
})

export default Header