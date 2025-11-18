import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <footer className="border-t bg-slate-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600">© {new Date().getFullYear()} NOVA LUBRICANTS. All rights reserved.</p>
          <p className="text-slate-500 text-sm">Made with quality base oils and advanced additives.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
