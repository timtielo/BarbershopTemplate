const openingstijden = [
  { dag: 'Maandag', tijd: '[TIJD_MA]' },
  { dag: 'Dinsdag', tijd: '[TIJD_DI]' },
  { dag: 'Woensdag', tijd: '[TIJD_WO]' },
  { dag: 'Donderdag', tijd: '[TIJD_DO]' },
  { dag: 'Vrijdag', tijd: '[TIJD_VR]' },
  { dag: 'Zaterdag', tijd: '[TIJD_ZA]' },
  { dag: 'Zondag', tijd: '[TIJD_ZO]' },
];

export default function ContactPage() {
  return (
    <div className="py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title text-center mb-16 font-heading">Contact & Locatie</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gegevens */}
          <div className="bg-navy-charcoal p-10 border border-[#374151]">
            <h3 className="font-heading text-xl mb-6 text-gold uppercase tracking-widest">Gegevens</h3>
            <div className="space-y-6 opacity-80 text-sm leading-relaxed">
              <div>
                <p className="font-medium mb-1 text-textMain">Adres</p>
                <p>[ADRES]</p>
                <p>[POSTCODE] [STAD]</p>
                <p className="text-xs opacity-60 mt-1">[LOCATIEBESCHRIJVING]</p>
              </div>
              <div>
                <p className="font-medium mb-1 text-textMain">Telefoon</p>
                <a href="tel:[TELEFOON]" className="hover:text-gold transition-colors">
                  [TELEFOON]
                </a>
              </div>
              <div>
                <p className="font-medium mb-1 text-textMain">E-mail</p>
                <a
                  href="mailto:[EMAIL]"
                  className="text-xs hover:text-gold transition-colors break-all"
                >
                  [EMAIL]
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="tel:[TELEFOON]"
                className="bg-gold text-navy-deep font-heading font-bold px-7 py-3 uppercase tracking-wide text-center transition-all duration-300 hover:opacity-90"
              >
                Bel Nu
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=[GOOGLE_MAPS_ADRES]"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-textMain text-textMain font-heading font-bold px-7 py-3 uppercase tracking-wide text-center transition-all duration-300 hover:bg-textMain hover:text-navy-deep"
              >
                Route Plannen
              </a>
            </div>
          </div>

          {/* Openingstijden */}
          <div className="bg-navy-charcoal p-10 border border-[#374151]">
            <h3 className="font-heading text-xl mb-6 text-gold uppercase tracking-widest text-center">
              Openingstijden
            </h3>
            <div className="space-y-4 text-sm">
              {openingstijden.map(({ dag, tijd }, i) => (
                <div
                  key={dag}
                  className={`flex justify-between ${
                    i < openingstijden.length - 1 ? 'border-b border-[#374151] pb-3' : 'opacity-50'
                  }`}
                >
                  <span>{dag}</span>
                  <span className={tijd === 'Gesloten' ? 'opacity-50' : 'text-gold'}>{tijd}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-[10px] opacity-40 tracking-widest italic">
              Zonder afspraak mogelijk, maar bellen wordt aangeraden op vrijdag en zaterdag.
            </p>
          </div>

          {/* Kaart Placeholder */}
          <div className="relative bg-black flex items-center justify-center overflow-hidden border border-[#374151] min-h-[300px]">
            <div className="absolute inset-0 opacity-40 grayscale">
              <img
                src="[AFBEELDING_LOCATIE]"
                className="w-full h-full object-cover"
                alt="[STAD] kaart"
              />
            </div>
            <div className="relative z-10 p-6 text-center">
              <p className="text-gold font-heading font-bold mb-2 uppercase tracking-tighter text-lg">
                [LOCATIEBESCHRIJVING]
              </p>
              <p className="text-xs opacity-60 mb-6 uppercase tracking-widest">[STAD]</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=[GOOGLE_MAPS_ZOEKTERM]"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-textMain text-textMain font-heading font-bold px-6 py-2 uppercase tracking-wide text-[10px] transition-all duration-300 hover:bg-textMain hover:text-navy-deep"
              >
                Bekijk op kaart
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 p-8 bg-navy-charcoal border border-[#374151] text-center">
          <p className="text-sm opacity-70 mb-4">
            Liever chatten? Stuur ons een WhatsApp bericht en we reageren zo snel mogelijk.
          </p>
          <a
            href="https://wa.me/[WHATSAPP_NUMMER]"
            className="inline-block bg-[#25D366] text-white font-heading font-bold px-10 py-3 uppercase tracking-wide transition-all duration-300 hover:opacity-90"
          >
            WhatsApp Openen
          </a>
        </div>
      </div>
    </div>
  );
}
