import '../styles/cards.css';

const TestimonioCard = ({ nombre, testimonio, rol }) => {
  return (
    <div className="card testimonio-card">
      <div className="card-content">
        <p className="testimonio-texto">{testimonio}</p>
        <div className="testimonio-info">
          <h3 className="testimonio-nombre">{nombre}</h3>
          <p className="testimonio-rol">{rol}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonioCard; 