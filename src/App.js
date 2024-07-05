import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/common basic/nav/Nav';
import About from './components/common basic/about/About';
import Contact from './components/common basic/contact/Contact';
import Home from './components/home/Home';
// import Database from './components/database/Database';
// import Database from './components/database/Database';
import Sign from './components/common basic/sign/Sign';
import Logic from './components/common basic/logic/Logic';
import Password from './components/common basic/password/Password';
import Desert from './components/section2/desert/Desert';
import Main from './components/section2/main/Main';
import Starter from './components/section2/starter/Starter';
import Soup from './components/section2/soup/Soup';
import Edit from './components/Edit.jsx/Edit';
import Database1 from './components/database/Database1';
// import Database from './components/database/database';
// import Home from './components/Home';

function App() {
  return (
<>


<BrowserRouter>
<Nav/>
  <Routes>
    <Route path='/'  element={<Home/>} ></Route>
    <Route path='about-us'  element={<About/>} ></Route>
    <Route path='contact'  element={<Contact/>} ></Route>
    <Route path='/sign'  element={<Sign/>} ></Route>
    <Route path='/login'  element={<Logic/>} ></Route>
    <Route path='password'  element={<Password/>} ></Route>
    <Route path='/database'  element={<Database1/>} ></Route>
    <Route path='/edit/:id'  element={<Edit/>} ></Route>
  </Routes>
<Routes>
<Route path='/'  element={<Starter/>} ></Route>
    <Route path='/main'  element={<Main/>} ></Route>
    <Route path='/desert'  element={<Desert/>} ></Route>
    <Route path='/Soup'  element={<Soup/>} ></Route>
</Routes>

</BrowserRouter>
</>
  );
}

export default App;
