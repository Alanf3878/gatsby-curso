import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink cover direction="left" bg={getThemeColor()} duration={0.7} to="/">
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePostion>{position}</S.ProfilePostion>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription> {description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
