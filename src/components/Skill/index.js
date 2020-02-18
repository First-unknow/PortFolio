import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    return (
        <div className="d-flex justify-content-start">
          <div className="flex-column">
          <h2>My Skill</h2> 
          <h5 className="mt-3">Front-End</h5>
          HTML/CSS: Advance <br />
          Bootstrap: Advance <br />
          React: Advance <br />
          Vue: Normal <br />
          Angular: Beginner <br />

          <h5 className="mt-3">Application</h5>
          Flutter: Beginner <br />
         
          </div>
        </div>
    )
  }
}
