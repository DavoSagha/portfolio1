export class Educacion {
    id?: number;
    tituloEdu: string;
    instiEdu: string;
    fechaEdu: string;
    imgEdu: string;
    descripcionEdu: string;

    constructor(instiEdu: string, tituloEdu: string, fechaEdu: string, imgEdu: string, descripcionEdu: string) {
        this.instiEdu = instiEdu;
        this.tituloEdu = tituloEdu;
        this.fechaEdu = fechaEdu;
        this.imgEdu = imgEdu;
        this.descripcionEdu = descripcionEdu;
    }
}
