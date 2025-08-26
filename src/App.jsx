import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Disclaimer from "./Pages/Disclaimer"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import Faq from "./Pages/Faq"
import About from "./Pages/About"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/Disclaimer' element={<Disclaimer/>}/>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/Faq' element={<Faq/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
