export default function StrengthCard({ strength }) {
  const Icon = strength.icon;
  const isOrange = strength.accent === "orange";

  return (
    <article className="advantage-card motion-critical group p-6">
      <div className="advantage-card__content">
        <div className="flex items-start justify-between gap-4">
          <span
            className={`grid h-12 w-12 place-items-center rounded-2xl ${
              isOrange ? "bg-motion/10 text-motion" : "bg-harmony/10 text-harmony"
            }`}
          >
            <Icon size={22} />
          </span>
          <span className={`mt-2 h-px w-16 ${isOrange ? "bg-motion" : "bg-harmony"}`} />
        </div>
        <h3 className="mt-7 text-2xl font-bold text-ink">{strength.title}</h3>
        <p className="mt-2 text-sm font-semibold text-harmony">{strength.english}</p>
        <p className="mt-5 text-base leading-8 text-muted">{strength.description}</p>
      </div>
    </article>
  );
}
