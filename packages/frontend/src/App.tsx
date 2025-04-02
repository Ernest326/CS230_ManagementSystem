import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Client  from './pages/Client'
import Sessions  from './pages/Sessions'
import Therapist  from './pages/Therapist'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/client" element={<Client/>} />
          <Route path="/sessions" element={<Sessions/>} />
          <Route path="/therapists" element={<Therapist/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
