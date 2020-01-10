import React from 'react';
import Homepage from './components/Homepage/Homepage';
import Roompage from './components/Roompage/Roompage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { Route, Switch } from 'react-router-dom';
import SingleRoom from './components/Roompage/SingleRoom';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/rooms/" component={Roompage} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route component={PageNotFound} />
    </Switch>
    </>
  )
}

export default App;

/** Cách sử dụng react-router-dom
 * 1/ import { Browser as Router } from 'react-router-dom' vào index.js, bọc Router quanh component App
 * 2/ import { Route, Switch , Link } vào App.js , <Switch>...</Switch> bọc quanh ,<Route exact path="/" component={Homepage} /> cho mỗi component.
 * (:slug là đường dẫn dynamic, Navbar nằm ngoài <Switch /> vì trang nào cũng có Navbar)
 * 3/ { Link } dùng ở Navbar.
 * 
 */
