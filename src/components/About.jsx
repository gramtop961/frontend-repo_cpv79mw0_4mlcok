export default function About() {
  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">About NOVA LUBRICANTS</h2>
            <p className="mt-4 text-slate-700">
              We are a manufacturing company specializing in high‑quality oils and greases. Our portfolio covers passenger cars, bikes, scooters, commercial vehicles, and heavy equipment.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• ISO 9001:2015 certified quality systems</li>
              <li>• OEM grade approvals and rigorous lab testing</li>
              <li>• PAN-India distribution and dealer network</li>
              <li>• Custom formulations for industrial clients</li>
            </ul>
          </div>
          <div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              <img
                src="https://images.unsplash.com/photo-1622803362450-844a8eb00a45?q=80&w=1400&auto=format&fit=crop"
                alt="Manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
