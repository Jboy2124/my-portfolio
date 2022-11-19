import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Contact = lazy(() => import('./pages/Contact'))
const Homepage = lazy(() => import('./pages/Homepage'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App