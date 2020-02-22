import React, { Component } from 'react'
import styled from 'styled-components'

import Box from '../Core/Box'

const ReBox = styled(Box)`
  /* color: white; */
  height:100%;
  margin-top: -5em!important;
  padding-top: 5em;
  @media (max-width:991px) {
    padding-top: 3em;
  }
`

const Link = styled.a`
  color:#000000;
  &:hover{
    color:gray;
    text-decoration:none;
  }
`

const Img = styled.img`
  height:auto;
  width:${props => props.size};
`

const LogoSkill = (props) => (
  <div className={`col-12 col-lg-6 ${props.className}`}>
    <a href={props.href} >
      <Img src={props.src} className="mt-1 col-6 text-right" size={props.text==="GitLab" ? "120px" : "80px"} />
    </a>
    <Link href={props.href}>
      <span className="col-6">{props.text}</span>
    </Link>
  </div>
)

export default class Index extends Component {

  state = {
    Hobby: [
      { img: 'nintendo', text: 'Play Vedio Game' },
      { img: 'books', text: 'Read Fiction' },
      { img: 'netflix', text: 'Watch Netflix ' },
      { img: 'youtube', text: 'Watch Youtube ' },
      { img: 'sport', text: 'Play Football' }
    ],
    Social: [
      { img: 'facebook', text: 'Facebook', href: 'https://www.facebook.com/first.natthasit'},
      { img: 'ig', text: 'Instagram', href: 'https://www.instagram.com/first_natthasit/' },
      { img: 'GitHub', text: 'GitHub', href: 'https://github.com/First-unknow'},
      { img: 'LinkedIn', text: 'LinkedIn', href: 'https://www.linkedin.com/in/natthasit-panjapornpol-0883a5155/' },
      { img: 'gitlab', text: 'GitLab', href: 'https://gitlab.com/First-unknow' }
    ]
  }

  render() {
    return (
      <ReBox background="#1645" className="row justify-content-md-around justify-content-center align-items-center w-100 m-0 pb-5">
        <div className="flex-column col-12 col-md-6 text-center p-2">
          <h2>My Hobby</h2>
          <div className="row">
            {
              this.state.Hobby.map((data, i) => (
                <LogoSkill
                  className={`col-12 mt-5 ${i === 4 ? "col-lg-12" : "col-lg-6"}`}
                  src={`/images/hobby/${data.img}.png`}
                  text={data.text}
                />
              ))
            }
          </div>


        </div>

        <div className="flex-column col-12 col-md-4 text-center mt-3 mt-md-0 pb-3 pb-md-0">
          <h2>My Social</h2>
          <div className="row">
            {
              this.state.Social.map((data, i) => (
                <LogoSkill
                  href= {data.href}
                  className={`col-12 mt-5 ${i === 4 ? "col-lg-12" : "col-lg-6"}`}
                  src={`/images/social/${data.img}.png`}
                  text={data.text}
                />
              ))
            }
          </div>
        </div>
      </ReBox>
    )
  }
}
