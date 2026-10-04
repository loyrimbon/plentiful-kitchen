import { Link } from 'react-router-dom'
import batchCookingImg from '../ui/batch-cooking.jpeg'

export default function Founder() {
  return (
    <section className="py-20 md:py-28 bg-sage-50">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-md aspect-[3/4] max-w-sm mx-auto md:max-w-none">
            <img
              src={batchCookingImg}
              alt="Cheffe Souad — fondatrice de Souad Hezzam"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="text-sage-600 font-medium tracking-widest uppercase text-xs mb-3">La créatrice</p>
            <h2 className="section-title mb-8">Pourquoi SEZAM</h2>

            <blockquote className="text-lg md:text-xl text-charcoal/80 leading-relaxed italic mb-8 font-serif">
              "Petite descriptif de ton histoire : PASSION / REORIENTATION PRO / FOODIES / AMOUR DES BONNES CHOSES ...."
            </blockquote>

            <p className="text-charcoal/70 leading-relaxed mb-8">
             TOUJOURS TA STORY 
            </p>

            <div className="mb-8">
              <p className="font-serif text-xl text-charcoal">Cheffe Souad</p>
              <p className="text-sm text-charcoal/60">Créatrice, Souad Hezzam</p>
            </div>

            <Link to="/about" className="btn-secondary">
              L'histoire complète
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}