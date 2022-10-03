import { Container } from 'react-bootstrap';
import Login from './Login'
import Signin from './Signin'
import { Content } from './directory/Content'
import { Row } from 'react-bootstrap'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export function Main() {
  const {token} = useContext( GlobalContext )

  return <Container className='vh-100' style={{background : '#e9ecef'}} fluid>
    {token ? <Row className="justify-content-md-center vh-100">
      <Content/>
    </Row> : <Row className="justify-content-md-center align-items-center vh-100">
      <Login/>
      <Signin/>
    </Row>}
  </Container>
}