import Home from './screens/Home'
import Breeds from './screens/Breeds'
import Header from './layout/Header/Header'
import NotFound from './screens/NotFound'
import {Routes, Route} from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <div className="text-3xl px-16 py-5">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breeds/:id" element={<Breeds />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
