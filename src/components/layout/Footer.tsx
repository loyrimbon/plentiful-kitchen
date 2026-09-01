import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 py-16">
      <div className="container-narrow grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl text-white mb-4">Plentiful Kitchen</h3>
          <p className="text-sm leading-relaxed max-w-md text-white/70">
            Nourriture nutritive, organique cuisinée chaque semaine à Strasbourg et alentours.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/package" className="hover:text-white transition-colors">Formules & Menus</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Notre Histoire</Link></li>
            <li><Link to="/postpartum" className="hover:text-white transition-colors">Post-partum</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contactez-nous</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Livraison</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>Tous les mardis</li>
            <li>Commande par jeudi minuit</li>
            <li>Strasbourg • Mundolsheim • Haguenau</li>
            <li className="pt-2">
              <a href="mailto:hello@plentifulkitchen.com" className="hover:text-white transition-colors">
                souadhezzam@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-narrow mt-12 pt-8 border-t border-white/10 text-sm text-white/50 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Souad Hezzam. Tous droits réservés.</p>
        <p>Cuisiné avec amour à Strasbourg et alentours depuis 2026.</p>
      </div>
    </footer>
  )
}