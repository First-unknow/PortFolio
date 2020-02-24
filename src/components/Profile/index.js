import React, { Component } from 'react'
import styled from 'styled-components'

import Box from '../Core/Box.js'
import Button from './Button'

const Div = styled.div`
  color:#000000;
  font-weight:bold;
  width:auto;
  height: 100%;
  font-size: 20px;
  @media (max-width:991px) {
    height: auto;
  }
  @media (max-width:768px) {
    font-size: 14px;
  }
`

const Qoute = styled.span`
  font-size: 40px;
  @media (max-width:768px) {
    font-size: 25px;
  }
  @media (max-width:360px) {
    font-size: 25px;
  }
`

const BlackDrop = styled.div`
  height: 100%;
  backdrop-filter: blur(10px) contrast(.8);
  @media (max-width:991px) {
    height: auto;
  }
  @media (max-width:768px) {
    padding-bottom: 2rem !important;
  }
`

export default class Index extends Component {

  render() {
    return (
      <Box background="url(/images/profile.jpg); background-repeat:no-repeat; background-size:cover; background-position:center;">
        <div className="row">
          <div className="justify-content-center text-center justify-content-lg-between align-items-lg-center row w-100">
            <Qoute className="col-12 col-lg-4 mt-2 mt-lg-0 ml-3 mr-3 px-5 pr-lg-5 d-flex align-items-center"><b className="text-center pr-2 pl-2">" If fear to fail,  your skill doesn’t improve "</b></Qoute>
            <Div className="col-12 col-lg-4 p-0 d-flex align-items-end ">
              <BlackDrop className="flex-column text-center ml-4 px-5 py-3 p-lg-5 d-flex justify-content-center align-items-lg-center">
                Name: Natthasit Panjapornpol <br />
                Age: 20 years <br />  
                Birthday: 25 November 1999 <br />
                <div className="pr-0 pl-0">Currently study in Bachelor degree of Information Technology year 2<sup>nd</sup> , School of Information Technology at KMUTT</div>
                <div className="w-100 d-flex justify-content-around mt-2 mt-lg-5">
                  <Button href="https://drive.google.com/open?id=1BLeI-b5S69_URyTh7Dpk9k0j-FdzsFEq" hover="Resume" show="Resume"/>
                  <Button href="https://drive.google.com/open?id=1jd3_TEqPN6IY9BopBVldx2cQcA3DDRhW" hover="TranScript" show="TranScript"/>
                </div>
              </BlackDrop>
            </Div>
          </div>
         
        </div>

      </Box>
    )
  }
}
