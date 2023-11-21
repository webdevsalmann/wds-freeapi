import Header from "../../components/layouts/Header"
import Footer from "../../components/layouts/Footer"
import Hero from "./Hero"
import Projects from "./Projects"
import Display from "./Display"

export default function Home() {
  return (
    <div>
      <Header />
      <main className="home">
        <Hero />
        <Display />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
