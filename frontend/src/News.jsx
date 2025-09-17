import './App.css'
import Header from '../src/components/common/Header.jsx'
import Footer from '../src/components/common/Footer.jsx'
import NewsDashboard from './components/News/NewsDashboard'


function App() {
  return (
   <div className="app-container">
     <Header />
     <main className="main-content">
       <NewsDashboard />
     </main>
     <Footer />
   </div>
  )
}

export default App
