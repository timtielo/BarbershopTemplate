export default function OverOnsPage() {
  return (
    <div className="py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative overflow-hidden">
            <img
              src="[AFBEELDING_2]"
              className="w-full shadow-2xl border border-[#374151]"
              alt="[BEDRIJFSNAAM] - [NAAM_EIGENAAR] aan het werk"
            />
            <div className="absolute inset-0 border border-gold/20 pointer-events-none" />
          </div>

          <div>
            <h1 className="section-title mb-8 font-heading">Over [NAAM_EIGENAAR] & Team</h1>
            <div className="space-y-6 text-lg opacity-80 font-light leading-relaxed">
              <p>
                [BEDRIJFSNAAM] is de passie van [NAAM_EIGENAAR]. Gelegen in [LOCATIEBESCHRIJVING],
                [STAD], hebben we een plek gecreëerd waar mannen zich direct thuis voelen.
                Voor ons is kapper zijn meer dan alleen haar kort maken; het is een ambacht.
              </p>
              <p>
                We staan bekend om onze rust en de tijd die we voor iedere klant nemen. Of het nu
                gaat om een complexe skin fade of de allereerste knipbeurt van uw zoontje die het
                spannend vindt: wij zorgen dat iedereen tevreden en zelfverzekerd de stoel verlaat.
              </p>
              <p>
                Kom langs, geniet van een gratis kop koffie en ervaar het vakmanschap dat ons
                onderscheidt van de rest.
              </p>
            </div>

            <div className="mt-12 p-8 bg-navy-blue border-l-2 border-gold">
              <h3 className="font-heading text-xl mb-4 text-gold">Onze Waarden</h3>
              <ul className="text-sm opacity-70 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">—</span>
                  <span>[WAARDE_1]</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">—</span>
                  <span>[WAARDE_2]</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">—</span>
                  <span>[WAARDE_3]</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:[TELEFOON]"
                className="bg-gold text-navy-deep font-heading font-bold px-10 py-3 uppercase tracking-wide transition-all duration-300 hover:opacity-90 hover:-translate-y-px text-center"
              >
                Bel voor afspraak
              </a>
              <a
                href="https://wa.me/[WHATSAPP_NUMMER]"
                className="border border-textMain text-textMain font-heading font-bold px-10 py-3 uppercase tracking-wide transition-all duration-300 hover:bg-textMain hover:text-navy-deep text-center"
              >
                WhatsApp ons
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
