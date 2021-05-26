import React,{useContext,useState} from 'react'
import {Globalcontext} from './context/globalstate'
import './resultcard.css'
import Button from '@material-ui/core/Button';
const Resultcard = (props)=>{
   const {addmoviefunction,watchlist,showdetailsfunction} = useContext(Globalcontext);
    const clickedmovie = watchlist.find( m => m.id === props.movie.id)
    const buttondisabled = clickedmovie ? true : false
    return (
      <div className="thu">
        <div className="card">
          <img onClick={()=>{showdetailsfunction(props.movie)}} src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`}/>
          <h2 >{props.movie.title}</h2>
        </div>
        <Button size="small" variant="contained" color="secondary" className="butt"  disabled={buttondisabled}  onClick={()=>{addmoviefunction(props.movie)}} type="submit">ADD TO WATCHLIST</Button>
        
      </div>
    )
}

export default Resultcard;