import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Media from 'react-media'

import Profile from '../Profile'
import Skill from '../Skill'
import Social from '../Social'

export default class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Media queries={{
              small: "(max-width: 360px)",
              medium: "(min-width: 361px) and (max-width: 991px)",
              large: "(min-width: 992px)",
            }}>
              {matches => (
                <React.Fragment>
                  {matches.small &&
                    <Parallax className="custom-class" y={[-40, 25]} tagOuter="figure">
                      <Profile />
                    </Parallax>
                  }
                  {matches.medium &&
                    <Parallax className="custom-class" y={[-40, 30]} tagOuter="figure">
                      <Profile />
                    </Parallax>
                  }
                  {matches.large &&
                    <Parallax className="custom-class" y={[-40, 40]} tagOuter="figure">
                      <Profile />
                    </Parallax>
                  }
                </React.Fragment>
              )}
            </Media>
            <Media queries={{
              small: "(max-width: 767px)",
              medium: "(min-width: 767px) and (max-width: 991px)",
              large: "(min-width: 992px)"
            }}>
              {matches => (
                <React.Fragment>
                  {matches.small &&
                    <Parallax className="custom-class" y={[-8, 0]} styleOuter={{ marginTop: '2.5em' }} tagOuter="figure">
                      <Skill />
                    </Parallax>
                  }
                  {matches.medium &&
                    <Parallax className="custom-class" y={[-14, 0]} styleOuter={{ marginTop: '2.5em' }} tagOuter="figure">
                      <Skill />
                    </Parallax>
                  }
                  {matches.large && 
                    <Parallax className="custom-class" y={[-10, -10]} tagOuter="figure">
                      <Skill />
                    </Parallax>
                  }
                </React.Fragment>
              )}
            </Media>
            <Social />
           
           
      </React.Fragment>
    )
  }
}
