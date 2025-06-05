import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import FileExplorer from './pages/FileExplorer'
import NotFound from './components/NotFound'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/folder/1" replace />} />
        <Route path="/folder/:id" element={<FileExplorer />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App