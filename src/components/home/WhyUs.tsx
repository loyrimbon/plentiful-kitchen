const features = [
  {
    title: 'Real Ingredients Always',
    description:
      'Every meal starts with organic, non-GMO ingredients. We cook exclusively with avocado oil and cold-pressed extra virgin olive oil. No seed oils, ever. Meats are grass-fed & finished, fish is wild-caught, produce from local farms.',
  },
  {
    title: 'Glass only. No plastic anywhere',
    description:
      'Heating food in plastic releases microplastics. We deliver in reusable glass containers because it is better for your hormones, better for the planet, and the food simply tastes better.',
  },
  {
    title: 'Nourishing by design',
    description:
      'Every meal is built around real, nutrient-dense ingredients that support your energy and keep you and your family feeling their best. Clean food that is also delicious.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sage-600 font-medium tracking-widest uppercase text-xs mb-3">Our Difference</p>
          <h2 className="section-title">Why Plentiful Kitchen</h2>
          <p className="section-subtitle mx-auto">
            Nourishing meals that keep you going
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center mx-auto md:mx-0 mb-5">
                <div className="w-3 h-3 rounded-full bg-sage-600" />
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-3">{feature.title}</h3>
              <p className="text-charcoal/70 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}