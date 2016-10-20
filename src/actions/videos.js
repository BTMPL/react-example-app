import axios from "axios";

export const VIDEOS_LOADED = "video/VIDEOS_LOADED";

export function searchForVideo(query, count = 8) {
  return (dispatch) => {
    axios.get(`https://content.googleapis.com/youtube/v3/search?q=${query}&part=snippet&type=video&key=AIzaSyDSj6pydOPRW2ANkpGFPuoHJIes88GakG4&maxResults=${count}`)
    .then((response) => {
      if(response.data.items.length) {
        dispatch({
          type: VIDEOS_LOADED,
          payload: response.data ? response.data.items : []
        });
      }
    });
  };
}

export function showLatestVideos() {
  return searchForVideo("reactjs", 10);
}

/**
 * we've changed the export method, because we need to export axios object
 * for unit tests, and this is one of the ways to export the reference
 * to the object and be able to mock over it later on 
 */

export default {
  axios
};