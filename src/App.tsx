import React from "react"
import { GeistProvider, CssBaseline } from "@geist-ui/react"
import Container from "./components/container"

function App() {
  return (
    <GeistProvider>
      <CssBaseline />
      <Container />
    </GeistProvider>
  )
}

export default App
