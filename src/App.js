import { Route, Routes } from 'react-router-dom';
import Navbar from './parts/Navbar';
import Footer from './parts/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturePage from './pages/FeaturePage';
import BlogPage from './pages/BlogPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="font-plus-jakarta">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/feature" element={<FeaturePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
