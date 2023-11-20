const Resume = () => (
  <>
    <div className="resume">
      <h2>about me</h2>
      <p>
        I'm Claire and I am a freelance fullstack developer and UX/UI designer
        with several years of experience.
      </p>
      <p>
        During my freelancing career, I have worked on a wide range of projects,
        gaining expertise in front-end and back-end development. I am proficient
        in using TypeScript, React, Next.js, PHP, Prisma, and Figma.
      </p>
      <p></p>
    </div>

    <style jsx>{`
      .img {
        position: absolute;
        left: 7rem;
        top: 79rem;
        z-index: 0;
      }
      .img img {
        max-width: 11rem;
      }
    `}</style>
  </>
);

export default Resume;
