import './index.css';
import Card from 'react-bootstrap/Card';

function EducacionBasico() {
    return (
      <Card>
        <Card.Header>Escuela ORT</Card.Header>
        <Card.Body>
          <Card.Title>Ciclo Basico 2019/2020 - 2021</Card.Title>
          <Card.Text>
                Durante este periodo, de primer año a segundo, nos enseñaron las bases de los entendiminetos basicos para nuestra eleccion
                en segundo año a la especializacion. En nuestro caso la materia "Tecnologia" que vimos durante este ciclo nos ayudo
                a entender en los primeros años de la especialidad de informatica los conceptos vistos.   
          </Card.Text> 
        </Card.Body>
      </Card>
    );
  }
  
  export default EducacionBasico;