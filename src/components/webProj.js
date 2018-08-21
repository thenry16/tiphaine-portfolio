import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ReadMore from './readmore'
import Logo from './projectlogo'

const ProjectWrapper = styled.div`
  padding-bottom: 80px;
  display: flex;
  @media (max-width: 660px) {
    flex-wrap: wrap;
  }
  &:last-of-type {
    padding-bottom: 0px;
  }
`

const Description = styled.div`@media (max-width: 660px) {margin-top: 32px;}`

const Title = styled.h3`
  color: #333;
  font-size: 1.6em;
  font-weight: 700;
  margin: 0 0 16px 0;
`

const Abstract = styled.div`margin-bottom: 16px;`

const WebProj = ({ props }) => ({
  render() {
    let link
    if (this.props.externalUrl) {
      link = (
        <a href={this.props.url}>
          <ReadMore>
            {this.props.readMoreText}
          </ReadMore>
        </a>
      )
    } else {
      link = (
        <Link to={this.props.url}>
          <ReadMore />
        </Link>
      )
    }
    return (
      <ProjectWrapper>
        <Description>
          <Title>
            {this.props.title}
          </Title>
          <Abstract>
            {this.props.abstract}
          </Abstract>
          {link}
        </Description>
{/*         <Logo>
          {this.props.logo}
        </Logo> */}
      </ProjectWrapper>
    )
  },
})

export default WebProj
