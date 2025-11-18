import { useState } from 'react'
import { Menu, X, Droplets, Phone, Mail } from 'lucide-react'

const navItems = [
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-amber-400 to-yellow-500 text-white shadow">
              <Droplets className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold tracking-tight text-slate-900">NOVA LUBRICANTS</p>
              <p className="text-xs text-slate-600 -mt-1">Premium Oils & Greases</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg shadow transition-colors">
              <Phone className="w-4 h-4" /> Get Quote
            </a>
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex p-2 rounded-lg border border-slate-200 bg-white">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 justify-center bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg shadow">
                <Mail className="w-4 h-4" /> Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
