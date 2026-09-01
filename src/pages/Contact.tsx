import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    family_size: '',
    dietary: '',
    plan_interest: '',
    preferred_contact: 'email',
    source: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const { error } = await supabase.from('contacts').insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          location: form.location || null,
          family_size: form.family_size || null,
          dietary: form.dietary || null,
          plan_interest: form.plan_interest || null,
          preferred_contact: form.preferred_contact,
          source: form.source || null,
          message: form.message || null,
        },
      ])

      if (error) throw error
      setStatus('success')
      setForm({
        name: '',
        email: '',
        phone: '',
        location: '',
        family_size: '',
        dietary: '',
        plan_interest: '',
        preferred_contact: 'email',
        source: '',
        message: '',
      })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container-narrow text-center">
          <h1 className="section-title mb-4">Contact Us</h1>
          <p className="section-subtitle mx-auto">
            Nous aimerions vous entendre. Remplis le formulaire et nous vous recontacterons sous peu.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-narrow max-w-2xl">
          {status === 'success' ? (
            <div className="text-center py-12 bg-sage-50 rounded-2xl">
              <h3 className="font-serif text-2xl text-charcoal mb-3">Thank you!</h3>
              <p className="text-charcoal/70">We received your message and will be in touch soon.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-sage-600 font-medium hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Name *</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Email *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Téléphone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Localisation / Code postal</label>
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Taille de la famille</label>
                <input
                  name="family_size"
                  value={form.family_size}
                  onChange={handleChange}
                  placeholder="e.g. 2 adults, 1 toddler"
                  className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5"> Préférences alimentaires & allergies</label>
                <input
                  name="dietary"
                  value={form.dietary}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5"> Intérêt pour le plan</label>
                <select
                  name="plan_interest"
                  value={form.plan_interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition bg-white"
                >
                  <option value="">Sélectionner un plan</option>
                  <option value="Mix and Match"> Mix et Match (Végétarien + Viande)</option>
                  <option value="Protein Package">Package Protéiné</option>
                  <option value="Personal Chef">Formule Personnelle</option>
                  <option value="Postpartum Package">Formule Post-partum</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5"> Préférence de contact</label>
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferred_contact"
                      value="email"
                      checked={form.preferred_contact === 'email'}
                      onChange={handleChange}
                      className="text-sage-600"
                    />
                    Email
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferred_contact"
                      value="phone"
                      checked={form.preferred_contact === 'phone'}
                      onChange={handleChange}
                      className="text-sage-600"
                    />
                    Phone
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5"> Comment as-tu trouvé notre service ?</label>
                <input
                  name="source"
                  value={form.source}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">  Que dirais-tu d'autre que nous devrions savoir ?</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 outline-none transition resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-600 text-sm">
                  Quelque chose s'est mal passé. Veuillez réessayer ou nous contacter directement par email.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full sm:w-auto disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}