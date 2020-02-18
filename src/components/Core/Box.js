import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  height:90vh;
  width:100vw;
  background-color: ${props => props.color};
  color:${props => props.color === '#545454' ? 'white' : 'black'};
`

const Box = (props) => (
  <Div className={`d-flex align-items-center ${props.className}`} color={props.color}>
      {props.children}
  </Div>
)

export default Box
