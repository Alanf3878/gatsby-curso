import { GatsbyImage as Img } from 'gatsby-plugin-image'
import styled from "styled-components"
import media from "styled-media-query"

export const Postabout = styled(Img)` 


`
export const Imgpost = styled.div` 
height: 100%;
padding: 2rem;
display: flex;
justify-content: center;

  ${media.lessThan("large")`
  
 
  `}
`