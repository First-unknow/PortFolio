import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  height:100vh;
  width:100vw;
  background: ${props => props.background};
  color:${props => props.color === '#545454' ? 'white' : 'black'};
`

const Box = (props) => (
  <Div className={`d-flex ${props.className}`} background={props.background}>
      {props.children}
  </Div>
)

export default Box
