import React from 'react'
function Nav(props){
    return <div className="nav">
        <ul>
            <li><a href="#/index1">{props.link.split(",")[0]}</a></li>
            <li><a href="#/index2">{props.link.split(",")[1]}</a></li>
            <li><a href="#/index3">{props.link.split(",")[2]}</a></li>
            <li><a href="#/index4">{props.link.split(",")[3]}</a></li>
            <li><a href="#/index5">{props.link.split(",")[4]}</a></li>
        </ul>
    </div>
}
export default Nav;