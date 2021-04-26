import React, {createContext,useReducer,useEffect} from 'react';
import Watched from '../watched';


const initialstate ={
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched:localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
}

const moviereducer = (state,action) =>{
 switch(action.type)
 {
  case 'ADD_TO_WATCHLIST' : 
   return {
       ...state,
       watchlist : [...state.watchlist, action.payload]
   }
   case 'REMOVE_MOVIE' :
    const newarr = [...state.watchlist];
   return {
      ...state,
       watchlist: newarr.filter(ite=>ite.id!==action.payload)
   }
   case 'ADD_TO_WATCHED':
     return {
         ...state,
         watched : [...state.watched , action.payload]
     }
  default : return state;
 }
}

export const Globalcontext = createContext(initialstate);


export const Globalprovider = (props) =>{
    const [state,dispatch] =useReducer(moviereducer,initialstate);
    const addmoviefunction = (movie) =>{
        dispatch({type : 'ADD_TO_WATCHLIST', payload : movie});
    };
    const removemoviefunction = (id)=>{
       dispatch({type :'REMOVE_MOVIE', payload : id });
    };
    const addtowatchedfunction = (movie)=>{
        dispatch({type : 'ADD_TO_WATCHED',payload : movie})
    };
    useEffect(() => {
       localStorage.setItem("watchlist",JSON.stringify(state.watchlist));
       localStorage.setItem("watched",JSON.stringify(state.watched));
    },[state])
    return ( <Globalcontext.Provider value={{watchlist:state.watchlist,watched:state.watched,addmoviefunction,removemoviefunction,addtowatchedfunction}}>
      {props.children}
    </Globalcontext.Provider>);
}