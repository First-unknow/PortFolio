import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax';

import Profile from '../Profile'
import Skill from '../Skill'
import Social from '../Social'
export default class Index extends Component {
  render() {
    return (
      <React.Fragment>
          <React.Fragment>
            <Parallax className="custom-class" y={[-40, 30]} tagOuter="figure">
              <Profile />
            </Parallax>
            <Parallax className="custom-class" y={[-10, 0]} tagOuter="figure">
              <Skill />
            </Parallax>
            <Parallax className="custom-class" y={[-20, 10]} tagOuter="figure">
              <Social />
            </Parallax>
          </React.Fragment> 
      </React.Fragment>
    )
  }
}
