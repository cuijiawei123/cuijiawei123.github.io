import Header from "./components/Header"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import SelfEvaluation from "./components/SelfEvaluation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <SelfEvaluation />
      </main>
    </div>
  )
}

