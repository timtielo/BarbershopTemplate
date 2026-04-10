export default function OverOnsPage() {
  return (
    <div className="py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative overflow-hidden">
            <img
              src="/image.png"
              className="w-full shadow-2xl border border-[#374151]"
              alt="Barbershop Lunetten - Samer aan het werk"
            />
            <div className="absolute inset-0 border border-gold/20 pointer-events-none" />
          </div>

          <div>
            <h1 className="section-title mb-8 font-heading">Over Samer & Team</h1>
            <div className="space-y-6 text-lg opacity-80 font-light leading-relaxed">
              <p>
                Barbershop Lunetten is de passie van Samer. Gelegen in het hart van winkelcentrum
                Lunetten, Utrecht, hebben we een plek gecreëerd waar mannen zich direct thuis voelen.
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
                  <span>Zorgvuldigheid boven snelheid</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">—</span>
                  <span>Geduld voor kinderen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">—</span>
                  <span>Eerlijke prijzen & U-pas acceptatie</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0681546043"
                className="bg-gold text-navy-deep font-heading font-bold px-10 py-3 uppercase tracking-wide transition-all duration-300 hover:opacity-90 hover:-translate-y-px text-center"
              >
                Bel voor afspraak
              </a>
              <a
                href="https://wa.me/31681546043"
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
