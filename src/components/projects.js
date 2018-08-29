import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from './colorbar'

import WebProj from './webProj'
import Project from './project'
import scrollArrow from '../components/scrollArrow'


const ArrowWrapper = styled.div`
  display: none;
  position: relative;
  top: 18px;
  @media (min-width: 500px) {
    display: block;
  }
  @media (min-width: 768px) {
    top: 18px;
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

const StyledColumnTop = styled(Column)`
  display: block-center;
  box-sizing: border-box;
  width: 30%;
  margin-left: auto ;
  margin-right: auto ;
`;

const StyledColumn1 = styled(Column)`
  display: block-center;
  box-sizing: border-box;
  width: 20%;
  margin-left: auto ;
  margin-right: auto ;
  background-color:	#f9f9f9;
`;
const StyledColumn2 = styled(Column)`
  display: block-center;
  box-sizing: border-box;
  width: 20%;
  margin-left: auto ;
  margin-right: auto ;
  background-color:#fffcda;
`;
const StyledColumn3 = styled(Column)`
  display: block-center;
  box-sizing: border-box;
  width: 20%;
  margin-left: auto ;
  margin-right: auto ;
  background-color:#e0feff;
`;
const StyledRow = styled(Row)`
  margin-bottom:5vh;
`

const Projects = () => ({
  render() {
    return (
      <div>
       <div> 
       <Row>
        <Column xs={12} sm={12} md={12} lg={3} lgShift={1}>
          <h2>Web Projects</h2>
          <ColorBar color="#A6FFD7" />
        </Column>
        <Column sm={12} md={9} lg={7}>
          <Project
            src="/movesafe/movesafe.jpg"
            url="/moveSafe"
            title="MoveSafe"
            abstract="An interactive web map displaying the safest walking paths within California."
          />
          <Project
            src="/Enos/cloud_computing.jpg"
            url="/autoenos"
            title="AutoEnos"
            abstract="An ergonomic platform for the management of Enos configurations files."
          />
          <Project
            src="/IsitsUwalk/logo.jpg"
            url="/ISitsUWalk"
            title="ISitsUWalk"
            abstract="An Android AR app winner of UCSD's 2018 Hackaton. Give AR a chance to make you fit again!"
          />
        </Column>
      </Row>


      {/* <Row>
        <StyledColumnTop>
          <h2>Web Projects</h2>
          <ColorBar color="#fff398" />
        </StyledColumnTop>
      </Row>
      <Row>  
        <StyledColumn1>
          <WebProj
            url="/moveSafe"
            title="MoveSafe"
            abstract="An interactive web map displaying the safest walking paths within California."
          />
        </StyledColumn1> 
        <StyledColumn2> 
          <WebProj
            url="/autoenos"
            title="AutoEnos"
            abstract="An ergonomic platform for the management of Enos configurations files."
          />
        </StyledColumn2> 
        <StyledColumn3> 
          <WebProj
            url="/ISitsUWalk"
            title="ISitsUWalk"
            abstract="An Android AR app winner of UCSD's 2018 Hackaton. Give AR a chance to make you fit again!"
          />
        </StyledColumn3>
      </Row_> */}
      </div>
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

export default Projects
