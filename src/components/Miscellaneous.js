import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'

import Project from '../components/project'

import MoveSafeLogo from '../img/kellerkindlogo'
import LifeTimeLogo from '../img/lifetimelogo'
import BamLogo from '../img/bamlogo'

const Miscellaneous = () => ({
  render() {
    return (
      <Row>
        <Column xs={12} sm={12} md={12} lg={3} lgShift={1}>
          <h2>Miscellaneous</h2>
          <ColorBar color="#A6FFD7" />
        </Column>
        <Column sm={12} md={9} lg={7}>
          <Project
            logo={LifeTimeLogo()}
            url="/dataAnalysis"
            title="Data Analysis Projects"
            abstract="A study of gas releases worldwide & a study of African countries recent development based on Tableau."
          />
          <Project
            logo={BamLogo()}
            url="/dataAnalysis"
            title="Challenge Disrupt'Campus"
            abstract="Entrepreneurship Hackaton, First prize."
          />
        </Column>
      </Row>
    )
  },
})

export default Miscellaneous
