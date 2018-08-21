import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ReadMore from './readmore'
import Logo from './projectlogo'


const ArrowWrapper = styled.div`
  display: none;
  position: relative;
  bottom: 32px;
  @media (min-width: 500px) {
    display: block;
  }
  @media (min-width: 768px) {
    bottom: 32px;
  }
  width: 100%;
`

const ArrowCenter = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100px;
  height: 100px;
`

const ArrowLink = styled.a`display: block;`

const Arrow = styled.svg`
  visibility: hidden;
  fill: #dcdcdc;
  :hover {
    fill: #555;
  }
  @media (min-width: 500px) {
    visibility: visible;
  }
`

const scrollArrow = ({ props }) => ({
  render() {
    return (
      <ArrowWrapper>
      <ArrowCenter>
        <ArrowLink href={props.id}>
          <Arrow
            width="100"
            height="100"
            viewBox="-32 -40 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.647.064L-.01 5.72 18 23.73 36.01 5.72 30.352.065 18 12.417"
              fillRule="nonzero"
            />
          </Arrow>
        </ArrowLink>
      </ArrowCenter>
    </ArrowWrapper>
    )
  },
})

export default scrollArrow
