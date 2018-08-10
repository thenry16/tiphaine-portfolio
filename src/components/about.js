import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'
import ProfileImage from '../img/gabrieladorf.svg'

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
              Hi. I'm Tiphaine, a data scientist and IT engineer based in&nbsp;Nantes, France.
            </strong>
          </p>
          <p>
            I study business & engineering at the Institut Mines Telecom Atlantique. 
            I developped a passion for AI and Data Sciences during an exchange with the University
            of California, San Diego. 
          </p>
          <p style={{ marginBottom: 0 }}>
            Since then I have always tried to balance the understanding of the
            technical aspects of AI with the social and economic impacts at stake from a company's point of view. 
            I am currently getting ready for a thesis in Data Sciences, working on Machine Learning thematics.
          </p>
          <p>  
            I thrive on creative challenges and enjoy building strong relationships along the way. Explore my work below, and contact me directly to learn more!
          </p>
        </Column>
      </Row>
    )
  }
}
