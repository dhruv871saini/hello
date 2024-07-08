import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/common basic/nav/Nav';
import About from './components/common basic/about/About';
import Contact from './components/common basic/contact/Contact';
import Home from './components/home/Home';
import Sign from './components/common basic/sign/Sign';
import Logic from './components/common basic/logic/Logic';
import Password from './components/common basic/password/Password';
import Desert from './components/section2/desert/Desert';
import Main from './components/section2/main/Main';
import Starter from './components/section2/starter/Starter';
import Soup from './components/section2/soup/Soup';
import Edit from './components/Edit.jsx/Edit';
import Database1 from './components/database/Database1';
import { Cartpro } from './components/cart/Cartcontainer';
import Cart from './components/cart/Cart';


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/login' element={<Logic />} />
          <Route path='password' element={<Password />} />
          <Route path='/database' element={<Database1 />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Starter />} />
          <Route path='/main' element={<Main />} />
          <Route path='/desert' element={<Desert />} />
          <Route path='/soup' element={<Soup />} />
        </Routes>

        <Cartpro>
         <Routes>
         <Route path='/' element={<Starter />} />
         <Route path='/cart' element={<Cart />} />
         </Routes>
        </Cartpro>
      </BrowserRouter>
   
    </>
  );
}

export default App;
