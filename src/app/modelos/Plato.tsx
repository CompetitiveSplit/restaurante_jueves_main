export class Plato {
  public codPlato: number;
  public nombrePlato: string;
  public precioPlato: string;
  public regionPlato: string;
  public imagenPlato: string;
  public imagenPlatoBase64: string;

  constructor(
    codPlato: number,
    nombrePlato: string,
    precioPlato: string,
    regionPlato: string,
    imagenPlato: string,
    imagenPlatoBase64: string
  ) {
    this.codPlato = codPlato;
    this.nombrePlato = nombrePlato;
    this.precioPlato = precioPlato;
    this.regionPlato = regionPlato;
    this.imagenPlato = imagenPlato;
    this.imagenPlatoBase64 = imagenPlatoBase64;
  }
}
