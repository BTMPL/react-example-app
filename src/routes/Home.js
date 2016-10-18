import React, { Component } from "react";

import SearchBox from "../components/SearchBox";
import SearchResults from "../components/SearchResults";

import { connect } from "react-redux";
import { searchForVideo, showLatestVideos } from "../actions/videos.js";

import { withRouter }  from "react-router";

class HomeRoute extends Component {

  constructor(props) {
    super(props);
    this.playVideo = this.playVideo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount() {
    this.props.showLatestVideos();
  }

  playVideo(id) {
    this.props.router.push(`/${id}`);
  }

  handleSearch(query) {
    this.props.handleSearch(query);
    this.props.router.push(`/`);
  }

  render() {
    return (
      <div className="app">
        <SearchBox onSubmit={this.handleSearch}/>
        {this.props.children}
        <SearchResults handleClick={this.playVideo} items={this.props.videos}/>
      </div>
    )
  }
}

HomeRoute.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default withRouter(connect((state) => ({
  videos: state.videos
}), {
  handleSearch: searchForVideo,
  showLatestVideos
})(HomeRoute));