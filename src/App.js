import React from 'react'
import styled from 'styled-components'
import { ParallaxProvider } from 'react-scroll-parallax';

import '../node_modules/bootstrap/dist/css/bootstrap.css?v=1'

import Index from './components/Core/index'

const OverFlow = styled.div`
  overflow-x:hidden;
`

const App = () => {
  return (
    <OverFlow>
      <ParallaxProvider>
        <Index />
      </ParallaxProvider>
    </OverFlow>
  )
}

export default App
