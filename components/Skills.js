const Skills = () => (
  <>
    <div className="competences">
      <section>
        <h2>SOFTWARE SKILLS</h2>
      </section>

      <ul className="card">
        <li>Illustrator</li>
        <li>Photoshop</li>
        <li>InDesign</li>
        <li>After Effects</li>
        <li>Blender</li>
        <li>Animate</li>
      </ul>
    </div>

    <style jsx>{`
      section {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      section > img {
        width: 5rem;
      }
    `}</style>
  </>
);
export default Skills;
