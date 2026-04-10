interface ReviewCardProps {
  review: string;
  name: string;
}

export default function ReviewCard({ review, name }: ReviewCardProps) {
  return (
    <div className="bg-navy-charcoal border border-[#374151] p-8 flex flex-col justify-between">
      <div>
        <div className="text-gold mb-4 text-lg tracking-widest">★★★★★</div>
        <p className="italic opacity-70 mb-6 text-sm leading-relaxed">"{review}"</p>
      </div>
      <div className="text-gold text-xs font-heading font-bold uppercase tracking-widest">— {name}</div>
    </div>
  );
}
