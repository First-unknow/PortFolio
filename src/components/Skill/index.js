import React, { Component } from 'react'
import styled from 'styled-components'

import Box from '../Core/Box'

const Div = styled.div`
  background-color:#545454;
`

export default class Index extends Component {
  render() {
    return (
      <Box background="#545454" className="row justify-content-md-around justify-content-center w-100 m-0">
            <div className="flex-column col-12 col-md-6 text-center">
              <h2>My Skill</h2>
              <h5 className="mt-3">Front-End</h5>
                HTML/CSS: Advance <br />
                Bootstrap: Advance <br />
                React: Advance <br />
                Vue: Normal <br />
                Angular: Beginner <br />

                <h5 className="mt-3">Back-End</h5>
                Java: Normal <br />

                <h5 className="mt-3">Application</h5>
                Flutter: Basic <br />
            </div>

          <Div className="flex-column col-12 col-md-4 text-center mt-3 mt-md-0 pb-3 pb-md-0">
            <h2>My Experience</h2>
            <div className="text-md-left">
            Git Hub : <a href="https://github.com/First-unknow"> First-Unknow</a>  <br />

            <h5>WIP Developer for WIP Camp</h5>
            <h6 className="mt-3">WIP Camp 11</h6>
            Web PR <br />

            <h6 className="mt-3">WIP Camp 12</h6>
            Web for Register <br />
            Web Staff for Select Participants and Manage in Camp<br />
            Project Manager and Consultant for Web PR <br />

            <h5 className="mt-3">Hello World Cockateil</h5>
            Web Developer and Project Manager for Web PR
            </div>

          </Div>

      </Box>
    )
  }
}
