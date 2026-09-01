import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 py-16">
      <div className="container-narrow grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl text-white mb-4">Plentiful Kitchen</h3>
          <p className="text-sm leading-relaxed max-w-md text-white/70">
            Clean, nourishing, organic meals delivered weekly to the San Francisco Bay Area.
            Glass containers only. No plastic. No seed oils. Ever.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/package" className="hover:text-white transition-colors">Plans & Menu</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/postpartum" className="hover:text-white transition-colors">Postpartum</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Delivery</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>Every Tuesday</li>
            <li>Order by Thursday midnight</li>
            <li>SF • Marin • East Bay • Peninsula</li>
            <li className="pt-2">
              <a href="mailto:hello@plentifulkitchen.com" className="hover:text-white transition-colors">
                hello@plentifulkitchen.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-narrow mt-12 pt-8 border-t border-white/10 text-sm text-white/50 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Plentiful Kitchen. All rights reserved.</p>
        <p>Made with care in the Bay Area since 2017.</p>
      </div>
    </footer>
  )
}