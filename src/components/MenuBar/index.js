import React, { useState, useEffect } from "react"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { Search } from "@styled-icons/boxicons-regular/Search"
import { ArrowUp as Arrow } from "@styled-icons/bootstrap/ArrowUp"
import { Lightbulb as Light } from "@styled-icons/bootstrap/Lightbulb"
import { Grid3x3Gap as Grid } from "@styled-icons/bootstrap/Grid3x3Gap"
import { List } from "@styled-icons/bootstrap/List"


import getThemeColor from "../../utils/getThemeColor"
import * as S from "./style"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)
    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.7}
          title="Voltar para Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search"
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.7}
          title="Pesquisar"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo ">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}
export default MenuBar
