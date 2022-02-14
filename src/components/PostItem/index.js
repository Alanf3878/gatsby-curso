import React from "react"
import PropTypes from "prop-types"
import { Category } from "styled-icons/boxicons-regular"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"


const PostItem = ({
  slug,
  category,
  date,
  time,
  title,
  description,
  background,
}) => (
  <S.PostItemLink cover direction="left" bg={getThemeColor()} duration={0.7} to={slug}>
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} {time}
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.PropTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
export default PostItem
