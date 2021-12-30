import Home from './screens/Home'
import BreedDetails from './screens/BreedDetails'
import Header from './layout/Header/Header'
import NotFound from './screens/NotFound'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Breeds from './screens/Breeds'
import Footer from './layout/Footer/Footer'

export default function App() {
  return (
    <div className="text-3xl px-16 py-5">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/breeds/:id" element={<BreedDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
