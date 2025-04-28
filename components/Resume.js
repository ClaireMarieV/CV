const Resume = () => (
  <>
    <div className="resume">
      <h2>hello!</h2>

      <p>
        Tout au long de ma carrière de freelance, j'ai collaboré sur divers
        projets, développant une expertise à la fois en front-end et en
        back-end. Je maitrise React, Prisma et Figma. Mon fort intérêt pour le
        design vient également enichir mes compétences.
      </p>
      <p></p>
    </div>

    <style jsx>{`
      .resume {
        width: 20rem;
      }
      .resume > p {
        font-style: italic;
      }
    `}</style>
  </>
);

export default Resume;
