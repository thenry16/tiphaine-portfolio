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

export default class About extends React.Component {
  render() {
    return (
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
          <p>
            Captivated by sciences, I always try to balance the understanding of technical 
            applications and its social and economic impacts. 
          </p>
          <p>
            I am currently getting ready for a thesis in Data Sciences, working on Machine Learning thematics.
          {/* <p style={{ marginBottom: 0 }}> */}
          </p>
          <p>  
            I thrive on creative challenges and enjoy building strong relationships along the way. 
            Explore my work below, and contact me directly to learn more!
          </p>
        </Column>
      </Row>
    )
  }
}
