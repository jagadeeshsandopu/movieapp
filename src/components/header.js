import React,{useContext, useState} from "react"
import {Globalcontext} from './context/globalstate'
import ReorderIcon from '@material-ui/icons/Reorder';
import {Link} from 'react-router-dom'

import "./header.css"

const Header = () => {
   const {watchlist} = useContext(Globalcontext);
   const [show,setshow] =useState(false);
    return (
      <header className = "container">
          
          <h1> MOVIE APP</h1>
          
          <ul className= 'links' id={show?"hidden":""} >
             
             <li>
                <Link to ="/" className="link">Watchlist</Link>
             </li>

             <li>
                <Link to ="/watched" className="link">Watched</Link>
             </li>

             <li>
                <Link to ="/add" className="link">Add</Link>
             </li>
          </ul>
          <button onClick={() =>{setshow(!show)}}><ReorderIcon/></button>
         
      </header>
    )
}

export default Header;