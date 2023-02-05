import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DataList.css'
const DataList = () => {
    
    const [datos, setDatos] = useState([]);
    const [seleccion, setSeleccion] = useState("");
    const [id, setId] = useState("1");
    const [opciones, setOpciones] = useState([]);
    const [error, setError] = useState(false);
    const [informacion, setInformacion] = useState({})


    useEffect((e) => {
        axios.get('https://swapi.dev/api/')
        .then(response => response.data)
        .then(result => {
            let resultList = []
    
            for (const [key, value] of Object.entries(result)) {
                resultList.push({ label: key, url: value })
            }
            setOpciones(resultList)
            setSeleccion(resultList[0].url)
        })
        .catch(error => {
            console.log(error);
            setError(true);
        })
    }, [])
    
    useEffect(() => {
        console.log(seleccion);
    }, [seleccion])

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(seleccion);
        let url = seleccion + id;
        console.log(url);
        axios.get(url)
        .then(response => response.data)
        .then(result => {
            console.log(`Se establecio la conexion correctamente! con ${url}`);
            setError(false);
            if (seleccion.includes(seleccion)) {
                console.log(result)
                setInformacion(result);
                console.log(informacion.rotation_period)
            }
        })
        .catch(error => {
            console.log(error);
            setError(true);
        })

        }

  return (
    <div className='container'>
        <div className='form-container'>
            <div>
                <form onSubmit={handleSearch} className='formularioDatos'>
                    <select selected={seleccion} onChange={(e) => setSeleccion(e.target.value)}>
                    {
                        opciones.map((item, index) =>
                            <option key={item.label + index} value={item.url}>{item.label}</option>)
                    }
                    </select>
                    <label>
                        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
                    </label>
                    <button type='submit' className='btn'>Buscar Datos</button>
                </form>
                <div>
                    {
                        datos.map((dato, indice)=> <li key={indice}>{dato}</li>) //mostrar solo el name del result obtenido en el response si usamos llave podemos agarrar dos cosas, modificando el map y ponerle name, planeta.dato que queramos por ej planeta.population se pone planeta.name y - planeta.population en ese caso ocupamos el objeto con el nombre que le pusimos planeta es el objeto y name la clave, se obvia el valor por que ya se declara
                    }

                </div>
            </div>
        </div>
        <div>
            <div className='informacionDatos'></div>
                {
                    informacion.name?
                <div className='dates'>
                    Name: {informacion.name}
                </div> :
                ''
                }
                {
                    informacion.height?
                <div className='dates'>
                    Height: {informacion.height}
                </div> :
                ''
                }
                {
                    informacion.hair_color?
                <div className='dates'>
                Hair Color: {informacion.hair_color}
                </div> :
                ''
                }

                {
                    informacion.skin_color?
                <div className='dates'>
                    Skin Color: {informacion.skin_color}
                </div> :
                ''                   

                }
                {
                informacion.rotation_period?
                <div className='dates'>
                    Rotation Period: {informacion.rotation_period}
                </div> :
                ''
                }
                {
                    informacion.orbital_period?
                <div className='dates'>
                    Orbital Period: {informacion.orbital_period}
                </div> :
                ''
                }
                {
                    informacion.classification?
                <div className='dates'>
                    Classification: {informacion.classification}
                </div>:
                ''
                }

                {
                    informacion.designation?
                <div className='dates'>
                    Designation: {informacion.designation}
                </div>:
                ''
                }

                {
                    informacion.model?
                <div className='dates'>
                    Model: {informacion.model}
                </div>:
                ''      
                }

                {
                    informacion.manufacturer?
                <div className='dates'>
                    Manufacturer: {informacion.manufacturer}
                </div>:
                ''
                }

                {
                    informacion.cost_in_credit?
                <div className='dates'>
                    Cost: {informacion.cost_in_credit}
                </div>:
                ''
                }

                {
                    informacion.tittle?
                <div className='dates'>
                    Tittle: {informacion.tittle}
                </div>:
                ''
                }

                {
                    informacion.episode_id?
                <div className='dates'>
                    Episode Id: {informacion.episode_id}
                </div>:
                ''
                }
                {
                    informacion.diameter?
                <div className='dates'>
                    Dimeter: {informacion.diameter}
                </div>:
                ''
                }
                {
                    informacion.director?
                <div className='dates'>
                    Director: {informacion.director}
                </div>:
                ''
                }
                {
                    informacion.producer?
                <div className='dates'>
                    Producer: {informacion.producer}
                </div>:
                ''
                }
                {
                    informacion.release_date?
                <div className='dates'>
                    Release Date: {informacion.release_date}
                </div>:
                ''
                }
                {
                    informacion.cargo_capacity?
                <div className='dates'>
                    Cargo Capacity: {informacion.cargo_capacity}
                </div>:
                ''
                }
            </div>
        </div>
  )
}

export default DataList;