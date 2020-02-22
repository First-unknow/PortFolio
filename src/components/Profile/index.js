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
  margin-top:4em;
  backdrop-filter: grayscale(0.5) opacity(0.7) ;
  @media (max-width:768px){
     backdrop-filter: grayscale(0.5) opacity(0.5) ;
  }
`

export default class Index extends Component {
  render() {
    return (
      // <Box className="d-flex flex-column justify-content-center mt-3 mt-md-0" >
      //   <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-around mt-5 mt-lg-0 mb-0 mb-lg-5 ml-0 ml-lg-5">
      //     <div className="d-flex justify-content-center col-6 col-lg-3">
      //       <Img src="/images/profile.jpg" />
      //     </div>
      //     <Qoute className="d-flex justify-content-center col-12 col-lg-9 align-items-center mt-2 mt-lg-0"><b className="text-center">If fear to fail. Your skill doesn’t improve</b></Qoute>
      //   </div>
      //   <Div className="d-flex justify-content-center pl-3 pl-lg-0 pr-3 pr-lg-0">
      //     <div className="flex-column">
      //       Name : Natthasit Panjapornpol <br />
      //       Age: 20 years <br />
      //       Email: <Link href="mailto:firstpan555@gmail.com">firstpan555@gmail.com</Link> <br />
      //       Telephone Number: <Link href="tel://0969622249">096962249</Link> <br />
      //       <div className="pr-0 pr-md-5 pl-0 pl-md-0">Graduate: Bachelor degree of Information Technology, School of Information Technology at KMUTT</div>
      //     </div> 
      //     </Div>
      // </Box>
      <Box background="url(/images/profile.jpg); background-repeat:no-repeat; background-size:cover; background-position:center;">
        <div className="row">
          <QouteDiv className="justify-content-center text-center justify-content-lg-end align-items-center align-items-lg-end row w-100">
            <Qoute className="col-12 col-lg-4 mt-2 mt-lg-0 pr-0"><b className="text-center pr-5">If fear to fail.Your skill doesn’t improve</b></Qoute>
          </QouteDiv>
          <Div className="col-12 text-center d-flex justify-content-center align-items-center">
            <BlackDrop className="flex-column p-2">
              Name : Natthasit Panjapornpol <br />
              Age: 20 years <br />
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
