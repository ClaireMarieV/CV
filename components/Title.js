import About from "./Resume";

const Header = () => (
  <section className="title">
    <div>
      <h1>3D Designer | Motion Designer 3D</h1>
    </div>
    <div>
      <p>
        Specialized in crafting stylized yet believable worlds, I blend visual
        storytelling, a strong sense of rhythm, and artistic direction.
        Currently studying graphic and motion design, I’m looking for my first
        opportunity—either in a studio or freelance—within the fields of luxury,
        advertising, or entertainment.
      </p>
      <ul>
        <li>
          <strong>SKILLS : </strong>
        </li>
        <li>
          TECHNICAL : Pre-production - Composition - Storyboarding - Programming
          - Monitoring Trends - Video Editing - Texturing & Shading -
          Storytelling visuel.
        </li>
        <li>
          SOFTWARES : Adobe Illustrator - Adobe After Effect - Blender -
          InDesign - Da Vinci Resolve
        </li>
        <li>
          SOFT SKILLS : Creativity - Sense of Aesthetics - Empathy - Autonomy -
          Meeting Deadlines
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
