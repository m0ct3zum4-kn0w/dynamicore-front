import { Add } from './Add'
import { List } from './List'

import { Row, Col, Card} from 'react-bootstrap'

export function Content () {
    return <>
        <Row className='justify-content-center mt-5'>
            <Col md={4} style={{maxHeight: 0}}>
                <Card>
                    <Card.Body className="shadow">
                        <Add/> 
                    </Card.Body>
                </Card>
            </Col>
            <Col md={8} className="pb-5">
                <List/>
            </Col>
        </Row>
    </>
}