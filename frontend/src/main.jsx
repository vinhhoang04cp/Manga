import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Details from './Details.jsx'
import HottestManga from './HottestManga.jsx'
import Category from './Category.jsx'
import Tags from './Tags.jsx'
import News from './News.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details" element={<Details />} />
        <Route path="/hottest" element={<HottestManga />} />
        <Route path="/category" element={<Category />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  </StrictMode>,
)
