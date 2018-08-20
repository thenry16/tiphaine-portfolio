import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'
import Project from '../components/project'
import ScenographicsLogo from '../img/scenographicslogo'

const DivFormat = styled.div`
  height: 5vh;
  font-size:1.2em;
  color: #666;
  background: #A6FFD7;`

const FormatSection = styled.div`
  height: 10vh;
  line-height: 1.4em;
`
export default class EndDiv extends React.Component {
  render() {
    return (
      <FormatSection>
        <DivFormat/>
      </FormatSection>
    )
  }
}
