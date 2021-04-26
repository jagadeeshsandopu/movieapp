import React,{useContext, useState} from "react"
import {Globalcontext} from './context/globalstate'
import {Link} from 'react-router-dom'

const Header = () => {
   const {watchlist} = useContext(Globalcontext);
    return (
      <header style={{backgroundColor: "orange"}}>
          <Link to ="/">Watchlist</Link>
          <h1 style={{textAlign: "center"}}>THE MOVIE APP</h1>
          <ul>
             <li>
                <Link to ="/">Watchlist</Link>
             </li>

             <li>
                <Link to ="/watched">Watched</Link>
             </li>

             <li>
                <Link to ="/add">Add</Link>
             </li>
          </ul>
         
      </header>
    )
}

export default Header;