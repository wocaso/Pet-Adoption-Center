import React from "react";


// import LandingPageSection1 from "../LandingPageSection1/LandingPageSection1";


function NewsAdmin() {
  let arrayNoticias = [
    {
      id: 1,
      titulo: "Conoce la historia de Max",
      subtitulo: "Max, un perro senior, encontró su hogar en una bella familia.",
      body: "Mediano",
      img: "/noticia1.png",
      estado: "Borrador",
    },
    {
      id: 2,
      titulo: "Cómo se debe de cortar las uñas a los gatos",
      subtitulo: "Aquí te enseñamos!",
      body: "Mediano",
      img: "/noticia2.png",
      estado: "Publicado",
    },
    {
      id: 3,
      titulo: "Campaña de esterilización en todo el país",
      subtitulo: "Prepárate para esterilizar a tu mascota, del 10 al 15 de Mayo completamente gratis.",
      body: "Mediano",
      img: "/noticia3.jpeg",
      estado: "Publicado",
    },
    {
      id: 4,
      titulo: "Científico descubre vacuna que extendería la vida de los gatos hasta el doble.",
      subtitulo: "Esta sería la causa por la cuál los gatos no superan más de los 15 años de vida...",
      body: "Mediano",
      img: "/noticia4.jpeg",
      estado: "Publicado",
    },
  ];
  return (
    <div id="BodyContainerAdmin">
      <div className="BodyContainerSection">
        <h1>Noticias</h1>
        <div id="TableFunctions">
            <input type="text" placeholder="Buscar" />
            <button id="ButtonAdmin"><a href="/Admin/News/NewNew">Nuevo</a></button>
        </div>

        <table id="TableAdmin">
          <thead id="header">
            <th>Id</th>
            <th>Nombre</th>
            <th>Subtítulo</th>
            <th>Estado</th>
          </thead>
          <tbody>
            {arrayNoticias.map(noticia => (
              <tr key={noticia.id}>
                <td>{noticia.id}</td>
                <td className="Name">
                  {noticia.titulo}
                  <span className="Functions">
                    <a href="#" className="Delete">Eliminar</a>
                    <span className="FunctionsLine"></span>
                    <a href="/Admin/News/EditNew" className="Edit">Editar</a>
                  </span>

                </td>
                <td>{noticia.subtitulo}</td>
                <td>{noticia.estado}</td>
       
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NewsAdmin;
