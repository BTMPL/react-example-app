// eslint-disable-next-line
/* global define, it, describe */

import React from "react";

import SearchResults from "./SearchResults.js";

import { expect } from "chai";
import { mount, shallow } from "enzyme";

describe("<SearchResults />", () => {

  it("should mount", () => {
    const wrapper = shallow(<SearchResults />);
    expect(wrapper.find(".SearchResults")).to.have.length(1);
  });

  it("should render the correct ammount of children components", () => {
    const items = [
      { id: { videoId: 1 }, snippet: { title: "test", thumbnails : { medium : { url : "" } } } },
      { id: { videoId: 2 }, snippet: { title: "test", thumbnails : { medium : { url : "" } } } },
      { id: { videoId: 3 }, snippet: { title: "test", thumbnails : { medium : { url : "" } } } },
      { id: { videoId: 4 }, snippet: { title: "test", thumbnails : { medium : { url : "" } } } }
    ];

    const wrapper = mount(<SearchResults items={items}/>);
    expect(wrapper.find("article")).to.have.length(4);
  });
});