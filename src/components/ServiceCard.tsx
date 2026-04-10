interface ServiceCardProps {
  title: string;
  description: string;
  badge: string;
}

export default function ServiceCard({ title, description, badge }: ServiceCardProps) {
  return (
    <div className="bg-navy-charcoal border border-[#374151] p-10 transition-all duration-300 hover:border-gold">
      <h3 className="font-heading text-xl mb-4 text-gold">{title}</h3>
      <p className="text-sm opacity-60 mb-8">{description}</p>
      <span className="text-xs uppercase tracking-widest opacity-40">{badge}</span>
    </div>
  );
}
