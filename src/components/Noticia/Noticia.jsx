import React from 'react';
import { useParams, Link } from 'react-router-dom'; 
import "./Noticia.css";

function Noticia() {
  const { id } = useParams();
  let arrayNoticias = [
    {
      id: 1,
      titulo: "Conoce la historia de Max",
      subtitulo: "Max, un perro senior, encontró su hogar en una bella familia.",
      body: "",
      img: "noticia1.png",
    },
  ];
  

  return (
    <section id='NoticiaContainer'>
      <div id="NoticiaCuerpo" key={arrayNoticias[0].id}>
        <img className="container-imagen" style={{ backgroundImage: `url(../../Assets/${arrayNoticias[0].img})` }}/>
    
        <div className="noticia-container-text">
          <div className="noticia-container-text-title">
            <h2>{arrayNoticias[0].titulo}</h2>
          </div>
          <div className="noticia-container-parrafo">
            <p>Max, un perro senior, encontró su hogar en una bella familia. Hace 2 años fue rescatado de las calles, donde había estado luchando por sobrevivir solo y desamparado. Con su mirada triste pero llena de esperanza, su futuro era incierto hasta que una familia amorosa cruzó su camino. Los Valencia, una familia compuesta por dos padres amorosos y dos hijos llenos de energía, estaban en busca de un compañero peludo para completar su hogar. 
                Cuando conocieron a Max por medio de Adoptapp, supieron de inmediato que él era el compañero perfecto para ellos.
            </p>
            <p> "Desde el momento en que vimos a Max, supimos que era el adecuado para nosotros", dijo Sara Valencia, la madre de la familia. 
                "A pesar de haber pasado por tantas dificultades, su amor y gratitud eran palpables".
            </p>
            <p>
                Después de llevar a Max a casa, la transformación fue asombrosa.
                El perro mestizo que alguna vez vagó solo ahora estaba rodeado de amor y comodidades. 
            </p>
            <p>
                "Es como si siempre hubiera pertenecido aquí", dijo Juan Valencia, el padre de la familia. 
            </p>
            <p>
                "Max ha llenado nuestra casa de alegría y amor desde el primer día".
                Los hijos de la familia, Elías y Perla, rápidamente se convirtieron en los mejores amigos de Max. Pasaban horas jugando juntos en el patio trasero y compartiendo momentos tiernos en el sofá. "Max es como un hermano para nosotros", dijo Perla, de 10 años. "Lo amamos mucho".
            </p>
            <p>
                La historia de Max es un recordatorio conmovedor de cómo el amor y la compasión pueden transformar vidas, tanto las de los humanos como las de los animales. Ahora, este animalito ha encontrado su lugar en el mundo, rodeado de una familia que lo ama.
            </p>
            
          </div>
        </div>

    
      </div>


    </section>
  );
}

export default Noticia;
