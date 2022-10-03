import { useContext, useState } from 'react'
import { Col, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { GlobalContext } from '../context/GlobalContext'
import Fetch from '../utils/Request'
import Swal from 'sweetalert2'

function Login() {

    const [validated, setValidated] = useState(false)

    const {createLogin} = useContext( GlobalContext )

    const logearme = ( loginForm ) => {
        let verify = loginForm.checkValidity()
        setValidated( verify )
        
        if( verify ){
            let formData = new FormData( loginForm );
            Fetch.post("login", formData ).then( result => {
                if( result.token )
                    createLogin( result.token );
                else Swal.fire("Lo sentimos", "La información de acceso es incorrecta", 'warning');
            });
        }
    }

    return <>
        <Col md={3} >
            <Card className='shadow'>
                <Card.Body>
                    <h1 className='text-center mb-5'>Usuarios registrados</h1>
                    <Form noValidate validated={validated}>
                        <Form.Group controlId="form-group-id">
                            <Form.Label>Nombre de Usuario </Form.Label>
                            <Form.Control type="email" placeholder="Correo electronico como usuario" name='email' required/>
                            <Form.Control.Feedback type="invalid">Please provide a valid entry.</Form.Control.Feedback>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" name="password" required/>
                        </Form.Group>
                        <div className="d-grid mt-4">
                            <Button variant="outline-primary" onClick={(e) => logearme(e.target.closest('form'))}>
                                Entrar
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    </>
}

export default Login