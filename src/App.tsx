import {Routes, Route} from 'react-router-dom'
import NavBar from './NavBar'
import NavBarMobile from './NavBarMobile'
import ScrollToTop from './hooks/ScrollToTop.tsx'
import './App.css'
import './project/Project.css'
import Home from './pages/Home'
import About from './pages/About'
import Sketchbook from './pages/Sketchbook.tsx'
import Projects from './pages/Projects'
import NameCheckWrapper from './NameCheckWrapper'
/*
import ProjectGeneric from './project/ProjectGeneric'
*/
import NotFound from './pages/NotFound'


function App() {
  return (
    <>
    <div>
      <NavBar />
      <NavBarMobile />
    </div>
    <div>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="About" element={ <About /> } />
          <Route path="Sketchbook" element={ <Sketchbook /> } />
          <Route path="Projects" element={ <Projects /> } />
          <Route path="Projects/:name" element={ <NameCheckWrapper /> } />
          <Route path="*" element= {<NotFound />} />
        </Routes>
    </div>
    </>
  )
}

export default App


/*
function App() {
  const [count, setCount] = useState(0)


  }
  return (
    <>
      <NavBar></NavBar>
      <Component></Component>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <a href="https://minecraft.net" target="blank">
          <img src={landingImage} className="landing image" alt="landing page image" width="100%" />
        </a>
      </div>
      <h1>Stephan's Website</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        still a work in progress.
      </p>
    </>
  )
}
*/
