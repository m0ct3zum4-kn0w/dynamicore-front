import { createContext, useState } from 'react'

export const GlobalContext = createContext()

export function GlobalContextProvider( props ) {

    const [token, setToken] = useState(null)
    const [uid, setUid] = useState('')

    const createLogin = (token) => {
        sessionStorage.setItem('token', token );
        sessionStorage.setItem('token_type', 'Bearer' );
        setToken( token )
    }

    const checkLogin = () => {
        let bearer_token = sessionStorage.getItem('token')
        if( bearer_token ){
            setToken( bearer_token )
        }
    }

    return (
        <GlobalContext.Provider value={{
            token, createLogin, setToken, checkLogin, uid, setUid
        }}>
            {/* <Row className='justify-content-md-center align-items-center vh-100'> */}
                {props.children}
            {/* </Row> */}
        </GlobalContext.Provider>
    )
}