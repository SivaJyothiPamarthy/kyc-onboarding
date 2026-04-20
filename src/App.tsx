import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './pages/Layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Navigate to="/step/1" replace/>} />
          <Route path="/step/1" element={<div>Step 1 - Personal Info</div>} />
          <Route path="/step/2" element={<div>Step 2 - Address</div>} />
          <Route path="/step/3" element={<div>Step 3 - Documents</div>} />
          <Route path="/step/4" element={<div>Step 4 - Review</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
