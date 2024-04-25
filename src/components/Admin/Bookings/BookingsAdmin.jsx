import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function BookingsAdmin() {
  const [mascotas, setMascotas] = useState([]);
  const [candidatos, setCandidatos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    fetch("https://adoptaapp.pythonanywhere.com/candidatos")
      .then(response => response.json())
      .then(data => {
        // Aplicar filtro si hay algo en el input de búsqueda
        if (busqueda.trim() !== '') {
          const candidatosFiltradas = filtrarCandidatos(data, busqueda);
          setCandidatos(candidatosFiltradas);
        } else {
          setCandidatos(data);
        }
      })
      .catch(error => console.error("Error fetching mascotas:", error));
  }, [busqueda]); // Dependencia añadida para que se ejecute cada vez que cambie la búsqueda
  useEffect(() => {
    fetch("https://adoptaapp.pythonanywhere.com/mascotas")
      .then(response => response.json())
      .then(data => {
        // Aplicar filtro si hay algo en el input de búsqueda
        if (busqueda.trim() !== '') {
          const mascotasFiltradas = filtrarCandidatos(data, busqueda);
          setMascotas(mascotasFiltradas);
        } else {
          setMascotas(data);
        }
      })
      .catch(error => console.error("Error fetching mascotas:", error));
  }, [busqueda]); // Dependencia añadida para que se ejecute cada vez que cambie la búsqueda



  // Función para filtrar mascotas según el criterio de búsqueda
  const filtrarCandidatos = (candidatos, busqueda) => {
    return candidatos.filter(candidato =>
      candidato.nombreApellido.toLowerCase().includes(busqueda.toLowerCase())
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
              <th>Mascota</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Info</th>
           
       
            </tr>
          </thead>
          <tbody>
            {candidatos.map(candidato => (
              <tr key={candidato.id_mascota}>
                <td>Pepito</td>
                <td>{candidato.nombreApellido}</td>
                <td>{candidato.email}</td>
               
                <td><a href={`/Admin/Bookings/${candidato.id_mascota}`} className="Edit">Ver más</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingsAdmin;
