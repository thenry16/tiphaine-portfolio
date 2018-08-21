import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'
import ProfileImage from '../img/tiphaine.jpg'

const ProfileImageWrapper = styled.div`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-image: url(${ProfileImage});
  background-size: cover;
  background-position: 20% 22%;
  height: 280px;
  @media (min-width: 768px) {
    background-position: 60% center;
    border: none;
    height: 470px;
  }
  @media (min-width: 1400px) {
    border: none;
  }
`

const ArrowWrapper = styled.div`
  display: none;
  position: relative;
  top: 12px;
  @media (min-width: 500px) {
    display: block;
  }
  @media (min-width: 768px) {
    top: 12px;
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

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Row alignItems="flex-end">
          <Column xs={12} sm={12} smShift={0} md={6} lg={5} lgShift={1}>
            <ProfileImageWrapper />
          </Column>
          <Column xs={12} sm={12} smShift={0} md={6} lg={5}>
            <h2>About</h2>
            <ColorBar color="#FFA6A6" />
            <p>
              <strong>
                Hi. I'm Tiphaine, a data scientist and IT engineering student studying at the
                Institut Mines Telecom Atlantique.
            </strong>
            </p>
{/*             <p>
              Captivated by sciences, I always try to balance the understanding of technical
              applications and its social and economic impacts.
          </p> */}
            <p>
              I thrive on creative challenges and enjoy building strong relationships along the way.
              Explore my work below, and contact me directly to learn more!
          </p>
          <ArrowWrapper>
      <ArrowCenter>
        <ArrowLink href='#projects'>
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
          </Column>
        </Row>
      
      </div>
    )
  }
}
