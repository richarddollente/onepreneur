import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home></Home>}/>
            <Route path="/home" element={<Home></Home>}/>
            <Route path="/about" element={<About></About>}/>
            <Route path="/contacts" element={<Contacts></Contacts>}/>
          </Routes>
        </BrowserRouter>
      <Footer></Footer>

    </div>
  );
}

export default App;
