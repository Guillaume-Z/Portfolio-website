import { Outlet } from 'react-router'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <section className="bg-[#1c1b33]">

      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </section>
  )
}

export default App
