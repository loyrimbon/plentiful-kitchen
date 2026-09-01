const testimonials = [
  {
    quote: "Souad Hezzam est une excellente cuisinière et son service est incroyable. Elle a aidé à me sentir nourrie et en forme, me permettant de cibler une formule qui me convient parfaitement.",
    author: 'Christina T.',
    location: 'Strasbourg',
  },
  {
    quote: "Souad Hezzam a apporté beaucoup de joie à notre famille depuis la naissance de notre bébé. Les repas sont nourrissants et supportent la digestion et la fourniture de lait dans des contenants réutilisables. On a aimé chaque bouchée quotidiennement.",
    author: 'Eva L.',
    location: 'Mundolsheim',
  },
  {
    quote: "Repas incroyables, service impeccable, et un menu frais chaque semaine. Nous avons fait notre recherche, et Souad Hezzam était la meilleure option pour nous dès le début.",
    author: 'Eden K.',
    location: 'Strasbourg',
  },
  {
    quote: "En tant que maman célibataire, Souad Hezzam a été un cadeau. Leurs repas nourrissants me permettent de gagner du temps et d'argent tout en me permettant de devenir une meilleure maman chaque jour.",
    author: 'Shirley D.',
    location: 'Haguenau',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <h2 className="section-title">Ce que nos clients disent</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl p-8 border border-primary-100"
            >
              <p className="text-charcoal/80 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <p className="font-medium text-charcoal">
                – {t.author}
                {t.location && <span className="text-charcoal/50 font-normal">, {t.location}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}