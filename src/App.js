import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
            <Route index element={<Home />}></Route>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App