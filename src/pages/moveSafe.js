import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/article/header'
import ContentWrapper from '../components/article/contentwrapper'
import Footer from '../components/footer'
import Link from 'gatsby-link'
import { Page, Row, Column } from 'hedron'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'
import Section from '../components/section'
import ColorBar from '../components/colorbar'
import PageDescription from '../components/pageDescription'
import ContentWrapperBis from '../components/article/contentwrapperBis'

const EmbedContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 100%;+
  height: auto;
  @media (min-width: 1000px) {
    width: 1000px;
    height: 562px;
    padding-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`
const tabCentered = styled.div`
  margin-left: auto ;
  margin-right: auto ;
  
`
const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const Frame = styled.iframe`
  position: relative;
  padding-top: 5vh;
  width: 330px;
  height: 675px;
  border:6px solid lightgrey;
`
const StyledColumn = styled(Column)`
  display: block-center;
  background-color:#A6FFD7;
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 30%;
  font-size:3.5vh;
  margin-left: auto ;
  margin-right: auto ;
  text-align: center;
  font-family: 'charter','Georgia',serif;
  text-decoration: underline;
`;

const StyledColumnTitle1 = styled(Column)`
  display: block;
  background-color: #ffffcc;
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 30%;
  height:9vh;
  font-size:4vh;
  margin-right:1%;
`;

const Styledh3 = styled.h3`
  margin-top:15px;
`

const StyledColumnTop = styled(Column)`
  display: block;
  background-color: rgba(40,50,255,.1);
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 30%;
  font-size:2.5vh;
  margin-right:1%;
  margin-left:auto;
`;
const StyledColumnMid = styled(Column)`
  display: block;
  background-color: rgba(40,50,255,.1);
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 30%;
  font-size:15px;
  margin-right:1%;
`;
const StyledColumnRight = styled(Column)`
  display: block;
  background-color: rgba(40,50,255,.1);
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 30%;
  font-size:2.5vh;
  margin-right:auto;
`;

const StyledColumn1 = styled(Column)`
  display: block;
  background-color: #ffffcc;
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 245px;
  font-size:15px;
  margin-right:1%;
  margin-left:auto;
`;

const StyledColumn2 = styled(Column)`
  display: block;
  background-color: rgba(40,50,255,.1);
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 245px;
  font-size:15px;
  margin-right:1%;
`;
const StyledColumn3 = styled(Column)`
  display: block;
  background-color: #ebebe0;
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 245px;
  font-size:15px;
  margin-right:auto;
`;

const ColumnTitle = styled(Column)`
  margin-left:10px;
  margin-bottom:10px;
`;
const ColumnTitleV2 = styled(Column)`
  margin-left:-20px;
  margin-bottom:10px;
`;
const ColumnTitleV3 = styled(Column)`
  margin-left:-16px;
  margin-bottom:10px;
`;
const StyledRow = styled(Row)`
  margin-bottom:5vh;
`

const Styledh4 = styled.h4`
margin-left: 25%;
margin-right: 0;
margin-top: 0;
padding-bottom: 0;
padding-left: 0;
padding-right: 0;
padding-top: 0;
margin-bottom: 0.9996rem;
color: inherit;
font-family: 'bebasneue','Helvetica',sans-serif;
font-weight: bold;
text-rendering: optimizeLegibility;
font-size: 1rem;
line-height: 1.1;`

const Wrapper = styled.div`
  margin-bottom:5vh; 
`
const WrapperTab = styled.div`
margin-left: 12%;
margin-right: 5%;
`
const ArrowWrapper = styled.div`
  display: none;
  position: relative;
  bottom: 22px;
  @media (min-width: 500px) {
    display: block;
  }
  @media (min-width: 768px) {
    bottom: 22px;
  }
  width: 100%;
`
const ArrowWrapperTop = styled.div`
  display: none;
  position: relative;
  bottom: -22px;
  @media (min-width: 500px) {
    display: block;
  }
  @media (min-width: 768px) {
    bottom: -22px;
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
const Section1 = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`
const StyledSection1 = styled(Section1)`
  &:nth-of-type(2n+1) {
    background: #F9F9F9;
  }
`
const Section1Top = styled.div`
  padding-top: 50px;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`
const StyledSectionTop = styled(Section1Top)`
  &:nth-of-type(2n+1) {
    background: #F9F9F9;
  }
`

const Container1 = styled.div`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`
const ColorBarDivCoucou = styled.div`
  height: 12px;
  width: 64px;
  background: ${props => props.color};
  margin-top: -18px;
  margin-bottom: 8px;
`

const TwoCols = styled(Column)`
  display: block;
  box-sizing: border-box;
  width: 40%;
  margin-left:auto;
  margin-right:auto;
  height:300px;
`;
const TwoCols1 = styled(Column)`
  display: block;
  box-sizing: border-box;
  width: 55%;
  margin-left:auto;
  margin-right:auto;
  margin-top:30px;
`;
const Styleda = styled.a`
  font-size:20px;
`;
const MoveSafe = () => ({
  render() {
    return (
      <div>
        <Header title="MoveSafe" to='/#projects'/>
       {/**************************************************************************************************************** */}   
        <StyledSectionTop>
          <Wrapper></Wrapper>

        <ContentWrapper>
          <h3 >Guiding you through every walk!</h3>
          <PageDescription
            src="/movesafe/movesafe.jpg"
            abstract="People often want to avoid dangerous neighborhoods while walking,
            but don’t know the dangerous areas around them.
            Our app provides safe paths, so that users can reach their destination worry-free!
            Unlike traditional maps, we incorporate safety information with available paths."
          />
          {/* <p>
            People often want to avoid dangerous neighborhoods while walking,
            but don’t know the dangerous areas around them.
            Our app provides safe paths, so that users can reach their destination worry-free!
            Unlike traditional maps, we incorporate safety information with available paths.
          </p> */}
        <ArrowWrapperTop>
          <ArrowCenter>
            <ArrowLink href='#description'>
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
        </ArrowWrapperTop>
        </ContentWrapper>
        </StyledSectionTop>

       {/**************************************************************************************************************** */}        <ScrollableAnchor id={'description'}>
          <StyledSection1>
            <Container1>
              <ContentWrapper>
                <Row>
                  <ColumnTitle>
                    <Styledh3>3 simple steps</Styledh3>
                    <ColorBarDivCoucou color="#A6FFD7" />
                  </ColumnTitle>
                </Row>
                <Row>
                  <StyledColumnTop>
                    <Styledh4>Search</Styledh4>
                    <img src="/movesafe/homePage.jpg" />
                  </StyledColumnTop>
                  <StyledColumnMid>
                    <Styledh4>Choose</Styledh4>
                    <img src="/movesafe/mapScreen.jpg" />
                  </StyledColumnMid>
                  <StyledColumnRight>
                    <Styledh4>Walk</Styledh4>
                    <img src="/movesafe/routingScreen.jpg" />
                  </StyledColumnRight>
                </Row>
              </ContentWrapper>
              <ArrowWrapper>
                <ArrowCenter>
                  <ArrowLink href='#process'>
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
            </Container1>
          </StyledSection1>
        </ScrollableAnchor>       {/**************************************************************************************************************** */}

        <ScrollableAnchor id={'process'}>
        <StyledSection1>
          <ContentWrapper>
            <Row>
              <ColumnTitleV2>
                <Styledh3>The Creation Process</Styledh3>
                <ColorBarDivCoucou color="#A6FFD7" />
              </ColumnTitleV2>
            </Row>
            <p>
              Developped for a Human Computer Interaction quarter project led by
              Pr. Scott Klemmer at the University of California,
              MoveSafe was realized thanks to the collaboration of two
              teammates.
          </p>
          <Row>
              <TwoCols>
              <img 
                src="/movesafe/LogoMoveSafe.jpg"
                width="250px"/>
              </TwoCols>
              <TwoCols1>
              <h4>
              Technologies employed
          </h4>
            <p>
              - HTML5, Bootstrap, CSS<br />
              - Ajax, React.js, JavaScript, Heroku<br />
              - Google Maps API
          </p>
              </TwoCols1>
            </Row>

            <ArrowWrapper>
              <ArrowCenter>
                <ArrowLink href='#build'>
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
          </ContentWrapper>
          </StyledSection1>
        </ScrollableAnchor>
       {/**************************************************************************************************************** */}         
        <StyledSection1>
        <ScrollableAnchor id={'build'}>
        <Container1>
          <ContentWrapperBis>
              <Row>
                <ColumnTitleV3>
                  <Styledh3>Building the App</Styledh3>
                  <ColorBarDivCoucou color="#A6FFD7" />
                </ColumnTitleV3>
              </Row>
              <Wrapper/>
                <Row>
                  <StyledColumn1>
                    <Styledh4>Storyboard</Styledh4>
                   <p> We came up with a story board to specify the functionality of our app.
                  The story board features a persona traveling to an unfamiliar city, who wishes she has an app telling her which path she should choose to walk to her destination safely.
</p>
                  </StyledColumn1>
                  <StyledColumn2>
                    <Styledh4>Prototyping</Styledh4>
                    <p>
                  Our team developed 3 paper prototypes.
                  The first two aimed to determine what functionalities we wanted to include in our app.
                  Using their feedbacks, we developed a final version of the paper prototype on which we based the skeleton of our app.
          </p>
                  </StyledColumn2>
                  <StyledColumn3>
                    <Styledh4>User Testing</Styledh4>
                    <h6>
                  Task Driven
          </h6>
                <p>
                  Multiple users had to enter into the searchbar two places and then select the safest path.
          </p>
                <h6>
                  A/B Testing
          </h6>
                <p>
                  We created two different homepages and determined which one generated the most searches. 
          </p>
                  </StyledColumn3>
                </Row>
                <Wrapper/>
                <Wrapper/>
              <ArrowWrapper>
                <ArrowCenter>
                  <ArrowLink href='#challenges'>
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
              </ContentWrapperBis>
            </Container1>
            </ScrollableAnchor>
</StyledSection1>

       {/**************************************************************************************************************** */}
<ScrollableAnchor id={'challenges'}>
<StyledSection1>

  
        <ContentWrapper>
          <Row>
           
            <ColumnTitleV2>
              <Styledh3>Challenges</Styledh3>
              <ColorBarDivCoucou color="#A6FFD7" />
            </ColumnTitleV2>
          </Row>
          <p>The challenges we faced were to find a good way to display
            safe areas on a map. This implied loading crime data released by the State of California
            as well as working on a customed map layer displaying this information.
          </p>
          <p>
            I focused on the user needs study, on the importation and specificities of
            Google Maps' API as well as the overall design of the app.
          </p>
        </ContentWrapper>
        </StyledSection1>
        </ScrollableAnchor>
       {/**************************************************************************************************************** */} 
        <Wrapper />

        <StyledColumn>
          <Styleda href="/moveApp" target="_blank" >Try it yourself</Styleda>
        </StyledColumn>
        <Wrapper />
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

       {/**************************************************************************************************************** */}
        <Footer />
      </div>
    )
  },
})

export default MoveSafe
