import * as actions from "../actions/videos.js";

export default function(state = [], action) {
  switch(action.type) {
    case actions.VIDEOS_LOADED:
      return action.payload;

    default:
      return state;
  }
}