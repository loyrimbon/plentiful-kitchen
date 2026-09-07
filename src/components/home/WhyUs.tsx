import batchCookingImg from '../ui/batch-cooking.jpeg'

const features = [
  {
    title: 'Real Ingredients Always',
    description:
      'Chaque repas commence avec des ingrédients organiques et de saisons. Nous cuisons exclusivement avec de l\'huile d\'avocat et de l\'huile d\'olive extra vierge pressée à froid. BLABLABLABLA Pas d\'huiles de semences, jamais. Les viandes sont grasses & finies, les poissons sont capturés en mer, les produits locaux.',
  },
  {
    title: 'Seulement des contenants en verre. Pas de plastique nulle part',
    description:
      'Cuisiner dans du plastique libère des microplastiques. Nous livrons dans des contenants en verre réutilisables car c\'est mieux pour vos hormones, mieux pour la planète, et la nourriture a simplement mieux goût.',
  },
  {
    title: 'Nourriture nutritive par définition',
    description:
      'Chaque repas est construit autour d\'ingrédients réels, nutritifs et denses qui soutiennent votre énergie et vous gardent en forme. Une nourriture propre et délicieuse.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sage-600 font-medium tracking-widest uppercase text-xs mb-3">Our Difference</p>
          <h2 className="section-title">Pourquoi Souad Hezzam</h2>
          <p className="section-subtitle mx-auto">
            Repas nutritifs qui te permettent d'avancer
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={batchCookingImg}
                alt="Repas préparés — Souad Hezzam"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center mx-auto md:mx-0 mb-5 overflow-hidden">
                <img
                  src={batchCookingImg}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
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