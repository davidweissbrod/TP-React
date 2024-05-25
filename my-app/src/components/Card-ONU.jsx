import './index.css';
import Card from 'react-bootstrap/Card';

function CardONU() {
    return (
      <Card>
        <Card.Header>Taller de ONU</Card.Header>
        <Card.Body>
          <Card.Title>ONU</Card.Title>
          <Card.Text>
            El modelo ONU es un conjunto de distintas camaras de ONU, asi estaban asamblea general, consejo de seguridad, derechos humanos,etc.
            En el modelo te dan un cierto pais y una camara en donde cada uno tiene que representar los ideales y opiniones de ese pais
            sobre el tema de la camara que le toca. Ambos participamos en la camara de derechos humanos, David representando a Irlanda
            y Ian representando a Venezuela. Tambien ambos fuimos mencionados de manera escrita y a Ian lo entrevistaron miembros de ONU.  
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default CardONU;