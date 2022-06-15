import React, { useState } from 'react';
import data from '../assets/data/data.json';
import { Link } from 'react-router-dom';



export default function Formulario() {
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [usuario, setUsuario] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [error, setError] = useState('');

    function format(value) {
        var num = value.replace(/\./g, '');
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            num = num.split('').reverse().join('').replace(/^[.]/, '');
            value = num;
        }

        else {

            value = value.replace(/[^\d.]*/g, '');

        }

        if ((value === '') && (value.length < 10 || value.length > 14)) {
            setError('Solamente ingresar numeros')
        }
        else {
            if (value.length < 10 || value.length > 14) {
                setError('El numero de documento debe tener entre 8 y 11 digitos')
            }
            else {
                setError('')
            }
        }



        setNumeroDocumento(value);
    }

    const handleTipoDocumento = (e) => {
        setTipoDocumento(e.target.value);
    }


    const handleBuscar = (e) => {
        e.preventDefault();

        setUsuario(data.find(usuario => usuario.numeroDocumento === numeroDocumento));
        if (!usuario) {
            setError('El numero de documento no existe');
        }
        else {
            setError('');
        }

        //setNumeroDocumento(''); // limpia el campo de numero de documento
    }

    return (

        <div className="container">
            <div className="col-md-6 me-auto ms-auto" > 
                {!error ? null : <span>{error}</span>}

                <form class="mb-3" onSubmit={handleBuscar}>

                    <div class="form-group mb-2">
                        <label>
                            Tipo de documento:
                        </label>

                        <select class="form-select" aria-label="Default select example" onChange={handleTipoDocumento}>
                            <option selected>Seleccione un tipo de documento</option>
                            <option value="Pasaporte">Pasaporte</option>
                            <option value="Cedula">Cedula</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>
                            Número de documento:
                        </label>
                        <input class="form-control" type="text" value={numeroDocumento} onChange={(e) => format(e.target.value)} />
                    </div>
                    <br />

                    {/* <div class="d-grid gap-2 col-4 mx-auto"> */}
                    <Link to={`/infoBasica/${tipoDocumento}/${numeroDocumento}`}>
                        <button type="button" class="btn btn-lg btn-primary "  disabled={!((tipoDocumento === 'Cedula' || tipoDocumento === 'Pasaporte') && numeroDocumento && error === '')}>Buscar</button>
                    </Link>
                    {/* </div> */}                 

                </form>
                

                <div >
                    <ul>

                        {/* {usuario ? <Link to={`/infoBasica/${usuario.numeroDocumento}`}>{usuario.nombre} {usuario.apellido}</Link> : null} */}

                        {/* {usuario ? <li>{usuario.nombre} {usuario.apellido}</li> : null} */}
                    </ul>
                </div>

            </div>

        </div>
    );
}























































