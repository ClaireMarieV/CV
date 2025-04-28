import About from "./Resume";

const Header = () => (
  <section className="title">
    <div>
      <h1>Graphic Designer</h1>
    </div>
    <div className="resume">
      <p>
        Creative and detail-oriented graphic designer with a passion for
        minimalist, impactful visual communication. Skilled in Adobe Creative
        Suite (Illustrator, Photoshop, InDesign) with a strong focus on
        branding, typography, and layout design. Seeking to bring fresh and
        effective visual solutions to a forward-thinking studio.
      </p>
      <ul>
        <li>
          <strong>SKILLS : </strong>
        </li>
        <li>
          TECHNICAL SKILLS : Visual composition - Color theory - Typography
          -Layout design - Branding and visual identity - Monitoring Trends -
          Vector illustration creation - Web design- Storytelling visuel.
        </li>
        <li>
          SOFTWARES : Adobe Illustrator (vector design, logos, illustrations) -
          Adobe After Effect - Blender - Adobe InDesign (layout design:
          magazines, brochures, books) - Figma (collaborative and UI/UX
          design)Figma (collaborative and UI/UX design) - After Effects (if you
          do motion design or simple animations)
        </li>
        <li>
          SOFT SKILLS : Creativity - Strong aesthetics of sense - Attention to
          detail - Autonomy - Meeting Deadlines - Time management - Curiosity
          and creative awareness (keeping up with design trends) - Good
          communication (explaining design choices) - Openness to feedback
        </li>
      </ul>
    </div>

    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        max-width: 50vw;
        width: 100%;
        margin: auto;
        gap: 2rem;
      }

      .title > div:nth-child(1) {
        text-align: center;
      }
      .title > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .title ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0;
      }
    `}</style>
  </section>
);

export default Header;
