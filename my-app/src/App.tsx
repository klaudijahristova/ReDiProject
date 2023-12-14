
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import LandingPage from './components/landingPage/LandingPage'
import AmtHome from './components/Amt/AmtHome'
import User from './components/Users/User'
import Posts from './components/Amt/Posts'
import Accepted from './components/Amt/Accepted'
import Donation from './components/Donation/Donation'
import OurPosts from './components/Amt/OurPosts'
import { useState } from 'react'
import { UsersArrayProps } from './data/data';
import MyProfil from './components/Users/MyProfil'

function App() {
  const [filteredArray, setFilteredArray] = useState<UsersArrayProps[]>([]);

  return (
    <>
    <nav className='w-100'>
      <Navbar setFilteredArrayProp={setFilteredArray}/>
    </nav>
    <main className='w-100'>
      <Routes>
        <Route path="" element={<LandingPage/>}/>
        <Route path="/amt" element={<AmtHome filteredArray={filteredArray} setFilteredArray={setFilteredArray}/>}/>
        <Route path='/amt/post' element={<Posts/>}/>
        <Route path='/amt/accepted' element={<Accepted/>}/>
        <Route path='/amt/ourposts' element={<OurPosts/>}/>
        <Route path="/:userId" element={<User/>}/>
        <Route path="/donation" element={<Donation/>}/>
        <Route path="/myprofil" element={<MyProfil/>}/>
        <Route path='*' element={<h1 className='m-5 text-center'>404 Error</h1>}/>
      </Routes>
    </main>
    </>
  )
}

export default App
