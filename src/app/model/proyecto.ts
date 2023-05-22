export class Proyecto {
    id?: number;
    nombrePro: string;
    autorPro: string;
    descripcionPro: string;
    imgPro: string;
    urlLive: string;
    urlRepo: string;

    constructor(nombrePro: string, autorPro: string, descripcionPro: string, imgPro: string, urlLive: string, urlRepo: string) {
        this.nombrePro = nombrePro;
        this.autorPro = autorPro;
        this.descripcionPro = descripcionPro;
        this.imgPro = imgPro;
        this.urlLive = urlLive;
        this.urlRepo = urlRepo;
    }
}
