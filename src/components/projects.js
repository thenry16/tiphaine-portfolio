import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'

import Project from '../components/project'

import MoveSafeLogo from '../img/kellerkindlogo'
import LifeTimeLogo from '../img/lifetimelogo'
import BamLogo from '../img/bamlogo'

const Projects = () => ({
  render() {
    return (
      <Row>
        <Column xs={12} sm={12} md={12} lg={3} lgShift={1}>
          <h2>Projects</h2>
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
            logo={BamLogo()}
            url="/ISitsUWalk"
            title="ISitsUWalk"
            abstract="An Android AR app winner of UCSD's 2018 Hackaton. Give AR a chance to make you fit again!"
          />
          <Project
            logo={MoveSafeLogo()}
            url="/autoEnos"
            title="AutoEnos"
            abstract="An ergonomic platform for the management of Enos configurations files."
          />
        </Column>
      </Row>
    )
  },
})

export default Projects
