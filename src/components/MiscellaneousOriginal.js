import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'
import Link from 'gatsby-link'
import Scrollchor from 'react-scrollchor'
import ColorBar from '../components/colorbar'

import Project from '../components/project'

const ArrowWrapper = styled.div`
  display: none;
  position: relative;
  bottom: 16px;
  @media (min-width: 500px) {
    display: block;
  }
  @media (min-width: 768px) {
    bottom: 16px;
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
const Miscellaneous = () => ({
  render() {
    return (
      <div>
      <Row>
        <Column xs={12} sm={12} md={12} lg={3} lgShift={1}>
          <h2>Miscellaneous</h2>
          <ColorBar color="#A6FFD7" />
        </Column>
        <Column sm={12} md={9} lg={7}>
          <Project
            url="/dataAnalysis"
            title="Challenge Disrupt'Campus"
            abstract="Entrepreneurship Hackaton, First prize."
          />
          <Project
            url="/dataAnalysis"
            title="African Countries Development"
            abstract="A study of African countries recent development based on Tableau."
          />
        </Column>
      </Row>
      <ArrowWrapper>
      <ArrowCenter>
        <ArrowLink href='#contact'>
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
      </div>
    )
  },
})

export default Miscellaneous
