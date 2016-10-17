import React, { Component } from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import store from "./store/index";

import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import Player from "./components/Player";


class App extends Component {

  constructor(props) {
    super(props);
    this.playVideo = this.playVideo.bind(this);

    this.state = {
      video: null
    }
  }

  playVideo(id) {
    this.setState({
      video: id
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <SearchBox query={this.state.query} />
          <Player video={this.state.video} />
          <SearchResults handleClick={this.playVideo} />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));