import { Wrench, Truck, Bike, Car, Cog, Boxes } from 'lucide-react'

const data = [
  {
    key: 'car',
    title: 'Car Engine Oils',
    icon: Car,
    items: [
      { name: '5W-30 Fully Synthetic', spec: 'API SN/CF', pack: '1L | 3.5L | 5L' },
      { name: '10W-40 Semi Synthetic', spec: 'API SN', pack: '1L | 3L | 4L' },
    ],
  },
  {
    key: 'bike',
    title: 'Bike & 2T Oils',
    icon: Bike,
    items: [
      { name: '10W-30 4T', spec: 'JASO MA2', pack: '900ml | 1L' },
      { name: '20W-40 4T', spec: 'JASO MA', pack: '900ml | 1L' },
    ],
  },
  {
    key: 'activa',
    title: 'Scooter Oils',
    icon: Cog,
    items: [
      { name: '10W-30 Scooter Oil', spec: 'JASO MB', pack: '800ml | 1L' },
    ],
  },
  {
    key: 'truck',
    title: 'Truck & Diesel Oils',
    icon: Truck,
    items: [
      { name: '15W-40 Diesel Engine Oil', spec: 'API CI-4+', pack: '5L | 7.5L | 15L' },
      { name: '20W-50 Diesel Oil', spec: 'API CH-4', pack: '5L | 15L | 50L' },
    ],
  },
  {
    key: 'jcb',
    title: 'Heavy Equipment & Greases',
    icon: Wrench,
    items: [
      { name: 'Lithium EP-2 Grease', spec: 'NLGI 2', pack: '500g | 1kg | 18kg' },
      { name: 'Hydraulic Oil AW-68', spec: 'Anti-wear', pack: '5L | 20L | 210L' },
    ],
  },
]

export default function Products() {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center">Our Products</h2>
        <p className="text-slate-600 text-center mt-2 max-w-2xl mx-auto">Engineered for protection, performance and long drain intervals.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((cat) => (
            <div key={cat.key} className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <cat.icon className="w-6 h-6 text-amber-500" />
                <h3 className="text-xl font-bold text-slate-900">{cat.title}</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {cat.items.map((it, idx) => (
                  <li key={idx} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-slate-800">{it.name}</p>
                      <p className="text-sm text-slate-500">{it.spec}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">{it.pack}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
