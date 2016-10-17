import axios from "axios";

export const VIDEOS_LOADED = "video/VIDEOS_LOADED";

export function searchForVideo(query) {
  return (dispatch) => {
    axios.get(`https://content.googleapis.com/youtube/v3/search?q=${query}&part=snippet&type=video&key=AIzaSyDSj6pydOPRW2ANkpGFPuoHJIes88GakG4`)
    .then((response) => {
      if(response.data.items.length) {
        dispatch({
          type: VIDEOS_LOADED,
          payload: response.data ? response.data.items : []
        })
      }
    })
  }
}