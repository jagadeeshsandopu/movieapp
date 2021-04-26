import React,{useContext} from 'react'
import {Globalcontext} from './context/globalstate'

const Resultcard = (props)=>{
   const {addmoviefunction,watchlist} = useContext(Globalcontext);
    
    const clickedmovie = watchlist.find( m => m.id === props.movie.id)
    const buttondisabled = clickedmovie ? true : false
    return (
        <div>
          <img  src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`}/>
          <h1>{props.movie.title}</h1>
          <h4>{props.movie.release_date}</h4>
          <button style={{margin : "10px",display: "inline-block",textAlign:"center",borderRadius: "12px",backgroundColor: "green",color : "white"}}disabled={buttondisabled}  onClick={()=>{addmoviefunction(props.movie)}} type="submit">ADD TO WATCHLIST</button>
          <br/>
        </div>
    )
}

export default Resultcard;