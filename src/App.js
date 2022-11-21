import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ServicesScreen from './screens/ServicesScreen';
import WorkScreen from './screens/WorkScreen';
import ContactScreen from './screens/ContactScreen';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer position="bottom-center" limit={1} />
        <header className="position-relative">
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/about" element={<AboutScreen />}></Route>
            <Route path="/services" element={<ServicesScreen />}></Route>
            <Route path="/works" element={<WorkScreen />}></Route>
            <Route path="/contact" element={<ContactScreen />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
