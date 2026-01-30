export default function Home() {
  return (
    <>
      <nav className="page-nav" aria-label="Page sections">
        <ul>
          <li><a href="#story">Story</a></li>
          <li><a href="#date">Date & Time</a></li>
          <li><a href="#hotel">Hotel</a></li>
          <li><a href="#activities">Activities</a></li>
          <li><a href="#dress-code">Dress Code</a></li>
          <li><a href="#planning">Planning</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>The Hangover 4.0</h1>
        <p className="tagline">Bachelor party — Yuta</p>
      </header>

      <section id="story" className="story-section" aria-labelledby="story-heading">
        <h2 id="story-heading" className="section-title">Our story</h2>
        <p>
          [Add your friendship story and Yuta&apos;s life here. How you met, key moments, why this weekend matters.]
        </p>
      </section>

      <section id="logistics" className="logistics-section" aria-labelledby="logistics-heading">
        <h2 id="logistics-heading" className="section-title">Practical info</h2>

        <div id="date" className="subsection">
          <h3>Date & time</h3>
          <p>[Add date and time of the bachelor party.]</p>
        </div>

        <div id="hotel" className="subsection">
          <h3>Hotel</h3>
          <p>[Add hotel name, address, booking details.]</p>
        </div>

        <div id="activities" className="subsection">
          <h3>Activities</h3>
          <p>[Add planned activities and schedule.]</p>
        </div>

        <div id="dress-code" className="subsection">
          <h3>Dress code</h3>
          <p>[Add dress code for the weekend.]</p>
        </div>

        <div id="planning" className="subsection">
          <h3>Planning</h3>
          <p>[Add any other planning info: transport, checklist, contacts.]</p>
        </div>
      </section>
    </>
  );
}
