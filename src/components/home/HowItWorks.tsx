const steps = [
  {
    number: '1',
    title: 'Choisis ta formule',
    description: 'Choisis ta formule. Nous te proposons les meilleures options pour toi.',
  },
  {
    number: '2',
    title: 'Choisis ta semaine',
    description: 'Choisis ta semaine. Nous te proposons les meilleures options pour toi.',
  },
  {
    number: '3',
    title: 'Etape a definir',
    description: 'Etape a definir. Nous te proposons les meilleures options pour toi.',
  },
  {
    number: '4',
    title: 'Etape a definir',
    description: 'Etape a definir. Nous te proposons les meilleures options pour toi.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sage-600 font-medium tracking-widest uppercase text-xs mb-3">Simple By Design</p>
          <h2 className="section-title">How It Works</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-5xl font-serif font-medium text-sage-200 mb-4">{step.number}</div>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-2">{step.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-sm text-charcoal/60">
          Passe ou pause à tout moment.
        </p>
      </div>
    </section>
  )
}