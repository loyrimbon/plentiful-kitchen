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
            Réponds à trois questions rapides et nous trouverons la bonne formule pour toi.
            Abonne-toi et économise 10€ chaque semaine — jusqu\'à 520€ par an.
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
                  <p className="font-medium text-charcoal">Une famille ou un groupe</p>
                  <p className="text-sm text-charcoal/60 mt-1">Grand, 3 à 4 personnes</p>
                </button>
              </div>
            </div>

            {/* Question 2 */}
            <div>
              <h3 className="font-serif text-xl mb-4">2. Combien de repas aimerais-tu cette semaine ?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setMeals(3)}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    meals === 3
                      ? 'border-sage-600 bg-sage-50'
                      : 'border-primary-200 hover:border-sage-400'
                  }`}
                >
                  <p className="font-medium text-charcoal">Trois repas</p>
                  <p className="text-sm text-charcoal/60 mt-1">Quelques bons dîners</p>
                </button>
                <button
                  onClick={() => setMeals(4)}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    meals === 4
                      ? 'border-sage-600 bg-sage-50'
                      : 'border-primary-200 hover:border-sage-400'
                  }`}
                >
                  <p className="font-medium text-charcoal">Quatre repas</p>
                  <p className="text-sm text-charcoal/60 mt-1">La plupart de ma semaine couverte</p>
                </button>
              </div>
            </div>

            {/* Question 3 */}
            <div>
              <h3 className="font-serif text-xl mb-4">3. Quel serait ton plat idéal ?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setStyle('mix')}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    style === 'mix'
                      ? 'border-sage-600 bg-sage-50'
                      : 'border-primary-200 hover:border-sage-400'
                  }`}
                >
                  <p className="font-medium text-charcoal">Un mélange de tout</p>
                  <p className="text-sm text-charcoal/60 mt-1">Protein animal et végétarien</p>
                </button>
                <button
                  onClick={() => setStyle('protein')}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    style === 'protein'
                      ? 'border-sage-600 bg-sage-50'
                      : 'border-primary-200 hover:border-sage-400'
                  }`}
                >
                  <p className="font-medium text-charcoal">Protein en avant</p>
                  <p className="text-sm text-charcoal/60 mt-1">Tous les plats sont de la viande, du poulet, ou du poisson</p>
                </button>
              </div>
            </div>
          </div>

          {/* Result */}
          {isComplete && price && (
            <div className="mt-14 p-8 bg-sage-50 rounded-3xl border border-sage-200">
              <h3 className="font-serif text-2xl text-charcoal mb-6 text-center">Ta formule</h3>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 text-center border-2 border-sage-600">
                  <p className="text-sm text-sage-600 font-medium mb-1">Abonnement & Économie</p>
                  <p className="text-3xl font-serif font-medium text-charcoal">${price.subscribe}</p>
                  <p className="text-sm text-charcoal/60 mt-1">par semaine</p>
                  <p className="text-xs text-sage-600 mt-2">Économise 10€ / semaine</p>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center border border-primary-200">
                  <p className="text-sm text-charcoal/60 font-medium mb-1">Paiement à l\'unité</p>
                  <p className="text-3xl font-serif font-medium text-charcoal">${price.payg}</p>
                  <p className="text-sm text-charcoal/60 mt-1">par semaine</p>
                  <p className="text-xs text-charcoal/50 mt-2">Commande n\'importe quelle semaine que tu veux</p>
                </div>
              </div>

              <div className="text-sm text-charcoal/70 space-y-2 mb-8">
                <p>• 3 ou 4 plats de ton choix parmi le menu complet</p>
                <p>• 4 accompagnements de ton choix</p>
                <p>• 3 extras: dessert, petit-déjeuner, et collation</p>
                <p>• Bouillon reconstitué</p>
                <p>• Livré frais chaque mardi dans des contenants en verre réutilisables</p>
              </div>

              <p className="text-xs text-charcoal/50 mb-6 text-center">
                Nouveaux clients payent un coût unique de 65€ pour les contenants en verre. Frais de livraison 20€.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://plentifulkitchen.goprep.com/customer/menu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Continuer vers le menu
                </a>
                <Link to="/contact" className="btn-secondary text-center">
                  Contactez-nous d'abord
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ short */}
      <section className="py-16 bg-white">
        <div className="container-narrow max-w-3xl">
          <h2 className="section-title text-center mb-10"> Tout ce que tu dois savoir</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-charcoal mb-1">Qu'est-ce que chaque livraison inclut ?</h4>
              <p className="text-sm text-charcoal/70">Chaque livraison inclut votre choix de plats, accompagnements, et extras. Les extras tournent chaque semaine et incluent un dessert, un petit-déjeuner, et une collation.</p>
            </div>
            <div>
              <h4 className="font-medium text-charcoal mb-1">Comment fonctionne l'abonnement ?</h4>
              <p className="text-sm text-charcoal/70">Lorsque tu abonnes, tu économises 10€ chaque semaine. Met à jour ton choix de repas par jeudi minuit ou nous choisirons pour toi. Passe ou pause à tout moment avec deux semaines de notice.</p>
            </div>
            <div>
              <h4 className="font-medium text-charcoal mb-1">Quel est le coût de 65€ pour les contenants en verre ?</h4>
              <p className="text-sm text-charcoal/70">Les nouveaux clients payent un coût unique de 65€ pour les contenants en verre. Cela couvre ton ensemble de contenants en verre réutilisables. Le coût n'est pas remboursable.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}