
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import About from './components/pages/About'
import Error from './components/pages/Error'
import Home from './components/pages/Home'
import { Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />           {/* path="/" */}
        <Route path="about" element={<About />} />   
        <Route path="*" element={<Error />} />   
      </Route>
    </Routes>
      
    </>
  )
}

export default App
