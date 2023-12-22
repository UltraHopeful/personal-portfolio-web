"use client";

import React, { createContext, useContext, useState } from "react";

export const ActiveSectionContext = createContext();

export default function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState("Home");
  // we need to keep track of this to disable the observer temporarily when user clicks on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); 

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
