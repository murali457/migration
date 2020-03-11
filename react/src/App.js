import React from 'react';
import {Route,Switch} from "react-router-dom";
import './App.css';
import Userlist from './pro/Userlist';
import Dashboard from './pro/Dashboard';
import Start from './pro/Start';
import Test from './pro/Test';
require('dotenv').config();
function App() {
  return (
<div>     
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/start"  component={Start}  />
            <Route path="/userlist" component={Userlist} />
            <Route path="/test" component={Test} />
        </Switch>
</div>
  );
}
export default App;
