// eslint-disable-next-line
/* global define, it, describe, beforeEach */

import React from "react";

import Player from "./Player.js";

import { expect } from "chai";
import {  shallow } from "enzyme";


describe("<Player />", () => {

  it("should mount", () => {
    const wrapper = shallow(<Player />);
    expect(wrapper.find(".Player")).to.have.length(1);
  });
  
});
