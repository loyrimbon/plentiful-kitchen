const steps = [
  {
    number: '1',
    title: 'Choose Your Plan',
    description: 'Tell us how many people you are feeding and how many meals you want. We will find the right option for you.',
  },
  {
    number: '2',
    title: 'Order by Thursday midnight',
    description: 'Our menu rotates weekly with the best seasonal ingredients. Place your order before the deadline.',
  },
  {
    number: '3',
    title: 'Delivered Every Tuesday',
    description: 'Fresh, chilled, and ready to eat in glass containers. Simply reheat and enjoy.',
  },
  {
    number: '4',
    title: 'Return Your Containers',
    description: 'Leave your empty containers out with your next delivery and we collect, wash, and reuse them.',
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
          Skip or pause anytime with two weeks notice.
        </p>
      </div>
    </section>
  )
}