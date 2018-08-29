import React from 'react'
import styled from 'styled-components'

const size = 190

const Image = styled.div`
  background: white;
  /*box-shadow: 0px 10px 15px 3px rgba(0,0,0,0.05);*/
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex: 0 0 ${size}px;
  height: ${size}px;
  margin-right: 40px;
`

const ProjectLogo = ({ children }) => {
  return (
    <Image>
      <img
        width={size}
        height={size}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        src={children}
      >
      </img>
    </Image>
  )
}

export default ProjectLogo



// /* import React from 'react'
// import styled from 'styled-components'

// const size = 180

// const Image = styled.div`
//   background: white;
//   /*box-shadow: 0px 10px 15px 3px rgba(0,0,0,0.05);*/
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   flex: 0 0 ${size}px;
//   height: ${size}px;
//   margin-right: 40px;
// `

// const ProjectLogo = ({ children }) => {
//   return (
//     <Image>
//       <svg
//         width={size}
//         height={size}
//         viewBox="0 0 120 120"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {children}
//       </svg>
//     </Image>
//   )
// }

// export default ProjectLogo
//  */