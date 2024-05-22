import React from 'react'
import Hero from './assets/Components/Hero'
import Generator from './assets/Components/Generator'
import Workout from './assets/Components/Workout'

function App() {
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero/>
      <Generator/>
      <Workout/>
    </main>
  )
}

export default App
