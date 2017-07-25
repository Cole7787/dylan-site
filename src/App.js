import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './views/HomeView';
// import About from './views/HomeView';
import Shop from './views/ShopView';
import Cart from './views/CartView';

const App = (props) => (
  <Router history={browserHistory}>
    <Route path='/home' component={Home} />
    {/*<Route path='/about' component={About} />*/}
    <Route path='/shop' component={Shop} />
    <Route path='/cart' component={Cart} />
  </Router>
)

export default App;
