import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Crud from './components/Crud'
import CrudwithMock from './components/CrudwithMock'
import Filter from './components/Filter'
import Tables from './components/Tables'
import NavBar from './components/NavBar'
import Search from './components/Search'
import SelectField from './components/SelectField'
import FormHandling from './components/FormHandling'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Crud/>}></Route>
        <Route path="/crud" element={<CrudwithMock/>}></Route>
        <Route path="/filter" element={<Filter/>}></Route>

        <Route path="/tables" element={<Tables/>}></Route>
        <Route path="/table" element={<Search/>}></Route>
        <Route path="/select" element={<SelectField/>}></Route>
        <Route path="/forms" element={<FormHandling/>}></Route>



      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App