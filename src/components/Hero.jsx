import { Droplets, ShieldCheck, GaugeCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 10%, #fb923c 0, transparent 40%), radial-gradient(circle at 80% 20%, #fbbf24 0, transparent 35%)'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-amber-300 font-semibold bg-white/10 border border-white/10 px-3 py-1 rounded-full">
              <ShieldCheck className="w-4 h-4" /> ISO 9001:2015 Certified
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              NOVA LUBRICANTS
            </h1>
            <p className="mt-4 text-lg text-slate-200 max-w-xl">
              High-performance engine oils and industrial greases engineered for cars, bikes, scooters, trucks, and heavy equipment like JCB.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#products" className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow">
                Explore Products
              </a>
              <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold">
                Get a Quote
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <Droplets className="w-6 h-6 mx-auto text-amber-400" />
                <p className="mt-2 text-sm text-slate-300">Premium Base Oils</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <GaugeCircle className="w-6 h-6 mx-auto text-amber-400" />
                <p className="mt-2 text-sm text-slate-300">Enhanced Performance</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <ShieldCheck className="w-6 h-6 mx-auto text-amber-400" />
                <p className="mt-2 text-sm text-slate-300">OEM Grade Standards</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-amber-400/30 to-yellow-200/10 border border-amber-200/30 backdrop-blur overflow-hidden">
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25) 0, transparent 40%)'}} />
              <img src="https://images.unsplash.com/photo-1699528136769-d795893462c6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMdWJyaWNhbnQlMjBCb3R0bGVzfGVufDB8MHx8fDE3NjM0NzM2MjN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Lubricant Bottles" className="w-full h-full object-cover mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
