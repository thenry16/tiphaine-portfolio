import React from 'react'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from './colorbar'

import WebProj from './webProj'

import MoveSafeLogo from '../img/kellerkindlogo'
import LifeTimeLogo from '../img/lifetimelogo'
import BamLogo from '../img/bamlogo'
import scrollArrow from '../components/scrollArrow'
import WebProject from '../components/webProj'
import ContentWrapper from '../components/article/contentwrapper'

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
  width: 35%;
  margin-left: auto ;
  margin-right: auto ;
`;

const StyledColumn1 = styled(Column)`
  display: block-center;
  box-sizing: border-box;
  width: 46%;
  margin-left: auto ;
  margin-right: auto ;
  background-color:#fffaf4;
`;
const StyledColumn2 = styled(Column)`
  display: block-center;
  box-sizing: border-box;
  width: 46%;
  margin-left: auto ;
  margin-right: auto ;
  background-color:#f1f8ff;
`;

const Miscellaneous = () => ({
  render() {
    return (
      <div>
       <div> 
      <Row>
        <StyledColumnTop>
          <h2>Data Science Projects</h2>
          <ColorBar color="#fff398" />
        </StyledColumnTop>
      </Row>
      <ContentWrapper>
      <Row>  
        <StyledColumn1>
          <WebProject
            logo={BamLogo()}
            url="/pulgarcito"
            title="Pulgarcito"
            abstract="An AI-centric Entrepreneurship project winner of the Challenge Disrupt'Campus 2018 Hackaton (French only)."
            />
        </StyledColumn1> 
        <StyledColumn2> 
          <WebProj
            logo={LifeTimeLogo()}
            url="/africaDataAnalysis"
            title="Overview of African Countries Development"
            abstract="A study of African countries recent development based on the World Bank Data."
          />
        </StyledColumn2> 
      </Row>
      </ContentWrapper>
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

export default Miscellaneous
