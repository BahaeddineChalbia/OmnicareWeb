import { motion } from "motion/react";
import { Target, Heart, Shield, Users, Award, Lightbulb } from "lucide-react";
import missionImage1 from "../../assets/ad71fe2685cc6f3070124bbb1ba3efeb70ac4bc6.png";
import missionImage2 from "../../assets/0cd048fb94ea28e94ecac46764d15421cd977e95.png";
import missionImage3 from "../../assets/81eae92ebae58edbe4ce3e4fcee58abce8c8c7f4.png";
import tunisiaImage from "../../assets/09960f750fd98ca10af332aa627f0667d9bda569.png";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Accessibilité",
      description:
        "Rendre les soins de santé accessibles à tous les Tunisiens, partout et à tout moment.",
    },
    {
      icon: Shield,
      title: "Sécurité",
      description:
        "Protéger les données médicales avec les plus hauts standards de sécurité et de confidentialité.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Faciliter la collaboration entre patients et professionnels de santé pour de meilleurs résultats.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Innover constamment pour améliorer l'expérience de soins et la qualité du service.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Garantir un service de qualité avec des professionnels vérifiés et qualifiés.",
    },
    {
      icon: Target,
      title: "Impact",
      description:
        "Transformer le système de santé tunisien pour le rendre plus efficient et moderne.",
    },
  ];

  const trustBadges = [
    {
      title: "Professionnels vérifiés",
      description:
        "Tous nos professionnels sont vérifiés avec diplômes validés",
      icon: Award,
    },
    {
      title: "Données sécurisées",
      description:
        "Chiffrement de bout en bout et conformité aux normes internationales",
      icon: Shield,
    },
    {
      title: "Disponible 24/7",
      description: "Accès aux soins à toute heure, tous les jours de l'année",
      icon: Users,
    },
  ];

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
              À propos d'OmniCare
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              La première plateforme tunisienne de télémédecine et soins à la
              demande, conçue pour rapprocher patients et professionnels de
              santé.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1FBF9A]/10 to-[#6BE3B2]/10 rounded-full mb-4">
              <Target className="w-5 h-5 text-[#1FBF9A]" />
              <span className="font-semibold text-[#1FBF9A]">
                Notre mission
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-6">
              Révolutionner l'accès aux soins en Tunisie
            </h2>
          </div>

          <div className="space-y-12">
            {/* Mission Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-1 lg:order-1">
                <div
                  className="mission-card-mobile-bg relative rounded-2xl p-6 sm:p-8 border-l-4 border-[#1FBF9A] overflow-hidden min-h-[300px] flex items-center bg-cover bg-center lg:bg-gradient-to-br lg:from-[#1FBF9A]/5 lg:to-[#6BE3B2]/5"
                  style={{
                    backgroundImage: `url(${missionImage1})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1FBF9A]/95 to-[#6BE3B2]/95 lg:bg-gradient-to-br lg:from-[#1FBF9A]/5 lg:to-[#6BE3B2]/5"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white lg:text-[#1A202C] mb-4">
                      Le constat
                    </h3>
                    <p className="text-base sm:text-lg text-white lg:text-[#718096] leading-relaxed">
                      OmniCare est née d'un constat simple : l'accès aux soins
                      de santé en Tunisie peut être difficile, chronophage et
                      parfois décourageant. Entre les files d'attente, les
                      déplacements et les contraintes de temps, beaucoup de
                      Tunisiens renoncent à consulter un professionnel de santé.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2 hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={missionImage1}
                    alt="Télémédecine avec smartphone et stéthoscope"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
            </motion.div>

            {/* Mission Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1 hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={missionImage2}
                    alt="Téléconsultation en ligne"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div
                  className="mission-card-mobile-bg relative rounded-2xl p-6 sm:p-8 border-l-4 border-[#0F6F73] overflow-hidden min-h-[300px] flex items-center bg-cover bg-center lg:bg-gradient-to-br lg:from-[#0F6F73]/5 lg:to-[#1FBF9A]/5"
                  style={{
                    backgroundImage: `url(${missionImage2})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F6F73]/95 to-[#1FBF9A]/95 lg:bg-gradient-to-br lg:from-[#0F6F73]/5 lg:to-[#1FBF9A]/5"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white lg:text-[#1A202C] mb-4">
                      Notre solution
                    </h3>
                    <p className="text-base sm:text-lg text-white lg:text-[#718096] leading-relaxed">
                      Notre mission est de démocratiser l'accès aux soins en
                      créant un pont numérique entre les patients et les
                      professionnels de santé. Grâce à la technologie, nous
                      facilitons les consultations à distance, les soins à
                      domicile et le suivi médical personnalisé.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission Item 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-1 lg:order-1">
                <div
                  className="mission-card-mobile-bg relative rounded-2xl p-6 sm:p-8 border-l-4 border-[#6BE3B2] overflow-hidden min-h-[300px] flex items-center bg-cover bg-center lg:bg-gradient-to-br lg:from-[#6BE3B2]/5 lg:to-[#1FBF9A]/5"
                  style={{
                    backgroundImage: `url(${missionImage3})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6BE3B2]/95 to-[#1FBF9A]/95 lg:bg-gradient-to-br lg:from-[#6BE3B2]/5 lg:to-[#1FBF9A]/5"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white lg:text-[#1A202C] mb-4">
                      Notre promesse
                    </h3>
                    <p className="text-base sm:text-lg text-white lg:text-[#718096] leading-relaxed">
                      OmniCare, c'est la promesse d'une santé accessible,
                      moderne et efficace pour tous les Tunisiens. Une
                      plateforme où la technologie rencontre l'humain pour
                      offrir des soins de qualité, où que vous soyez, quand vous
                      en avez besoin.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2 hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={missionImage3}
                    alt="Professionnelle de santé en téléconsultation"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1FBF9A] to-[#6BE3B2] flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A202C] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#718096] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Tunisie */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F6F73]/10 rounded-full mb-4">
                <span className="text-2xl">🇹🇳</span>
                <span className="font-semibold text-[#0F6F73]">
                  Made in Tunisia
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-6">
                Une solution 100% tunisienne
              </h2>
              <p className="text-lg text-[#718096] mb-6 leading-relaxed">
                OmniCare est conçue par des Tunisiens, pour les Tunisiens. Nous
                comprenons les spécificités du système de santé tunisien, les
                besoins locaux et les défis auxquels font face patients et
                professionnels.
              </p>
              <p className="text-lg text-[#718096] mb-6 leading-relaxed">
                Notre plateforme est adaptée au contexte tunisien : prise en
                charge en français et en arabe, intégration avec les systèmes de
                santé locaux, et partenariats avec les institutions médicales
                tunisiennes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F4F5F7] rounded-xl p-4">
                  <div className="text-3xl font-bold text-[#1FBF9A] mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-[#718096]">Disponibilité</div>
                </div>
                <div className="bg-[#F4F5F7] rounded-xl p-4">
                  <div className="text-3xl font-bold text-[#1FBF9A] mb-1">
                    100%
                  </div>
                  <div className="text-sm text-[#718096]">Sécurisé</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#0F6F73]/10 to-[#1FBF9A]/10 rounded-3xl"></div>
              <img
                src={tunisiaImage}
                alt="Tunisia"
                className="absolute inset-0 w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A202C] mb-4">
              Pourquoi nous faire confiance ?
            </h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              Des garanties solides pour votre sécurité et votre tranquillité
              d'esprit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, idx) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1FBF9A] to-[#6BE3B2] flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A202C] mb-3">
                  {badge.title}
                </h3>
                <p className="text-[#718096] leading-relaxed">
                  {badge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F6F73] via-[#1FBF9A] to-[#6BE3B2]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Rejoignez le mouvement OmniCare
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Ensemble, construisons l'avenir de la santé en Tunisie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pre-inscription"
              className="inline-block px-8 py-4 rounded-xl bg-white text-[#0F6F73] font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ minWidth: "44px", minHeight: "44px" }}
            >
              Pré-inscription professionnelle
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl border-2 border-white text-white font-semibold transition-all duration-300 hover:bg-white hover:text-[#0F6F73]"
              style={{ minWidth: "44px", minHeight: "44px" }}
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
