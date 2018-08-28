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
import ContentWrapperIbis from '../components/article/contentwrapperIbis'

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
  width: 260px;
  font-size:15px;
  margin-right:1%;
  margin-left:auto;
`;

const StyledColumn2 = styled(Column)`
  display: block;
  background-color: rgba(40,50,255,.1);
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 260px;
  font-size:15px;
  margin-right:1%;
`;
const StyledColumn3 = styled(Column)`
  display: block;
  background-color: #ebebe0;
  outline: 1px solid #fff;
  box-sizing: border-box;
  width: 260px;
  font-size:15px;
  margin-right:auto;
`;
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
const ColumnTitle = styled(Column)`
  margin-left:0px;
  margin-bottom:10px;
`;
const ColumnTitle1 = styled(Column)`
  margin-left:10px;
  margin-bottom:10px;
`;
const ColumnTitle2 = styled(Column)`
  margin-left:20px;
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
margin-left: 0;
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
const ContainerTop = styled.div`
  max-width: 800px;
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
`;
const TwoCols1 = styled(Column)`
  display: block;
  box-sizing: border-box;
  width: 55%;
  margin-left:auto;
  margin-right:auto;
`;
const TwoCols11 = styled(Column)`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin-left:auto;
  margin-right:auto;
  margin-top:0px;
`;
const TwoCols12 = styled(Column)`
  display: block;
  box-sizing: border-box;
  width: 40%;
  margin-left:auto;
  margin-right:auto;
  margin-top:0px;
`;
const ThreeCols = styled(Column)`
  display: block;
  box-sizing: border-box;
  width: 30%;
  margin-left:auto;
  margin-right:auto;
`;
const Pulgarcito = () => ({
  render() {
    return (
      <div>
        <Header title="Pulgarcito" />



       {/**************************************************************************************************************** */}   
        <StyledSectionTop>
        <ContainerTop>
          <h3 >L'art de se perdre en chemin</h3>        
          <PageDescription
            src="/Pulgarcito/pulgarcito.png"
            abstract="​​Qui n’a jamais subi un trajet en voiture ? Paysages monotones, enfants qui pleurent, aires d’autoroutes…      Osez dire stop. Osez prendre votre temps.  
            ​​Vous êtes unique, pourquoi vos trajets ne le seraient pas ? 
            ​​Avec Pulgarcito, oubliez les trajets monotones. Personnalisez vos arrêts, et prenez le pari de vous surprendre."
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
        </ContainerTop>
        </StyledSectionTop>

       {/**************************************************************************************************************** */}        
       <ScrollableAnchor id={'description'}>
          <StyledSection1>
            <ContainerTop>
                <Row>
                  <ColumnTitle>
                    <Styledh3>Etat de l'art</Styledh3>
                    <ColorBarDivCoucou color="#A6FFD7" />
                  </ColumnTitle>
                </Row>
                <Row>
              <TwoCols11>
              <p>Préparer un voyage n’est aujourd'hui point une mince affaire. 
            ​​Perte de temps, informations redondantes ou incomplètes, nombreuses sont les frustrations. 
            Entre TripAdvisor, Google Maps ou WikiTravel, il est facile de s’y perdre pendant 
            la préparation des itinéraires ou l’évaluation du budget.
                      </p>
              </TwoCols11>
              <TwoCols12>
              <img 
                src="/Pulgarcito/think.jpeg"
                width="300px"/>
              </TwoCols12>
            </Row>
              <ArrowWrapper>
                <ArrowCenter>
                  <ArrowLink href='#idea'>
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
            </ContainerTop>
          </StyledSection1>
        </ScrollableAnchor>       
        
      {/**************************************************************************************************************** */}        
      <ScrollableAnchor id={'idea'}>
      <StyledSection1>
            <ContainerTop>
                <Row>
                  <ColumnTitle1>
                    <Styledh3>Et pourquoi pas …</Styledh3>
                    <ColorBarDivCoucou color="#A6FFD7" />
                  </ColumnTitle1>
                </Row>
                

          <Row>
              <TwoCols>
              <img 
                src="/Pulgarcito/partage.jpeg"
                width="250px"/>
              </TwoCols>
              <TwoCols1>
              <p>
              Prendre un temps supplémentaire de “découverte” en chemin tout en adaptant les arrêts 
              aux désirs de chacun.
          </p>
              </TwoCols1>
            </Row>
            </ContainerTop>
            <ContentWrapperIbis>
            <Row>
            <ThreeCols>
              <img 
                src="/Pulgarcito/apprendre.png"
                width="250px"/>
                              <h6>
              Des lieux pour apprendre
          </h6>
              </ThreeCols>
              <ThreeCols>
              <img 
                src="/Pulgarcito/ressources.png"
                width="250px"/>
                              <h6>
              Des lieux pour se ressourcer
              </h6>
              </ThreeCols>
              <ThreeCols>
              <img 
                src="/Pulgarcito/plaisir.png"
                width="250px"/>
                              <h6>
              Des lieux pour se faire plaisir​​
              </h6>
              </ThreeCols>
              </Row>
              </ContentWrapperIbis>
            {/* <Row>
              <TwoCols1>
              <p>
              Aider les familles avec jeunes enfants en poussette à choisir les routes et visites les plus adaptées.

          </p>
              </TwoCols1>
              <TwoCols>
              <img 
                src="/Pulgarcito/poussette.jpeg"
                width="250px"/>
              </TwoCols>
            </Row>
            <Row>
              <TwoCols>
              <img 
                src="/Pulgarcito/transmission.jpeg"
                width="250px"/>
              </TwoCols>
              <TwoCols1>
              <p>
              Entre amis, se partager des idées de visites​​.
          </p>
              </TwoCols1>
            </Row> */}
            <ContainerTop>
              <ArrowWrapper>
                <ArrowCenter>
                  <ArrowLink href='#visits'>
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
            </ContainerTop>
          </StyledSection1>
        </ScrollableAnchor>       
{/**************************************************************************************************************** */}
      {/**************************************************************************************************************** */}        
      <ScrollableAnchor id={'visits'}>
      <StyledSection1>
            <Container1>
              <ContainerTop>
                <Row>
                  <ColumnTitle2>
                    <Styledh3>L'intelligence artificielle pour redécouvrir le territoire</Styledh3>
                    <ColorBarDivCoucou color="#A6FFD7" />
                  </ColumnTitle2>
                </Row>
          
                <ContentWrapper>
                  <Row>
            
            <p>Notre application va à contre-sens de la tendance générale à aller au plus vite. 
              Notre volonté est d’aider chacun à réapprendre la pause pendant ses déplacements.</p>
              <p>
              Pulgarcito, ou "Petit Poucet" en Espagnol,
              cultive une fibre citoyenne : en permettant la mise en valeur des spécificités locales, 
              le tourisme local se voit encouragé. 
              </p>
            </Row>
            </ContentWrapper>
              </ContainerTop>
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
        </ScrollableAnchor>       
{/**************************************************************************************************************** */}


        <ScrollableAnchor id={'process'}>
        <StyledSection1>
          <ContainerTop>
            <Row>
              <ColumnTitleV2>
                <Styledh3>Timeline du projet 
                </Styledh3>
                <ColorBarDivCoucou color="#A6FFD7" />
              </ColumnTitleV2>
            </Row>
            </ContainerTop>
              <Container1>
                <Row>
                  <StyledColumn1>
                    <Styledh4>Brainstorming individuel</Styledh4>
                   <p> Nous avons commencé par brainstormer individuellement sur la question de la mobilité et 
                     des trajets en voiture ; chacun classe ses idées en se basant sur le canva initial. 
                  </p>
                  </StyledColumn1>
                  <StyledColumn2>
                    <Styledh4>Mise en commun</Styledh4>
                    <p>
                    L’équipe a ensuite mis en commun et synthétisé les idées proposées. 
                    Pulgarcito à cette étape est une app ayant pour but de rendre moins monotones tout type de trajet. 
          </p>
                  </StyledColumn2>
                  <StyledColumn3>
                    <Styledh4>Maturation du projet</Styledh4>
                <p>
                La visite d'experts nous a fait réfléchir aux problématiques liées au traitement des données.
                Plugarcito, compagnon de voyage, doit s’adapter aux besoins de chaque utilisateur. Synthétisant grâce à l'IA 
                les différentes sources de données et le profil de l'utilisateur, il optimise alors la préparation des voyages.
          </p>
                  </StyledColumn3>
                </Row>
                </Container1>
                <ContentWrapper>
            <ArrowWrapper>
              <ArrowCenter>
                <ArrowLink href='#enjeux'>
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
       {/********************************************************************************************
      ******************** */}         
        <StyledSection1>
        <ScrollableAnchor id={'enjeux'}>
        <Container1>
          <ContentWrapperBis>
              <Row>
                <ColumnTitleV3>
                  <Styledh3>
                    Les Challenges 
                  </Styledh3>
                  <ColorBarDivCoucou color="#A6FFD7" />
                </ColumnTitleV3>
              </Row>
                <Row>
                  <StyledColumn41>
                  <Styledh4>
              Enjeux Techniques
              </Styledh4>             
<p>       
1) Déterminer le profil utilisateur pour des trajets sur-mesure<br/>
2) Rassembler les ressources de préparation de voyages sur un seul support <br/>
</p>
                  </StyledColumn41>
                  <StyledColumn42>
                  <Styledh4>
              Enjeux Juridiques
              </Styledh4>    
              <p> 
1) Justifier le stockage des data (RGPD).<br/>
2) S'informer sur les contenus éditoriaux utilisés (droits de propriété, architecture des informations).<br/>
</p> 
                  </StyledColumn42>
                  <StyledColumn43>

