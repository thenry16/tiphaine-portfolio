import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from './colorbar'

import Project from './project'

import MoveSafeLogo from '../img/kellerkindlogo'
import LifeTimeLogo from '../img/lifetimelogo'
import BamLogo from '../img/bamlogo'
const ArrowWrapper = styled.div`
  display: none;
  position: absolute;
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
const Projects = () => ({
  render() {
    return (
      <div>
      <Row>
        <Column xs={12} sm={12} md={12} lg={3} lgShift={1}>
          <h2>Web Projects</h2>
          <ColorBar color="#A6FFD7" />
        </Column>
        <Column sm={12} md={9} lg={7}>
          <Project
            logo={LifeTimeLogo()}
            url="/moveSafe"
            title="MoveSafe"
            abstract="An interactive web map displaying the safest walking paths within California."
          />
          <Project
            logo={MoveSafeLogo()}
            url="/autoEnos"
            title="AutoEnos"
            abstract="An ergonomic platform for the management of Enos configurations files."
          />
          <Project
            logo={BamLogo()}
            url="/ISitsUWalk"
            title="ISitsUWalk"
            abstract="An Android AR app winner of UCSD's 2018 Hackaton. Give AR a chance to make you fit again!"
          />
        </Column>
      </Row>
      <ArrowWrapper>
        <ArrowCenter>
          <ArrowLink href="#miscellaneous">
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

export default Projects
