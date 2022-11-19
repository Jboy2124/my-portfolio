import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loading from './pages/Loadingpage'
const Contact = lazy(() => import('./pages/Contact'))
const Homepage = lazy(() => import('./pages/Homepage'))
const Projects = lazy(() => import('./pages/Projects'))
const WorkExperience = lazy(() => import('./pages/WorkExperience'))
const Skills = lazy(() => import('./pages/Skills'))
const PageNotFound =  lazy(() => import('./pages/PageNotFound'))


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/work-experience' element={<WorkExperience />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App