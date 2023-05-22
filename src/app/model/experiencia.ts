export class Experiencia {
    id?: number;
    cargoExp: string;
    empresaExp: string;
    fechaExp: string;
    descripcionExp: string;

    constructor(cargoExp: string, empresaExp: string, fechaExp: string, descripcionExp: string) {
        this.cargoExp = cargoExp;
        this.empresaExp = empresaExp;
        this.fechaExp = fechaExp;
        this.descripcionExp = descripcionExp;
    }
}
