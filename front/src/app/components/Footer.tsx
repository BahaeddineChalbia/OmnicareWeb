import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImage from '../../assets/8429f9ce5676cf5e52599b3c33bca853bb7b5679.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F6F73] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src={logoImage} 
                alt="OmniCare Logo" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold">OmniCare</span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Plateforme tunisienne de télémédecine et soins à la demande pour un accès facilité aux soins de santé.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/fonctionnalites" className="text-white/80 hover:text-white transition-colors text-sm">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link to="/professionnels" className="text-white/80 hover:text-white transition-colors text-sm">
                  Professionnels
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-white/80 hover:text-white transition-colors text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Pour les Professionnels */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Professionnels</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/professionnels" className="text-white/80 hover:text-white transition-colors text-sm">
                  Avantages
                </Link>
              </li>
              <li>
                <Link to="/pre-inscription" className="text-white/80 hover:text-white transition-colors text-sm">
                  Pré-inscription
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@omnicare.tn" className="text-white/80 hover:text-white transition-colors text-sm">
                  contact@omnicare.tn
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+21612345678" className="text-white/80 hover:text-white transition-colors text-sm">
                  +216 12 345 678
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">Tunis, Tunisie</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © {currentYear} OmniCare. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-white/70 hover:text-white transition-colors text-sm">
                Confidentialité
              </Link>
              <Link to="#" className="text-white/70 hover:text-white transition-colors text-sm">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}