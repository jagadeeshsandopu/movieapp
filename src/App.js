import Header from './components/header'
import Add from './components/add'
import Watched from './components/watched'
import Watchlist from './components/watchlist'
import {BrowserRouter} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Globalprovider} from './components/context/globalstate'



function App() {
  
  return (
  <Globalprovider>
    <div>
     <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/"><Watchlist/></Route>
        <Route exact path="/watched"><Watched/></Route>
        <Route exact path="/add"><Add/></Route>
      </Switch>
     </BrowserRouter>
    </div>
  </Globalprovider>
  );
}

export default App;
