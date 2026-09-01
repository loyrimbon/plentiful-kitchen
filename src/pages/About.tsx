import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container-narrow max-w-3xl text-center">
          <p className="text-sage-600 font-medium tracking-widest uppercase text-xs mb-3">Our founder</p>
          <h1 className="section-title mb-6">The story behind the kitchen</h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            I did not start Plentiful Kitchen because I loved cooking, though I do. I started it because food saved me.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-narrow max-w-3xl prose prose-lg">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">Food saved me</h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">
            For several years I was sick and could not figure out why. Hypothyroid, candida, gut issues, chronic fatigue. I tried everything conventional medicine had to offer and nothing worked. I was told I was healthy by every measure that mattered to a doctor, yet I did not feel that way at all.
          </p>
          <p className="text-charcoal/80 leading-relaxed mb-6">
            It was only when I started paying attention to what I was putting into my body — removing gluten and dairy, choosing organic whole foods, clean protein, filtering my water, cooking everything from scratch — that I started to heal. Food did what nothing else had.
          </p>

          <blockquote className="border-l-4 border-sage-500 pl-6 my-10 italic text-xl text-charcoal/80 font-serif">
            Food is either medicine or it is not. The difference is entirely in how it is grown, prepared, and delivered.
          </blockquote>

          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6 mt-12">Then motherhood humbled me</h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">
            Even with everything I had learned in my own body, becoming a mother brought me to my knees. Too depleted to cook, too exhausted to care for myself the way I knew I needed to.
          </p>
          <p className="text-charcoal/80 leading-relaxed mb-6">
            That experience humbled me completely and also clarified everything. A year later I went back to school to study nutrition and holistic culinary arts. Plentiful Kitchen was not born from a business plan. It was born from my own healing, and from the moment I became a mother and understood from the inside what women in that season of life truly need.
          </p>

          <blockquote className="border-l-4 border-sage-500 pl-6 my-10 italic text-xl text-charcoal/80 font-serif">
            The world shows up for the baby. Almost nobody shows up for the mother’s body. That is the gap I have been filling for ten years.
          </blockquote>

          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6 mt-12">How we cook</h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">
            Every meal starts with organic ingredients, cooked exclusively in avocado oil. For our sauces and dressings we use cold pressed extra virgin olive oil. No seed oils, ever. Our meats are grass fed and finished, our fish is wild caught, and our produce comes from local farms.
          </p>
          <p className="text-charcoal/80 leading-relaxed mb-6">
            We cook with filtered water, sea salt, and stainless steel cookware. All grains and legumes are pre-soaked for easier digestion. Our desserts are naturally sweetened with coconut sugar or maple syrup. Everything we make is naturally free of gluten and dairy.
          </p>
          <p className="text-charcoal/80 leading-relaxed font-medium">
            If we would not eat it, we will not serve it.
          </p>

          <div className="mt-16 text-center">
            <p className="font-serif text-2xl text-charcoal mb-1">Chef Inbal</p>
            <p className="text-charcoal/60 mb-8">Founder, Plentiful Kitchen • San Francisco Bay Area, since 2017</p>
            <Link to="/package" className="btn-primary">
              View this week's menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}