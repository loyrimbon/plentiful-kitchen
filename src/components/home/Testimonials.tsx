const testimonials = [
  {
    quote: "Plentiful Kitchen's outstanding meals and kind service helped me feel nourished and empowered, allowing me to stop taking heartburn medicine after a decade of dependency.",
    author: 'Christina T.',
    location: 'San Francisco',
  },
  {
    quote: "Plentiful Kitchen has brought us joy since our baby was born. Meals support digestion and milk supply in reusable glass containers. Loved every bite daily.",
    author: 'Eva L.',
    location: '',
  },
  {
    quote: "Incredible food, impeccable service, and a fresh menu every week. We did our research, and Plentiful Kitchen was the clear choice for us from the start.",
    author: 'Eden K.',
    location: '',
  },
  {
    quote: "As a single mom, Plentiful Kitchen has been a gift. Their nourishing meals save me time and money while helping me be a better mom every single day.",
    author: 'Shirley D.',
    location: '',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl p-8 border border-primary-100"
            >
              <p className="text-charcoal/80 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <p className="font-medium text-charcoal">
                – {t.author}
                {t.location && <span className="text-charcoal/50 font-normal">, {t.location}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}