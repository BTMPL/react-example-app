import React, { PropTypes } from 'react'

import styles from "./Player.css";

class Player extends React.Component {
  render () {
    if(this.props.video === null) return <div className={styles.Player + " Player"}><p>Please type a search query, and select one of the results to display a video.</p></div>;

    let playerUrl = `https://www.youtube.com/embed/${this.props.video}?autoplay=false`;
    return (<div className={styles.Player + " Player"}>
      <div className={styles.Player__content}><iframe width="560" height="315" src={playerUrl}></iframe>&nbsp;</div>
    </div>);
  }
}

Player.propTypes = {
  video: PropTypes.string
};

Player.defaultProps = {
  video: null
};

export default Player;