import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'
import Project from '../components/project'
import ScenographicsLogo from '../img/scenographicslogo'

const ContactInfo = styled.div`
  margin-bottom: 10vh;
  font-size:1.2em;`
const Presentation = styled.div`margin-bottom: 3vh;`
export default class Contact extends React.Component {
  render() {
    return (
      <Row>
        <Column xs={12} sm={12} md={12} lg={3} lgShift={1}>
          <h2>Contact</h2>
          <ColorBar color="#A6E7FF" />
        </Column>
        <Column sm={12} md={9} lg={7}>
          <ContactInfo>
          Tiphaine Henry<br/>
            tiphaine.henry@etudiant.mines-nantes.fr<br/>
            (+33) 6 38 76 98 42<br/>
          </ContactInfo>
          <Presentation>
          Interested in learning more about me, my work or how we can collaborate on an upcoming project? <br/>
          Feel free to reach out anytime, I would be more than happy to chat.
          </Presentation>
          <a href="/documents/T_Henry_Resume_2018.pdf" download="T_Henry_Resume_2018.pdf">Download Resume</a>
        </Column>
      </Row>
    )
  }
}
