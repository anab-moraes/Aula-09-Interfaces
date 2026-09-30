import { TermostatoProps } from "../interfaces/DispositivoProps.js";
import { Dispositivo } from "./Dispositivo.js";

export class Termostato extends Dispositivo<TermostatoProps>{

     constructor(protected props: TermostatoProps){
        super(props);
    }

    public get getTemperaturaAtual(): number {return this.props.temperaturaAtual;}
    public get getTemperaturaAlvo(): number {return this.props.temperaturaAlvo;}

    public set setTemperaturaAtual(novoTemperaturaAtual: number) {
        if (novoTemperaturaAtual === 0) {
            console.log("\n ERRO: A raça do cachorro não pode ser vazia!");
            return;
        }
        this.props.temperaturaAtual = novoTemperaturaAtual;
    }

    public set setTemperaturaAlvo(novoTemperaturaAlvo: number) {
         if (novoTemperaturaAlvo === 0) {
            console.log("\n ERRO: A raça do cachorro não pode ser vazia!");
            return;
        }
        this.props.temperaturaAlvo = novoTemperaturaAlvo;
    }
}