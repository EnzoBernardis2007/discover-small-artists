import { Home } from "./screens/Home"
import { ContextProvider } from "./context/ContextProvider"
import './App.css'

export default function App() {
  return (
    <>
      <ContextProvider>
        <Home />
      </ContextProvider>
    </>
  )
}