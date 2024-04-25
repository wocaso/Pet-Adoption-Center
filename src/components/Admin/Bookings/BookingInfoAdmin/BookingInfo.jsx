import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./BookingInfo.css";


function BookingInfoAdmin() {
  const [mascotas, setMascotas] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    fetch("https://adoptaapp.pythonanywhere.com/candidatos")
      .then(response => response.json())
      .then(data => {
        // Aplicar filtro si hay algo en el input de búsqueda
        if (busqueda.trim() !== '') {
          const mascotasFiltradas = filtrarMascotas(data, busqueda);
          setMascotas(mascotasFiltradas);
        } else {
          setMascotas(data);
        }
      })
      .catch(error => console.error("Error fetching mascotas:", error));
  }, [busqueda]); // Dependencia añadida para que se ejecute cada vez que cambie la búsqueda


  // Función para filtrar mascotas según el criterio de búsqueda
  const filtrarMascotas = (mascotas, busqueda) => {
    return mascotas.filter(mascota =>
      mascota.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  return (
    <div id="BodyContainerAdmin">
      <div className="BodyContainerSection">
        <h1>Adopciones</h1>
        <div id="TableFunctions">
          <input 
            type="text" 
            placeholder="Buscar" 
            id="buscador" 
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
          />
          <div></div>
        </div>

        <table id="TableAdmin">
          <thead id="header">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Tamaño</th>
           
              <th>Género</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {mascotas.map(mascota => (
              <tr key={mascota.id}>
                <td>{mascota.id}</td>
                <td className="Name">
                  {mascota.nombre}
                  <span className="Functions">
                    <a onClick={() => handleEliminarMascota(mascota.id)} className="Delete">Eliminar</a>
                    <span className="FunctionsLine"></span>
                    <a href={`/Admin/Posts/EditPost/${mascota.id}`} className="Edit">Editar</a>
                  </span>
                </td>
                <td>{mascota.edad}</td>
                <td>{mascota.tamaño}</td>
               
                <td>{mascota.sexo}</td>
                <td><a href={`/Admin/Bookings/${mascota.id}`} className="Edit">Editar</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingInfoAdmin;
