import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Recognition from './components/Recognition'
import Skills from './components/Skills'

function App() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <Header />
      <main>
        <Intro />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Recognition />
        <Contact />
      </main>
      <footer className="py-12 text-sm text-muted">
        © {new Date().getFullYear()} Ajay Sharma
      </footer>
    </div>
  )
}

export default App
