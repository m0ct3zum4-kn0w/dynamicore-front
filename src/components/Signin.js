import {Col, Card, Form, Button} from 'react-bootstrap'
import Fetch from '../utils/Request';
import Swal from 'sweetalert2'

function Signin () {

    const crearCuenta = (formCrearUsuario) => {
        if( !formCrearUsuario.checkValidity() ){
            formCrearUsuario.classList.add('was-validated')
            return false;
        }else formCrearUsuario.classList.remove('was-validated')

        let formData = new FormData( formCrearUsuario );
        Fetch.post('usuarios', formData)
            .then( response => {
                if( response.result )
                    Swal.fire("Enhorabuena", "Cuenta creada satisfactoriamente", 'success');
                else Swal.fire("Lo sentimos", "El nombre de usuario ya existe", 'warning');
            });
    }

    return <>
        <Col md={{span:3,offset:1}}>
            <Card className='shadow'>
                <Card.Body>
                    <h1 className='text-center mb-5'>Nuevo usuario</h1>
                    <Form>
                        <Form.Group controlId="signInForm">
                            <Form.Label>Nombre de Usuario</Form.Label>
                            <Form.Control type="email" placeholder="Coloca aquì tu nombre de usuario como correo" name="email" required/>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Escriba una contraseña" name="password" required/>
                            <div className="d-grid mt-4">
                                <Button variant="outline-primary" onClick={(e) => crearCuenta(e.target.closest('form'))}>
                                    Registrarme
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    </>
}

export default Signin