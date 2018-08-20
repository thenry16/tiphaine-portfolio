import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from './colorbar'


const ContactInfo = styled.div`
  margin-bottom: 10vh;
  font-size:1.2em;`
export default class StartDiv extends React.Component {
  render() {
    return (
      <Row>
        <Column xs={12} sm={12} md={12} lg={3} lgShift={1}>
          <h2>Projects</h2>
          <ColorBar color="#A6E7FF" />
        </Column>
      </Row>
    )
  }
}
