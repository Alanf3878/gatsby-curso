import React from "react"
import * as S from "./styled"
import links from "./content"
import getThemeColor from "../../utils/getThemeColor"

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksLink>
      {links.map((link, i) => (
        <S.MenuLinksItem key={i}>
          <S.MenuLinksLink
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.7}
            to={link.url}
            activeClassName="active"
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksLink>
  </S.MenuLinksWrapper>
)
export default MenuLinks
