import { ArrowLink, Footer, Header } from '@/components/site-shell';

const tracks = [
  {
    number: '01',
    title: 'Frontend engineering',
    copy: 'Build interfaces people remember with HTML, CSS, JavaScript, React and modern product thinking.',
    tags: ['Beginner', 'Intermediate'],
    color: 'coral',
  },
  {
    number: '02',
    title: 'Backend engineering',
    copy: 'Design reliable systems, APIs and databases that power products from the first request to scale.',
    tags: ['Beginner', 'Intermediate'],
    color: 'purple',
  },
  {
    number: '03',
    title: 'The builder path',
    copy: 'A practical route through the stack for curious beginners ready to turn ideas into working products.',
    tags: ['Beginner'],
    color: 'gold',
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero page-wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> THE NEXT COHORT STARTS HERE
          </p>
          <h1>
            Learn the skills.
            <br />
            <em>Change the story.</em>
          </h1>
          <p className="hero-description">
            Practical, human-led tech training for people ready to make a bigger
            move. Choose your path, find your people, and build what comes next.
          </p>
          <div className="hero-actions">
            <a className="button" href="/waitlist">
              Join the waitlist <span aria-hidden="true">↗</span>
            </a>
            <ArrowLink href="#how-it-works">See how it works</ArrowLink>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack">
              <span>J</span>
              <span>M</span>
              <span>A</span>
              <span>+</span>
            </div>
            <p>
              <strong>Be first in line.</strong>
              <br />
              Join a growing community of builders.
            </p>
          </div>
        </div>
        <div
          className="hero-art"
          aria-label="Abstract illustration of connected learning paths"
        >
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-core">
            T<span>U</span>
          </div>
          <div className="art-label label-top">
            skills
            <br />
            <b>→ opportunity</b>
          </div>
          <div className="art-label label-bottom">
            learn in public
            <br />
            <b>build with purpose</b>
          </div>
          <span className="art-dot dot-one" />
          <span className="art-dot dot-two" />
          <span className="art-dot dot-three" />
        </div>
      </section>
      <section className="marquee" aria-label="TechUno values">
        <div>
          FRONTEND <span>✦</span> BACKEND <span>✦</span> CLOUD <span>✦</span>{' '}
          PRODUCT <span>✦</span> CAREER GROWTH <span>✦</span>
        </div>
      </section>
      <section className="section page-wrap" id="tracks">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FIND YOUR EDGE</p>
            <h2>
              Start where you are.
              <br />
              <em>Go further than you planned.</em>
            </h2>
          </div>
          <ArrowLink href="/waitlist">Explore all tracks</ArrowLink>
        </div>
        <div className="track-grid">
          {tracks.map((track) => (
            <article className={`track-card ${track.color}`} key={track.number}>
              <div className="track-top">
                <span>{track.number}</span>
                <span className="track-arrow">↗</span>
              </div>
              <h3>{track.title}</h3>
              <p>{track.copy}</p>
              <div className="tag-row">
                {track.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="split-section page-wrap" id="how-it-works">
        <div className="split-art">
          <span className="scribble">
            your
            <br />
            move
          </span>
          <div className="step-number">01</div>
          <div className="step-circle">→</div>
        </div>
        <div className="split-copy">
          <p className="eyebrow">NO GUESSWORK</p>
          <h2>
            A clearer way to
            <br />
            <em>learn tech.</em>
          </h2>
          <p>
            We are shaping each cohort around real demand. Tell us what you want
            to learn, and we will bring together the right curriculum, community
            and trainers to help you finish what you start.
          </p>
          <ol className="steps">
            <li>
              <b>01</b>
              <span>
                <strong>Tell us your direction</strong>
                <br />
                Choose a stack and your current level.
              </span>
            </li>
            <li>
              <b>02</b>
              <span>
                <strong>We shape the cohort</strong>
                <br />
                We match demand with the right trainers.
              </span>
            </li>
            <li>
              <b>03</b>
              <span>
                <strong>You start building</strong>
                <br />
                Get the launch details and make your move.
              </span>
            </li>
          </ol>
          <ArrowLink href="/waitlist">Tell us what you want to learn</ArrowLink>
        </div>
      </section>
      <section className="quote-band page-wrap" id="about">
        <p className="eyebrow">WHY TECHUNO</p>
        <blockquote>
          “You do not need a perfect background.
          <br />
          <em>You need a place to begin.</em>”
        </blockquote>
        <p className="quote-note">
          Learning is better when it feels possible, practical and shared.
        </p>
      </section>
      <section className="faq-section section page-wrap" id="faq">
        <div>
          <p className="eyebrow">GOOD QUESTIONS</p>
          <h2>
            Before you
            <br />
            <em>jump in.</em>
          </h2>
        </div>
        <div className="faq-list">
          <details open>
            <summary>What is TechUno?</summary>
            <p>
              TechUno is a practical bootcamp community helping people build
              in-demand technology skills with guidance from experienced
              practitioners.
            </p>
          </details>
          <details>
            <summary>Which technologies will be available?</summary>
            <p>
              We are starting with frontend, backend and builder pathways. The
              waitlist helps us prioritize the next tracks based on real
              interest.
            </p>
          </details>
          <details>
            <summary>Do I need experience to join?</summary>
            <p>
              No. You can join as a complete beginner or choose an intermediate
              track if you already have a foundation.
            </p>
          </details>
          <details>
            <summary>When does training begin?</summary>
            <p>
              We are using waitlist demand to shape the first cohort. Join now
              and we will share launch updates as the details become available.
            </p>
          </details>
        </div>
      </section>
      <section className="cta-band page-wrap">
        <div>
          <p className="eyebrow">YOUR NEXT CHAPTER</p>
          <h2>
            Make room for
            <br />
            <em>what is next.</em>
          </h2>
        </div>
        <div>
          <p>
            Tell us where you want to go. We will let you know when the right
            path opens.
          </p>
          <a className="button button-light" href="/waitlist">
            Join the waitlist <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
