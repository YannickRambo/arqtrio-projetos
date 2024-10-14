import { ActiveProvider } from "./contexts/ActiveContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Home } from "./pages/Home/Home"
import { About } from "./pages/About/About"
import { Target } from "./pages/Target/Target"
import { Footer } from "./components/Footer/Footer"

function App() {
  return (
    <>
      <ActiveProvider>
        <BrowserRouter>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path={"/arqtrio-projetos"} index element={<Home />} />
            <Route path={"/arqtrio-projetos/sobre"} element={<About />} />
            <Route path={"/arqtrio-projetos/publico"} element={<Target />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ActiveProvider>
    </>
  )
}

export default App
