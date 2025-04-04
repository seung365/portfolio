import styled from "@emotion/styled"
import { useEffect } from "react"
import ScrollToTop from "../../components/common/ScrollToTop"
import ThemeToggle from "../../components/common/ThemeToggle"
import { useTheme } from "../../hooks/useTheme"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

type HomeProps = {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
}

const Home = ({ isDark, setIsDark }: HomeProps) => {
  useTheme(isDark, setIsDark)

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 100)
  }, [])

  return (
    <>
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      <ScrollToTop />
      <Intro />
      <MainLayout>
        <Profile />
        <Skills />
        <Experience />
        <Projects />
      </MainLayout>
      <Footer />
    </>
  )
}

const MainLayout = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: visible;
`
export default Home
