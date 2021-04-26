import React,{useState} from 'react';
import Resultcard from './resultcard';

const Add = () => {
   const [searchedmovie,setmovie] = useState("");
   const [results , setresults] = useState([]);
   
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

   return(
        <div>
          <input type ="text" placeholder="Search a movie" value={searchedmovie} onChange={search}
           style={{ width :"50%" , textAlign:"center",height: 20,marginLeft:"25%"}}/>
          <ul>
            {
             results.map((movie)=>(
              <li key={movie.id}><Resultcard movie={movie} /></li>
             ))}

          </ul>
          
        </div>
    )
}

export default Add;