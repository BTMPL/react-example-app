// eslint-disable-next-line
/* global define, it, describe, beforeEach */

import { expect } from "chai";
import MockAdapter from "axios-mock-adapter";
import videosActions, { searchForVideo, VIDEOS_LOADED } from "./videos";

var mock = new MockAdapter(videosActions.axios);

mock.onAny().reply(200, {
  items: [
    { id: { videoId: 1 } }
  ]
});

describe("Videos actions", () => {

  it("should return 1 item", (done) => {
    searchForVideo()(x => {
      if(x.type != VIDEOS_LOADED) expect(false).to.be(true);
      if(x.payload.length != 1) expect(false).to.be(true);
      done();
    });
  });
});
