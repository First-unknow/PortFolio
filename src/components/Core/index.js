import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax';

import Profile from '../Profile'
import Skill from '../Skill'
import Social from '../Social'
export default class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Parallax className="custom-class" y={[-60, 30]} tagOuter="figure">
          <Profile />
        </Parallax>
         <Parallax className="custom-class" y={[-20, 5]} tagOuter="figure">
          <Skill />
        </Parallax>
         <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          <Social />
        </Parallax>
      </React.Fragment>
    )
  }
}
