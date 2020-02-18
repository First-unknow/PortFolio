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
  color:black;
  &:hover{
    color:gray;
    text-decoration:none;
  }
`

const Div = styled.div`
  width:auto;
`

export default class Index extends Component {
  render() {
    return (
      <Box className="justify-content-center mt-5 mt-md-0">
        <div className="d-flex flex-column flex-md-row justify-content-center">
          <Img src="/images/profile.jpg" className="w-75 col-md-4 mr-5 ml-5 ml-md-0 pr-md-5" />
          <Div className="col-md-5 text-center text-md-left d-flex align-items-md-center ml-md-5 pl-md-5 pl-1 pr-1 mt-3 mt-md-0">
            <div className="flex-column">
              Name : Natthasit Panjapornpol <br />
              Age: 20 years <br />
              Email: <Link href="mailto:firstpan555@gmail.com">firstpan555@gmail.com</Link> <br />
              Telephone Number: <Link href="tel://0969622249">096962249</Link> <br />
              <div class="pr-0 pr-md-5 pl-0 pl-md-0">Graduate: Bachelor degree of Information Technology, School of Information Technology at KMUTT</div>
            </div>

          </Div>
        </div>
      </Box>
    )
  }
}
