import { motion } from 'motion/react';
import { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Video,
  Calendar,
  FileText,
  Shield,
  Clock,
  CreditCard,
  Bell,
  Heart,
  Users,
  Smartphone,
  Activity,
  Lock,
  CheckCircle,
  Zap,
} from 'lucide-react';

// Import images
import doctorImage from '../../assets/c876bd193a6de41807d285b768738377957d537f.png';
import patientImage from '../../assets/08078d243e3f54eeadaa887cbdf5eeb8beaf4848.png';

// Custom Arrow Components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[#1FBF9A] hover:bg-[#1FBF9A] hover:text-white transition-all duration-300 hover:scale-110"
      aria-label="Suivant"
      style={{ minWidth: '44px', minHeight: '44px' }}
    >
      <ChevronRight size={24} />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[#1FBF9A] hover:bg-[#1FBF9A] hover:text-white transition-all duration-300 hover:scale-110"
      aria-label="Précédent"
      style={{ minWidth: '44px', minHeight: '44px' }}
    >
      <ChevronLeft size={24} />
    </button>
  );
}

export function Features() {
  const [activeTab, setActiveTab] = useState<'patients' | 'professionals'>('professionals');

  const allFeatures = [
    {
      icon: Video,
      title: 'Consultations vidéo HD',
      description: 'Rencontrez vos professionnels de santé en face-à-face virtuel avec une qualité vidéo haute définition.',
      category: 'patient',
    },
    {
      icon: Calendar,
      title: 'Réservation en ligne',
      description: 'Prenez rendez-vous 24h/24, 7j/7 selon vos disponibilités et celles du professionnel.',
      category: 'patient',
    },
    {
      icon: FileText,
      title: 'Dossier médical numérique',
      description: 'Accédez à votre historique de consultations et documents médicaux centralisés.',
      category: 'patient',
    },
    {
      icon: Shield,
      title: 'Sécurité des données',
      description: 'Vos informations médicales sont chiffrées et protégées selon les normes les plus strictes.',
      category: 'both',
    },
    {
      icon: Clock,
      title: 'Disponibilité étendue',
      description: 'Des professionnels disponibles tôt le matin, le soir et même le week-end.',
      category: 'patient',
    },
    {
      icon: CreditCard,
      title: 'Paiement sécurisé',
      description: 'Réglez vos consultations en ligne de manière sécurisée avec plusieurs moyens de paiement.',
      category: 'both',
    },
    {
      icon: Bell,
      title: 'Rappels et notifications',
      description: 'Recevez des rappels pour vos rendez-vous, prises de médicaments et suivis médicaux.',
      category: 'patient',
    },
    {
      icon: Heart,
      title: 'Suivi personnalisé',
      description: 'Bénéficiez d\'un suivi médical adapté à vos besoins et votre historique de santé.',
      category: 'patient',
    },
    {
      icon: Users,
      title: 'Gestion multi-profils',
      description: 'Gérez les rendez-vous de toute votre famille depuis un seul compte.',
      category: 'patient',
    },
    {
      icon: Smartphone,
      title: 'Application mobile',
      description: 'Accédez à tous les services depuis votre smartphone (bientôt disponible).',
      category: 'both',
    },
    {
      icon: Activity,
      title: 'Tableau de bord professionnel',
      description: 'Suivez vos consultations, revenus et statistiques d\'activité en temps réel.',
      category: 'professional',
    },
    {
      icon: Lock,
      title: 'Profils vérifiés',
      description: 'Tous les professionnels sont vérifiés avec diplômes et certifications validés.',
      category: 'both',
    },
    {
      icon: CheckCircle,
      title: 'Gestion de planning',
      description: 'Définissez vos créneaux de disponibilité et gérez votre emploi du temps facilement.',
      category: 'professional',
    },
    {
      icon: Zap,
      title: 'Consultation express',
      description: 'Option de consultation rapide pour les cas urgents avec professionnels disponibles.',
      category: 'patient',
    },
  ];

  const patientFeatures = allFeatures.filter(f => f.category === 'patient' || f.category === 'both');
  const professionalFeatures = allFeatures.filter(f => f.category === 'professional' || f.category === 'both');

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F6F73] via-[#1FBF9A] to-[#6BE3B2]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Toutes les fonctionnalités <br className="hidden sm:block" />
              pour votre santé
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Découvrez une plateforme complète conçue pour faciliter l'accès aux soins 
              et améliorer la relation entre patients et professionnels de santé.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4">
                Une plateforme complète
              </h2>
              <p className="text-base sm:text-lg text-[#718096] max-w-2xl mx-auto mb-4 px-4">
                Faites glisser pour découvrir toutes nos fonctionnalités
              </p>
            </motion.div>
          </div>

          <div className="relative px-0 sm:px-8">
            <Slider {...sliderSettings}>
              {allFeatures.map((feature, idx) => (
                <div key={feature.title} className="px-2 sm:px-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden h-full"
                  >
                    {/* Animated Background Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1FBF9A]/5 to-[#6BE3B2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <motion.div 
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1FBF9A] to-[#6BE3B2] flex items-center justify-center mb-4 sm:mb-5 shadow-lg group-hover:shadow-[#1FBF9A]/50"
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </motion.div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#1A202C] mb-2 sm:mb-3 group-hover:text-[#1FBF9A] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#718096] leading-relaxed group-hover:text-[#1A202C] transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Interactive Tabs: Patients vs Professionals */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-[#F4F5F7] p-2 rounded-2xl gap-2">
              <button
                onClick={() => setActiveTab('patients')}
                className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm lg:text-base whitespace-nowrap ${
                  activeTab === 'patients'
                    ? 'bg-gradient-to-r from-[#1FBF9A] to-[#6BE3B2] text-white shadow-lg shadow-[#1FBF9A]/30'
                    : 'text-[#718096] hover:text-[#1FBF9A]'
                }`}
                style={{ minWidth: '44px', minHeight: '44px' }}
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Pour les patients</span>
              </button>
              <button
                onClick={() => setActiveTab('professionals')}
                className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm lg:text-base whitespace-nowrap ${
                  activeTab === 'professionals'
                    ? 'bg-gradient-to-r from-[#0F6F73] to-[#1FBF9A] text-white shadow-lg shadow-[#0F6F73]/30'
                    : 'text-[#718096] hover:text-[#0F6F73]'
                }`}
                style={{ minWidth: '44px', minHeight: '44px' }}
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Pour les professionnels</span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === 'patients' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {activeTab === 'patients' ? (
              <div className="relative min-h-[500px] sm:min-h-[600px] rounded-3xl overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={patientImage}
                    alt="Professionnelle de santé avec une patiente"
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1A202C]/60 via-[#1A202C]/40 to-[#1A202C]/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 lg:p-12 flex flex-col h-full">
                  <div className="text-center mb-6 sm:mb-8">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4"
                    >
                      Gérez votre santé facilement
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto"
                    >
                      Accédez à des soins de qualité depuis chez vous avec une plateforme intuitive et sécurisée.
                    </motion.p>
                  </div>

                  {/* Desktop Grid - Hidden on Mobile */}
                  <div className="hidden lg:grid lg:grid-cols-3 gap-6 flex-1">
                    {patientFeatures.slice(0, 6).map((feature, idx) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.08 }}
                        whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.2 } }}
                        className="group/card p-6 bg-white/95 backdrop-blur-sm rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
                      >
                        <motion.div
                          className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1FBF9A] to-[#6BE3B2] flex items-center justify-center mb-4 shadow-lg mx-auto"
                          whileHover={{
                            rotate: 360,
                            transition: { duration: 0.6 }
                          }}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="text-center">
                          <h4 className="font-bold text-[#1A202C] mb-2 group-hover/card:text-[#1FBF9A] transition-colors duration-300 text-lg">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-[#718096] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Scrollable Tickets - Hidden on Desktop */}
                  <div className="lg:hidden flex-1 overflow-x-auto overflow-y-hidden pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8">
                    <div className="flex gap-4 min-w-max">
                      {patientFeatures.slice(0, 6).map((feature, idx) => (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.08 }}
                          whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.2 } }}
                          className="group/card flex-shrink-0 w-[280px] sm:w-[320px] p-6 bg-white/95 backdrop-blur-sm rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                          <motion.div
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#1FBF9A] to-[#6BE3B2] flex items-center justify-center mb-4 shadow-lg mx-auto"
                            whileHover={{
                              rotate: 360,
                              transition: { duration: 0.6 }
                            }}
                          >
                            <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                          </motion.div>
                          <div className="text-center">
                            <h4 className="font-bold text-[#1A202C] mb-2 group-hover/card:text-[#1FBF9A] transition-colors duration-300 text-base sm:text-lg">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-[#718096] leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Scroll Indicator - Mobile Only */}
                  <div className="lg:hidden text-center mt-4">
                    <p className="text-sm text-white/70">← Faites défiler pour voir plus →</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative min-h-[500px] sm:min-h-[600px] rounded-3xl overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={doctorImage}
                    alt="Docteur professionnel"
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0F6F73]/60 via-[#0F6F73]/40 to-[#0F6F73]/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 lg:p-12 flex flex-col h-full">
                  <div className="text-center mb-6 sm:mb-8">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4"
                    >
                      Développez votre pratique
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto"
                    >
                      Des outils professionnels pour optimiser vos consultations et améliorer le suivi de vos patients.
                    </motion.p>
                  </div>

                  {/* Desktop Grid - Hidden on Mobile */}
                  <div className="hidden lg:grid lg:grid-cols-3 gap-6 flex-1">
                    {professionalFeatures.slice(0, 6).map((feature, idx) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.08 }}
                        whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.2 } }}
                        className="group/card p-6 bg-white/95 backdrop-blur-sm rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
                      >
                        <motion.div
                          className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0F6F73] to-[#1FBF9A] flex items-center justify-center mb-4 shadow-lg mx-auto"
                          whileHover={{
                            rotate: -360,
                            transition: { duration: 0.6 }
                          }}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="text-center">
                          <h4 className="font-bold text-[#1A202C] mb-2 group-hover/card:text-[#0F6F73] transition-colors duration-300 text-lg">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-[#718096] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Scrollable Tickets - Hidden on Desktop */}
                  <div className="lg:hidden flex-1 overflow-x-auto overflow-y-hidden pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8">
                    <div className="flex gap-4 min-w-max">
                      {professionalFeatures.slice(0, 6).map((feature, idx) => (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.08 }}
                          whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.2 } }}
                          className="group/card flex-shrink-0 w-[280px] sm:w-[320px] p-6 bg-white/95 backdrop-blur-sm rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                          <motion.div
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#0F6F73] to-[#1FBF9A] flex items-center justify-center mb-4 shadow-lg mx-auto"
                            whileHover={{
                              rotate: -360,
                              transition: { duration: 0.6 }
                            }}
                          >
                            <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                          </motion.div>
                          <div className="text-center">
                            <h4 className="font-bold text-[#1A202C] mb-2 group-hover/card:text-[#0F6F73] transition-colors duration-300 text-base sm:text-lg">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-[#718096] leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Scroll Indicator - Mobile Only */}
                  <div className="lg:hidden text-center mt-4">
                    <p className="text-sm text-white/70">← Faites défiler pour voir plus →</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-6">
            Prêt à découvrir OmniCare ?
          </h2>
          <p className="text-xl text-[#718096] mb-8 leading-relaxed">
            Rejoignez notre plateforme et profitez de toutes ces fonctionnalités dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pre-inscription"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#1FBF9A] to-[#6BE3B2] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#1FBF9A]/30 hover:-translate-y-0.5"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              Pré-rejoindre maintenant
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl border-2 border-[#1FBF9A] text-[#1FBF9A] font-semibold transition-all duration-300 hover:bg-[#1FBF9A] hover:text-white"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}