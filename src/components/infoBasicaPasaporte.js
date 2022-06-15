import { useParams } from "react-router-dom";
import data from "../assets/data/data.json";
import { Link } from "react-router-dom";


const InfoBasicaPasaporte = () => {
  const { numeroDocumento } = useParams();
  console.log(numeroDocumento);

  const usuario = data.find(
    (usuario) => usuario.tipoDocumento.Pasaporte.numeroDocumento === numeroDocumento  

  );
  console.log(usuario);

  if (!usuario) {
    return (
      <div className="col-md-6 me-auto ms-auto">
        El documento no existe
        <div class="form-group">
          <Link to="/">Volver</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="col-md-6 me-auto ms-auto">
        <div>
          <h1>Información básica</h1>

          <div class="form-group">
            <label>Primer apellido</label>
            <input
              class="form-control"
              readOnly
              type="text"
              value={usuario.apellido}
            />
          </div>
          <div class="form-group">
            <label>Primer nombre</label>
            <input
              class="form-control"
              readOnly
              type="text"
              value={usuario.nombre}
            />
          </div>
          <div class="form-group">
            <Link to="/">Volver</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default InfoBasicaPasaporte;
           