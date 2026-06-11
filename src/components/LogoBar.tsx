const CLIENT_LOGOS = [
  'Portfolio',
  'easyPet',
  'JISI',
  'Talento',
  'SIB',
  'Client',
  'Partner',
]

export function LogoBar() {
  return (
    <section className="logo-bar" aria-label="Client logos">
      <div className="logo-bar__track">
        {CLIENT_LOGOS.map((name) => (
          <span key={name} className="logo-bar__item">
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
