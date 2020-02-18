import React, { Component } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

// const datenow = dayjs.format('DD-MM-YYY')
// const birthday = dayjs('25-11-1999')

const Img = styled.img`
  border-radius:50%;
`

const Link = styled.a`
  color:black;
  &:hover{
    color:gray;
    text-decoration:none;
  }
`

export default class Index extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-around">
          <Img src="/images/profile.jpg" className="col-4" />
          <div className="col-6 d-flex justify-content-start align-items-center ml-5">
            <div className="flex-column ">
              Name : Natthasit Panjapornpol <br />
              Age: 20 years <br />
              Email: <Link href="mailto:firstpan555@gmail.com">firstpan555@gmail.com</Link> <br />
              Telephone Number: <Link href="tel://0969622249">096962249</Link> <br />
              Graduate: Bachelor degree, School of Information Technology <br /> <span className="pl-5">at King Mongkut's University of Technology Thonburi</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
