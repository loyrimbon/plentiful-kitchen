import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sage-50/60 to-transparent pointer-events-none" />
      <div className="container-narrow text-center relative">
        <p className="text-sage-600 font-medium tracking-widest uppercase text-xs md:text-sm mb-5">
          Organique • Sans gluten • Sans lactose
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.15] text-charcoal mb-6">
          Tu viens de trouver<br />ta cuisine
        </h1>
        <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Repas nutritifs pour des vies occupées, pris en charge semaine après semaine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/package" className="btn-primary text-base px-8 py-3.5">
            Voir le menu de cette semaine
          </Link>
          <Link to="/about" className="btn-secondary text-base px-8 py-3.5">
            Notre histoire
          </Link>
        </div>
        <p className="mt-12 text-sm text-charcoal/50">
          Aimé par des centaines de familles
        </p>
      </div>
    </section>
  )
}