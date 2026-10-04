import { Link } from 'react-router-dom'
import batchCookingImg from '@/components/ui/batch-cooking.jpeg'

export default function Services() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container-narrow max-w-3xl text-center">
          <p className="text-sage-600 font-medium tracking-widest uppercase text-xs mb-3">Les services Sezam</p>
          <h1 className="section-title mb-6">Voici ce que Sezam peut faire pour vous</h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
           A compléter.......  </p>
        </div>
      </section>


      <section className="grid ">
        <div className="container-narrow max-w-3xl prose prose-lg">
            <div className='card'>
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">BATCH-COOKING</h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">
            Préparation de repas, chez vous, pour vous selon vos goûts.
         </p>
         <img
              src={batchCookingImg}
              alt="Batch cooking — repas préparés avec des ingrédients frais"
              className="h-mid w-mid object-cover"
              fetchPriority="high"
            />
          </div>
          <blockquote className="border-l-4 border-sage-500 pl-6 my-10 italic text-xl text-charcoal/80 font-serif">
            Texte descriptif incitatif pour le batch-cooking. 
            Exemple : envie de passer moins de temps en cuisine et plus de temps avec ses proches...</blockquote>

        <div className='card'>
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">POST-PARTUM</h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">La grossesse et la période post-partum sont parmi les saisons les plus nutritivement exigeantes de la vie d'une femme.</p>
        </div>

        <blockquote className="border-l-4 border-sage-500 pl-6 my-10 italic text-xl text-charcoal/80 font-serif">
         
         </blockquote>
         
        <div className='card'>
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">SERVICE DE CHEFFE A DOMICILE</h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">
        Envie d'impressionner pour un brunch, un diner, un anniversaire.
          </p>
          </div>
          <blockquote className="border-l-4 border-sage-500 pl-6 my-10 italic text-xl text-charcoal/80 font-serif">
         
          </blockquote>
          
          <div className='card'>
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">ASSISTANCE / CONSEIL </h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">
            Envie de cuisiner mais en manque d'idée, problème d'organisation...Je mets mon expertise, mon expérience a votre profit. 
        </p>  
        </div>
          <div className="mt-16 text-center">
            <p className="font-serif text-2xl text-charcoal mb-1">SEZAM</p>
            <p className="text-charcoal/60 mb-8">Fondatrice, Souad Hezzam • Strasbourg, depuis 2026</p>
            <Link to="/package" className="btn-primary">
              Voir le menu de cette semaine
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}