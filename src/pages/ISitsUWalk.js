import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/article/header'
import ContentWrapper from '../components/article/contentwrapper'
import Footer from '../components/footer'
import Link from 'gatsby-link'
import { Page, Row, Column } from 'hedron'

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


const Frame = styled.iframe`
  position: relative;
  top:0;
  left:0;
  width: 560px;
  height: 315px;
  border:6px solid lightgrey;
  margin-left:12%;
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
  margin-bottom:5vh; 
`

const ISitsUWalk = () => ({
  render() {
    return (
      <div>
        <Header title="ISitsUWalk" />

        <ContentWrapper>
          <h3 id="toc_0">Give Augmented Reality a chance to make you fit again!</h3>

          <p>
            If citylife can be vibrant, it also has some
            downsides. Among them, the lack of exercising. Surfing on the potential of
            Augmented Reality (AR) to motivate and entertain people, ISitsUWalk wishes to reconcile sport and technology.
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <Frame src="https://www.youtube.com/embed/oqFvsCqwiVo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></Frame>

          {/* <Frame
              src="http://a10-movesafe.herokuapp.com" >
              <p>
                <a href="http://a10-movesafe.herokuapp.com">
                  Un lien à utiliser dans les cas où les navigateurs ne supportent
			            pas les <i>iframes</i>.
			          </a>
              </p>
            </Frame> */}
        </ContentWrapper>
        <ContentWrapper>
          <h3 id="toc_2">
            The Creation Process
          </h3>
          <p>
            ISitsUWalk was developped with the help of three teammates from America,
             China, Korea and France during HackXX18, a woman-centric hackaton. This project won the Northrop Grumman prize, &quot;Excellence in Communication&quot;
          </p>
          <p>
            I mainly worked on the Character Animation side of the project: how to make the AR pets jump when the user taps the screen? 
          </p>
          <Wrapper />
          <h4>
            Technologies employed
          </h4>
          <p>
            - HTML5, Bootstrap, CSS<br />
            - Unity & Vuforia (AR)<br />
            - Cordova, an Android pedometer pluging
          </p>
          <Wrapper />
          <h3>Challenges
          </h3>
          <p>
            The majority of our team was completely new to Unity and C#. The biggest challenge was to learn and apply fully new concepts within 24 hours.
            Another issue was an asset in Unity that did not allow us to update our github repository.
            Delivering a fully operational AR app and discovering C#/Unity for the first time was a great reward.
          </p>

          <h3>
            What's next:
          </h3>
          <p>
            - More security of the data using serialization <br />
            - A bigger collection of pets, customizable by the user <br />
            - An enhanced UX (work on the design, link to social media so that people can share their performance and AR pets, display exercise progression by tracking health data)
              </p>

        </ContentWrapper>
        <Wrapper />


        <Footer />
      </div>
    )
  },
})

export default ISitsUWalk
