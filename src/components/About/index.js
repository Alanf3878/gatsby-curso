import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from "./styled"



const AboutImg = () => {
const { postImg } = useStaticQuery(
    graphql`
    query{
        postImg : file(relativePath: { eq: "dog.jpg"}){
            childImageSharp {
                gatsbyImageData(width: 500)
            }
        }
    }
    `
)
return (
    <S.Imgpost>
<S.Postabout image={postImg.childImageSharp.gatsbyImageData} />
    </S.Imgpost>
)


}
export default AboutImg