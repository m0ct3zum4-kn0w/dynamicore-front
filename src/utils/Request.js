class Fetch{

    __construct() {
        // Constructor de la clase Fetch para tratar la salida y entrada de información del Backend
    }

    static post (endpoint, params) {
        let headers = {
            'Content-Type' : 'application/json'
        };

        let token = sessionStorage.getItem('token');

        if( token ){
            headers.Authorization = `Bearer ${token}`;
        }

        let body = {},
            fullURL = `https://dynami-test.herokuapp.com/api/v1/${endpoint}`;

        if( FormData.prototype.isPrototypeOf( params ) ){
            body = {...body, ...Object.fromEntries( params )};
        }else body = {...body, ...params};

        return new Promise((resolve) => {
            fetch( fullURL, {
                method : 'POST',
                body : JSON.stringify( body ),
                credentials : 'include',
                headers
            }).then( response => {
                resolve( response.json() || {'result' : response.statusText })
            }).catch( error => {
                let messageError = `Error al procesar el endpoint ${fullURL}`;
                console.error( messageError );
                resolve({'result' : messageError});
            });
        });
    }

    static get (endpoint){
        let headers = {
            'Accept' : 'json'
        };

        let token = sessionStorage.getItem('token');

        if( token ){
            headers.Authorization = `Bearer ${token}`;
        }

        let fullURL = `https://dynami-test.herokuapp.com/api/v1/${endpoint}`;
        return new Promise((resolve) => {
            fetch( fullURL, {
                method : 'GET',
                credentials : 'include',
                headers
            }).then( response => {
                resolve( response.json() || {'result' : response.statusText })
            }).catch( error => {
                let messageError = `Error al procesar el endpoint ${fullURL}`;
                console.error( messageError );
                resolve({'result' : messageError});
            });
        });
    }

    static delete (endpoint){
        let headers = {
            'Accept' : 'json'
        };

        let token = sessionStorage.getItem('token');

        if( token ){
            headers.Authorization = `Bearer ${token}`;
        }

        let fullURL = `https://dynami-test.herokuapp.com/api/v1/${endpoint}`;
        return new Promise((resolve) => {
            fetch( fullURL, {
                method : 'DELETE',
                credentials : 'include',
                headers
            }).then( response => {
                resolve( response.json() || {'result' : response.statusText })
            }).catch( error => {
                let messageError = `Error al procesar el endpoint ${fullURL}`;
                console.error( messageError );
                resolve({'result' : messageError});
            });
        });
    }
}

export default Fetch