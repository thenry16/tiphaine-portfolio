import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'
import Project from '../components/project'
import ScenographicsLogo from '../img/scenographicslogo'


export default class Writing extends React.Component {
  render() {
    return (
      <Row>
        <Column xs={12} sm={12} md={12} lg={3} lgShift={1}>
          <h3>Get in touch</h3>
          <ColorBar color="#A6E7FF" />
        </Column>
        <Column sm={12} md={9} lg={7}>
          <div>
          Interested in learning more about me, my work or how we can collaborate on an upcoming project? 
          Feel free to reach out anytime, I would be more than happy to chat.

            <h3>Tiphaine Henry</h3>
            <p>tiphaine.henry@etudiant.mines-nantes.fr</p>
            <p>(+33)6 38 76 98 42</p>
            <a href="http://www.linkedin.com/in/tiphainehenry">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <button class="btn" type="submit" onclick="window.open('../img/T_Henry_Resume_2018.pdf')">
              Download Resume
            </button>
          </div>
        </Column>
      </Row>
    )
  }
}
