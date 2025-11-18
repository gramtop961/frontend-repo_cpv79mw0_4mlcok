import { useState } from 'react'
import { Phone, Mail, MapPin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })

    try {
      const res = await fetch(`${backend}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.detail || 'Submission failed')
      setStatus({ loading: false, success: 'Thanks! We will get back to you shortly.', error: null })
      setForm({ name: '', email: '', phone: '', company: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message })
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Get in touch</h2>
            <p className="mt-2 text-slate-600">Request a quote, product sheet or dealership information.</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="font-semibold text-slate-800">Phone</p>
                  <p className="text-slate-600">+91 90000 00000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <p className="text-slate-600">sales@novalubricants.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="font-semibold text-slate-800">Address</p>
                  <p className="text-slate-600">Manufacturing Unit, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Company</label>
                  <input name="company" value={form.company} onChange={handleChange} className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows="4" required className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
              </div>
              <button disabled={status.loading} className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-lg">
                {status.loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />} Submit
              </button>
              {status.success && (
                <p className="text-green-600 text-sm flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> {status.success}</p>
              )}
              {status.error && (
                <p className="text-red-600 text-sm flex items-center gap-2"><AlertCircle className="w-4 h-4" /> {status.error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
