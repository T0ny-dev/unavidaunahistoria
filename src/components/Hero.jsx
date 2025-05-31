import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <h1 className="hero-title">#Juntos Podemos</h1>
        <p className="hero-description">
          Una Vida Una Historia A.C. – Organización sin fines de lucro dedicada a crear proyectos para grupos vulnerables en Parral, Chihuahua.
        </p>
        <div className="hero-buttons">
          <a href="/colaborar" className="btn btn-primary">Colaborar</a>
          <a href="/donar" className="btn btn-secondary">Donar</a>
          <a href="/voluntariado" className="btn btn-primary">Voluntariado</a>
          <a href="/campañas" className="btn btn-secondary">Campañas</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 