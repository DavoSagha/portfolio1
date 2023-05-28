export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    titulo: string;
    descripcion: string;
    imgPerfil: string;
    imgBanner: string;
    curriculum: string;
    mail:string;

    constructor(nombre: string, apellido: string, titulo: string, descripcion: string, imgPerfil: string, imgBanner: string, curriculum: string, mail: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imgPerfil = imgPerfil;
        this.imgBanner = imgBanner;
        this.curriculum = curriculum;
        this.mail = mail;
    }
}
