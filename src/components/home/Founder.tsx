import { Link } from 'react-router-dom'

export default function Founder() {
  return (
    <section className="py-20 md:py-28 bg-sage-50">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sage-600 font-medium tracking-widest uppercase text-xs mb-3">Our Founder</p>
          <h2 className="section-title mb-8">Why I Built This Kitchen</h2>

          <blockquote className="text-lg md:text-xl text-charcoal/80 leading-relaxed italic mb-8 font-serif">
            "After years of struggling with hypothyroidism and candida, I found my way back to health by removing gluten and returning to real, nutrient-dense, wholesome food. No shortcuts. No processed ingredients. Just honest cooking that let my body heal."
          </blockquote>

          <p className="text-charcoal/70 leading-relaxed mb-8">
            Once I experienced that, I could not keep it to myself. I built this kitchen to share what I had learned. That food is either medicine or it is not, and that the difference is entirely in how it is grown, prepared, and delivered.
          </p>

          <div className="mb-8">
            <p className="font-serif text-xl text-charcoal">Chef Inbal</p>
            <p className="text-sm text-charcoal/60">Founder, Plentiful Kitchen</p>
          </div>

          <Link to="/about" className="btn-secondary">
            Read the full story
          </Link>
        </div>
      </div>
    </section>
  )
}