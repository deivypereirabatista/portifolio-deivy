import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"

function App() {
  return (
    <main>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
    </main>
  )
}

export default App