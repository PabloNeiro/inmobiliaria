import React from "react";

function NoResult() {
  function newSearch() {
    window.location.reload(false);
  }
  return (
    <div className="text-center">
      <h2>NO HAY RESULTADOS</h2>
      <img
        src="https://media.giphy.com/media/5x89XRx3sBZFC/giphy.gif"
        alt="noResults"
      ></img>
      <h4>Prueba a buscar de nuevo</h4>{" "}
      <button onClick={newSearch} className="btn btn-success">
        NUEVA BÚSQUEDA
      </button>
    </div>
  );
}

export default NoResult;
