import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Blog from './components/Blog'
import Brand from './components/Brand'
import Counter from './components/Counter'
import Games from './components/Games'
import Join from './components/Join'
import Matches from './components/Matches'
import Player from './components/Player'
import Product from './components/Product'
import Subscribe from './components/Subscribe'
import Watch from './components/Watch'

function App() {


  return (
    <>
    
      <Banner/>
    <Games/>
    <About/>
    <Counter/>
    <Matches/>
    <Watch/>
    <Brand/>
    <Player/>
    <Product/>
    <Join/>
    <Blog/>
    <Subscribe/>
    </>
  )
}

export default App
