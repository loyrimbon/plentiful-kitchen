import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow text-center">
        <h2 className="section-title mb-4">Prêt à te libérer du temps toute les semaines ?</h2>
        <p className="text-xl text-charcoal/70 mb-2 italic font-serif">Laisse nous gérer la cuisine</p>
        <p className="text-charcoal/60 mb-10">Ta première session pourrait être ce mardi</p>
        <Link to="/package" className="btn-primary text-base px-10 py-3.5">
          Voir le menu de cette semaine
        </Link>
      </div>
    </section>
  )
}