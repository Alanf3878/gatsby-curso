import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from "./styled"
const Avatar = () => {
const { avatarImage } = useStaticQuery(
    graphql`
    query{
        avatarImage: file(relativePath: { eq: "euela.jpg"}){
            childImageSharp {
                gatsbyImageData(width: 200)
            }
        }
    }
    `
)
return (
    <S.AvatarImg>
<S.AvatarWrapper image={avatarImage.childImageSharp.gatsbyImageData} />
    </S.AvatarImg>
)


}
export default Avatar