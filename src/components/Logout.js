import { useContext } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalContext'

export function Logout () {

    const {setToken} = useContext( GlobalContext )

    const logOut = () => {
        sessionStorage.clear()
        setToken("")
    }

    return <Col md={'auto'}>
        <div className="d-grid mt-4">
            <Button variant="warning" onClick={() => logOut()}>
                Cerrar cuenta
            </Button>
        </div>
    </Col>
}