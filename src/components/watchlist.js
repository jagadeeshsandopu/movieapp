import React,{useContext} from 'react';
import {Globalcontext} from './context/globalstate'
import './watchlist.css'
import Button from '@material-ui/core/Button';

const Watchlist = () => {
  const {watchlist,removemoviefunction,addtowatchedfunction,watched} = useContext(Globalcontext);
  
  
   if(watchlist.length===0)
   {return <h1>Your watch list is empty</h1>}
   
    return (
     <div className="watchlist">
      <h1>Watchlist</h1>
      
      {watchlist.map(mov =>{
        return (<div className="img">
         <img src={`https://image.tmdb.org/t/p/w200${mov.poster_path}`}/>
          <Button size="small" variant="contained" color="secondary" onClick={() => removemoviefunction(mov.id)}>REMOVE MOVIE</Button>
          <Button size="small" variant="contained" color="secondary" type="submit" onClick={() =>addtowatchedfunction(mov)}>ADD TO WATCHED</Button>
        </div>)
      })}
     </div>
      
       
      
    )     
         
        
        
  
}

export default Watchlist;