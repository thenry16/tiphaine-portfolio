import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/colorbar'
import Project from '../components/project'

const ContactInfo = styled.div`
  margin-bottom: 10vh;
  font-size:1.2em;`
const Presentation = styled.div`margin-bottom: 3vh;`
const ArrowWrapper = styled.div`
  display: none;
  position: relative;
  top: 12px;
  @media (min-width: 500px) {
    display: block;
  }
  @media (min-width: 768px) {
    top: 12px;
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
export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Column xs={12} sm={12} md={12} lg={3} lgShift={1}>
            <h2>Contact</h2>
            <ColorBar color="#A6E7FF" />
          </Column>
          <Column sm={12} md={9} lg={7}>
            <Presentation>
              Interested in learning more about me, my work or how we can collaborate on an upcoming project? <br />
              Feel free to reach out anytime, I would be more than happy to chat.
          </Presentation>
            <Presentation>
              Tiphaine Henry<br />
              tiphaine.henry@etudiant.mines-nantes.fr<br />
              (+33) 6 38 76 98 42<br />
            </Presentation>
            <a href="/documents/T_Henry_Resume_2018.pdf" download="T_Henry_Resume_2018.pdf">Download Resume</a>
          </Column>
        </Row>
        <ArrowWrapper>
          <ArrowCenter>
            <ArrowLink href='#home'>
              <Arrow
                width="100"
                height="100"
                viewBox="-68 -100 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.647.064L-.01 5.72 18 23.73 36.01 5.72 30.352.065 18 12.417"
                  fillRule="nonzero"
                  transform = "rotate(180)"
                />
              </Arrow>
            </ArrowLink>
          </ArrowCenter>
        </ArrowWrapper>
      </div>
    )
  }
}
