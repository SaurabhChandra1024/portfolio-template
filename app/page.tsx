const consultantsUrl = "https://druptoconsultants.com/"
const druptoLogoUrl =
  "https://res.cloudinary.com/db1iuag6s/image/upload/v1780993584/drupto_logo_without_bg2_vql6kd.png"

export default function Home() {
  return (
    <main className="redirect-page">
      <div className="redirect-glow redirect-glow-top" aria-hidden="true" />
      <div className="redirect-glow redirect-glow-bottom" aria-hidden="true" />

      <section className="redirect-content" aria-labelledby="page-title">
        <img className="redirect-logo" src={druptoLogoUrl} alt="Drupto Consultants" />

        <p className="redirect-kicker">Drupto Consultants</p>
        <h1 id="page-title">Discover what&apos;s next.</h1>
        <p className="redirect-description">
          Explore our latest work, services, and updates on the Drupto Consultants website.
        </p>

        <a className="redirect-button" href={consultantsUrl} rel="noreferrer">
          Visit Drupto Consultants
          <span className="redirect-arrow" aria-hidden="true">
            -&gt;
          </span>
        </a>

      </section>
    </main>
  )
}
