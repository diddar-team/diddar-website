import { Footer, Header } from '@/components/site-shell';

export default function Waitlist() {
  return (
    <main>
      <Header />
      <section className="waitlist-page page-wrap">
        <div className="waitlist-intro">
          <p className="eyebrow"><span /> THE FIRST STEP</p>
          <h1>Tell us what<br /><em>you want to build.</em></h1>
          <p>We are putting together the first TechUno cohorts around the people who are ready to learn. Share your direction and we will keep you close to what is next.</p>
          <div className="waitlist-note"><span>✦</span><p><strong>Your answers shape the first cohort.</strong><br />We use interest to decide which stacks open first and which trainers we invite.</p></div>
        </div>
        <form className="waitlist-form" action="https://forms.google.com/" method="get">
          <label>What should we call you?<input name="name" placeholder="Your full name" required /></label>
          <label>Where can we reach you?<input name="email" type="email" placeholder="you@example.com" required /></label>
          <fieldset><legend>Which path feels right? <small>Select all that apply</small></legend><div className="choice-grid"><label><input type="checkbox" name="track" value="frontend" /> <span>Frontend</span></label><label><input type="checkbox" name="track" value="backend" /> <span>Backend</span></label><label><input type="checkbox" name="track" value="builder" /> <span>Builder path</span></label><label><input type="checkbox" name="track" value="cloud" /> <span>Cloud & DevOps</span></label></div></fieldset>
          <fieldset><legend>What is your current level?</legend><div className="choice-grid three"><label><input type="radio" name="level" value="beginner" required /> <span>Starting out</span></label><label><input type="radio" name="level" value="intermediate" /> <span>Some experience</span></label><label><input type="radio" name="level" value="advanced" /> <span>Very confident</span></label></div></fieldset>
          <label>What are you hoping to change? <small>Optional</small><textarea name="goal" placeholder="A new role, a product idea, more confidence..." rows={3} /></label>
          <button className="button" type="submit">Save my spot <span aria-hidden="true">↗</span></button>
          <p className="form-footnote">By joining, you agree to receive occasional TechUno updates. No noise, just useful news.</p>
        </form>
      </section>
      <Footer />
    </main>
  );
}
