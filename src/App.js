import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu'
import User from './componant/User';
import Contact from './componant/Contact';
import about from './componant/About';
import Info from './componant/Info';
import './componant/User.css';

function App() {

  return (
    <>

      <Menu />
      <Switch>




        <Route path='/user' component={User} />
        <Route path='/Contact' component={Contact} />
        <Route path='/About' component={ about}></Route>
        <Route path='/Info' component={ Info}/>



      </Switch>

    </>





  );
}

export default App;