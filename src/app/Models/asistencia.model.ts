import { empty } from "rxjs";

export interface AsistenciaModel {
    id?:string,
    dia: string,
    fecha: string,
    horaE: string,
    horaS: string,
    tipo: string,
    retardo: string,
    justificada: string,
    falta: string
}
