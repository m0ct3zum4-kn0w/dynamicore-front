import { useContext, useEffect, useState } from 'react';
import './App.css';
import { Main } from './components/Main'
import { GlobalContext } from './context/GlobalContext';

function App() {
  const {setToken} = useContext( GlobalContext )

  useEffect(() => {
    let bearer_token = sessionStorage.getItem('token')
    if( bearer_token ){
      setToken( bearer_token )
    }
  }, [setToken])

  return (<>
    <Main/>
  </>
  );
}

export default App;
