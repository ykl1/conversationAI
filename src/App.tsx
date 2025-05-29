import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import ScenarioSelection from './components/ScenarioSelection'
import BoundaryScenarioForm from './components/BoundaryScenarioForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scenarios" element={<ScenarioSelection />} />
        <Route path="/boundary-scenario" element={<BoundaryScenarioForm />} />
      </Routes>
    </Router>
  )
}

export default App
