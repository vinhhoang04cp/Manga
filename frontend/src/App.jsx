import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Carousel from './components/Home/Carousel'
import Hottest from './components/Home/Hottest'
import LatestAndTop from './components/Home/LasttestAndTop'
import MangaShowcase from './components/Home/MangaShowcase'
import NewestComment from './components/Home/NewestComment'
import News from './components/Home/News'

function App() {
  return (
   <div className="app-container">
     <Header />
     <main className="main-content">
       <Carousel />
       <Hottest />
       <LatestAndTop />
       <MangaShowcase />
       <NewestComment />
       <News />
     </main>
     <Footer />
   </div>
  )
}

export default App
