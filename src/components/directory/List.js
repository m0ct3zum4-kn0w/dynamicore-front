import { Card, Row, Col, Form } from 'react-bootstrap'
import Fetch from '../../utils/Request'
import { GlobalContext } from '../../context/GlobalContext'
import { useContext, useEffect, useState } from 'react';
import { Item } from './Item'

export function List(){

    const {token, setUid} = useContext( GlobalContext )
    const [directory, setDirectory] = useState([])

    let jwt = atob(token.split(".")[1]);
        jwt = JSON.parse(jwt);

    useEffect(()=>{
        setUid( jwt.uid );
        Fetch.get(`usuarios/${jwt.uid}/directorio`)
            .then( data => {
                setDirectory( data[0] )
            });
    }, [token])

    return <Card className='h-100'>
        <Card.Body>
            <Row>
                {directory.map((contact) => (
                    <Item key={contact.id} contact={contact}/>
                ))}
            </Row>
        </Card.Body>
    </Card>
}