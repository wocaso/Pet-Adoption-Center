import React from 'react';
import { useParams, Link } from 'react-router-dom'; 
import "./PerfilMascota.css";

function PerfilMascota() {
  const { id } = useParams(); 
  const idNum = parseInt(id, 10);
  
  let arrayMascotas = [
    { id:1,
      nombre: "Gaston",
      temperamento: "Jugueton",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    { id:2,
      nombre: "Lala",
      temperamento: "Fiel",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Macho",
      edad: "Adulto",
    },
    {
      id:3,
      nombre: "Roco",
      temperamento: "Docil",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      id:4,
      nombre: "Gaston",
      temperamento: "Jugueton",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      id:5,
      nombre: "Lala",
      temperamento: "Fiel",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      id:6,
      nombre: "Roco",
      temperamento: "Docil",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      id:7,
      nombre: "Gaston",
      temperamento: "Jugueton",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      id:8,
      nombre: "Lala",
      temperamento: "Fiel",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      id:9,
      nombre: "Roco",
      temperamento: "Docil",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      id:10,
      nombre: "Gaston",
      temperamento: "Jugueton",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      id:11,
      nombre: "Lala",
      temperamento: "Protector",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      id:12,
      nombre: "Roco",
      temperamento: "Docil",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      id:13,
      nombre: "Gaston",
      temperamento: "Jugueton",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {
      id:14,
      nombre: "Lala",
      temperamento: "Protector",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },
    {id: 15,
      nombre: "Roco",
      temperamento: "Docil",
      raza: "Mestizo",
      tamaño: "Pequeño",
      genero: "Hembra",
      edad: "Adulto",
    },

    
  ];

  let arrayPerfil = arrayMascotas.filter(mascota => mascota.id === idNum);

  const mascota = arrayPerfil[0];
 

  return (
    <section id='PerfilMascotaContainer'>
      <div id="PerfilMascota">
        <img id='MascotaImage' src="../Assets/PerroGolden.png" alt="" />
        <div id="MascotaInfo">
          <h1 id="MascotaName">{mascota.nombre} <span>8 años</span></h1>
          <ul id="MascotaInfoList">
            <li><p>Temperamento</p><p>{mascota.temperamento}</p></li>
            <li><p>Raza</p><p>{mascota.raza}</p></li>
            <li><p>Tamaño</p><p>{mascota.tamaño}</p></li>
            <li><p>Género</p><p>{mascota.genero}</p></li>
            <li><p>Edad</p><p>{mascota.edad}</p></li>
            <li><p>Color</p><p>{mascota.color}</p></li>
          </ul>
          <p id="MascotaDescripcion">La más serena, la que mejor se porta, la que te da cero problemas pero te llena de amor y paz, esa soy yo, Tengo 8 años, me porto divino, te espero pacientemente para escuchar tu día y aliviarte de todos los problemas, me llevo bien con todos, ¿me adoptás? Estoy castrada, vacunada y desparasitada</p>
          <Link to={`/perfil/${mascota.id}/contrato`}>
            <span id="BotonAdoptar">Quiero Adoptar <span className="corazon">	&#x2764;	</span> </span>
          </Link>
        </div>


      </div>

    </section>
  );
}

export default PerfilMascota;
