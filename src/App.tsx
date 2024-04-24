import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import Header from './components/Header/Header'
import TaskPage from './pages/TaskPage/TaskPage'

const App: React.FC = () => {
  return (
    <BrowserRouter >

      <div className=" w-full flex flex-col items-center ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/taskPage/:slug" element={<TaskPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
