import React, { PropTypes } from 'react'

import styles from "./SearchResults.css";

import { connect } from "react-redux";

class SearchResultsItem extends React.Component {
  render () {
    return <article className={styles.SearchResult} onClick={() => this.props.onClick(this.props.item.id.videoId)}>
      <img src={this.props.item.snippet.thumbnails.medium.url} />
      <h1>{this.props.item.snippet.title}</h1>
    </article>
  }
}



class SearchResults extends React.Component {

  render () {
    return <div className={styles.SearchResults + " SearchResults"}>
      {this.props.items.map( item =>
        <SearchResultsItem
          key={item.id.videoId}
          item={item}
          onClick={this.props.handleClick} />
      )}
    </div>;
  }
}

SearchResults.propTypes = {
  items: PropTypes.array
};

SearchResults.defaultProps = {
  items: []
};

export default connect((state) => ({
  items: state.videos
}))(SearchResults);