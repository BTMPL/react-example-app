import React, { PropTypes } from "react";
import styles from "./SearchResults.css";

class SearchResultsItem extends React.Component {
  render () {
    return (
      <article className={styles.SearchResult} onClick={() => this.props.onClick(this.props.item.id.videoId)}>
        <img src={this.props.item.snippet.thumbnails.medium.url} />
        <h1>{this.props.item.snippet.title}</h1>
      </article>
    );
  }
}

SearchResultsItem.propTypes = {
  item: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func
};

class SearchResults extends React.Component {
  render () {
    return (
      <div className={styles.SearchResults + " SearchResults"}>
        {this.props.items.map( item =>
          <SearchResultsItem
            key={item.id.videoId}
            item={item}
            onClick={this.props.onClick} />
        )}
      </div>
    );
  }
}

SearchResults.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func
};

SearchResults.defaultProps = {
  items: []
};

export default SearchResults;