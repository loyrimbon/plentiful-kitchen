import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const nav = [
  { name: 'Home', path: '/' },
  { name: 'Plans', path: '/package' },
  { name: 'About', path: '/about' },
  { name: 'Postpartum', path: '/postpartum' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-primary-100">
      <div className="container-narrow flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="font-serif text-xl md:text-2xl font-semibold text-charcoal tracking-tight">
          Plentiful Kitchen
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-sage-700'
                  : 'text-charcoal/70 hover:text-sage-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/package" className="btn-primary text-sm py-2.5 px-5">
            View Menu
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-charcoal"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-primary-100 bg-cream">
          <div className="container-narrow py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-3 px-2 rounded-lg ${
                  location.pathname === item.path ? 'bg-sage-50 text-sage-700' : 'text-charcoal'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/package"
              className="btn-primary text-center mt-3"
              onClick={() => setOpen(false)}
            >
              View Menu
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}