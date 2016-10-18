import React, { Component } from "react";
import { render } from "react-dom";

import { Router, IndexRoute, Route, hashHistory } from "react-router";

import { Provider } from "react-redux";
import store from "./store/index";

import { default as HomeRoute } from "./routes/home.js";
import Player from "./components/Player";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={HomeRoute}>
            <Route path="/:video" component={(props) => <Player video={props.params.video} />} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));