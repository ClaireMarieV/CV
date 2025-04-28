const Experiences = () => (
  <>
    <section>
      <div className="experiences">
        <section>
          <h2>Creative Work</h2>
        </section>
        <ul className="card-projects">
          <li>
            <h4>Icademie - 03.14.25 - 05.23.25</h4>
            <h3>Motion Designer and 2D/3D designer - Solo Project </h3>
            <ol className="project">
              <li>
                <span>
                  Designed and prepared 7 scenes in Blender and shots in 5 weeks
                  using Illustrator, After Effect and Blender, adhering to
                  animatic constraints.
                </span>
              </li>
              <li>
                <span>
                  Animated a 30 seconds sequence with Blender and After Effects.
                </span>
              </li>

              <li>
                <span>
                  Integrated graphic and audio elements into a structured
                  pipeline for optimized production.
                </span>
              </li>
            </ol>
            <ul className="achievements">
              <li>
                <h4>Significant achievements :</h4>
              </li>
              <li>
                Complete production of a 30-seconds animated title sequence in a
                solarpunk sci-fi universe, handled independently over 10 weeks.
                Created the full pre-production package (research, visual
                universe, storyboard, styleframes), followed by art direction,
                3D/2D animation, compositing, editing, and color grading.
                Multi-software pipeline including Blender (Eevee) for 3D
                animation, After Effects for 2D animation and compositing, and
                DaVinci Resolve for editing and grading. 7 scenes created, with
                3+ stylized transitions and full integration of HUD and motion
                design elements.
              </li>
            </ul>
          </li>
          <li>
            <h4>Icademie - 01.03.25 - 03.21.25</h4>
            <h3>Motion Designer and 3D designer - Solo Project </h3>
            <ol className="project">
              <li>
                <span>
                  Conceptualized, designed, and animated a 30 seconds animated
                  short video (thirty-second video) for social media from start
                  to finish.
                </span>
              </li>
              <li>
                <span>
                  Created 4 scenes in Blender, including over 40 animations in
                  total.
                </span>
              </li>
              <li>
                <span>
                  Created storyboards and style frames to plan the visual
                  direction in 1 week.
                </span>
              </li>
              <li>
                <span>
                  Designed and animated graphics using 3 softwares : Adobe
                  Illustrator, InDesign and Blender.
                </span>
              </li>
              <li>
                <span>
                  Edited sound design and synchronized animations for a polished
                  final result in 1 week.
                </span>
              </li>
              <li>
                <span>
                  Managed the entire creative pipeline, from ideation to final
                  rendering, in 3 months, for social media.
                </span>
              </li>
              <ul className="achievements">
                <li>
                  <h4>Significant achievements :</h4>
                </li>
                <li>
                  Since I had a tight deadline, to save time, I used Blender's
                  modifiers (Mirror, Subdivision Surface, Array) to speed up the
                  modeling process. I also employed procedural modeling
                  techniques to make adjustments without losing previous work
                  and adjusted the render samples in Cycles. For this, I used
                  denoising (OptiX, OpenImageDenoise) to achieve faster results
                  by reducing the sample count. I repeated the same object
                  multiple times to save time and improve efficiency. And
                  finally, I used pre-established libraries to quickly apply
                  consistent materials to my models. It reducing production time
                  by 30%.
                </li>
              </ul>
            </ol>
          </li>
        </ul>
      </div>

      <style jsx>{`
        section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .card-projects {
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          list-style: inside;
        }

        .project {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        ol {
          list-style: inside;
        }
        .achievements {
          padding: 0;
          width: 50vw;
        }
      `}</style>
    </section>
  </>
);

export default Experiences;
