import React,{useContext} from 'react';
import {Globalcontext} from './context/globalstate'

const Watchlist = () => {
  const {watchlist,removemoviefunction,addtowatchedfunction,watched} = useContext(Globalcontext);
  
  
   if(watchlist.length===0)
   {return <h1 style={{color : "purple"}}>Your watch list is empty</h1>}
   
    return (
     <div>
      <h1>Watchlist</h1>
      <h2 style={{float:"right"}}>Movie Count : {watchlist.length}</h2>
      {watchlist.map(mov =>{
        return (<div>
         <img src={`https://image.tmdb.org/t/p/w200${mov.poster_path}`}/>
         <button onClick={() => removemoviefunction(mov.id)} style={{marginLeft : "30px",borderRadius:"12px", backgroundColor: "green",color: "white"}}>REMOVE MOVIE</button>
         <button type="submit" onClick={() =>addtowatchedfunction(mov)} style={{margin : "10px",display: "inline-block",textAlign:"center",borderRadius: "12px",backgroundColor: "green",color : "white"}}>ADD TO WATCHED</button>
        </div>)
      })}
     </div>
      
       
      
    )     
         
        
        
  
}

export default Watchlist;