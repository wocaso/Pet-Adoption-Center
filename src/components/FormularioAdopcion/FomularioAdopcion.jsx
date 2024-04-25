import React from "react";
import "./FormularioAdopcion.css";
import { Link, useParams } from 'react-router-dom';
import { useFormik } from "formik";
import axios from 'axios';

const validate = values => {
  const errors = {};

  if (!values.nombreApellido) {
    errors.nombreApellido = "Campo requerido";
  }
  if (!values.ciudad) {
    errors.ciudad = "Campo requerido";
  }
  if (!values.trabajoCargo) {
    errors.trabajoCargo = "Campo requerido";
  }
  if (!values.solvenciaEconomica) {
    errors.solvenciaEconomica = "Campo requerido";
  }
  if (!values.tipoVivienda) {
    errors.tipoVivienda = "Campo requerido";
  }
  if (!values.vivienda) {
    errors.vivienda = "Campo requerido";
  }
  if (!values.tieneMascotas) {
    errors.tieneMascotas = "Campo requerido";
  }
  if (!values.antecedentes) {
    errors.antecedentes = "Campo requerido";
  }
  if (!values.adopcion) {
    errors.adopcion = "Campo requerido";
  }
  if (!values.acuerdoAdopcion) {
    errors.acuerdoAdopcion = "Campo requerido";
  }
  if (!values.dondeDormira) {
    errors.dondeDormira = "Campo requerido";
  }
  if (!values.aCargo) {
    errors.aCargo = "Campo requerido";
  }
  if (!values.veterinarioConfianza) {
    errors.veterinarioConfianza = "Campo requerido";
  }
  if (!values.esterilizacion) {
    errors.esterilizacion = "Campo requerido";
  }
  if (!values.email) {
    errors.email = "Campo requerido";
  }
  return errors;
}

