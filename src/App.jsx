import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Search from './components/Search';
import Buttons from './components/Buttons';
import Payment from './components/Payment';

const App = () => {

  return (

    <>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Router>

    </>

  )

}

export default App