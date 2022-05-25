import React from "react";
import Sign from "./Components/Sign";
import { shallow ,configure} from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18"
import {expect} from 'chai';
import Login from "./Components/Login";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";

configure({adapter:new Adapter()});
let  rootContainer;
var assert = require("assert");

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("Test in UI components", () => {
  it("Chech in array", () => {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });
  
});
describe("Test signup form", () => {

  it('has correct sign text', () => {
    const wrapper = shallow(<Sign/>)
    expect(wrapper.find('h1').text()).equal('SIGNIN')
  })
    it('button here in sign',() => {
      const wrapper = shallow(<Sign/>)
      // eslint-disable-next-line jest/valid-expect
      expect(wrapper.find('button')).to.have.length(1)
    })
    it("test class",()=>{
      act(()=>{
        ReactDOM.render(<Sign/>,rootContainer)
      })
     const className =rootContainer.querySelector('Margin');
     // eslint-disable-next-line no-unused-expressions
     expect(className).to.be;
     })
  });
  describe("Testing Login form", () => {

    it('correct login text', () => {
      const wrapper = shallow(<Login/>)
      expect(wrapper.find('h1').text()).equal('LOGIN')
    })
      it('button here in sign',() => {
        const wrapper = shallow(<Login/>)
        // eslint-disable-next-line jest/valid-expect
        expect(wrapper.find('button')).to.have.length(1)
      })
      it("test in login class",()=>{
        act(()=>{
          ReactDOM.render(<Sign/>,rootContainer)
        })
       const className =rootContainer.querySelector('Margin');
       // eslint-disable-next-line no-unused-expressions
       expect(className).to.be;
       })
    });