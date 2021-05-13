import React,{useContext} from 'react'
import {Globalcontext} from './context/globalstate'
import './resultcard.css'
const Resultcard = (props)=>{
   const {addmoviefunction,watchlist} = useContext(Globalcontext);
    
    const clickedmovie = watchlist.find( m => m.id === props.movie.id)
    const buttondisabled = clickedmovie ? true : false
    return (
      <div>
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`}/>
          <h1 >{props.movie.title}</h1>
        </div>
        <button id="butt" disabled={buttondisabled}  onClick={()=>{addmoviefunction(props.movie)}} type="submit">ADD TO WATCHLIST</button>
      </div>
    )
}

export default Resultcard;