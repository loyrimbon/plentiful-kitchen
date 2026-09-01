import { Link } from 'react-router-dom'

export default function Postpartum() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container-narrow max-w-3xl text-center">
          <p className="text-sage-600 font-medium tracking-widest uppercase text-xs mb-3">Prenatal & Post-partum</p>
          <h1 className="section-title mb-6">Bonne nourriture dès le début</h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            La grossesse et la post-partum sont parmi les saisons les plus nutritivement exigeantes de la vie d'une femme. Nous prenons la cuisine de ton assiette entièrement.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-narrow max-w-3xl">
          <p className="text-charcoal/80 leading-relaxed mb-6 text-lg">
            Chaque semaine nous cuisons et livrons des repas frais, organiques faits maison. Viandes grasses & finies, poissons capturés en mer, légumes de saison, et sauces et dressings faits maison. Pas d'huiles de semences, pas de sucre raffiné, rien traité. Naturellement sans gluten et sans lactose.
          </p>
          <p className="text-charcoal/80 leading-relaxed mb-10 text-lg font-medium italic">
            Tu manges simplement bien, chaque semaine, sans penser à ça.
          </p>

          <h2 className="font-serif text-2xl text-charcoal mb-6">Qu'est-ce que cela inclut</h2>
          <ul className="space-y-3 mb-12 text-charcoal/80">
            <li className="flex gap-3">
              <span className="text-sage-600 font-bold">✓</span>
              3 ou 4 plats de ton choix parmi le menu complet
            </li>
            <li className="flex gap-3">
              <span className="text-sage-600 font-bold">✓</span>
              3 ou 4 accompagnements de ton choix
            </li>
            <li className="flex gap-3">
              <span className="text-sage-600 font-bold">✓</span>
              3 extras: un dessert, un petit-déjeuner, et une collation
            </li>
            <li className="flex gap-3">
              <span className="text-sage-600 font-bold">✓</span>
              Bouillon reconstitué
            </li>
            <li className="flex gap-3">
              <span className="text-sage-600 font-bold">✓</span>
              Biscuits de lactation faits avec du fromage de chèvre et de la levure de bière
            </li>
            <li className="flex gap-3">
              <span className="text-sage-600 font-bold">✓</span>
              Livré frais chaque mardi dans des contenants en verre réutilisables
            </li>
          </ul>

          <div className="bg-cream rounded-2xl p-8 border border-primary-100 mb-12">
              <h3 className="font-serif text-xl text-charcoal mb-4">Ce que nos clients disent</h3>
            <blockquote className="text-charcoal/80 italic mb-4">
              “Le service de Souad Hezzam a été un rempart tant lorsque j'étais enceinte que lors de la post-partum.”
            </blockquote>
            <p className="text-sm text-charcoal/60">— Sara</p>
            <blockquote className="text-charcoal/80 italic mt-6 mb-4">
              “Je donnerais six étoiles si je pouvais. Chaque item est délicieux, diversifié, et nutritif. Notre fils a fini par avoir une allergie au lait lors de la lactation et le fait que les repas sont sans lactose a rendu la suppression du lait de ma diète beaucoup plus facile.”
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