import { Card, Col, Form } from 'react-bootstrap'
import { Delete } from './Delete'

export function Item({contact}) {
    return <Col md={4} className="p-2">
        <Card>
            <Card.Body className='text-break'>
                <Form.Label>Nombre: {contact.nombre}</Form.Label>
                <Form.Label>Correo: {contact.correo}</Form.Label>
                <Form.Label>Telefono: {contact.telefono}</Form.Label>
                <Form.Label>Direccion: {contact.direccion}</Form.Label> 
                <Delete id={contact.id}/>
            </Card.Body>
        </Card>
    </Col>
}