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
import PageDescriptionBis from '../components/pageDescriptionBis'
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
const StyledColumn4 = styled(Column)`
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
const Styledh5 = styled.h4`
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
font-size: 15px;
line-height: 1.1;`

const boldair = styled.h4`
margin-right: 0;
margin-top: 0;
padding-bottom: 0;
padding-left: 0;
padding-right: 0;
padding-top: 0;
color: inherit;
font-family: 'bebasneue','Helvetica',sans-serif;
font-weight: bold;
text-rendering: optimizeLegibility;
font-size: 12px;
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
  width: 50%;
  margin-left:auto;
  margin-right:auto;
  font-size:16px;
  background: #F9F9F9;
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
const StyledColumn41 = styled(Column)`
  display: block;
  background-color: #f1ffff;
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 380px;
  font-size:15px;
  margin-right:auto;
`;
const StyledColumn42 = styled(Column)`
  display: block;
  background-color: #fffffe;
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 380px;
  font-size:15px;
  margin-right:auto;
`;
const StyledColumn43 = styled(Column)`
  display: block;
  background-color: #fff3f3;
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 380px;
  font-size:15px;
  margin-right:auto;
`;

const StyledColumn44 = styled(Column)`
  display: block;
  background-color:#f5f5f5;
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 380px;
  font-size:15px;
  margin-right:auto;
`;

const OneCol = styled(Column)`
  display: block;
  background-color:#F9F9F9;
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 100%;
  font-size:15px;
  margin-right:auto;
`;

const RowPadBot = styled(Row)`
padding-bottom:15px;
`


const DataAnalysis = () => ({
  render() {
    return (
      <div>
        <Header title="Greenhouse Gases Emission" />
        <StyledSectionTop>
          <ContentWrapperIbiscus>
          <h3>Statistics to gain insight on Global Warming issues</h3>
          <PageDescriptionBis
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
                <Styledh3>Example of CO2 Emissions Analysis</Styledh3>
                <ColorBarDivCoucou color="#A6FFD7" />
              </ColumnTitleV2>
            </Row>
          
          
          <Row>
            <OneCol>
            <Styledh4>Principal Component Analysis</Styledh4>
          <p>
              After data pre-treatment, 136 features are kept for further analysis. 
              The CO2 worldwide consumptions depends on 6 variables: Forest, Land Use, Transport, 
              Residential, Industry and Energy. </p>
              <img 
                src="/DataAnalysis/co2.png"
                />
                <Styledh5>Clues to read the graphs</Styledh5>
                <p>The more the coordinates of a variable are close to one in absolute terms when projected on an axis, 
                the more the variable contributes to the formation of this very axis.
                The same reasonning can be applied to individuals.</p>
                </OneCol>
                </Row>
<RowPadBot>
  <TwoCols>
              <Styledh5>A) First Axis Interpretation</Styledh5>
              <p> From the Correlation Circle, 4 sectors- Energy, Residential, 
                Industry and Transportation- mainly embody the first axis. <br/>
                An opposition is drawn between these sectors and Forest uptake: the first axis represents CO2 emission.
                </p>
                <p>  
                  According to PCA, the two major countries that contribute to Energy, Transport, Industry and Transportation 
                  CO2 emission are the USA (n°231 according to FAO classification) and China (n°41 and n°351). 
                  A first explanation is that these two countries are great consumers of fossil energy, be it commuting 
                  or manufacturing output. 
                </p> 
</TwoCols>
<TwoCols>
              <Styledh5>B) Second Axis Interpretation</Styledh5> 
              <p>
                Axis 2 is represented by Land Use with -97%. It corresponds to the human modification of lands functions.
              </p>
              <p>
                Brazil (n°21) and Indonesia (n°101) mainly contribute to the axis. Producing respectively Soy and Palm oil, 
                deforestation occurs, as demand for these products is in expansion. 
              </p>            
</TwoCols>
</RowPadBot>
              
              <Row>
                <OneCol>
                <Styledh4>Descending Hierarchical Classification</Styledh4>
              <p>                
                A hierarchical classification helps group countries with the same CO2 emission characteristics.
              The clustering ratio which equals 0.97 attests of a good classification quality. The above observations
              are corroborated, with USA and China on the one hand, and Brazil and Indonesia on the other hand.
                <img 
                src="/DataAnalysis/co2_classification.png"/>
              </p>
              </OneCol>
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
                  <Styledh3>Summary of the results</Styledh3>
                  <ColorBarDivCoucou color="#A6FFD7" />
                </ColumnTitleV3>
              </Row>
                <Row>
                  <StyledColumn41>
                  <Styledh4>
              CO2
              </Styledh4>    
              <boldair> Sectors:</boldair> Energy, Transportation, Industry, Residential<br/>
              <boldair>Major Emissions:</boldair> China, USA (Manufacturing output and transportation)<br/>
<boldair> Land Use Modifications:</boldair> Brazil, Indonesia (soy and palm oil culture, deforestation issues)
</StyledColumn41>
<StyledColumn42>
                  <Styledh4>
              N2O 
              </Styledh4>    
              <p> 
              <boldair> Sectors:</boldair> Agriculture, Energy, Residential, Industry, Waste, Transport & Other sources<br/>
              <boldair>Major Emissions:</boldair> China, USA (soil fertilization)
</p> 
                  
                  </StyledColumn42>
                  <StyledColumn43>

<Styledh4>
              CH4 
              </Styledh4>  
              <p> 
              <boldair> Sectors:</boldair> Waste, Agriculture, Energy, Residential, Industry & Transport<br/>
<boldair>Major Emissions:</boldair> USA, China, India, Russia (agriculture & waste) <br/>
<boldair> Land Use Modifications:</boldair> Brazil, Canada (breeding)
</p> 

                  </StyledColumn43>
                  <StyledColumn44>


<Styledh4>
F gas 
              </Styledh4>   
<p> 
<boldair>Major Emissions:</boldair> USA, China, Japan, Russia <br/>
<boldair> Sources:</boldair> refrigeration equipment, aerosols, foam & fire protection
</p>  
                  </StyledColumn44>
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
            <WrapperTab/>
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
