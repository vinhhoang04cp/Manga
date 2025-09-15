import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Info from './components/Details/Info'
import ChapterLists from './components/Details/ChapterLists'
import Comment from './components/Details/Comment'

export default function Details() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Info />
        <ChapterLists />
        <Comment />
      </main>
      <Footer />
    </div>
  )
}
