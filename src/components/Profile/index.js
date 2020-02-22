import React, { Component } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import Box from '../Core/Box.js'

// const datenow = dayjs.format('DD-MM-YYY')
// const birthday = dayjs('25-11-1999')

const Img = styled.img`
  border-radius:50%;
  height:auto;
`

const Link = styled.a`
  /* color:black; */
  color:#FFFFFF;
  &:hover{
    color:gray;
    text-decoration:none;
  }
`

const Div = styled.div`
  color:#FFFFFF;
  width:auto;
  height:50vh;
  font-size: 20px;
  @media (max-width:768px) {
    font-size: 16px;
  }
`

const Qoute = styled.q`
  font-size: 40px;
  @media (max-width:768px) {
    font-size: 30px;
  }
  @media (max-width:360px) {
    font-size: 25px;
  }
`

const QouteDiv = styled.div`
  height:50vh;
`

const BlackDrop = styled.div`
  margin-top:6em;
  backdrop-filter: blur(5px) contrast(.8);
`

export default class Index extends Component {
  render() {
    return (
      <Box background="url(/images/profile.jpg); background-repeat:no-repeat; background-size:cover; background-position:center;">
        <div className="row">
          <QouteDiv className="justify-content-center text-center justify-content-lg-end align-items-center align-items-lg-end row w-100">
            <Qoute className="col-12 col-lg-4 mt-2 mt-lg-0 pr-0 pr-lg-5"><b className="text-center pr-5">If fear to fail.Your skill doesn’t improve</b></Qoute>
          </QouteDiv>
          <Div className="col-12 text-center d-flex justify-content-center align-items-center">
            <BlackDrop className="flex-column p-2">
              Name: Natthasit Panjapornpol <br />
              Age: 20 years <br />
              Birthday: 25 November 1999 <br />
              Email: <Link href="mailto:firstpan555@gmail.com">firstpan555@gmail.com</Link> <br />
              Telephone Number: <Link href="tel://0969622249">096962249</Link> <br />
              <div className="pr-0 pr-md-5 pl-0 pl-md-0">Graduate: Bachelor degree of Information Technology, School of Information Technology at KMUTT</div>
            </BlackDrop>
          </Div>
        </div>

      </Box>
    )
  }
}
