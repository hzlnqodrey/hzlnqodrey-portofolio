import { Route, Routes } from 'react-router-dom';
import Navbar from './parts/Navbar';
import Footer from './parts/Footer';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <div className="font-plus-jakarta">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
