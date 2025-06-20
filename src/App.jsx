import Home from './Components/NavBar/Home'
import About from './Components/NavBar/About'
import Contact from './Components/NavBar/Contact'
import NotFound from './Components/NotFound'
import RootLayout from './Shared/Layout/RootLayout'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default App