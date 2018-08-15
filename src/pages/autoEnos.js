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


const AutoEnos = () => ({
  render() {
    return (
      <div>
        <Header title="AutoEnos" />
        <ContentWrapper>
          <h3 id="toc_0">An ergonomic platform for the management<br/> of Enos configurations files.</h3>
        </ContentWrapper>
        <ContentWrapper>

<Row>
  <StyledColumn2>
    <Styledh4>Search</Styledh4>
    <img src="/movesafe/homePage.jpg" />
  </StyledColumn2>
  <StyledColumn2>
    <Styledh4>Choose</Styledh4>
    <img src="/movesafe/mapScreen.jpg" />
  </StyledColumn2>
  <StyledColumn2>
    <Styledh4>Walk</Styledh4>
    <img src="/movesafe/routingScreen.jpg" />
  </StyledColumn2>
</Row>
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
  Developped for a Human Computer Interaction quarter project led by
  Pr. Scott Klemmer at the University of California,
  MoveSafe was realized thanks to the collaboration of two
  other teammates, Megan Golbeck and Yiyuan Ma.
</p>
<Wrapper />
<h4>
  Building the app
</h4>
<Row debug={true}>
  <StyledColumnTitle1>
    <h5>
      Storyboard
</h5>
  </StyledColumnTitle1>
  <StyledColumnTitle2>
    <h5>
      Prototyping
</h5>
  </StyledColumnTitle2>
  <StyledColumnTitle3>
    <h5>
      User Testing
</h5>
  </StyledColumnTitle3>
</Row>
<StyledRow debug={true}>
  <StyledColumn1>
    <p>
      We came up with a story board to specify the functionality of our app.
      The story board features a persona traveling to an unfamiliar city, who wishes she has an app telling her which path she should choose to walk to her destination safely.
</p>
  </StyledColumn1>
  <StyledColumn2>
    <p>
      Our team developed 3 paper prototypes.
      The first two aimed to determine what functionalities we wanted to include in our app.
      Using their feedbacks, we developed a final version of the paper prototype on which we based the skeleton of our app.
</p>

  </StyledColumn2>
  <StyledColumn3>
    <h6>
      Task Driven
</h6>
    <p>
      We gave multiple people the same task to complete using our application. The user had to enter in two places and select the safest path.
</p>
    <h6>
      A/B Testing
</h6>
    <p>
      We created two different homepages and determined which one generated the most searches. We also incorporated the feedback from the users.
</p>
  </StyledColumn3>
</StyledRow>
<h4>
  Technologies employed
</h4>
<p>
  - HTML5, Bootstrap, CSS<br />
  - Ajax, React.js, JavaScript, Heroku<br />
  - Google Maps API
</p>
<Wrapper />
<h3>Challenges
</h3>
<p>The challenges we faced were to find a good way to display
  safe areas on a map. This implied loading crime data released by the State of California
  as well as working on a customed map layer displaying this information.
</p>
<p>
  I focused on the user needs study, on the importation and specificities of
  Google Maps' API as well as the overall design of the app.
  A work still needs to be done on exporting the algorithm and standardizing it to other States / countries.
</p>
</ContentWrapper>
<Wrapper />

<StyledColumn>
<a href="/enosApp" target="_blank" >Try it yourself</a>
</StyledColumn>
<Wrapper />

<Footer />
</div>
)
},
})

export default AutoEnos
