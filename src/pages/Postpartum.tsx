import { Link } from 'react-router-dom'

export default function Postpartum() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container-narrow max-w-3xl text-center">
          <p className="text-sage-600 font-medium tracking-widest uppercase text-xs mb-3">Prenatal & Postpartum</p>
          <h1 className="section-title mb-6">Good food from the very beginning</h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Pregnancy and postpartum are among the most nutritionally demanding seasons of a woman’s life. We take the cooking off your plate entirely.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-narrow max-w-3xl">
          <p className="text-charcoal/80 leading-relaxed mb-6 text-lg">
            Every week we cook and deliver fresh, organic meals made from scratch. Grass-fed and grass-finished proteins, wild-caught seafood, seasonal vegetables, and house-made sauces and dressings. No seed oils, no refined sugar, nothing processed. Naturally gluten and dairy free.
          </p>
          <p className="text-charcoal/80 leading-relaxed mb-10 text-lg font-medium italic">
            You just eat well, every single week, without thinking about it.
          </p>

          <h2 className="font-serif text-2xl text-charcoal mb-6">What is included</h2>
          <ul className="space-y-3 mb-12 text-charcoal/80">
            <li className="flex gap-3">
              <span className="text-sage-600 font-bold">✓</span>
              3 or 4 mains of your choice from the full menu
            </li>
            <li className="flex gap-3">
              <span className="text-sage-600 font-bold">✓</span>
              3 or 4 sides of your choice
            </li>
            <li className="flex gap-3">
              <span className="text-sage-600 font-bold">✓</span>
              3 extras: a dessert, a breakfast item, and a snack
            </li>
            <li className="flex gap-3">
              <span className="text-sage-600 font-bold">✓</span>
              Restorative bone broth
            </li>
            <li className="flex gap-3">
              <span className="text-sage-600 font-bold">✓</span>
              Lactation cookies made with oats and brewer's yeast
            </li>
            <li className="flex gap-3">
              <span className="text-sage-600 font-bold">✓</span>
              Delivered fresh every Tuesday in reusable glass containers
            </li>
          </ul>

          <div className="bg-cream rounded-2xl p-8 border border-primary-100 mb-12">
            <h3 className="font-serif text-xl text-charcoal mb-4">What clients say</h3>
            <blockquote className="text-charcoal/80 italic mb-4">
              “Inbal’s service has been a saving grace both when I was pregnant and then postpartum.”
            </blockquote>
            <p className="text-sm text-charcoal/60">— Sara</p>
            <blockquote className="text-charcoal/80 italic mt-6 mb-4">
              “I’d give six stars if I could. Every single item is delicious, diverse, and nutritious. Our son ended up having a dairy allergy while breastfeeding and the fact that the meals are dairy free made cutting dairy from my diet so much easier.”
            </blockquote>
            <p className="text-sm text-charcoal/60">— Client</p>
          </div>

          <div className="text-center">
            <Link to="/package" className="btn-primary">
              Choose your plan
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}