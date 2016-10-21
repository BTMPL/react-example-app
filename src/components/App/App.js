import React, { Component } from "react";

import { Router, Route, browserHistory } from "react-router";

import { Provider } from "react-redux";
import store from "../../store/index";

import { default as HomeRoute } from "../../routes/Home.js";
import Player from "../../components/Player";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={HomeRoute}>
            <Route path="/:video" component={(props) => <Player video={props.params.video} />} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;