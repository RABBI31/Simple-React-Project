import { Navigate, Route, Routes } from 'react-router-dom'
import Main from './componants/Main'
import About from './componants/About'
import Services from './componants/Services'
import Blog from './componants/Blog'
import Contact from './componants/Contact'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
