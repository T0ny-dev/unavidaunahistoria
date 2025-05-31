import '../styles/cards.css';

const CampañaCard = ({ titulo, descripcion, fecha, estado }) => {
  return (
    <div className="card campaña-card">
      <div className="card-content">
        <div className="campaña-header">
          <h3 className="campaña-titulo">{titulo}</h3>
          <span className={`campaña-estado ${estado.toLowerCase()}`}>
            {estado}
          </span>
        </div>
        <p className="campaña-descripcion">{descripcion}</p>
        <p className="campaña-fecha">{fecha}</p>
        <a href={`/campañas/${titulo.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-primary">
          Ver más
        </a>
      </div>
    </div>
  );
};

export default CampañaCard; 