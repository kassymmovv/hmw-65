import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Container/Home/Home";
import Pages from "./Component/Pages";
import Edit from "./Component/Edit/Edit";
class App extends Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Pages}/>
                <Route path="/pages/:id"  component={Home}/>
                <Route path="/edit" exact component={Edit}/>
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
