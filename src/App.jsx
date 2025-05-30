import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateBasics from './components/StateBasics'
import Example from './components/Example'
import Counter from './components/Counter'
import TextInput from './components/Textinput'
import DataForm from './components/DataForm'
import DataFetch from './DataFetch'
import Navbar from './components/NavBar'
import DataCard from './components/DataCard'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

 
 <Navbar/>
 <Routes>
 <Route path="/" element={<Example/>}/>
 <Route path="/r" element={<StateBasics/>}/>
 <Route path="/t" element={<Counter/>}/>
 <Route path="/c" element={<DataForm/>}/>
  <Route path="/a" element={<TextInput/>}/>
   <Route path="/b" element={<DataFetch/>}/>
   <Route path="/g" element={<DataCard/>}/>
   </Routes>






    </>
  )
}

export default App
