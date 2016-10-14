import React, { Component } from "react";
import { render } from "react-dom";

import axios from "axios";

import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import Player from "./components/Player";


class App extends Component {

  constructor(props) {
    super(props);

    this.playVideo = this.playVideo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      items: [],
      video: null,
      query: ""
    }
  }

  handleSearch(query) {
    this.setState({
      query: query
    });
    axios.get(`https://content.googleapis.com/youtube/v3/search?q=${query}&part=snippet&type=video&key=AIzaSyDSj6pydOPRW2ANkpGFPuoHJIes88GakG4`)
    .then((response) => {
      if(response.data.items.length) {
        this.setState({
          items: response.data ? response.data.items : []
        })
      }
    })
  }

  playVideo(id) {
    this.setState({
      video: id
    });
  }

  render() {
    return (
      <div className="app">
        <SearchBox onSearch={this.handleSearch} query={this.state.query} />
        <Player video={this.state.video} />
        <SearchResults items={this.state.items} handleClick={this.playVideo}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));