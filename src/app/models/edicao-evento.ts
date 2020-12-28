import { Evento } from "./evento";

export interface EdicaoEvento {
    id: number,
    evento: Evento,
    numero: number,
    ano: number,
    dataInicio: Date,
    datafim: Date,
    cidadeSede: string,
    estado: string
}
