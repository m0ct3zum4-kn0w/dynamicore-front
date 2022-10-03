import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { GlobalContext } from '../../context/GlobalContext'
import Fetch from '../../utils/Request'

export function Delete({id}) {

    const {uid, setToken} = useContext( GlobalContext ) 

    const deleteContact = () => {
        Fetch.delete(`usuarios/${uid}/directorio/${id}`)
            .then( response => {
                if( response.result )
                    setToken( response.token )
            });
    }

    return <>
        <div className="d-grid mt-4">
            <Button variant="danger" onClick={() => deleteContact()}>
                Eliminar
            </Button>
        </div>
    </>
}