import React,{useContext} from 'react';
import {Globalcontext} from './context/globalstate'
import './watchlist.css'

const Watchlist = () => {
  const {watchlist,removemoviefunction,addtowatchedfunction,watched} = useContext(Globalcontext);
  
  
   if(watchlist.length===0)
   {return <h1>Your watch list is empty</h1>}
   
    return (
     <div className="watchlist">
      <h1>Watchlist</h1>
      <h2>Movie Count : {watchlist.length}</h2>
      {watchlist.map(mov =>{
        return (<div className="img">
         <img src={`https://image.tmdb.org/t/p/w200${mov.poster_path}`}/>
          <button onClick={() => removemoviefunction(mov.id)}>REMOVE MOVIE</button>
          <button type="submit" onClick={() =>addtowatchedfunction(mov)}>ADD TO WATCHED</button>
        </div>)
      })}
     </div>
      
       
      
    )     
         
        
        
  
}

export default Watchlist;