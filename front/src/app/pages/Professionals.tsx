import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Users,
  Clock,
  Shield,
  Smartphone,
  CreditCard,
  BarChart3,
  Calendar,
  FileText,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export function Professionals() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Développez votre patientèle',
      description: 'Accédez à une base de patients élargie en Tunisie et développez votre activité.',
    },
    {
      icon: Clock,
      title: 'Gagnez du temps',
      description: 'Automatisez la gestion de vos rendez-vous et optimisez votre planning.',
    },
    {
      icon: Shield,
      title: 'Plateforme sécurisée',
      description: 'Données médicales protégées avec chiffrement et conformité aux normes.',
    },
    {
      icon: Smartphone,
      title: 'Outils de téléconsultation',
      description: 'Consultez vos patients à distance avec des outils vidéo de qualité professionnelle.',
    },
    {
      icon: CreditCard,
      title: 'Paiements simplifiés',
      description: 'Recevez vos paiements de manière sécurisée et traçable.',
    },
    {
      icon: BarChart3,
      title: 'Statistiques détaillées',
      description: 'Suivez votre activité avec des tableaux de bord et des rapports personnalisés.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Pré-inscription',
      description: 'Remplissez le formulaire de pré-inscription en quelques minutes.',
      icon: FileText,
    },
    {
      number: '02',
      title: 'Vérification',
      description: 'Notre équipe vérifie vos diplômes et certifications professionnelles.',
      icon: CheckCircle,
    },
    {
      number: '03',
      title: 'Configuration',
      description: 'Créez votre profil professionnel et définissez vos disponibilités.',
      icon: Calendar,
    },
    {
      number: '04',
      title: 'Lancement',
      description: 'Commencez à recevoir des demandes de consultation de patients.',
      icon: Users,
    },
  ];

  const professions = [
    { emoji: '🩺', label: 'Médecin', description: 'Toutes spécialités médicales' },
    { emoji: '💉', label: 'Infirmier(e)', description: 'Soins à domicile et téléconsultation' },
    { emoji: '🧠', label: 'Psychologue', description: 'Thérapie en ligne et suivi psychologique' },
    { emoji: '🦴', label: 'Kiné', description: 'Rééducation et conseils à distance' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F6F73] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Rejoignez OmniCare
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Intégrez la première plateforme tunisienne de télémédecine et développez votre pratique 
              avec des outils modernes et performants.
            </p>
            <Link
              to="/pre-inscription"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#1FBF9A] to-[#6BE3B2] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#1FBF9A]/30 hover:-translate-y-0.5"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              Pré-inscrivez-vous maintenant
            </Link>
          </motion.div>

          {/* Professions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {professions.map((prof) => (
              <div
                key={prof.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
              >
                <div className="text-4xl mb-3">{prof.emoji}</div>
                <div className="font-bold text-lg mb-1">{prof.label}</div>
                <div className="text-sm text-white/70">{prof.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4">
              Comment rejoindre la plateforme ?
            </h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              Un processus simple et rapide en 4 étapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 h-full hover:border-[#1FBF9A] transition-all duration-300 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1FBF9A] to-[#6BE3B2] flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <step.icon className="w-10 h-10 text-[#1FBF9A] mb-4" />
                  <h3 className="text-lg font-bold text-[#1A202C] mb-2">{step.title}</h3>
                  <p className="text-[#718096] text-sm leading-relaxed">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#1FBF9A]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Quels sont les documents nécessaires pour l\'inscription ?',
                a: 'Vous aurez besoin de votre diplôme, carte professionnelle, et pièce d\'identité. Ces documents seront vérifiés lors du processus d\'intégration.',
              },
              {
                q: 'Y a-t-il des frais d\'inscription ?',
                a: 'Les tarifs seront communiqués lors de l\'ouverture officielle des inscriptions. La pré-inscription est gratuite et sans engagement.',
              },
              {
                q: 'Comment sont fixés les tarifs des consultations ?',
                a: 'Vous définissez vous-même vos tarifs de consultation. OmniCare prélève une commission sur chaque consultation réalisée via la plateforme.',
              },
              {
                q: 'Puis-je gérer mon emploi du temps librement ?',
                a: 'Absolument. Vous contrôlez entièrement vos créneaux de disponibilité et pouvez les modifier à tout moment.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-[#F4F5F7] rounded-xl p-6"
              >
                <h4 className="font-bold text-[#1A202C] mb-2">{faq.q}</h4>
                <p className="text-[#718096] leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F6F73] via-[#1FBF9A] to-[#6BE3B2]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à transformer votre pratique ?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Rejoignez OmniCare dès aujourd'hui et faites partie de la révolution de la santé en Tunisie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pre-inscription"
              className="inline-block px-8 py-4 rounded-xl bg-white text-[#0F6F73] font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              Pré-inscription professionnelle
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-xl border-2 border-white text-white font-semibold transition-all duration-300 hover:bg-white hover:text-[#0F6F73]"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}