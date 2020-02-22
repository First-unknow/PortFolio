import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  height:${props => props.height ? props.height : '100vh'};
  width:100vw;
  background: ${props => props.background};
`

const Box = (props) => (
  <Div className={`d-flex ${props.className}`} background={props.background} height={props.height}>
      {props.children}
  </Div>
)

export default Box
