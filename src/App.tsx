import Home from './screens/Home'
import BreedDetails from './screens/BreedDetails'
import Header from './layout/Header/Header'
import NotFound from './screens/NotFound'
import Footer from './layout/Footer/Footer'
import TopBreeds from './screens/TopBreeds'
import {Routes, Route} from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <div className="text-lg lg:text-3xl xl:text-3xl px-8 md:px-24 lg:px-24 xl:px-24 py-2 lg:py-5 xl:py-5">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breeds" element={<TopBreeds />} />
        <Route path="/breeds/:id" element={<BreedDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
