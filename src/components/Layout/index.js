import React from "react"
import PropTypes from "prop-types"
import MenuBar from "../MenuBar"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import Sidebar from "../Sidebar"
import * as S from "./styled"
import GlobalStyles from "../../styles/global"
const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
