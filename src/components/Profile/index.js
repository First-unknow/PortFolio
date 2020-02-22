import React, { Component } from 'react'
import styled from 'styled-components'
// import dayjs from 'dayjs'

import Box from '../Core/Box.js'

// const datenow = dayjs.format('DD-MM-YYY')
// const birthday = dayjs('25-11-1999')


const Link = styled.a`
  /* color:black; */
  color:#000000;
  &:hover{
    color:gray;
    text-decoration:none;
  }
`

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
`

export default class Index extends Component {
  render() {
    return (
      <Box background="url(/images/profile.jpg); background-repeat:no-repeat; background-size:cover; background-position:center;">
        <div className="row">
          <div className="justify-content-center text-center justify-content-lg-between align-items-lg-center row w-100">
            <Qoute className="col-12 col-lg-4 mt-2 mt-lg-0 ml-3 mr-3 px-2 pr-lg-5 d-flex align-items-center"><b className="text-center pr-2 pl-2">" If fear to fail,  your skill doesn’t improve "</b></Qoute>
            <Div className="col-12 col-lg-4 p-0 d-flex align-items-end ">
              <BlackDrop className="flex-column text-center px-5 p-3 p-lg-5 d-flex justify-content-center align-items-lg-center">
                Name: Natthasit Panjapornpol <br />
                Age: 20 years <br />
                Birthday: 25 November 1999 <br />
                Email: <Link href="mailto:firstpan555@gmail.com">firstpan555@gmail.com</Link>
                Telephone Number: <Link href="tel://0969622249">096962249</Link>
                <div className="pr-0 pr-md-5 pl-0 pl-md-0">Cerrently study in Bachelor degree of Information Technology year 2<sup>nd</sup> , School of Information Technology at KMUTT</div>
              </BlackDrop>
            </Div>
          </div>
         
        </div>

      </Box>
    )
  }
}
