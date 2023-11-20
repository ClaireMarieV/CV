const Resume = () => (
  <>
    <div className="resume">
      <h2>about</h2>
      <p>
        Je m'appelle Claire et je suis développeuse fullstack - UX/UI designer.
      </p>
      <p>
        J'ai appris au travers de mes formations et expériences une méthodologie
        qui va de l'idéation au prototypage.
      </p>
      <p>
        Pour moi, Le développement front accompagne le design autant que le
        développement back en se posant au centre et se basant sur la
        connaissance des comportements, émotions et attentes de l’utilisateur
        afin de rendre accessible, agréable et interactif un produit ou service.
        Ces domaines regroupent logique, analyse et créativité; c'est pourquoi
        j'aime pouvoir travailler sur l'ux/ui design et le développement de
        sites web.
      </p>
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
