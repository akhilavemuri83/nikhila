
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';

import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/PageNotFound' element={<PageNotFound/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;