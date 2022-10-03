import { useContext } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import { GlobalContext } from '../../context/GlobalContext';
import Fetch from '../../utils/Request';
import { Logout } from '../Logout'
import Swal from 'sweetalert2'

function GuardarContacto() {

    const {uid, setToken, token} = useContext( GlobalContext )

    const saveContact = ( formContacto ) => {
        if( !formContacto.checkValidity() ){
            formContacto.classList.add('was-validated')
            return false;
        }else formContacto.classList.remove('was-validated')

        let formData = new FormData( formContacto );
        Fetch.post(`usuarios/${uid}/directorio`, formData)
            .then( response => {
                if( response.result ){
                    formContacto.reset()
                    setToken( response.token )
                    if( response.result )
                        Swal.fire("Enhorabuena", "Se registro nuevo contacto a tu directorio", 'success');
                }
            });
    }

    return <Col md={'auto'}>
        <div className="d-grid mt-4">
            <Button variant="dark" onClick={(e) => saveContact(e.target.closest('form'))}>
                Guardar
            </Button>
        </div>
    </Col>
}

export function Add() {
    return <>
        <Form>
            <Row>
                <Col md={6} >
                    <Form.Group controlId="contactPersonal">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="nombre" placeholder="Nombre del Contacto" required/>
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" name="correo" placeholder="Correo del contacto" required/>
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" name="telefono" placeholder="Teléfono"/>
                        <Form.Label>Celular</Form.Label>
                        <Form.Control type="text" name="celular" placeholder="Celular" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="contactPersonal">
                        <Form.Label>Alias</Form.Label>
                        <Form.Control type="text" name="alias" placeholder="Alias del contacto" />
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" name="direccion" placeholder="Dirección del Contacto" />
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control type="text" name="ciudad" placeholder="Ciudad del contacto" />
                        <Form.Label>Estado</Form.Label>
                        <Form.Control type="text" name="estado" placeholder="Estado del contacto" />
                    </Form.Group>
                </Col>
                <Row className='justify-content-center'>
                    <Logout/>
                    <GuardarContacto/>
                </Row>
            </Row>
        </Form>
    </>
}