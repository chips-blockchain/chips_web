import React from "react"
import "./layout.css";
import "../styles/variables.css";
import StyledBackgroundSection from "./BackgroundImage"

export default function Layout({ children }) {
  return (
    <StyledBackgroundSection>
        {children}
        <footer>
          <h3>I am footer</h3>
        </footer>    
    </StyledBackgroundSection>
  )
}