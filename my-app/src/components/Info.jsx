import './index.css';
import Card from 'react-bootstrap/Card';

function CicloSuperior(){
    return (
        <Card>
          <Card.Header>Bachiller Técnico con orientación en Informática</Card.Header>
          <Card.Body>
            <Card.Title>Ciclo Superior 2022 - 2024</Card.Title>
            <Card.Text>
                Con la eleccion mutua de la orientacion en Informática trabajamos juntos desde 2022 haciendo que 
                nos conozcamos en el ambiente laboral. Durante nuestro recorrido en la especializacion de informatica
                aprendimos: C#, Node, React, .NET, SQL, Photoshop y Illustrator.
            </Card.Text>
          </Card.Body>
        </Card>
      );
}

export default CicloSuperior;