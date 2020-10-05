import React, { createContext, useState } from "react"

export const GridLayoutContext = createContext({
  gridLayout: 'tiles',
  hasSetGridLayout: false,
  setGridLayout: (tile: string) => {},
  getGridLayout: () => {},
})

const GridLayoutProvider = ({ children }) => {
  const [gridLayout, setGridLayout] = useState<string>('tiles')
  const [hasSetGridLayout, setHasGridLayout] = useState<boolean>(false)

  function setGridLayoutAndStore(tile: string) {
    localStorage.setItem('gridLayout', tile || 'tiles')
    setGridLayout(tile)
  }

  function getGridLayoutAndStore() {
    setGridLayout(localStorage.getItem('gridLayout') || 'tiles')
    setHasGridLayout(true)
  }

  return (
    <GridLayoutContext.Provider
      value={{
        gridLayout,
        hasSetGridLayout,
        setGridLayout: setGridLayoutAndStore,
        getGridLayout: getGridLayoutAndStore,
      }}
    >
      { children }
    </GridLayoutContext.Provider>
  )
}

export default GridLayoutProvider