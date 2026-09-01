import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow text-center">
        <h2 className="section-title mb-4">Ready to make your week a little easier?</h2>
        <p className="text-xl text-charcoal/70 mb-2 italic font-serif">Let us handle the cooking</p>
        <p className="text-charcoal/60 mb-10">Your first delivery could be this Tuesday</p>
        <Link to="/package" className="btn-primary text-base px-10 py-3.5">
          View This Week's Menu
        </Link>
      </div>
    </section>
  )
}