const diensten = [
  {
    title: 'Heren Knippen',
    description: 'Inclusief contourscheren en professionele styling.',
    price: 'Bel voor prijs',
  },
  {
    title: 'Baardverzorging',
    description: 'Trimmen, in model brengen en contourscheren.',
    price: 'Bel voor prijs',
  },
  {
    title: 'Knippen & Baard',
    description: 'Het volledige onderhoud voor een scherpe prijs.',
    price: 'Bel voor prijs',
  },
  {
    title: 'Kids Knippen (t/m 12jr)',
    description: 'Geduldige behandeling voor jonge heren.',
    price: 'Bel voor prijs',
  },
];

export default function DienstenPage() {
  return (
    <div className="py-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title text-center mb-4 font-heading">Diensten & Tarieven</h1>
        <p className="text-center opacity-50 mb-16 italic text-sm">
          Zorgvuldigheid staat bij ons voorop. Wij accepteren de U-pas.
        </p>

        <div className="space-y-0">
          {diensten.map((d, i) => (
            <div
              key={d.title}
              className={`flex justify-between items-center py-8 ${
                i < diensten.length - 1 ? 'border-b border-[#374151]' : ''
              } group`}
            >
              <div>
                <h3 className="font-heading text-2xl text-gold mb-1 group-hover:text-gold-light transition-colors duration-300">
                  {d.title}
                </h3>
                <p className="text-sm opacity-50">{d.description}</p>
              </div>
              <div className="text-right">
                <a
                  href="tel:0681546043"
                  className="text-sm font-heading uppercase tracking-widest text-gold hover:opacity-80 transition-opacity"
                >
                  {d.price}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-navy-charcoal border border-[#374151] text-center">
          <p className="text-sm opacity-70">
            Wist u dat we gratis koffie en thee serveren terwijl u wacht of geknipt wordt?
          </p>
        </div>

        <div className="mt-8 p-8 bg-navy-charcoal border border-[#374151] text-center">
          <p className="text-sm opacity-70 mb-6">Neem contact op voor actuele prijzen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0681546043"
              className="bg-gold text-navy-deep font-heading font-bold px-10 py-3 uppercase tracking-wide transition-all duration-300 hover:opacity-90"
            >
              Bel 06 815 460 43
            </a>
            <a
              href="https://wa.me/31681546043"
              className="border border-textMain text-textMain font-heading font-bold px-10 py-3 uppercase tracking-wide transition-all duration-300 hover:bg-textMain hover:text-navy-deep"
            >
              WhatsApp ons
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
