import ServiceCard from '../components/ServiceCard';
import ReviewCard from '../components/ReviewCard';
import { Page } from '../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const services = [
  {
    title: '[DIENST_1]',
    description: '[OMSCHRIJVING_DIENST_1]',
    badge: '[BADGE_1]',
  },
  {
    title: '[DIENST_2]',
    description: '[OMSCHRIJVING_DIENST_2]',
    badge: '[BADGE_2]',
  },
  {
    title: '[DIENST_3]',
    description: '[OMSCHRIJVING_DIENST_3]',
    badge: '[BADGE_3]',
  },
  {
    title: '[DIENST_4]',
    description: '[OMSCHRIJVING_DIENST_4]',
    badge: '[BADGE_4]',
  },
];

const reviews = [
  {
    review: '[REVIEW_TEKST_1]',
    name: '[REVIEW_NAAM_1]',
  },
  {
    review: '[REVIEW_TEKST_2]',
    name: '[REVIEW_NAAM_2]',
  },
  {
    review: '[REVIEW_TEKST_3]',
    name: '[REVIEW_NAAM_3]',
  },
  {
    review: '[REVIEW_TEKST_4]',
    name: '[REVIEW_NAAM_4]',
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="[AFBEELDING_1]"
            className="w-full h-full object-cover opacity-30"
            alt="[BEDRIJFSNAAM] interieur"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(circle, transparent 20%, #0B1220 100%)' }}
          />
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="hero-title mb-4 tracking-tighter font-heading">[BEDRIJFSNAAM]</h1>
          <p className="text-lg md:text-xl mb-2 font-medium tracking-wide text-gold uppercase font-heading">
            Strakke kapsels, fades en baardverzorging in [STAD]
          </p>
          <p className="text-md md:text-lg opacity-70 mb-10">
            [LOCATIEBESCHRIJVING]. Meesterschap en zorgvuldigheid voor elke man.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:[TELEFOON]"
              className="bg-gold text-navy-deep font-heading font-bold px-10 py-3 uppercase tracking-wide transition-all duration-300 hover:opacity-90 hover:-translate-y-px"
            >
              Bel voor afspraak
            </a>
            <a
              href="https://wa.me/[WHATSAPP_NUMMER]"
              className="border border-textMain text-textMain font-heading font-bold px-10 py-3 uppercase tracking-wide transition-all duration-300 hover:bg-textMain hover:text-navy-deep"
            >
              WhatsApp ons
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-[#374151] flex flex-wrap justify-center gap-10 text-[10px] uppercase tracking-[0.3em] opacity-50">
            <span>[ADRES]</span>
            <span>[BETAALMETHODE]</span>
            <span>Koffie & Thee staat klaar</span>
          </div>
        </div>
      </section>

      {/* Vakmanschap */}
      <section className="py-24 px-6 bg-navy-deep">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-8 font-heading">Echt Vakmanschap</h2>
          <p className="text-lg md:text-xl opacity-80 leading-relaxed font-light">
            Bij [BEDRIJFSNAAM] draait het om zorgvuldigheid en kwaliteit. In tegenstelling tot de
            standaard kapsalons verderop, nemen wij echt de tijd voor uw kapsel en baard. Een plek
            waar rust, kundigheid en een goed gesprek samenkomen.
          </p>
        </div>
      </section>

      {/* Diensten Preview */}
      <section className="py-24 px-6 bg-navy-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
            <h2 className="section-title font-heading">Onze Behandelingen</h2>
            <button
              onClick={() => {
                onNavigate('diensten');
                window.scrollTo(0, 0);
              }}
              className="font-heading text-[0.85rem] uppercase tracking-[0.1em] border-b border-gold pb-1 hover:text-gold transition-colors duration-300"
            >
              Bekijk alle diensten
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 bg-navy-deep">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-16 text-center font-heading">Wat klanten zeggen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-navy-charcoal border-t border-[#374151]">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title mb-6 font-heading">Klaar voor een nieuwe coupe?</h2>
          <p className="text-lg mb-10 opacity-70">
            Loop binnen of bel voor een plekje, zeker op de drukkere dagen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:[TELEFOON]"
              className="bg-gold text-navy-deep font-heading font-bold px-12 py-3 uppercase tracking-wide transition-all duration-300 hover:opacity-90 hover:-translate-y-px"
            >
              Bel [TELEFOON]
            </a>
            <a
              href="https://wa.me/[WHATSAPP_NUMMER]"
              className="border border-textMain text-textMain font-heading font-bold px-12 py-3 uppercase tracking-wide transition-all duration-300 hover:bg-textMain hover:text-navy-deep"
            >
              WhatsApp Bericht
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
