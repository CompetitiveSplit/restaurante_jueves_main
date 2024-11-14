import { useState } from "react";
import { Plato } from "../../modelos/Plato";
import { ARREGLO_PLATOS } from "../../mocks/Plato-mocks";
import { ARREGLO_PLATOS_REGION } from "../../utilidades/rutas/dominios/DomRegion";

export const MenuListar = () => {
  const [arrPlatos] = useState<Plato[]>(ARREGLO_PLATOS);

  const obtenerNombre = (valor: string )  => {
    for (const objRegion of ARREGLO_PLATOS_REGION) {
      if (objRegion.codRegion == valor) {
        return objRegion.nombreRegion;
      }
    }
  }

  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>Código</th>
                <th style={{ width: "30%" }}>Nombre plato</th>
                <th style={{ width: "25%" }}>Precio</th>
                <th style={{ width: "20%" }}>Región</th>
                <th style={{ width: "20%" }}>Imagen</th>
              </tr>
            </thead>
            <tbody>

              {arrPlatos.map((plato: Plato) => (
                <tr>
                  <td>{plato.codPlato}</td>
                  <td>{plato.nombrePlato}</td>
                  <td>{plato.precioPlato}</td>
                  <td>{obtenerNombre(plato.regionPlato)}</td>
                  <td>
                    <img src={plato.imagenPlatoBase64} alt="" className="imagenListado" />
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
