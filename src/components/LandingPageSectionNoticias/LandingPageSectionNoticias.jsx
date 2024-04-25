import React from "react";
import "./LandingPageSectionNoticias.css";
import { useParams, Link } from 'react-router-dom'; 

function LandingPageSectionNoticias() {
  const { nombre } = useParams(); 
  
  let arrayNoticias = [
    {
      id: 1,
      titulo: "Conoce la historia de Max",
      subtitulo: "Max, un perro senior, encontró su hogar en una bella familia.",
      body: "Mediano",
      img: "/noticia1.png",
    },
    {
      id: 2,
      titulo: "Cómo se debe de cortar las uñas a los gatos",
      subtitulo: "Aquí te enseñamos!",
      body: "Mediano",
      img: "/noticia2.png",
    },
    {
      id: 3,
      titulo: "Campaña de esterilización en todo el país",
      subtitulo: "Prepárate para esterilizar a tu mascota, del 10 al 15 de Mayo completamente gratis.",
      body: "Mediano",
      img: "/noticia3.jpeg",
    },
    {
      id: 4,
      titulo: "Científico descubre vacuna que extendería la vida de los gatos hasta el doble.",
      subtitulo: "Esta sería la causa por la cuál los gatos no superan más de los 15 años de vida...",
      body: "Mediano",
      img: "/noticia4.jpeg",
    },
  ];

  return (
    <section className="container-noticias">
      <div className="container-section-noticias-title">
        <h2>noticias / comunicados</h2>
      </div>

      <div className="noticias">
        {/* Left */}
        <div className="container-left">
          {arrayNoticias.slice(0, 2).map(noticia => (
            <div className="noticia" key={noticia.id}>
              <Link to={`/noticia/${noticia.id}`}>
                <div className="container-imagen" style={{ backgroundImage: `url(/Assets/${noticia.img})` }}></div>
              </Link>
              <div className="noticia-container-text">
                <div className="noticia-container-text-title">
                  <h2>{noticia.titulo}</h2>
                </div>
                <div className="noticia-container-parrafo">
                  <p>{noticia.subtitulo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="container-right">
         
          <div className="noticia1" key={arrayNoticias[2].id}>
            <Link to={`/noticia/${arrayNoticias[2].id}`}>
              <div className="container-imagen" style={{ backgroundImage: `url(/Assets/${arrayNoticias[2].img})` }}></div>
            </Link>

            <div className="noticia-container-text">
              <div className="noticia-container-text-title">
                <h2>{arrayNoticias[2].titulo}</h2>
              </div>
              <div className="noticia-container-parrafo">
                <p>{arrayNoticias[2].subtitulo}</p>
              </div>
            </div>
          </div>
          <div className="noticia2" key={arrayNoticias[3].id}>
            <Link to={`/noticia/${arrayNoticias[3].id}`}>
              <div className="container-imagen" style={{ backgroundImage: `url(/Assets/${arrayNoticias[3].img})` }}></div>
            </Link>
            <div className="noticia-container-text">
              <div className="noticia-container-text-title">
                <h2>{arrayNoticias[3].titulo}</h2>
              </div>
              <div className="noticia-container-parrafo">
                <p>{arrayNoticias[3].subtitulo}</p>
              </div>
            </div>
          </div>   
    
        </div>
      </div>
    </section>
  );
}

export default LandingPageSectionNoticias;
