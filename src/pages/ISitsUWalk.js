import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/article/header'
import ContentWrapper from '../components/article/contentwrapper'
import Footer from '../components/footer'
import Link from 'gatsby-link'
import { Page, Row, Column } from 'hedron'
import ScrollableAnchor from 'react-scrollable-anchor'
import ContentWrapperBis from '../components/article/contentwrapperBis'

const EmbedContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 100%;
  height: auto;
  @media (min-width: 1000px) {
    width: 1000px;
    height: 562px;
    padding-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`
const Container1 = styled.div`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`
const Frame = styled.iframe`
  position: relative;
  top:0;
  left:0;
  width: 560px;
  height: 315px;
  border:6px solid lightgrey;
  margin-left:0;
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
const StyledColumn1 = styled(Column)`
  display: block;
  background-color: #ffffcc;
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 30%;
  font-size:2.5vh;
  margin-right:1%;
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

const StyledColumn2 = styled(Column)`
  display: block;
  background-color: rgba(40,50,255,.1);
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 30%;
  font-size:2.5vh;
  margin-right:1%;
`;

const StyledColumnTitle2 = styled(Column)`
  display: block;
  background-color: rgba(40,50,255,.1);
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 30%;
  height:9vh;
  font-size:4vh;
  margin-right:1%;
`;

const StyledColumn3 = styled(Column)`
  display: block;
  background-color: #ebebe0;
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 30%;
  font-size:2.5vh;
  margin-right:1%;
`;

const StyledColumnTitle3 = styled(Column)`
  display: block;
  background-color: #ebebe0;
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 30%;
  height:9vh;
  font-size:4vh;
  margin-right:1%;
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
  margin-bottom:100px; 
`
const SmallWrapper = styled.div`
  margin-bottom:60px; 
`
const LittleWrapper = styled.div`
  margin-bottom:50px; 
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
const TwoCols = styled(Column)`
  display: block;
  box-sizing: border-box;
  width: 40%;
  height:200px;
`
const TwoCols1 = styled(Column)`
  display: block;
  box-sizing: border-box;
  width: 30%;
  margin-left:auto;
  margin-right:auto;
  margin-top:30px;
`
const TwoCols11 = styled(Column)`
  display: block;
  box-sizing: border-box;
  width: 60%;
  margin-left:auto;
  margin-right:auto;
  margin-top:30px;
`

const TwoColsVid = styled(Column)`
  display: block;
  box-sizing: border-box;
  width: 60%;
  height:300px;
  margin-left:auto;
  margin-right:auto;
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
const ColumnTitle = styled(Column)`
  margin-left:-20px;
  margin-bottom:10px;
  width:1500px;
`;
const Styledh3 = styled.h3`
  margin-top:15px;
  font-size:28px;
`
const ColorBarDivCoucou = styled.div`
height: 12px;
width: 64px;
background: ${props => props.color};
margin-top: -18px;
margin-bottom: 8px;
`
const RowAlt = styled(Row)`
  padding-bottom:0;
`


const ISitsUWalk = () => ({
  render() {
    return (
      <div>
           {/**************************************************************************************************************** */}         

        <Header title="ISitsUWalk" to='/#projects'/>
           {/**************************************************************************************************************** */}         

        <StyledSectionTop>
        <Wrapper/>
          <Container1>
          <ContentWrapper>
            <h3>Give Augmented Reality a chance to make you fit again!</h3>

            <p>
              If citylife can be vibrant, it also has some
              downsides. Among them, the lack of exercising. Surfing on the potential of
              Augmented Reality (AR) to motivate and entertain people, ISitsUWalk wishes to reconcile sport 
              and technology.
          </p>
          <SmallWrapper/>
            <ArrowWrapperTop>
              <ArrowCenter>
                <ArrowLink href='#video'>
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
          </Container1>
        </StyledSectionTop>

   {/**************************************************************************************************************** */}         

        <ScrollableAnchor id={'video'}>
          <StyledSection1>
          <Container1>
            <ContentWrapper>
              <Row>
                <ColumnTitle>
                  <Styledh3>A quick walkthrough realized during the Hackaton</Styledh3>
                  <ColorBarDivCoucou color="#A6FFD7" />
                </ColumnTitle>
              </Row>
              <LittleWrapper/>
              
                    <Frame src="https://www.youtube.com/embed/oqFvsCqwiVo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></Frame>
                <LittleWrapper/>
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
            </ContentWrapper>
            </Container1>
          </StyledSection1>
        </ScrollableAnchor>

           {/**************************************************************************************************************** */}         

        <ScrollableAnchor id={'process'}>
          <StyledSection1>
            <Container1>
            <ContentWrapper>

              <Row>
                <ColumnTitle>
                  <Styledh3>The Creation Process</Styledh3>
                  <ColorBarDivCoucou color="#A6FFD7" />
                </ColumnTitle>
              </Row>
              <p>
                ISitsUWalk was developped with the help of three teammates from America,
                 China, Korea and France during HackXX18, a woman-centric hackaton. This project won the Northrop Grumman prize, &quot;Excellence in Communication.&quot;
                I mainly worked on the Character Animation side of the project, ie how to make the AR pets jump when the user taps the screen?
          </p>
              <RowAlt>
                <TwoCols>
                  <img
                    src="/IsitsUwalk/logoIsits.png"
                    width="200px" />
                </TwoCols>
                <TwoCols11>
                  <h4>
                    Technologies employed
                  </h4>
                  <p>
                    - HTML5, Bootstrap, CSS<br />
                    - Unity & Vuforia (AR)<br />
                    - Cordova, an Android pedometer pluging
                </p>
                </TwoCols11>
              </RowAlt>

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
            </ContentWrapper>
            </Container1>
          </StyledSection1>
        </ScrollableAnchor>

           {/**************************************************************************************************************** */}         

        <ScrollableAnchor id={'challenges'}>
          <StyledSection1>
            <Container1>
            <ContentWrapper>
              <Row>
                <ColumnTitle>
                  <Styledh3>Challenges</Styledh3>
                  <ColorBarDivCoucou color="#A6FFD7" />
                </ColumnTitle>
              </Row>
              <p>
                The majority of our team was completely new to Unity and C#. The biggest challenge was to learn and apply fully new concepts within 24 hours.
                Another issue was an asset in Unity that did not allow us to update our github repository.
                Delivering a fully operational AR app and discovering C#/Unity for the first time was a great reward.
          </p>
          <Row>
                <TwoCols1>
          <img
                    src="/IsitsUwalk/challenge.png"
                    width="200px"
                    height="135px" />
</TwoCols1>

           </Row>         
              <ArrowWrapper>
                <ArrowCenter>
                  <ArrowLink href='#next'>
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
            </Container1>
          </StyledSection1>
        </ScrollableAnchor>

           {/**************************************************************************************************************** */}         

        <ScrollableAnchor id={'next'}>
          <StyledSection1>
          <Container1>
            <ContentWrapper>
              <Row>
                <ColumnTitle>
                  <Styledh3>What's next</Styledh3>
                  <ColorBarDivCoucou color="#A6FFD7" />
                </ColumnTitle>
              </Row>
              <p>
                Two development directions for the app are data privacy- using serialization- and an enhanced UX.
            </p>
              <p>
                Concerning the UX, we wish to link the app to social media so that people can share their performance and AR pets, as well as displaying exercise progression by tracking health data
              </p>
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
                        transform="rotate(180)"
                      />
                    </Arrow>
                  </ArrowLink>
                </ArrowCenter>
              </ArrowWrapper>
            </ContentWrapper>
            </Container1>
          </StyledSection1>
        </ScrollableAnchor >

           {/**************************************************************************************************************** */}         

        <Footer />
      </div>
    )
  },
})

export default ISitsUWalk