function FomularioAdopcion() {
  const { id } = useParams(); 
 

  const idNum = parseInt(id, 10);
  const formik = useFormik({
    initialValues: {
      id_mascota: idNum,
      nombreApellido: "",
      ciudad: "",
      trabajoCargo: "",
      solvenciaEconomica: "",
      tipoVivienda: "",
      vivienda: "",
      tieneMascotas: "",
      antecedentes: "",
      adopcion: "", // Campo agregado
      acuerdoAdopcion: "",
      dondeDormira: "",
      aCargo: "",
      veterinarioConfianza: "",
      esterilizacion: "",
      email:"",
    },
    validate,
    onSubmit: async (values) => { // Corregir la declaración de onSubmit como función asíncrona
      try {
        // Enviar datos al servidor
        const response = await axios.post('https://adoptaapp.pythonanywhere.com/candidato', values);
    
        console.log(response.data);
        window.location.href = `/perfil/${idNum}/contrato/FormularioAdopcion/end`;

        // Manejar respuesta exitosa
      } catch (error) {
        console.error('Error al enviar los datos:', error);
        // Manejar errores
      }
    },
  });
  
  return (
    <div className="container-form">
      <h1>Formulario de Adopción</h1>
      <div className="FomularioAdopcion">
        <form onSubmit={formik.handleSubmit}>
          {/* Espacio 1 */}
          <div className="container-lable-input">
            <div>
              <label>¿Cuál es tu nombre y apellido?</label>
            </div>
            <div>
              <input
                id="nombreApellido"
                name="nombreApellido"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nombreApellido}
              />
              {formik.errors.nombreApellido ? (
                <div className="errors">{formik.errors.nombreApellido}</div>
              ) : null}
            </div>
          </div>
          {/* Espacio 2 */}
          <div className="container-lable-input">
            <div>
              <label>¿En qué ciudad vives?</label>
            </div>
            <div>
              <input
                id="ciudad"
                name="ciudad"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.ciudad}
              />
              {formik.errors.ciudad ? (
                <div className="errors">{formik.errors.ciudad}</div>
              ) : null}
            </div>
          </div>
          {/* Espacio 3 */}
          <div className="container-lable-input">
            <div>
              <label>¿Cuál es tu trabajo y cargo?</label>
            </div>
            <div>
              <input
                id="trabajoCargo"
                name="trabajoCargo"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.trabajoCargo}
              />
              {formik.errors.trabajoCargo ? (
                <div className="errors">{formik.errors.trabajoCargo}</div>
              ) : null}
            </div>
          </div>
          {/* Espacio 4 */}
          <div className="container-lable-input">
            <div>
              <label>¿A cuánto asciende tu solvencia económica mensualmente?</label>
            </div>
            <div>
              <select
                id="solvenciaEconomica"
                name="solvenciaEconomica"
                onChange={formik.handleChange}
                value={formik.values.solvenciaEconomica}
              >
                <option value="">-- Selecciona --</option>
                <option value="$500 - $1000 USD">$500 - $1000 USD</option>
                <option value="$1000 - $2000 USD">$1000 - $2000 USD</option>
                <option value="Más de $2000 USD">Más de $2000 USD</option>
              </select>
              {formik.errors.solvenciaEconomica ? (
                <div className="errors">{formik.errors.solvenciaEconomica}</div>
              ) : null}
            </div>
          </div>
          {/* Espacio 5 */}
          <div className="container-lable-input">
            <div>
              <label>¿Qué tipo de vivienda tienes?</label>
            </div>
            <div>
              <select
                id="tipoVivienda"
                name="tipoVivienda"
                onChange={formik.handleChange}
                value={formik.values.tipoVivienda}
              >
                <option value="">-- Selecciona --</option>
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
                <option value="Otros">Otros</option>
              </select>
              {formik.errors.tipoVivienda ? (
                <div className="errors">{formik.errors.tipoVivienda}</div>
              ) : null}
            </div>
          </div>
          {/* Espacio 6 */}
          <div className="container-lable-input">
            <div>
              <label>¿Dónde viviría el animal?</label>
            </div>
            <div>
              <input
                id="vivienda"
                name="vivienda"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.vivienda}
              />
              {formik.errors.vivienda ? (
                <div className="errors">{formik.errors.vivienda}</div>
              ) : null}
            </div>
          </div>
          {/* Espacio 7 */}
          <div className="container-lable-input">
            <div>
              <label>¿Tienes otras mascotas?</label>
            </div>
            <div>
              <input
                id="tieneMascotas"
                name="tieneMascotas"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.tieneMascotas}
              />
              {formik.errors.tieneMascotas ? (
                <div className="errors">{formik.errors.tieneMascotas}</div>
              ) : null}
            </div>
          </div>
          {/* Espacio 8 */}
          <div className="container-lable-input">
            <div>
              <label>¿Tienes antecedentes de tenencia de animales?</label>
            </div>
            <div>
              <input
                id="antecedentes"
                name="antecedentes"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.antecedentes}
              />
              {formik.errors.antecedentes ? (
                <div className="errors">{formik.errors.antecedentes}</div>
              ) : null}
            </div>
          </div>
          {/* Espacio 9 */}
          <div className="container-lable-input">
            <div>
              <label>¿Por qué deseas adoptar a esta mascota?</label>
            </div>
            <div>
              <input
                id="adopcion"
                name="adopcion"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.adopcion}
              />
              {formik.errors.adopcion ? (
                <div className="errors">{formik.errors.adopcion}</div>
              ) : null}
            </div>
          </div>
          {/* Espacio 10 */}
          <div className="container-lable-input">
            <div>
              <label>¿Estás de acuerdo con el proceso de adopción?</label>
            </div>
            <div>
              <input
                id="acuerdoAdopcion"
                name="acuerdoAdopcion"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.acuerdoAdopcion}
              />
              {formik.errors.acuerdoAdopcion ? (
                <div className="errors">{formik.errors.acuerdoAdopcion}</div>
              ) : null}
            </div>
          </div>
          {/* Espacio 11 */}
          <div className="container-lable-input">
            <div>
              <label>¿Dónde dormirá el animal?</label>
            </div>
            <div>
              <input
                id="dondeDormira"
                name="dondeDormira"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.dondeDormira}
              />
              {formik.errors.dondeDormira ? (
                <div className="errors">{formik.errors.dondeDormira}</div>
              ) : null}
            </div>
          </div>
          {/* Espacio 12 */}
          <div className="container-lable-input">
            <div>
              <label>¿Quién se hará cargo del animal?</label>
            </div>
            <div>
              <input
                id="aCargo"
                name="aCargo"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.aCargo}
              />
              {formik.errors.aCargo ? (
                <div className="errors">{formik.errors.aCargo}</div>
              ) : null}
            </div>
          </div>
          {/* Espacio 13 */}
          <div className="container-lable-input">
            <div>
              <label>¿Tienes un veterinario de confianza?</label>
            </div>
            <div>
              <input
                id="veterinarioConfianza"
                name="veterinarioConfianza"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.veterinarioConfianza}
              />
              {formik.errors.veterinarioConfianza ? (
                <div className="errors">{formik.errors.veterinarioConfianza}</div>
              ) : null}
            </div>
          </div>
          {/* Espacio 14 */}
          <div className="container-lable-input">
            <div>
              <label>¿Estás de acuerdo con la esterilización del animal?</label>
            </div>
            <div>
              <input
                id="esterilizacion"
                name="esterilizacion"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.esterilizacion}
              />
              {formik.errors.esterilizacion ? (
                <div className="errors">{formik.errors.esterilizacion}</div>
              ) : null}
            </div>
            
          </div>
          <div className="container-lable-input">
            <div>
              <label>Escribí tu email de contacto</label>
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className="errors">{formik.errors.email}</div>
              ) : null}
            </div>
            
          </div>
          <div className="container-button">
            <button type="submit" className="submit-btn">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FomularioAdopcion;

