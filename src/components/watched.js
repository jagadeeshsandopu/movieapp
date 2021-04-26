import React,{useContext} from 'react';
import {Globalcontext} from './context/globalstate'


const Watched = () => {
    const {watched} = useContext(Globalcontext);
    
    return(
        <div>
         <h1>Watched</h1>
         {watched.map( mov =>{
          if(mov)
          { return (<div>
             <img src={`https://image.tmdb.org/t/p/w200${mov.poster_path}`}/>}
             </div>
           )
          }
         })
        }
        </div>
    )
}

export default Watched;