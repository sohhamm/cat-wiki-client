import React from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Header from './layout/Header/Header'

export default function App() {
  return (
    <div className="text-3xl px-16 py-5">
      <Header />

      <Hero />
    </div>
  )
}
