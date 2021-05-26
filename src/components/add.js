import React,{useState,useContext} from 'react';
import Resultcard from './resultcard';
import {Globalcontext} from './context/globalstate'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close'

import Button from '@material-ui/core/Button';
import './add.css'

const Add = () => {
   const [searchedmovie,setmovie] = useState("");
   const [results , setresults] = useState([]);
   const {details,change} = useContext(Globalcontext);
   const search = (e)=>{
     setmovie(e.target.value);
     fetch(`https://api.themoviedb.org/3/search/movie?api_key=ee3cf5f5166d1b275b044f79b500801c&language=en-US&include_adult=false&query=${searchedmovie}`)
     .then(res => res.json()).then(data => {
      if(!data.errors)
       {setresults(data.results);}
       else
       {setresults([]);}
    })
  }
  let pp;
  let q;
  let r;
  if(details.length>0)
  {pp=details[0].poster_path;}

  if(details.length>0)
  {r=<CloseIcon onClick={change} className="close" />}
  
  if(details.length>0)
   {q=<img style={{height:"150px",marginTop:"40px",marginLeft:"5px"}} src={`https://image.tmdb.org/t/p/w200${pp}`}/>}
     
  
   return(
        <div className="add">
          <div className="ser">
           <input type ="text" placeholder="Search a movie" value={searchedmovie} onChange={search} />
           <button className="bn"><SearchIcon/></button>
          </div>
          <ul className="list">
            {
             results.map((movie)=>(
              <li key={movie.id}><Resultcard movie={movie} /></li>
             ))}

          </ul>
          <div className={details.length?"details":""} >
            {q}
            <h2>{details.length?details[0].overview:""} </h2>
            {r}
            
          </div>
        </div>
    )
}

export default Add;