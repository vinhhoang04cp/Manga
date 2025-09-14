import './App.css'
import Header from './components/common/Header'
import Carousel from './components/Home/Carousel'
import Hottest from './components/Home/Hottest'
import LatestAndTop from './components/Home/LasttestAndTop'
import MangaShowcase from './components/Home/MangaShowcase'
import NewestComment from './components/Home/NewestComment'
import News from './components/Home/News'

function App() {
  return (
   <>
     <Header />
     <Carousel />
     <Hottest />
     <LatestAndTop />
     <MangaShowcase />
     <NewestComment />
     <News />
   </>
  )
}

export default App
