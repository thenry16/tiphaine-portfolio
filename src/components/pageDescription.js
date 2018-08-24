import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ReadMore from './readmore'
import PageLogo from './PageLogo'

const ProjectWrapper = styled.div`
  display: flex;
  @media (max-width: 660px) {
    flex-wrap: wrap;
  }
    padding-bottom: 25px;
`

const Description = styled.div`@media (max-width: 660px) {margin-top: 32px;}`

const Title = styled.h3`
  color: #333;
  font-size: 1.6em;
  font-weight: 700;
  margin: 0 0 16px 0;
  padding-top: 25px;
`

const Abstract = styled.div`margin-bottom: 16px;`

const PageDescription = ({ props }) => ({
  render() {
    return (
      <ProjectWrapper>
        <PageLogo>
          {this.props.src}
        </PageLogo>
        <Description>
          <Title>
            {this.props.title}
          </Title>
          <Abstract>
            {this.props.abstract}
          </Abstract>
        </Description>
      </ProjectWrapper>
    )
  },
})

export default PageDescription
