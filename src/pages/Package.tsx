import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Package() {
  const [people, setPeople] = useState<'1-2' | '3-4' | null>(null)
  const [meals, setMeals] = useState<3 | 4 | null>(null)
  const [style, setStyle] = useState<'mix' | 'protein' | null>(null)

  const isComplete = people && meals && style

  // Simple pricing logic (example values)
  const getPrice = () => {
    if (!isComplete) return null
    const base = people === '1-2' ? (meals === 3 ? 130 : 160) : (meals === 3 ? 260 : 320)
    return {
      subscribe: base - 10,
      payg: base,
    }
  }

  const price = getPrice()

  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container-narrow text-center">
          <p className="text-sage-600 font-medium tracking-widest uppercase text-xs mb-3">
            Organic meal delivery • San Francisco Bay Area
          </p>
          <h1 className="section-title mb-4">Choose your plan</h1>
          <p className="section-subtitle mx-auto">
            Answer three quick questions and we will find the right plan for you.
            Subscribe and save $10 every week — up to $520 per year.
          </p>
        </div>
      </section>

      {/* Selector */}
      <section className="py-16 md:py-20">
        <div className="container-narrow max-w-3xl">
          <div className="space-y-10">
            {/* Question 1 */}
            <div>
              <h3 className="font-serif text-xl mb-4">1. How many people are you feeding?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setPeople('1-2')}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    people === '1-2'
                      ? 'border-sage-600 bg-sage-50'
                      : 'border-primary-200 hover:border-sage-400'
                  }`}
                >
                  <p className="font-medium text-charcoal">Just me or two of us</p>
                  <p className="text-sm text-charcoal/60 mt-1">Small, 1 to 2 people</p>
                </button>
                <button
                  onClick={() => setPeople('3-4')}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    people === '3-4'
                      ? 'border-sage-600 bg-sage-50'
                      : 'border-primary-200 hover:border-sage-400'
                  }`}
                >
                  <p className="font-medium text-charcoal">A family or group</p>
                  <p className="text-sm text-charcoal/60 mt-1">Large, 3 to 4 people</p>
                </button>
              </div>
            </div>

            {/* Question 2 */}
            <div>
              <h3 className="font-serif text-xl mb-4">2. How many meals would you like this week?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setMeals(3)}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    meals === 3
                      ? 'border-sage-600 bg-sage-50'
                      : 'border-primary-200 hover:border-sage-400'
                  }`}
                >
                  <p className="font-medium text-charcoal">Three meals</p>
                  <p className="text-sm text-charcoal/60 mt-1">A few good dinners</p>
                </button>
                <button
                  onClick={() => setMeals(4)}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    meals === 4
                      ? 'border-sage-600 bg-sage-50'
                      : 'border-primary-200 hover:border-sage-400'
                  }`}
                >
                  <p className="font-medium text-charcoal">Four meals</p>
                  <p className="text-sm text-charcoal/60 mt-1">Most of my week covered</p>
                </button>
              </div>
            </div>

            {/* Question 3 */}
            <div>
              <h3 className="font-serif text-xl mb-4">3. What does your ideal plate look like?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setStyle('mix')}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    style === 'mix'
                      ? 'border-sage-600 bg-sage-50'
                      : 'border-primary-200 hover:border-sage-400'
                  }`}
                >
                  <p className="font-medium text-charcoal">A mix of everything</p>
                  <p className="text-sm text-charcoal/60 mt-1">Animal protein and vegetarian</p>
                </button>
                <button
                  onClick={() => setStyle('protein')}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    style === 'protein'
                      ? 'border-sage-600 bg-sage-50'
                      : 'border-primary-200 hover:border-sage-400'
                  }`}
                >
                  <p className="font-medium text-charcoal">Protein forward</p>
                  <p className="text-sm text-charcoal/60 mt-1">All mains are meat, poultry, or seafood</p>
                </button>
              </div>
            </div>
          </div>

          {/* Result */}
          {isComplete && price && (
            <div className="mt-14 p-8 bg-sage-50 rounded-3xl border border-sage-200">
              <h3 className="font-serif text-2xl text-charcoal mb-6 text-center">Your plan</h3>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 text-center border-2 border-sage-600">
                  <p className="text-sm text-sage-600 font-medium mb-1">Subscribe & Save</p>
                  <p className="text-3xl font-serif font-medium text-charcoal">${price.subscribe}</p>
                  <p className="text-sm text-charcoal/60 mt-1">per week</p>
                  <p className="text-xs text-sage-600 mt-2">Save $10 / week</p>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center border border-primary-200">
                  <p className="text-sm text-charcoal/60 font-medium mb-1">Pay as you go</p>
                  <p className="text-3xl font-serif font-medium text-charcoal">${price.payg}</p>
                  <p className="text-sm text-charcoal/60 mt-1">per week</p>
                  <p className="text-xs text-charcoal/50 mt-2">Order any week you like</p>
                </div>
              </div>

              <div className="text-sm text-charcoal/70 space-y-2 mb-8">
                <p>• 3 or 4 mains of your choice from the full menu</p>
                <p>• 4 sides of your choice</p>
                <p>• 3 extras: dessert, breakfast item, and snack</p>
                <p>• Restorative bone broth</p>
                <p>• Delivered fresh every Tuesday in reusable glass containers</p>
              </div>

              <p className="text-xs text-charcoal/50 mb-6 text-center">
                New clients pay a one-time $65 container fee at checkout. Delivery fee $20.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://plentifulkitchen.goprep.com/customer/menu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Continue to Menu
                </a>
                <Link to="/contact" className="btn-secondary text-center">
                  Contact us first
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ short */}
      <section className="py-16 bg-white">
        <div className="container-narrow max-w-3xl">
          <h2 className="section-title text-center mb-10">Everything you need to know</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-charcoal mb-1">What is included in each delivery?</h4>
              <p className="text-sm text-charcoal/70">Every delivery includes your choice of mains, sides, and extras. Extras rotate weekly and include a dessert, a breakfast item, and a snack.</p>
            </div>
            <div>
              <h4 className="font-medium text-charcoal mb-1">How does the subscription work?</h4>
              <p className="text-sm text-charcoal/70">When you subscribe, you save $10 every week. Update your meal selection by Thursday midnight or we will choose them for you. Skip or pause anytime with two weeks notice.</p>
            </div>
            <div>
              <h4 className="font-medium text-charcoal mb-1">What is the $65 container fee?</h4>
              <p className="text-sm text-charcoal/70">New clients pay a one-time $65 container fee. This covers your set of reusable glass containers. The fee is non-refundable.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}