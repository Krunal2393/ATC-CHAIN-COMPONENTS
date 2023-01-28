import React, { createContext, useContext, useState } from 'react'
const StateContext = createContext()

export const ContextProvider = ({ children }) => {
  const showHeader = { false: false }
  return (
    <>
      <StateContext.Provider
        value={{
          showHeader
        }}
      >
        {children}
      </StateContext.Provider>
    </>
  )
}

export const useStateContext = () => useContext(StateContext)
