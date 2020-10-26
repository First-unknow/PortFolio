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
  width:auto;
  height:auto;
`

const LogoSkill = (props) => (
  <div className={`${props.className} col-12 mt-3`}>
    <Img src={props.src} className="mt-1 col-6 text-right" />
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
      { img: 'vue', text: 'Vue: Advance' },
      { img: 'Angular', text: 'Angular: Beginner' },
    ],
    BE: [
      { img: 'java', text: 'Java : Normal' },
      { img: 'python', text: 'Python : Normal' },
    ],
    MA: { img: 'flutter', text: 'Flutter : Normal' }
  }

  render() {
    return (
      <ReBox background="#164563" className="row justify-content-md-between justify-content-center align-items-center w-100 m-0 pb-5 pt-3">
        <div class="col-12 col-md-6 text-center p-2 mt-5 pt-5 mt-lg-0">
          <h2>My Skill</h2>
          <div className="row">
            <div class="col-12 col-md-6">
              <h4 className="text-center pl-4 mt-3">Front-End</h4>
              <div className="row">
                {
                  this.state.FE.map((data, i) => (
                    <LogoSkill
                      key={i}
                      className="pl-4 text-center"
                      src={`/images/skill/${data.img}.png`}
                      text={data.text}
                    />
                  ))
                }
              </div>
            </div>

            <div class="col-12 col-md-6">
              <h4 className="text-center pl-4 mt-3">Back-End</h4>
                <div className="row">
                  {
                    this.state.BE.map((data, i) => (
                      <LogoSkill
                        key={i}
                        className="pl-2 text-center"
                        src={`/images/skill/${data.img}.png`}
                        text={data.text}
                      />
                    ))
                  }
                </div>
              <h4 className="text-center pl-4 mt-5">Mobile Application</h4>
                <div className="row">
                      <LogoSkill
                        className="pl-2 text-center"
                        src={`/images/skill/${this.state.MA.img}.png`}
                        text={this.state.MA.text}
                      />
                </div>
            </div>
          </div>
        </div>

        <Div className="flex-column col-12 col-md-4 text-center mt-5 pb-3 pb-md-0">
          <h2>My Experience</h2>
          <div className="text-md-left mt-4">
            <h4>2018</h4>
              <h5 className="pl-2">React</h5>
                <div className="pl-4">- Web PR for WIPCamp 11</div>
            <h4>2019</h4>
              <h5 className="pl-2">React</h5>
                <div className="pl-4">- Web PR for Helloworld Cockatiel</div>
                <div className="pl-4">- Web Register for WIPCamp 12</div>
              <h5 className="pl-2">Project Manager</h5>
                <div className="pl-4">- Web PR for WIPCamp 12</div>
                <div className="pl-4">- Web PR for Helloworld Cockatiel</div>

            <h4>2020</h4>
              <h5 className="pl-2">React</h5>
                <div className="pl-4">- Web Management for WIPCamp 12</div>
              <h5 className="pl-2">Vue</h5>
                <div className="pl-4">- Front End Developer Internship with Backyard Co., Ltd</div>
                <div className="pl-4">- Freelance</div>
            </div>
        </Div>
      </ReBox>
    )
  }
}
