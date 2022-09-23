import React from 'react'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul>
                {/*將 a 替代為 Link，href改成to*/}
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}
export default Nav;