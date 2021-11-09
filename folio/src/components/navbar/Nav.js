import React from 'react'
import {Link} from "react-router-dom";

export default class Nav extends React.Component {
    render(){
        return (
            <nav>
               <a><Link to={'/'}>Home</Link></a>
                <a><Link to={'/about'}>About </Link></a>
            </nav>
        )
    }
}