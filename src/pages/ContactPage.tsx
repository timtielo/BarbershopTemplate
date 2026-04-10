const openingstijden = [
  { dag: 'Maandag', tijd: '12:00 - 18:00' },
  { dag: 'Dinsdag', tijd: '09:30 - 18:00' },
  { dag: 'Woensdag', tijd: '09:30 - 18:00' },
  { dag: 'Donderdag', tijd: '09:30 - 19:00' },
  { dag: 'Vrijdag', tijd: '09:30 - 19:00' },
  { dag: 'Zaterdag', tijd: '09:30 - 19:00' },
  { dag: 'Zondag', tijd: 'Gesloten' },
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
                <p>Zevenwouden 258 B</p>
                <p>3524 CX Utrecht</p>
                <p className="text-xs opacity-60 mt-1">Winkelcentrum Lunetten</p>
              </div>
              <div>
                <p className="font-medium mb-1 text-textMain">Telefoon</p>
                <a href="tel:0681546043" className="hover:text-gold transition-colors">
                  06 815 460 43
                </a>
              </div>
              <div>
                <p className="font-medium mb-1 text-textMain">E-mail</p>
                <a
                  href="mailto:barbershoplunetten0034@gmail.com"
                  className="text-xs hover:text-gold transition-colors break-all"
                >
                  barbershoplunetten0034@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="tel:0681546043"
                className="bg-gold text-navy-deep font-heading font-bold px-7 py-3 uppercase tracking-wide text-center transition-all duration-300 hover:opacity-90"
              >
                Bel Nu
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Zevenwouden+258+B+Utrecht"
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
                src="https://images.unsplash.com/photo-1526512340740-9217d0159da9?q=80&w=2074&auto=format&fit=crop"
                className="w-full h-full object-cover"
                alt="Utrecht kaart"
              />
            </div>
            <div className="relative z-10 p-6 text-center">
              <p className="text-gold font-heading font-bold mb-2 uppercase tracking-tighter text-lg">
                Lunetten
              </p>
              <p className="text-xs opacity-60 mb-6 uppercase tracking-widest">Utrecht</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Barbershop+Lunetten+Zevenwouden+Utrecht"
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
            href="https://wa.me/31681546043"
            className="inline-block bg-[#25D366] text-white font-heading font-bold px-10 py-3 uppercase tracking-wide transition-all duration-300 hover:opacity-90"
          >
            WhatsApp Openen
          </a>
        </div>
      </div>
    </div>
  );
}
