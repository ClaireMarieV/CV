const Resume = () => (
  <>
    <div className="img">
      <img src="/svg/pivoineYellow.svg" />
    </div>
    <div className="resume">
      <h2>resume</h2>
      <p>
        Je m'appelle Claire et je suis aujourd'hui freelance developpeuse
        Fullstack - UX/UI Designer.
      </p>
      <p>
        J'ai appris au travers de mes formations et experiences une methodologie
        qui va de l'ideation au prototypage.
      </p>
      <p>
      Si l’ UX/UI design est du domaine de la psychologie tandis que l’ergonomie et le développement sont plutôt de l'ordre du technique, j’ai rapidement appris que l’un n’allait pas sans l’autre.  Pour moi, Le développement front accompagne le design autant que le développement back en se posant au centre et se  basant sur la connaissance des comportements, émotions et attentes de l’utilisateur afin de rendre accessible, agréable et interactif un produit ou service.
Ce domaine regroupe donc logique, analyse et créativité. 

      </p>
    </div>

    <style jsx>{`
      .img {
        position: absolute;
        left: 7rem;
        top: 81rem;
        z-index: 0;
      }
      .img img {
        max-width: 11rem;
      }
    `}</style>
  </>
);

export default Resume;
