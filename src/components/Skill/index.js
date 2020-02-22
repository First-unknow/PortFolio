import React, { Component } from 'react'
import styled from 'styled-components'

import Box from '../Core/Box'

const Div = styled.div`
  background-color:#164563;
`

const ReBox = styled(Box)`
  color: white;
  height: 100%;
`

const Img = styled.img`
  width:${props => props.size};
  height:auto;
`

const LogoSkill = (props) => (
  <div className={`col-12 col-lg-6 ${props.className}`}>
    <Img src={props.src} className="mt-1 col-6 text-right" size={props.size} />
    <span className="col-6">{props.text}</span><br />
  </div>
)

export default class Index extends Component {

  state = {
    FE: [
      { img: 'html', text: 'HTML: Advance' },
      { img: 'css', text: 'CSS: Advance' },
      { img: 'Bootstrap', text: 'Bootstrap: Advance' },
      { img: 'react', text: 'React: Advance' },
      { img: 'vue', text: 'Vue: Normal' },
      { img: 'Angular', text: 'Angular: Beginner' },
    ]
  }

  render() {
    return (
      <ReBox background="#164563" className="row justify-content-md-around justify-content-center align-items-center w-100 m-0 pb-5">
        <div className="flex-column col-12 col-md-6 text-center p-2 mt-5 pt-5 mt-lg-0">
          <h2>My Skill</h2>
          <h5 className="mt-3">Front-End</h5>
          <div className="row">
          {
            this.state.FE.map((data, i) => (
              <LogoSkill 
                className="col-12 col-lg-6 mt-3"
                src={`/images/skill/${data.img}.png`} 
                text={data.text}
                size={ data.img === 'html' || data.img === 'Angular' || data.img === 'react' ? '75px' : '64px' } 
                />
            ))
          }
          </div>

          <h5 className="mt-1 mt-lg-5">Back-End</h5>
          <div className="d-flex justify-content-center">
          <LogoSkill
            className="col-12"
            src="/images/skill/java.png"
            text="Java: Normal"
            size="100px"
          />
          </div>

        </div>

        <Div className="flex-column col-12 col-md-4 text-center mt-3 mt-md-0 pb-3 pb-md-0">
          <h2>My Experience</h2>
          <div className="text-md-left mt-4">
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

      </ReBox>
    )
  }
}
