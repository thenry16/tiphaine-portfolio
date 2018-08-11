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
            url="/lifetime"
            title="MoveSafe"
            abstract="An interactive web app displaying the safest walking paths in California."
          />
          <Project
            logo={MoveSafeLogo()}
            url="/kellerkind"
            title="EasyEnos"
            abstract="An Enos configurations management platform."
          />
          <Project
            logo={BamLogo()}
            url="/bam"
            title="Data Analysis Projects"
            abstract="A study of worldwide gases releases & a study of African countries recent development based on Tableau."
          />
        </Column>
      </Row>
    )
  },
})

export default Projects
