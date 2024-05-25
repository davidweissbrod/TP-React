import Button from 'react-bootstrap/Button';
import Form from  'react-boootstrap/Form';

function FormContacto() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="name"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    );
}

export default FormContacto;