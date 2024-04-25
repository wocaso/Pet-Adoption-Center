import React, { useState } from "react";
import "./NewNew.css";

function NewPost() {


  return (
    <div id="BodyContainerAdmin">
      <div className="BodyContainerSection">
        <h1>Crear publicación</h1>
        <form  id="FormAdmin" className="NewsForm">
          <button id="FormImageNew">Cargar imagen
            <input type="file" accept="image/*" id="imagen" name="imagen" />
          </button>
          <input type="text" id="title" name="title"  placeholder="Título" required /><br />
          <input type="text" id="subtitle" name="subtitle"  placeholder="Subtítulo" required /><br />

          <textarea name="body" id="body" cols="30" rows="160" placeholder="Cuerpo"></textarea><br />

          <button id="ButtonAdmin"><input type="submit" value="Enviar" /></button>
        </form>

        
      </div>
    </div>
  );
}

export default NewPost;
