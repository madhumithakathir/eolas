import React from 'react';
import{BrowserRouter,Route} from 'react-router-dom';
import Home from './Home'
import Dashboard from './Dashboard'
import Footer from './Footer' 

function Router(){
    return(
        <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
          <Footer />
        </BrowserRouter>
    )
}
export default Router