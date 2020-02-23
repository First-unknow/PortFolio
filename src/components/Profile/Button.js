import React from 'react'
import styled from 'styled-components'

const ButtonLink = styled.a`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 260px;
  height: 52px;
  background: ${props => props.show === "Resume" ? '#164563' : '#113952'};
  transform: translate3d(0px, 0%, 0px);
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: .05em;
  transition-delay: .6s;
  overflow: hidden;
  border-radius:20px;
  @media (max-width:400px) {
    height: 48px;
    font-size: 14px;
  }
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.show === "Resume" ? '#164563' : '#113952'};
    border-radius: 50% 50% 0 0;
    transform: translateY(100%) scaleY(.5);
    transition: all .6s ease;
  }
  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 0;
    transform: translateY(0) scaleY(1);
    transition: all .6s ease;
  }
  div{
    position: relative;
    top: 12.5px;
    width: 100%;
    height: 26px;
    text-transform: uppercase;
    overflow: hidden;
  }
  span{
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    text-align: center;
    transition: transform .5s ease;
    &:first-child{
      color: white;
      transform: translateY(24px);
    }
    &:last-child{
      color: #1E0F21;
      transform: translateY(0);
    }
  }
  &:hover{
    background: ${props => props.show === "Resume" ? '#164563' : '#113952'};    
    transition: background .2s linear;
    transition-delay: .6s;
    &:after{
      border-radius: 0 0 50% 50%; 
      transform: translateY(-100%) scaleY(.5);
      transition-delay: 0;
    }
    &:before{
      border-radius: 0;
      transform: translateY(0) scaleY(1);
      transition-delay: 0;
    }
    span{
      &:first-child{
        transform: translateY(0);
      }
      &:last-child{
        transform: translateY(-24px);
      }
    }
  }   
`

const Button = (props) => {
  return (
    <ButtonLink href={props.href} target='_blank' className="col-5 text-left" show={props.show}>
      <div>
        <span>{props.hover}</span>
        <span>{props.show}</span>
      </div>
    </ButtonLink>
  )
}

export default Button
