const foundationChecks = [
  'Product specifications are versioned in the repository.',
  'Design values come from semantic tokens.',
  'Classification logic stays independent from the interface.',
  'Korean and English experiences share one product system.'
] as const;

export default function HomePage() {
  return (
    <main className="foundation-shell">
      <section className="foundation-card" aria-labelledby="foundation-title">
        <p className="eyebrow">BODY32 · Foundation</p>
        <h1 id="foundation-title">Decode Your Body.<br />Balance Your Life.</h1>
        <p className="lede">
          동양 철학에서 영감을 받은 웰니스 성향 경험을 정석대로 구축하고 있습니다.
        </p>
        <ul className="foundation-list">
          {foundationChecks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="status" role="status">
          Application foundation ready
        </p>
      </section>
    </main>
  );
}
