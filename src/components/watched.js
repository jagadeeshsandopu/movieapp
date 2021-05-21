import React,{useContext} from 'react';
import {Globalcontext} from './context/globalstate'
import './watched.css'
import Button from '@material-ui/core/Button';

const Watched = () => {
    const {watched} = useContext(Globalcontext);
    
    return(
        <div className="watched">
         <h1>Watched</h1>
         {watched.map( mov =>{
          if(mov)
          { return (<div>
             <img src={`https://image.tmdb.org/t/p/w200${mov.poster_path}`}/>
             </div>
           )
          }
         })
        }
        </div>
    )
}

export default Watched;