<Styledh4>
              Enjeux Sociétaux
              </Styledh4>  
              <p> 
1) Proposer une alternative à la tendance générale à aller au plus vite.   <br/>
2) Encourager le tourisme local et désengorger les zones touristiques. <br/>
3) Changer les habitudes concernant les sites de tourisme et agences de voyage.<br/>
</p> 

                  </StyledColumn43>
                  <StyledColumn44>


<Styledh4>
Enjeux Humains
              </Styledh4>   
<p> 
1) Importance de la culture ou nationalité dans le rapport au déplacement.<br/>
2) Diversité des profils individuels.
</p>  
                  </StyledColumn44>
                </Row>
            <ArrowWrapper>
              <ArrowCenter>
                <ArrowLink href='#futur'>
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
         <StyledSection1>
        <ScrollableAnchor id={'futur'}>
        <Container1>
          <ContentWrapperBis>
              <Row>
                <ColumnTitleV3>
                  <Styledh3>
                    Le Futur de Pulgarcito
                  </Styledh3>
                  <ColorBarDivCoucou color="#A6FFD7" />
                </ColumnTitleV3>
              </Row>
                 
<p>Le dévelopement technique de Pulgarcito se contentre sur une approche multi-profils et multi-sources (data liées aux trajets multi-modaux, cartes, contenus descriptifs de lieux, etc).
Une approche basée sur la théorie des graphes permet de répondre à ce défi, avec la plateforme Neo4J notamment. 
L'évolution des goûts et attentes des utilisateurs est également prise en compte par l'IA. </p>
<p>
Notre démarche est avant tout philosophique: il s'agit d'aider les gens à redécouvrir la pause.
Des idées en germination sont la prise en compte de la sécurité des zones, et de proposer aux conducteurs 
les chemins les moins polluants.
 </p>
            
  
              </ContentWrapperBis>
            </Container1>
            </ScrollableAnchor>
</StyledSection1>

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
       {/**************************************************************************************************************** */}
        <Footer />
      </div>
    )
  },
})

export default Pulgarcito
