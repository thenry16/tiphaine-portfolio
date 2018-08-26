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
import BamLogo from '../img/bamlogo'
import PageDescription from '../components/pageDescription'
import ContentWrapperBis from '../components/article/contentwrapperBis'
import ContentWrapperIbiscus from '../components/article/contentwrapperIbiscus'

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
  width: 30%;
  margin-left:auto;
  margin-right:auto;
`;
const TwoCols1 = styled(Column)`
  display: block;
  box-sizing: border-box;
  width: 55%;
  margin-left:auto;
  margin-right:auto;
  margin-top:30px;
`;

const DivAlign= styled(Column)`
display: block;
box-sizing: border-box;
width: 100%;
margin-left:18px;
margin-right:auto;
margin-top:30px;
`
const DataAnalysis = () => ({
  render() {
    return (
      <div>
        <Header title="Greenhouse Gases Emission" />
        <StyledSectionTop>
          <ContentWrapperIbiscus>
          <h3>Statistics to gain insight on Global Warming issues</h3>
          <PageDescription
            src="/DataAnalysis/Ecology.jpg"
            abstract="Greenhouse gases reduction is a major issue for the years to come. The COP23 that took place in Bonn in 2017 testifies such necessity,
            the conference working on global rules aiming to stem the rise in industrial gases. To assess the situation 
            appropriately, emitting countries and industries need to be compared objectively with respects to C02, CH4, N2O and fluorinated gases."
          />
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
        </ContentWrapperIbiscus>
        </StyledSectionTop>

       {/**************************************************************************************************************** */}        <ScrollableAnchor id={'description'}>
          <StyledSection1>
            <Container1>
              <ContentWrapperIbiscus>
                <Row>
                  <ColumnTitle>
                    <Styledh3>Methods and tools</Styledh3>
                    <ColorBarDivCoucou color="#A6FFD7" />
                  </ColumnTitle>
                </Row>
                <Row>
                  <StyledColumnTop>
                    <Styledh4>Clean and organize the dataset</Styledh4>
                1) Display gas emission data according to business segments.<br/>
                2) Delete incomplete features. 
                  </StyledColumnTop>
                  <StyledColumnMid>
                    <Styledh4>Principal Component Analysis (PCA)</Styledh4>
                - On 4 gases:  C02, CH4, N2O and fluorinated gas.<br/>
                - Role of PCA: reduce the number of variables by modelizing independant axes.
                  </StyledColumnMid>
                  <StyledColumnRight>
                    <Styledh4>Descending Hierarchical Classification</Styledh4>
                - Regroup features with similar behavior. 
                  </StyledColumnRight>
                </Row>  
                <Row>
                <DivAlign>
                <p>The data comes from the <a href="http://www.fao.org/faostat/en/#data/GC" target="_blank" >Food and Agriculture Organization</a>. <br/>The PCA and Descending Hierarchical Classification are realized with the Data Analysis software R.
                </p>
                </DivAlign>
                </Row>
              <ArrowWrapper>
                <ArrowCenter>
                  <ArrowLink href='#co2'>
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
              </ContentWrapperIbiscus>
            </Container1>
          </StyledSection1>
        </ScrollableAnchor>       {/**************************************************************************************************************** */}

        <ScrollableAnchor id={'co2'}>
        <StyledSection1>
          <ContentWrapper>
            <Row>
              <ColumnTitleV2>
                <Styledh3>Example of CO2 Emission</Styledh3>
                <ColorBarDivCoucou color="#A6FFD7" />
              </ColumnTitleV2>
            </Row>
          
          <Styledh4>PCA</Styledh4>
          <p>
              After data pre-treatment, 136 features are kept for further analysis. The CO2 worldwide consumptions is function 
              of 6 variables: Forest, Land Use, Transport, Residential, Industry et Energy. </p>
              <img 
                src="/DataAnalysis/co2.png"
                />
                              <img 
                src="/DataAnalysis/co2_classification.png"
                />
              <h4>a) Interprétation de l’axe 1 </h4>
              <p>Les variables contribuant le plus à la formation de l’axe 1 sont celles dont les coordonnées sur cet axe sont proches de 1 en valeur absolue. D’après le cercle des corrélations de la figure 4, les variables Energy, Residential, Industry et Transport sont très proches du bord du cercle. Elles sont donc bien représentées dans le plan factoriel considéré. Les valeurs données par la figure 3 confirment cette tendance. Après génération de l’ACP sur R, le premier axe s’exprime en effet par l’expression suivante :  Axe 1 = 0.91 Energy + 0.96 Residential + 0.76 Industry + 0.66 Transport - 0.62 Forest  L’axe 1 oppose la génération de CO2 par les secteurs de l’énergie, de l’industrie, du transport et des résidences à l’absorption de ce dernier par les forêts.  Cet axe, et donc la première composante principale, mesure donc le taux de CO2  généré par les différents domaines d’activité.  De même, les individus contribuant le plus à la formation de l’axe 1 sont ceux dont les coordonnées sur cet axe sont les plus élevées en valeur absolue.  On observe graphiquement 2 pays contribuant très fortement à la production de CO2 pour les secteurs du transport, de l’industrie, de l’énergie et de l’habitat : les USA (231) et la Chine (351 et 41). Cette production de CO2 provient du fait que ces derniers sont très grands consommateurs d’énergie fossile (transport, production manufacturière etc). L’axe 1 reflète donc les domaines et pays rejetant le plus de dioxyde de carbone dans l’atmosphère. 
</p>
<h4>b) Interprétation de l’axe 2</h4> 
<p>L’axe 2 est défini par la variable Land Use, avec une qualité de représentation de -97%. Seuls deux pays contribuent très fortement à la variable Land Use : le Brésil (21) et l’Indonésie (101). Land Use correspond à l’impact de l’homme sur la modification de la nature des terres. Ces deux pays, producteurs respectivement de soja et d’huile de palme sont confrontés à des problématiques de déforestation pour cause d’une demande grandissante de ces produits. Ils sont donc contraints d’augmenter leurs productions proportionnellement. L’axe 2 représente donc les pays effectuant des modifications dans l’usage de leurs terres impliquant une production accrue de CO2. 
</p>            <Styledh4>Descending Hierarchical Classification</Styledh4>
          <p>                
                Le prétraitement des données nous a amené à ne conserver que 136 données et à étudier 
                la consommation mondiale de CO2 en 2010 suivant 6 variables : Forest, Land Use, Transport, Residential, 
                Industry et Energy. Les données sont des équivalents CO2 exprimées en Gigagramme. 
              <img 
                src="/movesafe/LogoMoveSafe.jpg"
                width="250px"/>
            </p>

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
                  <Styledh3>Results</Styledh3>
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
                  <ArrowLink href='#insight'>
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
<ScrollableAnchor id={'insight'}>
<StyledSection1>

  
        <ContentWrapper>
          <Row>
           
            <ColumnTitleV2>
              <Styledh3>Insight</Styledh3>
              <ColorBarDivCoucou color="#A6FFD7" />
            </ColumnTitleV2>
          </Row>
          <p>The above analysis draws attention to the industries and countries predominantly responsible for the emission of 
            C02, CH4, N20 and F Gases.
            The USA and China come first for each of these studies. Developing countries such as India, Russia, or Brazil, 
            facing industrialization and intensive farming, also appear.             
            </p>
          <p>
            Sparse data might however reduce the precision of the PCA and Hierarchical Classification. 
            Taking into account the size of the population could also introduce some nuance, allowing a finer-grained 
            analysis.          </p>
          <h4>Going Further:
            </h4>
          <a href="/documents/ghanalysis.pdf" download="THenry_2017_GreenhouseGases.pdf">Read the complete analysis (French only)</a><br/>
          <a href="http://www.fao.org/faostat/en/#data/GC" target="_blank" >FAO data used for the analysis</a><br/>
          <a href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases" target="_blank" >Overview of greenhouse gases</a><br/>
          <a href="https://www.carbonbrief.org/cop23-key-outcomes-agreed-un-climate-talks-bonn" target="_blank" >Key Outcomes of the Bonn Conference</a>
        <Wrapper />
        </ContentWrapper>
        </StyledSection1>
        </ScrollableAnchor>
       {/**************************************************************************************************************** */} 
     
        <StyledSection1>
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
        </StyledSection1>
        <Footer />
        </div>
    )},
})

export default DataAnalysis
