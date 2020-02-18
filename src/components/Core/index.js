import React, { Component } from 'react'

import Profile from '../Profile'
import Skill from '../Skill'
import Experience from '../Experience'
export default class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Profile />
        <div className="d-flex justify-content-around mt-4">
          <Skill />
          <Experience />
        </div>
      </React.Fragment>
    )
  }
}
