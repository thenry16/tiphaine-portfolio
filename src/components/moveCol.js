import React from 'react'
import styled from 'styled-components'

const MoveSafeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`

const moveCol = () => ({
  render() {
    return (
      <MoveSafeWrapper>
        <div>
          <h5>
            Storyboard
          </h5>
          <p>
            We came up with a story board to specify the functionality of our app.
            The story board is about a girl traveling to an unfamiliar city, who wishes she has an app telling her which path she should choose to walk to her destination safely.
          </p>
        </div>
        <div>
          <h5>
            Prototyping
          </h5>
          <p>
            Our team developed 3 paper prototypes.
            The first two aimed to determine what functionalities we wanted to include in our app.
            Using their feedbacks, we developed a final version of the paper prototype on which we based the skeleton of our app.
          </p>
        </div>
        <div>
          <h5>
            User Testing
          </h5>
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
        </div>

      </MoveSafeWrapper>
    )
  },
})

export default moveCol
