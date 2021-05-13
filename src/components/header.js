import React,{useContext, useState} from "react"
import {Globalcontext} from './context/globalstate'
import {Link} from 'react-router-dom'
import "./header.css"

const Header = () => {
   const {watchlist} = useContext(Globalcontext);
    return (
      <header className = "container">
          
          <h1> MOVIE APP</h1>
          <ul className= 'links'>
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
         
      </header>
    )
}

export default Header;