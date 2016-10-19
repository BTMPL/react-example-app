// eslint-disable-next-line
/* global define, it, describe, beforeEach */

import React from "react";

import SearchBox from "./SearchBox.js";

import { expect } from "chai";
import { shallow } from "enzyme";
import jsdom from "jsdom";


describe("<SearchBox />", () => {

  let doc = null;


  beforeEach(() => {
    /**
     * we're going to need to click the body element, so we make sure to create
     * a new one for each call as to not keep old listeners
     */
    doc = jsdom.jsdom("<!doctype html><html><body></body></html>");
    global.document = doc;
    global.window = doc.defaultView;
  });


  it("should mount", () => {
    const wrapper = shallow(<SearchBox />);
    expect(wrapper.find("form")).to.have.length(1);
  });

  it("should call the callback function with 'query' as the value", (done) => {
    const wrapper = shallow(<SearchBox onSubmit={(v) => {
      expect(v).to.be.equal("query");
      done();
    }}/>);
    wrapper.find("input[type='text']").simulate("change", { target: { value: "query" }});
    wrapper.find("input[type='text']").simulate("blur", { preventDefault() {} });
  });
});
