export class Habilidad {
    id?: number;
    nombreHys: string;
    iconoHys: string;
    porcentaje: number;

    constructor(nombreHys: string, iconoHys: string, porcentaje: number) {
        this.nombreHys = nombreHys;
        this.iconoHys = iconoHys;
        this.porcentaje = porcentaje;
    }
}
